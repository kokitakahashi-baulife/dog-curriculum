// ケア・装着・生活馴致タスク（号令を持たない＝コマンドではない項目）。
// コマンドと同じ CommandLevel 型でレベルを持つ（levels.ts の careLevels）。
// お迎えからのタイムラインに沿って roadmap に直列配置する。
// 出典: AKC, Fear Free / 協調ケア（cooperative care）, Preventive Vet ほか。

export type ItemKind = "care" | "equipment";

export interface CareTask {
  id: string;
  nameJa: string;
  kind: ItemKind;
  scene: string; // 何のためか
  timing: string; // お迎えからの目安
  howTo: string[]; // 進め方の要点
  safety?: string;
  sources?: string[];
}

const AKC = "https://www.akc.org/expert-advice/";

export const careTasks: CareTask[] = [
  {
    id: "collar",
    nameJa: "首輪に慣れる",
    kind: "equipment",
    scene: "迷子札・安全のため初日から装着できるようにする。リードを付ける土台。",
    timing: "お迎え初日",
    howTo: [
      "首輪を見せ、匂いを嗅がせる→おやつ。道具に良い印象をつける。",
      "首に短時間あてる→おやつ。嫌がらないことを確認しながら時間を延ばす。",
      "装着して遊ぶ・食べる。掻く前に気を逸らし、装着＝良いことにする。",
      "問題なければ24時間装着の生活へ。",
    ],
    safety: "指が2本入るゆるさに調整。成長期はサイズをこまめに見直す。",
    sources: [`${AKC}training/how-to-introduce-a-collar-and-leash/`],
  },
  {
    id: "leash",
    nameJa: "リードに慣れる",
    kind: "equipment",
    scene: "安全な散歩の前提。引っ張り・パニックを防ぐ馴致。",
    timing: "1週目（首輪に慣れた後）",
    howTo: [
      "リードを見せて匂い→おやつ。",
      "首輪に付けて床に垂らし、気にせず動けるようにする。",
      "軽く持って室内を一緒に歩く。テンションをかけない。",
      "庭・玄関先で短く歩く。落ち着いて歩けたら褒める。",
    ],
    safety: "リードを引っ張りっこの道具にしない。踏んで驚かせないよう長さを管理。",
    sources: [`${AKC}training/how-to-introduce-a-collar-and-leash/`],
  },
  {
    id: "harness",
    nameJa: "ハーネスに慣れる（任意）",
    kind: "equipment",
    scene:
      "引っ張る犬・短頭種・気管が弱い犬では首輪より胴輪が安全。普通の首輪歩行で問題なければ不要。",
    timing: "散歩開始前（使う場合のみ）",
    howTo: [
      "ハーネスを見せて匂い→おやつ。",
      "頭を通す／脚を入れる動作を1つずつ、おやつとセットで。",
      "装着して10分ほど過ごし、気にしないことを確認。",
    ],
    safety: "脇に擦れがないかサイズを確認。長時間つけっぱなしにしない。",
    sources: [`${AKC}training/how-to-introduce-a-collar-and-leash/`],
  },
  {
    id: "body-handling",
    nameJa: "体を触られることに慣れる",
    kind: "care",
    scene: "通院・お手入れ・健康チェックの土台。全身を触られても平気にする。",
    timing: "お迎え初日〜（毎日少しずつ継続）",
    howTo: [
      "肩・背中など触られて嫌でない場所から撫でる→おやつ。",
      "脇腹・胸・しっぽの付け根へと範囲を広げる。",
      "短時間抱え上げる練習。暴れる前におろし、落ち着きを強化。",
    ],
    safety: "嫌がるサイン（固まる・離れる）が出たら一段戻す。強制しない。",
    sources: [`${AKC}health/cooperative-care-training/`],
  },
  {
    id: "paws",
    nameJa: "足先を触らせる",
    kind: "care",
    scene: "爪切り・肉球チェック・散歩後の足拭きの前提。",
    timing: "1週目〜（継続）",
    howTo: [
      "足先に手を添える→おやつ。引っ込めなければ成功。",
      "各足を短時間持って保持→おやつ。",
      "肉球を軽く広げる→おやつ。",
    ],
    safety: "犬が引っ込めたら無理に握らない。受け入れた瞬間に報酬。",
    sources: [`${AKC}health/cooperative-care-training/`],
  },
  {
    id: "mouth",
    nameJa: "口・歯を触らせる",
    kind: "care",
    scene: "歯みがき・口腔チェック・誤飲時の確認の前提。",
    timing: "1週目〜（継続）",
    howTo: [
      "マズルにそっと触れる→おやつ。",
      "唇をめくって歯を見せる→おやつ。",
      "歯ぐきに指で軽く触れる→おやつ。",
    ],
    sources: [`${AKC}health/cooperative-care-training/`],
  },
  {
    id: "ears",
    nameJa: "耳を触らせる",
    kind: "care",
    scene: "耳掃除・外耳炎チェックの前提。垂れ耳種は特に重要。",
    timing: "1週目〜（継続）",
    howTo: ["耳の付け根に触れる→おやつ。", "耳をめくって中を見る→おやつ。"],
    sources: [`${AKC}health/cooperative-care-training/`],
  },
  {
    id: "brushing",
    nameJa: "ブラッシングに慣れる",
    kind: "care",
    scene: "毛玉・抜け毛・皮膚チェック。スキンシップにもなる日常ケア。",
    timing: "1週目〜",
    howTo: [
      "ブラシを見せて匂い→おやつ。",
      "体を1ストロークだけ→おやつ。少しずつ回数を増やす。",
      "全身を1分ブラッシングできるまで延ばす。",
    ],
    safety: "毛のもつれは無理に引かない。痛みを伴うとブラシ嫌いになる。",
    sources: [`${AKC}health/how-to-groom-a-dog/`],
  },
  {
    id: "teeth",
    nameJa: "歯みがきに慣れる",
    kind: "care",
    scene: "歯周病予防。3歳までに多くの犬がかかるため早期の習慣化が重要。",
    timing: "1週間経過後〜",
    howTo: [
      "犬用歯みがきペーストを指/歯ブラシにつけ、舐めさせる。",
      "前歯を1〜2本こする→おやつ。",
      "片側ずつ磨く範囲を広げ、最終的に全体を30秒。",
    ],
    safety: "人間用歯みがき粉は中毒の恐れ。必ず犬用を使う。",
    sources: [`${AKC}health/dog-dental-care/`],
  },
  {
    id: "nails",
    nameJa: "爪切りに慣れる",
    kind: "care",
    scene: "伸びすぎは歩行を痛め関節に負担。出血を防ぐため少しずつ慣らす。",
    timing: "2週間経過後〜",
    howTo: [
      "爪切りを見せ、足先に当てるだけ→おやつ。",
      "爪に触れる・空打ちの音を鳴らす→おやつ。",
      "血管（クイック）の手前を1本だけ切る→おやつ。1日1本でもよい。",
    ],
    safety: "血管を切ると出血・痛み。白い爪は透けて見える血管の手前で。黒爪は薄く何度かに分けて。",
    sources: [`${AKC}health/how-to-trim-dog-nails/`],
  },
  {
    id: "bath",
    nameJa: "お風呂・入浴に慣れる",
    kind: "care",
    scene:
      "自宅でのシャンプー。いきなり濡らさず、浴室・音・水へ段階的に慣らす。",
    timing: "1ヶ月経過後〜",
    howTo: [
      "まずお風呂場に入っておやつ（浴室＝怖くない場所にする）。",
      "乾いた状態で浴室に滞在できるようにする。",
      "シャワーの音を弱く・離れた位置から聞かせる→おやつ（音馴致）。",
      "足先をぬるま湯で濡らす→体へ、と水に少しずつ慣らす。",
      "最後にシャンプーで全身洗って流す。終始穏やかな声で。",
    ],
    safety: "湯温は人肌（約36〜38℃）。耳に水が入らないように。滑り止めマットを敷く。",
    sources: [`${AKC}health/how-to-bathe-a-dog/`],
  },
];
