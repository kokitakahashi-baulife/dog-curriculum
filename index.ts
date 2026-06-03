// 犬のコマンド・カリキュラム共有データ層（フレームワーク非依存）。
// このフォルダ（src/data）は Astro 等に一切依存しない純粋な TypeScript。
// アプリ側とはこのバレルを単一の入口として共有する想定:
//   - 別パッケージ化する場合: このフォルダをそのまま @baulife/dog-curriculum として publish
//   - もしくは git submodule / コピーで取り込み、`import { commands, allLevels } from "dog-curriculum"`
//
// WEBメディア = commands を記事に / roadmap を学習順に描画
// アプリ      = allLevels を「1レベル＝1テスト」、testType で判定UIを出し分け、roadmap で解放順を制御

// コマンド本体（号令あり）
export {
  commands,
  categoryLabels,
  difficultyLabels,
  methodLabels,
} from "./commands";
export type {
  DogCommand,
  Category,
  Difficulty,
  TrainingMethod,
  Troubleshoot,
} from "./commands";

// ケア・装着・生活馴致タスク（号令なし）
export { careTasks } from "./careTasks";
export type { CareTask, ItemKind } from "./careTasks";

// 習得レベル（コマンド＋ケアを統合した allLevels）
export {
  commandLevels,
  careLevels,
  allLevels,
  testTypeLabels,
} from "./levels";
export type { CommandLevel, TestType, Measure } from "./levels";

// コマンド導入の目安（タイムライン・タイブレーク用）
export { roadmap } from "./roadmap";
export type { RoadmapStep, StepKind } from "./roadmap";

// 本物の直列ロードマップ＝全レベルを依存順に並べたスパイラル
export { buildLevelSequence } from "./sequence";
export type { SeqNode } from "./sequence";

// 基礎メカニクス（全コマンド共通の土台）
export { fundamentals } from "./fundamentals";
export type { Fundamental } from "./fundamentals";

// 問題行動から効くコマンドを引くFAQ軸
export { problems } from "./problems";
export type { ProblemTopic } from "./problems";

// 犬の一生の「しつけ地図」（ライフステージ別ピラー）
export { lifeStages, lifeStageById } from "./lifeStages";
export type { LifeStage, LifeStageId, KnowledgeItem } from "./lifeStages";

// お迎え〜2歳の処方プログラム（can-doマイルストーン層）
export { programPhases, milestones, milestoneRootId, milestoneItemIds } from "./program";
export type { ProgramPhase, Milestone } from "./program";
