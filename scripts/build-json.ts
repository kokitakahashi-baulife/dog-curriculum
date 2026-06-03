// 配布用JSONを書き出す。`npm run build` で実行。
//   dist/curriculum.json     … 全部入り（version付き。iOS のバンドル/OTA はこれ1つでOK）
//   dist/<domain>.json       … ドメイン別（部分取得したいとき用）
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { curriculumBundle } from "../bundle";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "dist");
mkdirSync(outDir, { recursive: true });

const bundle = curriculumBundle();

// 全部入り
writeFileSync(join(outDir, "curriculum.json"), JSON.stringify(bundle), "utf8");

// ドメイン別（version を各ファイルにも付ける）
for (const [key, value] of Object.entries(bundle)) {
  if (key === "version") continue;
  writeFileSync(
    join(outDir, `${key}.json`),
    JSON.stringify({ version: bundle.version, [key]: value }),
    "utf8",
  );
}

console.log(`curriculum v${bundle.version} → dist/ (${Object.keys(bundle).length - 1} domains + curriculum.json)`);
