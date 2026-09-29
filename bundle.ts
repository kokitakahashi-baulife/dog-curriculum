// カリキュラム全体を1つのプレーンなオブジェクトに組み立てる。
// ここが「配布用JSONの形」の単一定義。Web のエンドポイントと、
// dog-curriculum 自身の JSON ビルドの両方がこれを使う（重複を作らない）。
//
// 表示（画像・コンポーネント・記事）は含めない＝コンテンツのみ。

import { commands, categoryLabels, difficultyLabels, methodLabels } from "./commands";
import { careTasks } from "./careTasks";
import { commandLevels, careLevels, allLevels, testTypeLabels } from "./levels";
import { missions } from "./missions";
import { problems } from "./problems";
import { lifeStages } from "./lifeStages";
import { programPhases, milestones } from "./program";
import { roadmap } from "./roadmap";
import { fundamentals } from "./fundamentals";
import { glossary, glossaryGroupLabels } from "./glossary";
import { buildLevelSequence } from "./sequence";
import { curriculumVersion } from "./meta";

export function curriculumBundle() {
  return {
    version: curriculumVersion,
    // 表示用ラベル（日本語テキストは Web/iOS 共通で使う）
    labels: { categoryLabels, difficultyLabels, methodLabels, testTypeLabels },
    // 号令あり/なしのタスク
    commands,
    careTasks,
    // 習得レベル（コマンド＋ケア統合）
    levels: { commandLevels, careLevels, allLevels },
    // 依存順に並べた直列シーケンス（事前計算済み。アプリは解放順に使える）
    levelSequence: buildLevelSequence(),
    // 悩み起点の解決プログラム
    missions,
    // お悩みタクソノミー（コマンド⇄お悩み相互参照・診断用）
    problems,
    // ライフステージ別の地図
    lifeStages,
    // 0〜2歳の処方プログラム
    program: { programPhases, milestones },
    // 導入タイムライン
    roadmap,
    // 基礎メカニクス
    fundamentals,
    // しつけ辞典（用語）
    glossary: { terms: glossary, groupLabels: glossaryGroupLabels },
  };
}

export type CurriculumBundle = ReturnType<typeof curriculumBundle>;
