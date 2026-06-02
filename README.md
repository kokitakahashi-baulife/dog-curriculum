# dog-curriculum

犬のコマンド・カリキュラムの**共有データ層**（フレームワーク非依存の純TypeScript）。
Webメディア（baudog.world）とトレーニングアプリが、**この1つのリポを正本として共有**する。

## 入口（バレル）

```ts
import {
  commands, careTasks, allLevels, roadmap, fundamentals,
  categoryLabels, difficultyLabels, methodLabels, testTypeLabels,
} from "@baulife/dog-curriculum"; // または submodule のパス
```

## データモデル（要点）

- `commands` / `careTasks` … 号令あり/なしの項目。
- `allLevels[id]` = `CommandLevel[]`（1レベル＝アプリの1テスト）。`testType`(trial/duration/tally) と `measure`(自動採点) と `requires`(解放) を持つ。
- `roadmap` … お迎え→マスターの直列ステップ（command/care/equipment）。
- `fundamentals` … 全コマンド共通の基礎メカニクス。

## 取り込み方

- **git submodule**（推奨）: 各リポに `vendor/curriculum` 等として追加し、ビルド時に同梱。
- npm: `@baulife/dog-curriculum` として publish も可能（`exports` 設定済み）。

## 更新フロー

データはこのリポで編集・コミット・push する。各consumerは
`git submodule update --remote` で最新を取り込み、再ビルド/デプロイする。
