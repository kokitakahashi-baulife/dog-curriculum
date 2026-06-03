// 「お迎え〜2歳」の処方プログラム。
// 190の微レベルは裏方（採点エンジン）に置き、表に出すのは人間語の
// 「できた(can-do)マイルストーン」。各マイルストーンは levelKeys が
// すべて done になったら達成（localStorage と連動）。
//   - フェーズ＝発達段階（社会化→基礎→思春期→仕上げ）
//   - anchor ＝生活の錨（いつやるか）。habit stacking 用。
// 根拠: AVSAB（社会化・報酬ベース）, Puppy Culture（行動で判断）, 盲導犬パピー育成（週次曝露）。

export interface ProgramPhase {
  id: string;
  nameJa: string;
  ageLabel: string;
  goal: string;
  evidence?: string;
}

export interface Milestone {
  id: string;
  title: string; // できた宣言（人間語）
  phase: string; // ProgramPhase.id
  anchor?: string; // 生活の錨（いつやるか）
  levelKeys: string[]; // 達成判定（全部 done で達成）。"commandId:Ln"
  note?: string;
}

export const programPhases: ProgramPhase[] = [
  {
    id: "p1",
    nameJa: "社会化・最優先期",
    ageLabel: "お迎え〜4ヶ月（8〜16週）",
    goal:
      "社会化を最優先する時期。怖い経験を1つも作らず、人・音・場所・触られることに「良い印象」で慣らしながら、生活の土台（トイレ・ハウス・基本姿勢）を作る。",
    evidence: "生後3〜14週の社会化は一生で最も効く（AVSAB）。量より質、すべて良い経験で。",
  },
  {
    id: "p2",
    nameJa: "基礎の定着期",
    ageLabel: "4〜6ヶ月",
    goal:
      "社会化を続けながら、呼び戻し・歩行・がまんの基礎を、報酬ベースで定着させる。通院に備えた体のケアもここで。",
    evidence: "叱責や嫌悪刺激は使わない。報酬ベースが効果・福祉・関係すべてで優位。",
  },
  {
    id: "p3",
    nameJa: "般化と思春期",
    ageLabel: "6〜18ヶ月",
    goal:
      "覚えたことを、誘惑のある実環境でも効くように広げる。急に崩れる思春期は罰を強めず、一段やさしい条件に戻して立て直す。",
    evidence: "第2の恐怖期。崩れは正常な発達。ロングリードで管理しながら成功を積む。",
  },
  {
    id: "p4",
    nameJa: "成犬への仕上げ",
    ageLabel: "18〜24ヶ月",
    goal:
      "来客・車・お手入れなど、実際の生活の場面で完成させる。ここから先は新規学習より「維持」に減速していく。",
  },
];

export const milestones: Milestone[] = [
  // ── P1 社会化・最優先期 ──
  { id: "m-marker", phase: "p1", anchor: "おうちで", title: "ごほうびの合図「Yes」が通じる", levelKeys: ["marker:L1"], note: "すべての練習の共通言語。最初の土台。" },
  { id: "m-name", phase: "p1", anchor: "おうちで", title: "名前を呼んだら振り向く", levelKeys: ["name-response:L2"] },
  { id: "m-gentle", phase: "p1", anchor: "ごはん前", title: "おやつを歯を立てずそっと受け取れる", levelKeys: ["gentle:L2"] },
  { id: "m-potty", phase: "p1", anchor: "おうちで", title: "決めた場所でトイレができる", levelKeys: ["potty:L2"] },
  { id: "m-crate", phase: "p1", anchor: "おうちで", title: "自分からハウスに入る", levelKeys: ["crate:L2"] },
  { id: "m-sit", phase: "p1", anchor: "ごはん前", title: "言葉で「おすわり」ができる", levelKeys: ["sit:L4"] },
  { id: "m-down", phase: "p1", anchor: "ごはん前", title: "言葉で「ふせ」ができる", levelKeys: ["down:L4"] },
  { id: "m-handling", phase: "p1", anchor: "ケアに備えて", title: "体（足・口・耳）を触らせてくれる", levelKeys: ["body-handling:L2", "paws:L1"], note: "協調ケアの土台。通院・お手入れが一生楽になる。" },

  // ── P2 基礎の定着期 ──
  { id: "m-watch", phase: "p2", anchor: "散歩前", title: "アイコンタクトで注目できる", levelKeys: ["watch-me:L3"] },
  { id: "m-touch", phase: "p2", anchor: "おうちで", title: "タッチ（手に鼻）で誘導できる", levelKeys: ["touch:L2"] },
  { id: "m-crateout", phase: "p2", anchor: "おうちで", title: "ハウスのドアを開けても飛び出さない", levelKeys: ["crate-out:L2"] },
  { id: "m-recall-base", phase: "p2", anchor: "散歩・あそびで", title: "ロングリードで呼んだら来る", levelKeys: ["come:L4"], note: "呼び戻しは一生の安全装置。叱りに使わない。" },
  { id: "m-leaveit", phase: "p2", anchor: "散歩で", title: "「やめなさい」で口に入れる前に止まる", levelKeys: ["leave-it:L3"] },
  { id: "m-dropgive", phase: "p2", anchor: "あそびで", title: "「出して／ちょうだい」で物を手放す", levelKeys: ["drop-it:L2", "give:L2"] },
  { id: "m-doorwait", phase: "p2", anchor: "玄関で", title: "玄関で待てる（飛び出さない）", levelKeys: ["door-wait:L2"] },
  { id: "m-loose-base", phase: "p2", anchor: "散歩で", title: "静かな道でリードをゆるめて歩ける", levelKeys: ["loose-leash:L2"] },

  // ── P3 般化と思春期 ──
  { id: "m-stay", phase: "p3", anchor: "おうちで", title: "離れて・時間「まて」ができる", levelKeys: ["stay:L5"] },
  { id: "m-settle", phase: "p3", anchor: "夜のおうちで", title: "「落ち着いて」で自分から休める", levelKeys: ["settle:L3"] },
  { id: "m-place", phase: "p3", anchor: "おうちで", title: "プレイス（定位置）で待てる", levelKeys: ["place:L3"] },
  { id: "m-recall-proof", phase: "p3", anchor: "散歩で", title: "誘惑があっても呼んだら来る", levelKeys: ["come:L7"], note: "思春期で崩れやすい。ロングリードで管理しながら。" },
  { id: "m-loose-proof", phase: "p3", anchor: "散歩で", title: "人や犬とすれ違っても引っ張らない", levelKeys: ["loose-leash:L5"] },
  { id: "m-greeting", phase: "p3", anchor: "来客時", title: "人に飛びつかず挨拶できる", levelKeys: ["polite-greeting:L2"] },
  { id: "m-quiet", phase: "p3", anchor: "チャイム・来客時", title: "「静かに」で吠えをやめられる", levelKeys: ["quiet:L2"] },
  { id: "m-scavenge", phase: "p3", anchor: "散歩で", title: "落ちている物の拾い食いを我慢できる", levelKeys: ["leave-it:L5"] },
  { id: "m-paws", phase: "p3", anchor: "ケアに備えて", title: "足を出して爪のケアを受け入れる", levelKeys: ["paw-target:L3", "nails:L3"] },

  // ── P4 成犬への仕上げ ──
  { id: "m-gotobed", phase: "p4", anchor: "来客時", title: "来客中もベッドで待機できる", levelKeys: ["go-to-bed:L4"] },
  { id: "m-car", phase: "p4", anchor: "おでかけ前", title: "車に乗って落ち着いていられる", levelKeys: ["car:L4"] },
  { id: "m-heel", phase: "p4", anchor: "散歩で", title: "ヒール（つけ）で並んで歩ける", levelKeys: ["heel:L3"] },
  { id: "m-fetch", phase: "p4", anchor: "あそびで", title: "もってきて遊びができる", levelKeys: ["fetch:L3"] },
  { id: "m-tricks", phase: "p4", anchor: "あそびで", title: "お手・おかわりができる", levelKeys: ["shake:L2", "shake-other:L2"] },
  { id: "m-careroutine", phase: "p4", anchor: "ケアに備えて", title: "歯みがき・お風呂を受け入れる", levelKeys: ["teeth:L3", "bath:L3"] },
  { id: "m-nails", phase: "p4", anchor: "ケアに備えて", title: "爪切りを最後まで受け入れる", levelKeys: ["nails:L5"] },
];

// マイルストーンの代表コマンド（最初の levelKey の id）。リンク先決定に使う。
export const milestoneRootId = (m: Milestone): string =>
  m.levelKeys[0].split(":")[0];

// マイルストーンが参照する全コマンド/ケア id（重複なし）
export const milestoneItemIds = (m: Milestone): string[] =>
  Array.from(new Set(m.levelKeys.map((k) => k.split(":")[0])));
