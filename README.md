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

- **Web（baudog.world）**: git submodule として `dog-command-web/src/data` にマウント済み。Astro が直接 import。
- **iOS**: 下記の配布JSONを消費（バンドル＋OTA）。Swiftは.tsを読めないため、TS→JSONに変換して渡す。

## 配布JSON（Web/iOS共有の正本フォーマット）

`bundle.ts` の `curriculumBundle()` が「配布用JSONの形」の単一定義。
表示（画像・コンポーネント・記事）は含まない＝**コンテンツのみ**。

```jsonc
{
  "version": "1.0.0",                 // meta.ts。更新判定に使う
  "labels": { "categoryLabels": …, "difficultyLabels": …, "methodLabels": …, "testTypeLabels": … },
  "commands": [ … ], "careTasks": [ … ],
  "levels": { "commandLevels": …, "careLevels": …, "allLevels": … },
  "levelSequence": [ … ],             // 依存順に事前計算済み（解放順に使える）
  "missions": [ … ], "problems": [ … ], "lifeStages": [ … ],
  "program": { "programPhases": …, "milestones": … },
  "roadmap": [ … ], "fundamentals": [ … ]
}
```

ローカルで書き出す:

```sh
npm install
npm run build        # → dist/curriculum.json（全部入り）＋ dist/<domain>.json
```

## OTA配信（iOS）

Web が同じ `curriculumBundle()` を静的JSONとして配信している（Webの表示と常に一致）:

```
https://baudog.world/data/curriculum.json
```

iOS の推奨パターン:
1. アプリに `curriculum.json` のスナップショットを**バンドル**（オフライン初期表示）。
2. 起動時に上記URLを取得し、`version` がバンドルより新しければ差し替え（**アプリ更新なしでコンテンツ更新**）。
3. 取得失敗時はバンドル/前回キャッシュにフォールバック。

型は `index.ts` の `interface`（`DogCommand` / `Mission` / `CommandLevel` …）が契約。iOS 側は同じ構造を `Codable` でミラーする。

## 更新フロー

データはこのリポで編集・コミット・push する。
- Web: `cd dog-command-web && git submodule update --remote src/data` → コミット → Vercel自動デプロイ（`/data/curriculum.json` も自動更新）。
- 破壊的でない追加・改訂は `meta.ts` の `curriculumVersion` をマイナーアップ。
