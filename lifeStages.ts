// 犬の一生の「しつけ地図」。お迎えからシニアまで、各ステージで
// 「覚えるコマンド」「やるケア」「知っておく知識」を1枚に集約する旗艦データ。
//   - commandIds / careIds は commands.ts / careTasks.ts の id を参照（リンク生成）
//   - knowledge は一行知識。slug があれば該当記事へリンク、なければ一行知識のみ表示
// WEB: ライフステージ・ピラーページ（/life, /life/[stage]）を駆動する。

export type LifeStageId = "puppy" | "adolescent" | "adult" | "senior";

export interface KnowledgeItem {
  title: string; // 見出し
  note: string; // 一行知識（記事がなくても役立つ）
  slug?: string; // 既存記事があればリンク（src/content/articles の id）
}

export interface LifeStage {
  id: LifeStageId;
  nameJa: string; // 子犬期
  ageLabel: string; // 0〜4ヶ月（社会化期）
  summary: string; // この時期の全体像（簡潔・実践）
  focus: string[]; // この時期の要点
  commandIds: string[]; // この時期に重点的に覚えるコマンド
  careIds: string[]; // この時期のケア・装着
  knowledge: KnowledgeItem[];
}

export const lifeStages: LifeStage[] = [
  {
    id: "puppy",
    nameJa: "子犬期",
    ageLabel: "0〜4ヶ月（社会化期）",
    summary:
      "一生の土台を作る時期。社会化の window（生後3〜14週）はこの時期だけ。コマンドより先に「人・音・場所・触られること＝怖くない」を積む。基本姿勢と生活習慣（トイレ・ハウス）まで。",
    focus: [
      "社会化を最優先：いろいろな人・音・床・場所を、良い経験として浴びせる。",
      "トイレ・ハウスの生活管理を初日から固める。",
      "体を触られる練習（協調ケアの土台）を毎日少しずつ。",
      "おすわり・ふせなど基本姿勢を、おやつ誘導→言葉の順で。",
    ],
    commandIds: [
      "marker",
      "name-response",
      "watch-me",
      "touch",
      "potty",
      "crate",
      "crate-out",
      "sit",
      "down",
      "stand",
      "gentle",
      "chin-rest",
      "shake",
    ],
    careIds: ["collar", "leash", "body-handling", "paws", "mouth", "ears", "brushing"],
    knowledge: [
      {
        title: "社会化の window は一度きり",
        note: "生後3〜14週に出会った物事を「普通」と認識する。この時期の経験が一生の性格を左右する。",
        slug: "first-week-with-puppy",
      },
      {
        title: "「Yes」の仕組み（マーカー）",
        note: "正解の瞬間を「Yes」で印づけ、すぐご褒美。すべての練習の共通言語になる。",
        slug: "marker-training-basics",
      },
      {
        title: "トイレは「叱らない・成功をほめる」",
        note: "粗相を叱ると隠れて排泄するようになる。失敗は無言で片付け、成功だけ強化。",
        slug: "potty-training-guide",
      },
      {
        title: "クレートは罰に使わない",
        note: "クレート＝安心して眠れる巣穴にする。留守番・通院・災害時に一生役立つ。",
        slug: "crate-training",
      },
      {
        title: "甘噛みは正常な発達",
        note: "噛む力の加減を学んでいる最中。叱るより「噛んだら遊びが止まる」を教える。",
        slug: "stop-puppy-biting",
      },
      {
        title: "ワクチン前の社会化",
        note: "散歩デビュー前でも、抱っこ散歩・来客・音などで安全に社会化できる。",
        slug: "puppy-socialization",
      },
      {
        title: "睡眠は1日18時間",
        note: "子犬は寝不足だと興奮し甘噛み・問題行動が増える。しっかり眠れる環境を。",
      },
    ],
  },
  {
    id: "adolescent",
    nameJa: "思春期",
    ageLabel: "4〜18ヶ月（反抗期）",
    summary:
      "できていたことが急に崩れる時期。これは順調な発達のサインで、あなたのしつけが失敗したわけではない。誘惑の中での自制・呼び戻し・散歩マナーを、易しい条件から作り直していく。",
    focus: [
      "「急にできなくなる」を想定する。難易度を一段下げて成功体験を取り戻す。",
      "呼び戻し（おいで）を最優先で、誘惑のある場所まで広げる。",
      "拾い食い・飛びつき・吠えなど、衝動のコントロールを集中的に。",
      "リードを張らない歩行を、刺激の多い屋外で仕上げる。",
    ],
    commandIds: [
      "release",
      "stay",
      "door-wait",
      "come",
      "leave-it",
      "drop-it",
      "give",
      "off",
      "polite-greeting",
      "quiet",
      "place",
      "settle",
      "loose-leash",
      "shake-other",
      "paw-target",
    ],
    careIds: ["harness", "teeth", "nails", "bath"],
    knowledge: [
      {
        title: "なぜ急にできなくなるのか",
        note: "思春期は脳の再配線が起きる時期。反抗ではなく発達。罰で潰さず、易しい条件に戻して再構築する。",
        slug: "dog-adolescence",
      },
      {
        title: "呼び戻しは一生の安全装置",
        note: "呼び戻しの語は絶対に叱りに使わない。来たら必ず良いことが起きる、を守り続ける。",
        slug: "recall-training",
      },
      {
        title: "拾い食い対策",
        note: "「やめなさい」で触る前に止め、「出して／ちょうだい」で交換回収。叱って追いかけない。",
        slug: "stop-scavenging",
      },
      {
        title: "引っ張らない散歩",
        note: "リードが張ったら進まない・ゆるんだら進む、を一貫。引っ張り＝前進が報酬になるのを断つ。",
        slug: "loose-leash-walking",
      },
      {
        title: "無駄吠えの止め方",
        note: "吠えの引き金ごとに練習。静かになった瞬間を「静かに」で強化する。",
        slug: "stop-barking",
      },
      {
        title: "留守番ができない時",
        note: "数秒の不在から少しずつ。鳴いている最中ではなく静かな瞬間に戻る。",
        slug: "home-alone-training",
      },
      {
        title: "去勢・避妊と行動",
        note: "時期や行動への影響は個体差が大きい。獣医と相談して判断する。",
      },
    ],
  },
  {
    id: "adult",
    nameJa: "成犬期",
    ageLabel: "1.5〜7歳",
    summary:
      "覚えたことを「生活で使える形」に仕上げ、維持する時期。来客・旅行・車など実際の場面で安定させ、トリックや遊びで関係の質を高める。新しい刺激にも少しずつ慣らし続ける。",
    focus: [
      "来客・食事中など実生活の場面で「その場で待つ」を完成させる。",
      "車・おでかけのマナーを安全に固める。",
      "トリックや遊び（もってきて等）で、頭と体と関係を満たす。",
      "できることは時々おさらいして維持する（使わないと鈍る）。",
    ],
    commandIds: ["go-to-bed", "heel", "fetch", "car"],
    careIds: [],
    knowledge: [
      {
        title: "来客・インターホン対応",
        note: "「ベッドで待機」を仕込むと、来客時に飛びつき・吠えを根本から減らせる。",
        slug: "visitor-barking",
      },
      {
        title: "車・おでかけの安全",
        note: "走行中は必ずクレートかドッグシートベルトで固定。夏の車内放置は短時間でも厳禁。",
      },
      {
        title: "運動量と問題行動",
        note: "退屈・運動不足は破壊・吠えの原因。もってきて等で頭と体を使うと落ち着く。",
      },
      {
        title: "ふれあいの質を上げる",
        note: "撫でる前に犬に「触っていい？」を確認する consent。嫌がる手前で止めると信頼が増す。",
      },
    ],
  },
  {
    id: "senior",
    nameJa: "シニア期",
    ageLabel: "7歳〜",
    summary:
      "新しく覚えるより、これまでの関係とケアを「無理なく続ける」時期。体の変化に合わせて負荷を下げ、認知機能の変化にも気を配る。協調ケアがいちばん役立つのもこの時期。",
    focus: [
      "協調ケア（あご乗せ・足を出す）で、増える通院・投薬を穏やかに。",
      "負荷を下げる：短い練習・低い段差・滑らない床。",
      "認知機能の変化（夜鳴き・徘徊・粗相の再発）のサインを知っておく。",
      "できることを軽くおさらいして、頭の刺激と自信を保つ。",
    ],
    commandIds: [],
    careIds: ["body-handling", "paws", "mouth", "ears", "teeth", "nails"],
    knowledge: [
      {
        title: "協調ケアがいちばん効く時期",
        note: "あご乗せ・足を出すができると、増える点眼・投薬・通院の負担が激減する。",
      },
      {
        title: "認知機能不全（認知症）のサイン",
        note: "夜鳴き・徘徊・呼んでも反応が鈍い・粗相の再発など。気づいたら早めに獣医へ。",
        slug: "senior-dog-cognitive",
      },
      {
        title: "負荷を下げる工夫",
        note: "練習は短く、段差は低く、床は滑らないように。痛みのサインを見逃さない。",
      },
      {
        title: "シニアこそ頭の刺激を",
        note: "簡単なノーズワークや覚えた芸の軽いおさらいで、認知の衰えをゆるやかにする。",
      },
    ],
  },
];

export const lifeStageById = (id: string): LifeStage | undefined =>
  lifeStages.find((s) => s.id === id);

// あるコマンドが属するライフステージ（重点的に学ぶ時期）を返す
export const stageOfCommand = (commandId: string): LifeStage | undefined =>
  lifeStages.find((s) => s.commandIds.includes(commandId));

// あるケア/装着が登場するライフステージ（最初に出てくる時期）を返す
export const stageOfCare = (careId: string): LifeStage | undefined =>
  lifeStages.find((s) => s.careIds.includes(careId));
