// 本物のロードマップ＝「全コマンド×全条件レベル」を1本に直列化したスパイラル。
// コマンド単位（sitを全部→downを全部）ではなく、各レベルを独立ノードとして、
// requires（依存）から導かれる“依存の深さ(tier)”順に全コマンドを横断しながら難しくする。
// 例: marker:L1 → sit:L1 → down:L1 → … → sit:L2 → … → leave-it:L1 → sit:L6(誘惑) → … → sit:L11
//
// アプリ・Webはこの buildLevelSequence() を共有して「次にやる1テスト」を決める。

import { allLevels } from "./levels";
import { roadmap } from "./roadmap";

export interface SeqNode {
  key: string; // "sit:L3"
  id: string; // "sit"
  level: number; // 3
  tier: number; // 依存の深さ（0=前提なしの獲得レベル）
  order: number; // 全体の直列番号（1..N）
}

export function buildLevelSequence(): SeqNode[] {
  // 各ノードの依存（明示requires ＋ 同コマンドの1つ前のレベルを暗黙依存に）
  const deps: Record<string, string[]> = {};
  const keys: string[] = [];
  for (const [id, levels] of Object.entries(allLevels)) {
    for (const lv of levels) {
      const key = `${id}:L${lv.level}`;
      keys.push(key);
      const d = new Set<string>(lv.requires ?? []);
      if (lv.level > 1) d.add(`${id}:L${lv.level - 1}`);
      deps[key] = [...d];
    }
  }

  // tier = 依存の最長パス長（メモ化）
  const cache: Record<string, number> = {};
  const tier = (k: string, seen: Set<string> = new Set()): number => {
    if (k in cache) return cache[k];
    const ds = (deps[k] ?? []).filter((d) => deps[d] !== undefined && !seen.has(d));
    if (ds.length === 0) return (cache[k] = 0);
    seen.add(k);
    const t = 1 + Math.max(...ds.map((d) => tier(d, seen)));
    seen.delete(k);
    return (cache[k] = t);
  };

  // コマンド導入順（タイブレーク用）: roadmap の order
  const intro: Record<string, number> = {};
  roadmap.forEach((s) => (intro[s.id] = s.order));
  const introOf = (id: string) => intro[id] ?? 999;

  const nodes: SeqNode[] = keys.map((key) => {
    const [id, lp] = key.split(":");
    return { key, id, level: parseInt(lp.slice(1), 10), tier: tier(key), order: 0 };
  });

  nodes.sort(
    (a, b) =>
      a.tier - b.tier ||
      introOf(a.id) - introOf(b.id) ||
      a.level - b.level ||
      a.id.localeCompare(b.id),
  );
  nodes.forEach((n, i) => (n.order = i + 1));
  return nodes;
}
