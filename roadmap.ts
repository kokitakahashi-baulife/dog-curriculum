// お迎え初日 → コマンドマスターまでの「直列」学習ロードマップ。
// コマンド・ケア・装着を1本に統合。前提（prerequisites / requires）は必ず先に登場する。
// timing はお迎えからの目安。optional は「やらなくても先に進める任意ステップ」。

export type StepKind = "command" | "care" | "equipment";

export interface RoadmapStep {
  order: number;
  id: string; // commands.ts または careTasks.ts の id
  kind: StepKind;
  timing: string; // お迎えからの目安
  optional?: boolean; // 任意ステップ（飛ばしても後続に影響しない）
}

export const roadmap: RoadmapStep[] = [
  { order: 1, id: "marker", kind: "command", timing: "お迎え初日" },
  { order: 2, id: "collar", kind: "equipment", timing: "お迎え初日" },
  { order: 3, id: "name-response", kind: "command", timing: "お迎え初日" },
  { order: 4, id: "body-handling", kind: "care", timing: "お迎え初日〜（毎日継続）" },
  { order: 5, id: "potty", kind: "command", timing: "お迎え初日〜" },
  { order: 6, id: "crate", kind: "command", timing: "お迎え初日〜" },
  { order: 7, id: "crate-out", kind: "command", timing: "お迎え初日〜（ハウスの後）" },
  { order: 8, id: "leash", kind: "equipment", timing: "1週目（首輪の後）" },
  { order: 9, id: "paws", kind: "care", timing: "1週目〜（継続）" },
  { order: 10, id: "mouth", kind: "care", timing: "1週目〜（継続）" },
  { order: 11, id: "ears", kind: "care", timing: "1週目〜（継続）" },
  { order: 12, id: "brushing", kind: "care", timing: "1週目〜" },
  { order: 13, id: "touch", kind: "command", timing: "1〜2週目" },
  { order: 14, id: "watch-me", kind: "command", timing: "1〜2週目" },
  { order: 15, id: "sit", kind: "command", timing: "1〜2週目" },
  { order: 16, id: "gentle", kind: "command", timing: "1〜2週目（給餌時に）" },
  { order: 17, id: "teeth", kind: "care", timing: "1週間経過後〜" },
  { order: 18, id: "down", kind: "command", timing: "2週目" },
  { order: 19, id: "stand", kind: "command", timing: "2週目" },
  { order: 20, id: "shake", kind: "command", timing: "2週目（最初のトリック）", optional: true },
  { order: 21, id: "shake-other", kind: "command", timing: "2週目（お手の後）", optional: true },
  { order: 22, id: "chin-rest", kind: "command", timing: "2週目〜（協調ケア・継続）" },
  { order: 23, id: "nails", kind: "care", timing: "2週間経過後〜" },
  { order: 24, id: "paw-target", kind: "command", timing: "2週間〜（爪切りと並行）" },
  { order: 25, id: "release", kind: "command", timing: "2〜3週目（まてと同時）" },
  { order: 26, id: "stay", kind: "command", timing: "2〜3週目" },
  { order: 27, id: "door-wait", kind: "command", timing: "2〜3週目（飛び出し防止）" },
  { order: 28, id: "come", kind: "command", timing: "3週目〜（最重要・長期）" },
  { order: 29, id: "leave-it", kind: "command", timing: "3週目" },
  { order: 30, id: "drop-it", kind: "command", timing: "3週目" },
  { order: 31, id: "give", kind: "command", timing: "3週目（出しての後）" },
  { order: 32, id: "quiet", kind: "command", timing: "3週目〜（吠え対策）" },
  { order: 33, id: "off", kind: "command", timing: "3〜4週目" },
  { order: 34, id: "polite-greeting", kind: "command", timing: "3〜4週目" },
  { order: 35, id: "place", kind: "command", timing: "4週目" },
  { order: 36, id: "settle", kind: "command", timing: "4週目〜" },
  { order: 37, id: "go-to-bed", kind: "command", timing: "4週目〜（来客・食事中）" },
  { order: 38, id: "fetch", kind: "command", timing: "1ヶ月〜（運動・遊び）", optional: true },
  { order: 39, id: "car", kind: "command", timing: "1ヶ月〜（おでかけ準備）" },
  { order: 40, id: "bath", kind: "care", timing: "1ヶ月経過後〜" },
  { order: 41, id: "harness", kind: "equipment", timing: "散歩開始前（使う場合のみ）", optional: true },
  { order: 42, id: "loose-leash", kind: "command", timing: "1〜2ヶ月" },
  { order: 43, id: "heel", kind: "command", timing: "2ヶ月〜（応用）" },
];
