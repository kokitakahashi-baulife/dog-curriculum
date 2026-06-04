// 犬のコマンド実践マニュアル — 陽性強化／マーカートレーニング（LIMA準拠）
// 出典: AKC, Cornell Univ. Riney Canine Health Center, Whole Dog Journal,
//       Preventive Vet, CattleDog Publishing(Dr. Sophia Yin), Karen Pryor,
//       PAWS Chicago(Dr. Karen Overall 弛緩プロトコル) ほか
// 方針: 各コマンドを「読んで毎日実践すれば犬に覚えさせられる」粒度で定義する。

export type Difficulty = "beginner" | "intermediate" | "advanced" | "expert";

export type Category =
  | "foundation"
  | "life-skill"
  | "basic-obedience"
  | "stay-position"
  | "recall-come"
  | "leash-manners"
  | "impulse-control"
  | "cooperative-care"
  | "trick";

export type TrainingMethod =
  | "classical"
  | "capture"
  | "lure"
  | "shape"
  | "target"
  | "trade"
  | "management";

export interface Troubleshoot {
  problem: string;
  solution: string;
}

export interface DogCommand {
  id: string;
  name: string; // 英語の号令
  nameJa: string; // 日本語名
  cue: string; // 実際に発する号令語
  category: Category;
  difficulty: Difficulty;
  method: TrainingMethod;
  scene: string; // こんな場面で役立つ
  handSignal: string; // ハンドサイン
  markPoint: string; // 「Yes」を鳴らす正確な瞬間（成功基準）
  howToTeach: string[]; // 教え方ステップ
  fadeLure?: string; // おやつ/ルアーの抜き方
  proofing?: string; // 3Dでの般化
  troubleshooting?: Troubleshoot[]; // うまくいかない時の対処
  prerequisites?: string[]; // 前提コマンド
  distinguishFrom?: string; // 紛らわしい号令との違い
  safety?: string; // 安全・福祉上の注意
  tips?: string;
  sources?: string[]; // 参考にした情報源
}

export const categoryLabels: Record<Category, string> = {
  foundation: "土台スキル",
  "life-skill": "生活スキル",
  "basic-obedience": "基本の姿勢",
  "stay-position": "待つ・とどまる",
  "recall-come": "呼び戻し",
  "leash-manners": "おさんぽマナー",
  "impulse-control": "がまんを教える",
  "cooperative-care": "協調ケア",
  trick: "トリック・芸",
};

// 表示用ラベル: 「英名 / 和名」。呼称は英語を主、和名を従にする。
export function commandLabel(c: Pick<DogCommand, "name" | "nameJa">): string {
  return `${c.name} / ${c.nameJa}`;
}

export const difficultyLabels: Record<Difficulty, string> = {
  beginner: "初級",
  intermediate: "中級",
  advanced: "上級",
  expert: "エキスパート",
};

export const methodLabels: Record<TrainingMethod, string> = {
  classical: "音と良いことを結びつける",
  capture: "できた瞬間をほめる",
  lure: "おやつで誘導する",
  shape: "少しずつ形にする",
  target: "手で誘導する",
  trade: "交換ゲーム",
  management: "環境を整える",
};

const AKC = "https://www.akc.org/expert-advice/training/";
const CORNELL =
  "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/training-stay-vs-wait";
const WDJ = "https://www.whole-dog-journal.com/";
const PREVENTIVE = "https://www.preventivevet.com/dogs/";
const CATTLEDOG = "https://cattledogpublishing.com/blog/how-to-teach-an-emergency-recall/";

export const commands: DogCommand[] = [
  // ───────────────────────── 土台スキル ─────────────────────────
  {
    id: "marker",
    name: "Marker",
    nameJa: "マーカー",
    cue: "Yes（またはクリッカー）",
    category: "foundation",
    difficulty: "beginner",
    method: "classical",
    scene:
      "すべてのトレーニングの最初の一歩。正解の瞬間を犬に正確に伝える道具を作る。",
    handSignal: "なし",
    markPoint:
      "充電中は行動を問わない。「Yes」と言った直後に必ずご褒美を出し、音＝ご褒美の関連を作る。",
    howToTeach: [
      "静かな部屋で、犬が落ち着いている状態を作る。",
      "「Yes」と言う→すぐにおやつを渡す。犬は何もしなくてよい。",
      "間隔をバラバラにして10〜20回繰り返す。",
      "テスト:「Yes」と言った瞬間に犬がパッとこちらを見たら充電完了。",
    ],
    fadeLure:
      "「マーカー→ご褒美」の結びつきは一生抜かない。後で抜くのは“どれくらいの頻度で行動を強化するか”であって、鳴らした後のご褒美ではない。",
    proofing: "新しい環境に行くたびに、数回だけ再充電するとよい。",
    troubleshooting: [
      {
        problem: "鳴らしたのにご褒美を出さない時がある",
        solution: "マーカーが弱くなる最大原因。鳴らしたら必ず毎回出す。",
      },
      {
        problem: "マーカーを長い文章や感情的な声で言ってしまう",
        solution: "「Yes」だけを短く・はっきり・一定の声で。",
      },
      {
        problem: "おやつを先に出してから鳴らしている",
        solution: "順序が逆。必ず「Yes」が先、その後に手がおやつポーチへ動く。",
      },
    ],
    safety:
      "音に敏感な犬には大きなクリッカーで驚かせない。柔らかい音のクリッカーか言葉を使う。",
    tips: "このスキルの精度が、以降すべてのコマンドの精度を決める。最重要。",
    sources: [`${AKC}clicker-training-your-dog-mark-and-reward/`],
  },
  {
    id: "release",
    name: "Release",
    nameJa: "解除",
    cue: "OK / フリー / ブレイク",
    category: "foundation",
    difficulty: "beginner",
    method: "capture",
    scene:
      "「まて」「ハウス」などの停止系を“いつ終わってよいか”犬に伝える。停止系とセットで最初に教える。",
    handSignal: "軽く手を払う、または一歩後ろに下がる（声のトーンの方が重要）",
    markPoint:
      "解除語そのものが「終わり＝動いてよい」の合図。そこまで保っていた姿勢にご褒美を与え、語で動きを許可する。",
    howToTeach: [
      "犬をおすわりさせ、1〜2秒待って姿勢のままご褒美。",
      "明るい声で解除語を言い、立ち上がる・動くのを促す。",
      "「この語＝もう動いていい」と結びつくまで繰り返す。",
    ],
    fadeLure:
      "解除＝自由（動ける・遊べる）自体がご褒美になるので、解除時のおやつは早めに抜いてよい。",
    proofing:
      "おすわり・ふせ・たて・ハウス・まて、いろいろな停止状態から解除して般化させる。",
    troubleshooting: [
      {
        problem: "解除語を教えていない",
        solution:
          "犬が勝手に動き出し「まて」が一生安定しない最大の失敗。必ず先に教える。",
      },
      {
        problem: "「OK」を使うと日常会話で誤って解除してしまう",
        solution: "会話に出にくい「ブレイク」「フリー」を使う。",
      },
      {
        problem: "平坦・小声で言って犬が気づかない",
        solution: "解除語は明るく弾んだ声で。",
      },
    ],
    distinguishFrom:
      "「まて」は“保て”の合図、解除語は“終わり・動いてよい”の合図。必ずペアで使う。",
    prerequisites: ["marker"],
    sources: [CORNELL],
  },
  {
    id: "name-response",
    name: "Name",
    nameJa: "名前",
    cue: "（犬の名前）",
    category: "foundation",
    difficulty: "beginner",
    method: "capture",
    scene:
      "注意を引き戻す全ての基本。名前は“こちらを見て・確認して”の合図であり、特定の動作の号令ではない。",
    handSignal: "なし",
    markPoint: "名前を聞いて、犬が頭をこちらに向けた／向き直った瞬間。",
    howToTeach: [
      "名前を1回言う→犬が振り向いた瞬間に「Yes」→ご褒美。最初は振り向かなくても名前の後にご褒美を出し、好印象を作ってよい。",
      "確実に振り向くようになったら、“見る”を要求してから強化。",
      "徐々に刺激の多い環境で練習する。",
    ],
    fadeLure: "安定したら頻度を間引く。ただし時々最高のご褒美（ジャックポット）を残す。",
    proofing: "名前は“誘惑（Distraction）”が鍵。競合する刺激を少しずつ足す。",
    troubleshooting: [
      {
        problem: "名前を呼んで叱る・嫌なこと（爪切り等）に使う",
        solution:
          "名前を“汚す”行為。犬は名前を無視するようになる。名前は常に良いことと結びつける。",
      },
      {
        problem: "「ポチ、ポチ、ポチ！」と連呼する",
        solution: "1回目を無視してよいと学習させてしまう。名前は1回だけ。",
      },
      {
        problem: "名前を呼び戻しに使っている",
        solution:
          "名前＝“確認して”、呼び戻しは別語（「おいで/Come」）に分けると両方が強くなる。",
      },
    ],
    distinguishFrom:
      "名前＝一瞬の注目／Watch＝持続的なアイコンタクト／Come＝自分の所まで戻る。",
    prerequisites: ["marker"],
    safety: "名前は100%ポジティブに保つ。呼び戻しと注目の土台になる。",
    sources: [`${AKC}teach-your-puppy-these-5-basic-commands/`],
  },
  {
    id: "watch-me",
    name: "Watch me",
    nameJa: "アイコンタクト",
    cue: "Watch / 見て",
    category: "foundation",
    difficulty: "beginner",
    method: "lure",
    scene:
      "他の犬や刺激の多い場面で、持続的に自分に注目させたい時。反応性の管理の基礎。",
    handSignal: "おやつ／人差し指を犬の鼻先から自分の目の間へ。後に目を指す動作。",
    markPoint: "犬の目が自分の目と合った瞬間（おやつではなく“目”を見た瞬間）。",
    howToTeach: [
      "おやつを犬の鼻先に持ち、ゆっくり自分の目の間へ上げる→目が合った瞬間に「Yes」→ご褒美。",
      "次は空の手で同じ動き（これがハンドサイン）。ご褒美は反対の手から。",
      "ハンドサインで安定したら、その直前に「Watch」と言う。",
      "持続時間を伸ばす:一瞬の視線→徐々に長いアイコンタクトへ。",
      "横におやつを差し出す“誘惑テスト”を追加。誘惑ではなく自分を見たら強化。",
    ],
    fadeLure: "空の手に切り替え、ご褒美は反対の手から。安定後は長く見た時ほど手厚く。",
    proofing: "時間→誘惑（横のおやつ）→環境、の順。",
    troubleshooting: [
      {
        problem: "おやつを持つ手ばかり見て、目を見ない",
        solution: "本当に目が合った時だけ「Yes」。ご褒美は必ず反対の手から出す。",
      },
      {
        problem: "目をそらす・落ち着かない",
        solution:
          "アイコンタクトが苦手な犬もいる。これは不服従でなくストレス。短時間で・強要せず・少しずつ。",
      },
    ],
    distinguishFrom: "名前＝一瞬の向き直り／Watch＝持続的に目を合わせ続ける。",
    prerequisites: ["marker", "name-response"],
    safety: "怖がっている犬を見据えない。アイコンタクトは自発的で心地よいものに保つ。",
    sources: [`${AKC}watch-me-command-grab-dogs-attention/`],
  },
  {
    id: "touch",
    name: "Touch",
    nameJa: "タッチ",
    cue: "Touch / タッチ",
    category: "foundation",
    difficulty: "beginner",
    method: "target",
    scene:
      "誘導・呼び戻しの補助・苦手な物への慣らし・来客時の飛びつき回避まで使える万能スキル。",
    handSignal: "開いた手のひらを犬に向けて差し出す。",
    markPoint: "犬の鼻が手のひらに触れた、まさにその瞬間。",
    howToTeach: [
      "開いた手のひらを犬の鼻から2〜5cmに出す。犬が嗅ぐ／触れたら触れた瞬間に「Yes」→ご褒美は手のひらの真正面で渡す（場所を強化）。",
      "勢いよく手にタッチしに来るまで繰り返す。場所も色々変える。",
      "手を出す直前に「タッチ」と言う。",
      "距離を伸ばす（数cm→数十cm→数歩）。手の高さ・位置も変える。",
      "最後に誘惑を足す。",
    ],
    fadeLure: "流暢になったら強化を間引く。タッチ自体がご褒美を予告する行動になる。",
    proofing: "距離と誘惑が主な軸。",
    troubleshooting: [
      {
        problem: "手にタッチしてくれない",
        solution:
          "最初の数回は手のひらに匂いの強いおやつをこすりつける。または“手を見る→近づく→触れる”とシェイピングで段階化。",
      },
      {
        problem: "手を噛む・口を当ててくる",
        solution: "強くなる前に、軽く触れた瞬間で早めに「Yes」。",
      },
      {
        problem: "最初から手を遠く・高くに出している",
        solution: "安定するまでは近くに出す。",
      },
    ],
    prerequisites: ["marker"],
    tips: "低ストレスで応用が利く。立たせる・ヒール位置への誘導・トリガーからの注意そらしにも使える。",
    sources: [`${AKC}teach-dog-nose-target-touch/`],
  },

  // ───────────────────────── 基本姿勢 ─────────────────────────
  {
    id: "sit",
    name: "Sit",
    nameJa: "おすわり",
    cue: "Sit / おすわり",
    category: "basic-obedience",
    difficulty: "beginner",
    method: "lure",
    scene: "ごはんの前、信号待ち、来客のときなど、犬を落ち着かせたい場面で広く使えます。",
    handSignal: "開いた手を、下から上へすくい上げる動き。（おやつでの誘導をやめた後の合図になります）",
    markPoint: "おしりが床についた、その瞬間。",
    howToTeach: [
      "おやつを犬の鼻先に近づけ、頭の上をこえて後ろへゆっくり動かします。頭が上がると、自然におしりが下がります。",
      "おしりが床についた瞬間に「Yes」と言い、その姿勢のままおやつをあげます。",
      "数回できたら、おやつを持たない“空の手”で同じ動きをします。これが手の合図になります。おやつは反対の手から出します。",
      "最後に言葉を付けます。空の手の合図を出す直前に「おすわり」と言い、慣れたら手の動きを省きます。",
    ],
    fadeLure:
      "「おやつがある時だけ座る犬」にしないためのコツです。最初の数回で、おやつを持たない手に切り替えましょう。何回も食べ物を握ったまま続けないこと。",
    proofing:
      "座れるようになったら、少しずつ難しくします。①おすわりを保つ時間をのばす→②あなたが少し離れても座っている→③まわりに誘惑がある中でも座る。『まて』と組み合わせると伸ばしやすいです。",
    troubleshooting: [
      {
        problem: "おしりを手で押し下げたくなる",
        solution:
          "押さえつけるのは犬にとって不快で、逆効果です。やってはいけません。自分から下がるのを待ちましょう。",
      },
      {
        problem: "おやつを高く上げすぎて、飛びついたり後ずさりする",
        solution: "おやつは、頭のすぐ上を低く動かします。",
      },
      {
        problem: "後ろに下がる・くるっと回ってしまう",
        solution: "犬の背中を壁のほうに向けて誘導すると、下がれなくなります。",
      },
      {
        problem: "おやつが見えるときだけ座る",
        solution: "早めにおやつを手から抜きます（上の「おやつの減らし方」を参照）。",
      },
    ],
    prerequisites: ["marker"],
    safety:
      "硬い床・熱い床では無理に座らせないでください。股関節など関節を痛がる犬にも、無理は禁物です。",
    sources: [`${AKC}how-to-teach-your-dog-to-sit/`, `${WDJ}training/how-to-teach-a-dog-to-sit/`],
  },
  {
    id: "down",
    name: "Down",
    nameJa: "ふせ",
    cue: "Down / ふせ",
    category: "basic-obedience",
    difficulty: "beginner",
    method: "lure",
    scene: "カフェ・病院の待合室など、長時間おとなしくしてほしい場面。まて・落ち着けの土台。",
    handSignal: "犬の鼻先から床へ、平らな手を下ろす動き。",
    markPoint: "肘・胸（お腹）が床についた、まさにその瞬間。",
    howToTeach: [
      "おすわりから、おやつを鼻先に当て、胸に沿って前足の間の床まで真っ直ぐ下ろす（床に着いたら少し手前へ＝L字）。犬は折りたたむように伏せる。",
      "肘が床についた瞬間に「Yes」→低い位置・姿勢のままご褒美。",
      "数回で“空の手”を床へ（ハンドサイン）。ご褒美は反対の手から。",
      "ハンドサインの直前に「ふせ」と言う。",
    ],
    fadeLure: "数回で空の手／後ろ手にして、伏せた後にご褒美を出す形へ。",
    proofing: "まず時間（ふせはまて・落ち着けの自然な土台）→距離→誘惑。",
    troubleshooting: [
      {
        problem: "リードや肩を押して伏せさせたくなる",
        solution: "力で伏せさせない。誘導と強化のみ。",
      },
      {
        problem: "ルアーを追って前に這ってくる（伏せない）",
        solution:
          "おやつを前方ではなく前足の間へ真っ直ぐ下ろす。膝や椅子の桟の下をくぐらせると下に潜る。",
      },
      {
        problem: "伏せてもすぐ起き上がる",
        solution: "着いた瞬間にもっと速く「Yes」→ご褒美。その後1秒ずつ時間を伸ばす。",
      },
      {
        problem: "硬い床では伏せたがらない",
        solution: "カーペットやマットの上で練習。快適さが意欲に影響する。",
      },
    ],
    prerequisites: ["sit"],
    safety: "快適な床面で。冷たい・硬い地面で繰り返し要求しない。",
    sources: [`${AKC}teach-your-puppy-these-5-basic-commands/`],
  },
  {
    id: "stand",
    name: "Stand",
    nameJa: "たて",
    cue: "Stand / たて",
    category: "basic-obedience",
    difficulty: "beginner",
    method: "lure",
    scene: "動物病院の診察・グルーミング・足拭き・体のチェック。",
    handSignal: "平らな手を、地面と平行に犬から真っ直ぐ後ろへ引く。",
    markPoint: "犬が四本足でしっかり立った、まさにその瞬間。",
    howToTeach: [
      "おすわりから、おやつを鼻先に当てて真っ直ぐ後ろへ引く。犬は追って立ち上がる。",
      "立った瞬間に「Yes」→立ったままご褒美（鼻の高さで渡し、座り直さないように）。",
      "空の手のルアー（手を平行に引く＝ハンドサイン）へ。ご褒美は反対の手から。",
      "ハンドサインの直前に「たて」。",
      "立止のキープは、誘惑下で約30秒保ててから距離を足す。",
    ],
    fadeLure: "数回で空の手に切り替える。",
    proofing: "時間（立ち姿勢を保つ）→距離・誘惑。",
    troubleshooting: [
      {
        problem: "立つのではなく前に歩いてしまう",
        solution: "ルアーを後ろへ少しだけ引く。立ち上がった瞬間に即ご褒美。",
      },
      {
        problem: "「Yes」と同時に座り直す",
        solution: "立った鼻の高さでご褒美を渡し、マークを少し早める。",
      },
    ],
    prerequisites: ["sit"],
    safety: "診察・乾燥・爪切りに便利。リラックスして教えると扱いが楽になる。",
    sources: [`${AKC}teach-dog-stand-cue/`],
  },

  // ───────────────────────── 停止・ポジション ─────────────────────────
  {
    id: "stay",
    name: "Stay",
    nameJa: "まて",
    cue: "Stay / まて",
    category: "stay-position",
    difficulty: "intermediate",
    method: "capture",
    scene: "ドアの開閉時・来客時・食事の準備中など、その場で待たせたい時。安全行動。",
    handSignal: "開いた手のひらを犬に向ける「ストップ」のサイン。",
    markPoint:
      "姿勢を保っている“最中”に（崩れる前に）「Yes」→ご褒美。解除語で終わる。最初は1〜2秒保てたら強化。",
    howToTeach: [
      "おすわり／ふせをさせる。1〜2秒待って姿勢のままご褒美→解除語（「OK」）。",
      "保っている間に「いい子、まて」と添え、開始時に「まて」＋手のひらサイン。",
      "時間を最優先:1秒ずつ伸ばし、保っている最中にご褒美。",
      "次に距離:一歩下がる→戻る→ご褒美。距離を足す時は時間を短く戻す。",
      "最後に誘惑。",
      "まてでは“呼び戻して終わる”のではなく、必ず犬の所へ戻ってから解除する。",
    ],
    fadeLure: "ご褒美の間隔をバラバラに。犬が“終わり”を予測して崩れないようにする。",
    proofing:
      "このコマンドは3Dそのもの。厳密に一度に1つのD。新しいDを足す時は他をゆるめる。",
    troubleshooting: [
      {
        problem: "解除語を教えていない",
        solution: "犬が勝手に動く。先に解除語（#解除語）を教える。",
      },
      {
        problem: "犬が動いてしまう（崩れる）",
        solution: "叱らず、静かに元の位置へ戻して再挑戦。そして簡単に（短く・近く）する。",
      },
      {
        problem: "距離と時間を同時に上げている",
        solution: "難しすぎる。Dは1つずつ。",
      },
      {
        problem: "毎回同じ間隔でご褒美→終わりを予測して崩れる",
        solution: "間隔をランダムにする。",
      },
      {
        problem: "じわじわ前に出てくる",
        solution: "毎回きっちり元の位置に戻し、正しい場所でだけご褒美。",
      },
    ],
    prerequisites: ["sit", "release"],
    distinguishFrom:
      "まて＝戻って解除するまで“その位置”を保つ／待って（Wait）＝次の合図までの一時停止。",
    safety: "信頼できるまては道路際・玄関での安全行動。焦らず、罰を使わず作る。",
    sources: [CORNELL, `${AKC}dog-training-duration-distance-distraction/`],
  },
  {
    id: "wait",
    name: "Wait",
    nameJa: "待って",
    cue: "Wait / 待って",
    category: "stay-position",
    difficulty: "beginner",
    method: "capture",
    scene: "ドアの前・車から降りる時・横断歩道。突進を防ぐ衝動制御。",
    handSignal: "開いた手のひら（まてと同じ）または上げた手。",
    markPoint: "合図で犬が前進をやめ、止まった／待った瞬間。止まりを強化し、解除で進ませる。",
    howToTeach: [
      "ドアに近づき「待って」。ドアノブに手をかける。犬が突進したらドアは止まる／閉まる（ドアが開くこと自体がご褒美）。",
      "犬が控えた瞬間に「Yes」→解除語でドアを通す（「OK」）。",
      "食器・車・縁石へと般化する。",
    ],
    fadeLure: "“ドアを通れる・食器が来る”という生活報酬がすぐに食べ物の代わりになる。",
    proofing: "主に誘惑・衝動制御。時間は短くてよい設計。",
    troubleshooting: [
      {
        problem: "まてと待ってを同じものとして教える",
        solution:
          "犬が“位置を保つのか・一瞬止まるだけか”混乱する。別の号令として、時に同じセッションで両方を練習し区別を明確にする。",
      },
      {
        problem: "突進した後に通してしまう",
        solution: "突進を強化することになる。控えてから解除する。",
      },
    ],
    prerequisites: ["marker", "release"],
    distinguishFrom:
      "待って＝姿勢は問わず“次の合図まで一瞬止まる”／まて＝戻るまで“その位置”を保つ。",
    safety: "道路・車のドア・階段での中核的な安全合図。",
    sources: [CORNELL, `${WDJ}behavior/training-your-dog-to-wait-and-stay/`],
  },
  {
    id: "place",
    name: "Place",
    nameJa: "プレイス",
    cue: "プレイス / マット",
    category: "stay-position",
    difficulty: "intermediate",
    method: "shape",
    scene: "来客時・食事中・犬にリラックスしてほしい場面。持ち運べる“安全基地”になる。",
    handSignal: "マットを指す／手で示す。",
    markPoint:
      "最初はマットへの“どんな関わり”でも（見る・近づく・足を乗せる）。徐々に四本足が乗る→マット上で伏せる、へ基準を上げる。",
    howToTeach: [
      "マットを置く。マットへの注目（視線・一歩近づく）を「Yes」→ご褒美。",
      "基準を上げる:片足→両足→四本足→マット上でおすわり／ふせ。",
      "リセット投げ:乗ってご褒美の後、マットの“外”におやつを投げ、自分で戻る選択をさせる。毎回一歩離れて“行け”の距離を作る。",
      "確実にマットを狙うようになったら「Place」を付ける。",
      "時間（マットで伏せて保つ）→距離（遠くから送る）→誘惑、の順。",
    ],
    fadeLure: "ルアーに頼りすぎない。シェイピング／号令で“自分で選んで行く”形に。",
    proofing: "距離（部屋の反対から送る）・時間（留まる）・誘惑（人・チャイム）を1つずつ。",
    troubleshooting: [
      {
        problem: "マットへルアーしすぎる",
        solution: "犬が自分で行くよう、シェイピング／号令へ移行する。",
      },
      {
        problem: "基準を上げるのが速すぎて犬が動かなくなる",
        solution: "簡単な関わりを強化する段階に戻す。",
      },
      {
        problem: "マットに留まれない",
        solution: "留まることへの強化頻度を上げ、その後で間隔を伸ばす。",
      },
    ],
    prerequisites: ["down", "stay", "release"],
    safety: "レストラン・病院・来客時に犬の安心できる居場所になり、ストレスを減らす。",
    sources: [
      "https://www.chewy.com/education/dog/training-and-behavior/how-to-train-your-dog-to-settle-on-a-mat",
    ],
  },
  {
    id: "settle",
    name: "Settle",
    nameJa: "落ち着いて",
    cue: "Settle / 落ち着いて / リラックス",
    category: "impulse-control",
    difficulty: "intermediate",
    method: "capture",
    scene: "興奮している時・来客時・外出先。これは“姿勢”ではなく“本当に落ち着いた状態”を作る。",
    handSignal: "通常なし。穏やかに手を下ろす、または号令語のみ。",
    markPoint:
      "リラックスの兆候が出た瞬間:片方の腰に体重を預ける・深い呼吸／ため息・柔らかい目・口を閉じる・頭を下げる・静止。",
    howToTeach: [
      "横で「ふせ」（できればマット上）。",
      "落ち着いた瞬間、特に腰を片側に倒した瞬間に「Yes」→ご褒美。おやつを肋骨側へ半円に誘うと腰が倒れやすい。",
      "次に“リラックスの兆候”（深い呼吸・柔らかい目・眠そうな頭）を見て強化。ご褒美は前足の間に静かに置き、興奮させないようにゆっくり渡す。",
      "予測できるようになったら「落ち着いて」を付ける。",
      "落ち着き同士の間隔を伸ばして時間を延ばす。",
    ],
    fadeLure: "間隔を伸ばし、持続的な落ち着きを時々・静かに強化する。",
    proofing: "時間→誘惑（動き・音）。距離は重要度低め。",
    troubleshooting: [
      {
        problem: "ご褒美を勢いよく渡して再び興奮させる",
        solution: "ご褒美はゆっくり静かに。低い覚醒を保つ。",
      },
      {
        problem: "無理やり横に倒す",
        solution: "強制は負の連想を作る。姿勢を力で作らない。",
      },
      {
        problem: "鋭い服従の“ふせ”と混同する",
        solution: "落ち着いては“状態”が目的。呼吸・柔らかい目を強化し、姿勢だけを見ない。",
      },
    ],
    prerequisites: ["down", "place"],
    safety:
      "不安・過覚醒の犬に有効な行動修正ツールでもある。Dr. Karen Overall の弛緩プロトコル（15日構成）で深められる。唸り・パニックが出る場合は陽性強化の専門家（CCPDT-KA / IAABC）に相談。",
    tips: "“落ち着いた振る舞い”を続けると、生理的にも実際に落ち着いてくる（条件反応として弛緩が育つ）。",
    sources: [
      `${WDJ}training/teach-your-dog-to-settle-and-relax-on-cue/`,
      "https://www.pawschicago.org/fileadmin/media/images/News_Resources/Dog_Training_Protocols/DogResource_Relaxation_2019.pdf",
    ],
  },

  // ───────────────────────── 呼び戻し ─────────────────────────
  {
    id: "come",
    name: "Come",
    nameJa: "おいで",
    cue: "Come / おいで",
    category: "recall-come",
    difficulty: "intermediate",
    method: "capture",
    scene:
      "ドッグランで呼び戻す・危険を回避する・リードが外れた時。最重要の“命を守る”合図。",
    handSignal: "両腕を大きく広げる歓迎の動き、またはしゃがんで低くなる。",
    markPoint: "犬が“来る”と決めてこちらへ動き出した瞬間に強化し、到着時に手厚くご褒美。",
    howToTeach: [
      "静かな室内で「おいで」（または名前）→すぐご褒美。最初は動作不要、良い連想を作る。",
      "おやつを少し投げ、犬が振り返ったら呼ぶ→到着でご褒美。",
      "動きを足す:呼びながら自分が逃げるように走ると“追う”のが楽しくなる。",
      "屋外ではロングリードを付け、徐々に誘惑を足す。",
      "到着したら首輪をそっと持ってからご褒美（首輪を持つ＝良いこと、と結びつける）。",
    ],
    fadeLure: "通常の「おいで」は手厚い変動強化へ。ただし下記の緊急用は一生抜かない。",
    proofing: "誘惑と距離が最難関。ロングリードを常に安全網として使う。",
    troubleshooting: [
      {
        problem: "来たのに叱る（遅くても）",
        solution:
          "呼び戻しを破壊する最悪の行為。来たら必ず・常に褒める。",
      },
      {
        problem: "「おいで」を“楽しい時間の終わり”にだけ使う（リード装着・帰宅）",
        solution: "号令が汚れる。時々は呼んで→ご褒美→また遊びに戻す。",
      },
      {
        problem: "犬を追いかける",
        solution: "追いかけっこになる。逆に自分が反対へ走り、犬に追わせる。",
      },
      {
        problem: "「おいで、おいで、おいで」と連呼",
        solution: "最初の数回は無視してよいと学習する。1回だけ。",
      },
      {
        problem: "強化・回収できない状況で呼ぶ（早すぎるノーリード）",
        solution: "失敗が信頼性を削る。確実になるまでロングリードを使う。",
      },
    ],
    prerequisites: ["marker", "name-response"],
    safety:
      "命に関わる最重要コマンド。100%ポジティブに保つ。確実になるまでノーリードにしない。",
    tips: "緊急用には別の専用合図（「Here!」やホイッスル）を用意し、最高のご褒美で充電。週1〜2回だけ練習し、嫌なことには絶対に使わない（緊急呼び戻しプロトコル）。",
    sources: [`${AKC}reliable-recall-train-dogs-to-come-when-called/`, CATTLEDOG],
  },

  // ───────────────────────── 衝動制御 ─────────────────────────
  {
    id: "leave-it",
    name: "Leave it",
    nameJa: "やめなさい",
    cue: "Leave it / やめなさい",
    category: "impulse-control",
    difficulty: "intermediate",
    method: "management",
    scene: "拾い食い防止・他の犬への突進防止・落ちた薬や危険物の回避。安全行動。",
    handSignal: "特になし（主に声）。状況によりブロックする手。",
    markPoint: "犬が対象物から頭／鼻を“意図的に”離した瞬間。",
    howToTeach: [
      "①握り拳:価値の低いおやつを握る。「やめなさい」と1回。犬が舐める／前足でかくのをやめ頭を引いた瞬間に「Yes」→“反対の手”の価値の高いおやつでご褒美（拳の中のは絶対に渡さない）。",
      "②開いた手のひら（ダイブしたら閉じる）:同じく頭を離したら反対の手から。どちらの手にどのおやつか時々入れ替える。",
      "③床に置き手で覆う:「やめなさい」→離れたら高価値で。",
      "④上から落とす（最初は数cm、必要なら足でブロック）:落ちた物を無視したら強化。",
      "⑤実物（靴下・食べ物・リモコン）→庭・散歩へ。流暢になるにつれ食べ物／クリッカーを徐々に抜く。",
    ],
    fadeLure: "禁止した物は決して与えない。“離れる方が良いご褒美が来る”の原則を保ち、強化は変動に。",
    proofing: "誘惑（物の価値）と物との距離が主軸。“離れたまま”の時間も少しずつ要求。",
    troubleshooting: [
      {
        problem: "禁止のおやつを犬に取られてしまう",
        solution: "“しつこくすれば得られる”と学習する。拳はしっかり閉じる。",
      },
      {
        problem: "「やめなさい、やめなさい」と連呼",
        solution: "1回言って待つ。",
      },
      {
        problem: "罰や厳しい口調で使う",
        solution:
          "「やめなさい」＝“もっと良いことのためにこちらに向き直る”という選択にする。脅しにしない。",
      },
      {
        problem: "難しい物へ進むのが速すぎる",
        solution: "段階通りに。失敗したら一段戻す。",
      },
    ],
    prerequisites: ["marker"],
    distinguishFrom:
      "やめなさい（Leave it）＝“まだ口にしていない物に触るな”／出して（Drop it）＝“口の中の物を放せ”。",
    safety: "毒物・落ちた薬・道路の危険物に対する本物の安全行動。",
    sources: [`${PREVENTIVE}teach-your-dog-leave-it`],
  },
  {
    id: "drop-it",
    name: "Drop it",
    nameJa: "出して",
    cue: "Drop it / 出して / ちょうだい",
    category: "impulse-control",
    difficulty: "intermediate",
    method: "trade",
    scene: "危険な物を咥えた時・遊び中のボール交換・誤飲防止・資源ガード予防。",
    handSignal: "おやつを差し出す手（厳密な定型サインはなし）。",
    markPoint: "咥えていた物が口から離れた、まさにその瞬間。",
    howToTeach: [
      "犬が咥えるが執着しない価値の低いおもちゃを渡す。",
      "鼻先に価値の高いおやつを出し「出して」（最初は見せて放させてよい）。口を開け物が落ちた瞬間に「Yes」→おやつでご褒美。",
      "おもちゃは“返してあげる”——放す＝楽しみを失う、にしない。",
      "数回後、おやつを見せずに「出して」だけ。成功したらおやつを複数個。",
      "2個交換版:同じおもちゃ2個を交互に交換し、遊びを途切れさせない。",
    ],
    fadeLure: "“見せて放す”→“先に号令、後でご褒美”→変動強化＋頻繁なおもちゃ返却へ。",
    proofing: "物の価値を少しずつ上げ、場所も変えて般化。",
    troubleshooting: [
      {
        problem: "物を掴んで無理に引き抜く",
        solution:
          "恐怖・資源ガード・咬みつきを生む。必ず“交換”する。",
      },
      {
        problem: "“禁止の物”を持った犬を追いかける",
        solution: "追いかけっこになる。交換か呼び戻しを使う。",
      },
      {
        problem: "いつも物を永久に取り上げる",
        solution: "犬が人を避けるようになる。頻繁に返してあげる。",
      },
      {
        problem: "唸る・噛む・ガードする",
        solution:
          "中止し、陽性強化の専門家に相談。無理に進めない。",
      },
    ],
    prerequisites: ["marker"],
    distinguishFrom: "出して＝口の中の物を放す／やめなさい＝まだ口にしていない物に触らない。",
    safety:
      "誤飲・窒息防止の中核。交換アプローチは“人が近づく＝良いこと”を教え、資源ガードを能動的に予防する。",
    sources: [`${AKC}teaching-your-dog-to-drop-it/`],
  },
  {
    id: "off",
    name: "Off",
    nameJa: "オフ",
    cue: "Off / オフ",
    category: "impulse-control",
    difficulty: "intermediate",
    method: "management",
    scene: "人への飛びつき防止・ソファやカウンターから降ろす。",
    handSignal: "通常なし。背を向けるボディランゲージが鍵。",
    markPoint: "四本足すべてが床についた／飛びつきをやめた、まさにその瞬間。",
    howToTeach: [
      "“四本足が床”を先回りで強化:飛びついた瞬間は背を向け注目を外す（犬が欲しい“注目”を消す）。足が床についたら「Yes」→ご褒美。",
      "挨拶はリードを付けて設定:人が近づく間、床におやつを撒いて“足が床で食べている”状態で挨拶させ、食べ終わる前に人が下がる。",
      "両立しない行動を教える:挨拶は「おすわり」（座っていれば飛べない）。手厚く強化。",
      "すでに飛びついている時は「オフ」と1回→四本足になったらご褒美。",
    ],
    fadeLure: "挨拶でのおすわり／四本足を変動強化に。",
    proofing: "誘惑（興奮する来客）が難所。落ち着いた協力者→徐々に興奮する相手へ。",
    troubleshooting: [
      {
        problem: "膝で押す・叩く・怒鳴る・前足を掴む",
        solution:
          "嫌悪的で、しばしば犬には“注目＝ご褒美”になり逆効果。注目を外すのが正解。",
      },
      {
        problem: "来客がバラバラ（飛びつきを許す人がいる）",
        solution: "全員に“飛びつきは無視”を共有する。",
      },
      {
        problem: "「今回だけ」と飛びつく犬を撫でる",
        solution:
          "飛びつきを間欠強化してしまい、最も消えにくいパターンになる。",
      },
      {
        problem: "飛びつきを叱るだけで代替行動を教えない",
        solution: "両立しないおすわり／四本足を教える。",
      },
    ],
    prerequisites: ["sit", "marker"],
    distinguishFrom:
      "オフ（Off）＝“足を離せ・降りろ”／ふせ（Down）＝“伏せろ”。同じ語にすると混乱するので必ず別語に。",
    safety:
      "飛びつきは子供や高齢者を転倒させ得る。オフ／座って挨拶はマナーかつ安全。力を使わず教える。",
    sources: [
      `${AKC}how-to-stop-your-dog-from-jumping-up-on-people/`,
      "https://www.chewy.com/education/dog/training-and-behavior/basic-dog-training-commands-off",
    ],
  },

  // ───────────────────────── リードマナー ─────────────────────────
  {
    id: "loose-leash",
    name: "Loose leash",
    nameJa: "ゆるリード",
    cue: "Let's go / 行こう",
    category: "leash-manners",
    difficulty: "intermediate",
    method: "capture",
    scene: "通常の散歩。リードがたるんだ状態で歩く（犬はリードの範囲で匂い嗅ぎしてよい）。",
    handSignal: "歩いてほしい位置（脚の横）を軽く叩く（任意）。",
    markPoint: "リードがたるみ、犬が望む位置（脚の横あたり）にいる瞬間。",
    howToTeach: [
      "室内・低刺激で、犬が“脚の横でリードたるみ”の時に手厚くご褒美。ご褒美はズボンの縫い目あたり（位置を強化）で渡す。",
      "一歩進む→リードがたるんだままなら脚の横でご褒美。歩数を少しずつ増やす（小さなボックスステップ）。",
      "リードが張った瞬間に止まる（“木になる”）か、逆方向へ歩く。たるんだら再開。",
      "歩き出す時に「行こう」を付ける。",
      "庭→静かな道→賑やかな場所へ般化。",
    ],
    fadeLure: "流暢になるにつれ強化頻度を下げる。必要な制御レベルに応じて頻度を調整。",
    proofing: "誘惑（環境）が最難関。距離＝歩いた時間。ゆっくり積み上げる。",
    troubleshooting: [
      {
        problem: "リードが張っているのに前進してしまう",
        solution: "引っ張りを直接強化する行為。張っている間は絶対に進まない。",
      },
      {
        problem: "伸縮（フレキシ）リードを使う",
        solution:
          "引くと線が伸び＝引っ張りが報われる最悪の道具。固定の約1.8mリードを使う。練習中はフロントクリップのハーネスが管理に有効。",
      },
      {
        problem: "最初から強化頻度が低い",
        solution: "環境の方が魅力的になる。最初は手厚く払う。",
      },
      {
        problem: "時々引っ張りを許してしまう",
        solution: "一貫性のなさが引っ張りを生かし続ける。",
      },
    ],
    prerequisites: ["marker", "name-response"],
    distinguishFrom:
      "行こう（Loose-leash）＝たるんでいれば自由度あり・匂い嗅ぎ可／ヒール＝厳密に脚の横で注目を保つ。",
    safety:
      "匂い嗅ぎの休憩を許す（嗅覚刺激は豊かさ）。プロング・チョーク・電気首輪等の嫌悪的な道具はこの方法と両立しない。",
    sources: [
      `${WDJ}training/how-to-teach-loose-leash-walking-to-your-dog/`,
      "https://sdhumane.org/resources/training-tips-loose-leash-walking/",
    ],
  },
  {
    id: "heel",
    name: "Heel",
    nameJa: "ヒール",
    cue: "Heel / ヒール / つけ",
    category: "leash-manners",
    difficulty: "advanced",
    method: "lure",
    scene: "人混み・他の犬とのすれ違い・横断歩道。左側の正確な位置で歩調を合わせて歩く。",
    handSignal: "左の腰／縫い目の位置で手やおやつを示す。左脚を軽く叩く。",
    markPoint: "犬が正確なヒール位置（頭が膝／腰の横、自分と平行、注目が上）にいる瞬間。",
    howToTeach: [
      "犬が左脚の横にいることを繰り返し強化（ルアー／タッチで誘導）。",
      "一歩進む→位置を保てたら縫い目の所でご褒美。歩数を徐々に増やす。",
      "方向転換・ペース変化を加え、歩き出しに「ヒール」。",
      "“位置＋注目”の時間を伸ばし、最後に誘惑。",
    ],
    fadeLure: "位置に応じた間欠強化へ。最高の瞬間を手厚く。",
    proofing: "正しい位置の時間→誘惑→環境・ペースの変化。",
    troubleshooting: [
      {
        problem: "前に出る／遅れる",
        solution: "正確な位置の時だけ強化。タッチや方向転換でリセット。",
      },
      {
        problem: "匂い嗅ぎ・離れる",
        solution: "ヒールは注目が必要。位置でのアイコンタクトを強化し、ヒール区間は短く。",
      },
      {
        problem: "長くヒールを要求しすぎる",
        solution: "疲れる。正式なヒールは短く・強化を密に。",
      },
    ],
    prerequisites: ["loose-leash", "touch", "watch-me"],
    distinguishFrom:
      "ヒール＝厳密・正式（左側・正確・注目・歩調一致）／行こう＝カジュアル（たるみあれば自由・匂い嗅ぎ可）。毎回の散歩をヒールにしない。",
    safety: "頭を使うので疲れる。自由な匂い嗅ぎ／リード歩行を挟み、散歩を楽しいものに保つ。",
    sources: [`${WDJ}training/how-to-teach-loose-leash-walking-to-your-dog/`],
  },

  // ───────────────────────── 生活スキル ─────────────────────────
  {
    id: "potty",
    name: "Potty",
    nameJa: "トイレ",
    cue: "ワンツー / トイレ",
    category: "life-skill",
    difficulty: "beginner",
    method: "capture",
    scene:
      "お迎え初日からの最重要管理。決まった場所・号令で排泄でき、外出や就寝の前に促せるようにする。",
    handSignal: "なし",
    markPoint:
      "排泄し“始めた”瞬間に静かに号令を被せ、終わった直後に「Yes」→その場でご褒美。",
    howToTeach: [
      "起床直後・食後・遊んだ後・就寝前など、排泄しやすいタイミングでトイレへ連れて行く。",
      "犬が排泄し始めたら、静かに「ワンツー」と言う（行動を邪魔しない声量で）。",
      "排泄し終わった直後に「Yes」→必ずその場でご褒美。語と排泄の関連を作る。",
      "関連ができたら、トイレへ連れて行き先に「ワンツー」と促す。出たら大いに褒める。",
    ],
    fadeLure:
      "排泄＝その後に散歩や遊びが続く、という生活報酬が自然なご褒美になる。おやつは安定後に間引く。",
    proofing:
      "場所の般化が鍵。室内トイレ→屋外の決まった地点→旅行先、と段階的に。",
    troubleshooting: [
      {
        problem: "粗相を見つけて叱る",
        solution:
          "犬は“排泄そのもの”を隠すようになり逆効果。失敗は無言で片付け、成功を強化する。",
      },
      {
        problem: "排泄が終わってから号令を言っている",
        solution: "関連がずれる。号令は排泄し始めた瞬間に被せる。",
      },
    ],
    prerequisites: ["marker"],
    safety:
      "子犬は2〜3時間ごと、食後・起床後すぐにトイレへ。我慢のさせ過ぎは膀胱炎の原因になる。",
    tips: "号令を2語（ワン＝小／ツー＝大）に分けると、外出前に大も促しやすい。",
    sources: [`${AKC}how-to-potty-train-a-puppy/`],
  },
  {
    id: "crate",
    name: "Crate",
    nameJa: "ハウス",
    cue: "ハウス",
    category: "life-skill",
    difficulty: "beginner",
    method: "lure",
    scene:
      "安全基地・睡眠・留守番・移動（通院/車/災害時）の土台。号令で自分からクレートに入れるようにする。",
    handSignal: "クレートの入口を手のひらで指し示す。",
    markPoint: "全身（しっぽまで）がクレートに入った瞬間。",
    howToTeach: [
      "クレートのドアを固定して開けておき、奥におやつを投げる→入ったら「Yes」。",
      "入る動きが出たら「ハウス」と言ってから投げる、を繰り返す。",
      "ルアーを抜き、「ハウス」だけで入ったら、中で数粒ご褒美（中＝良い場所にする）。",
      "入って落ち着いたら解除語で出す。出入りを“怖くない・自分の意思で”繰り返す。",
    ],
    fadeLure:
      "中で得られるご褒美（おやつ・落ち着ける・安心）自体が報酬になる。投げ込みは早めに抜く。",
    proofing:
      "距離（離れて送る）→ 中での滞在時間 → ドアを閉める → 短い留守番、の順で広げる。",
    troubleshooting: [
      {
        problem: "クレートを罰やタイムアウトに使う",
        solution:
          "クレート＝嫌な場所になり一生入らなくなる。常に良いこと（食事・安眠・おやつ）と結びつける。",
      },
      {
        problem: "入れてすぐ長時間閉じ込める",
        solution: "短時間から。鳴いても“静かになった瞬間”に出し、鳴き＝出してもらえる を作らない。",
      },
    ],
    prerequisites: ["marker"],
    distinguishFrom:
      "ハウス＝クレートに入る号令／プレイス＝マット（定位置）へ行って待つ号令。場所と目的が違う。",
    safety: "クレートのサイズは“立って向きを変え、伏せて伸びられる”大きさ。首輪の引っ掛かりに注意。",
    sources: [`${AKC}crate-training-benefits-getting-started/`],
  },
  {
    id: "polite-greeting",
    name: "Polite greeting",
    nameJa: "飛びつかない挨拶",
    cue: "なし（飛びつかない“デフォルト行動”。座って出迎えさせる時は「すわれ」）",
    category: "impulse-control",
    difficulty: "intermediate",
    method: "capture",
    scene:
      "来客・出迎え・散歩中のすれ違いで人に飛びつかない。飛びつきの“代わりに”4本足／座を強化する。",
    handSignal: "なし",
    markPoint:
      "興奮場面で4本足が床についている瞬間、または自発的に座った瞬間。",
    howToTeach: [
      "飼い主がしゃがむ・手を叩くなどで“軽く興奮を煽る”試行を作る。",
      "飛びつかず4本足／座のままでいられたら「Yes」→ご褒美（成功）。",
      "飛びついてきたら、無言で体を背ける／一歩引く（注目を外す）。落ち着いたら「オフ」で前足を下ろさせる＝その試行は失敗としてカウント。",
      "煽り→飛びつかない、を反復。最後に散歩での“すれ違い”で機会を記録して仕上げる。",
    ],
    fadeLure: "出迎えや人との接触自体が報酬。飛びつかない時だけ接触が許される、を徹底する。",
    proofing:
      "静かに近づく→強く煽る→屋外で通行人とすれ違う（実地集計）、と難度を上げる。",
    troubleshooting: [
      {
        problem: "飛びついた時に膝で押す・大声で叱る",
        solution:
          "犬には“構ってもらえた”と映り強化される。注目を完全に外すのが最も効く。",
      },
      {
        problem: "家族で対応がバラバラ（ある人は飛びつきを許す）",
        solution: "全員が同じ基準（4本足の時だけ構う）で一貫させる。",
      },
    ],
    prerequisites: ["sit", "off"],
    distinguishFrom:
      "オフ＝乗った/前足をかけた状態から“降ろす”号令／飛びつかない挨拶＝そもそも飛びつかないデフォルト行動。",
    safety: "子ども・高齢者への飛びつきは転倒事故につながる。早期に最優先で。",
    sources: [`${AKC}how-to-train-a-dog-to-stop-jumping/`],
  },

  // ───────────────────────── 協調ケア ─────────────────────────
  {
    id: "chin-rest",
    name: "Chin rest",
    nameJa: "あご乗せ",
    cue: "あご / チン",
    category: "cooperative-care",
    difficulty: "intermediate",
    method: "shape",
    scene:
      "手のひらや膝にあごをのせて静止する。点眼・耳掃除・診察を“犬が自分の意思で受ける”ための土台。あごを離せば中断できる＝犬に主導権を渡す協調ケアの中心。",
    handSignal: "手のひらを上に向けて差し出す。",
    markPoint: "あごが手のひら（または膝）に触れて、体の力が抜けて静止した瞬間。",
    howToTeach: [
      "手のひらを上に向け、犬の口の下に出す。鼻先を近づけてきたら「Yes」→ご褒美。",
      "あごが手に乗る動きが出たら、乗った瞬間に「Yes」→ご褒美。",
      "乗る動きが安定したら「あご」と言ってから手を出し、乗ったら「Yes」。",
      "乗っていられる時間を1秒→3秒→5秒と少しずつのばす。あごを離したら中断＝無理強いしない。",
    ],
    fadeLure:
      "おやつは手に握らず、乗った“後”に別の手から出す。ケアが終わる＝良いことが起きる、を積み重ねる。",
    proofing:
      "あごを乗せたまま、もう一方の手を耳・目・口元へ少しずつ近づける。嫌がる手前で止め、受け入れられたらご褒美。",
    troubleshooting: [
      {
        problem: "あごを乗せた犬を押さえつけてケアを強行する",
        solution:
          "協調ケアの前提が崩れる。あごを離す＝「やめて」のサイン。中断を必ず保証することで、逆に長く乗せてくれるようになる。",
      },
      {
        problem: "おやつを手に握って誘い続ける",
        solution: "おやつ目当てで鼻が動き、あごが安定しない。報酬は乗った後に別の手から。",
      },
    ],
    prerequisites: ["marker", "touch"],
    distinguishFrom:
      "タッチ＝鼻で手にツン（一瞬）／あご乗せ＝あごを乗せて“静止し続ける”。目的は維持と受け入れ。",
    safety:
      "嫌がるそぶり（顔を背ける・舌なめずり・あくび）が出たら手前で止める。福祉に直結する最重要マナー。",
    tips: "点眼・投薬・耳掃除・歯のチェックがこれ一つで激変する。地味だが投資効果が最も高いスキル。",
    sources: [`${AKC}how-to-train-your-dog-for-cooperative-care/`],
  },
  {
    id: "paw-target",
    name: "Paw target",
    nameJa: "足を出す",
    cue: "あんよ / フット",
    category: "cooperative-care",
    difficulty: "intermediate",
    method: "shape",
    scene:
      "前足・後足を自分から差し出して保持させる。爪切り・足ふき・肉球チェックを嫌がらず受けさせるための協調ケア。お手（trick）と違い“出して保つ”ことが目的。",
    handSignal: "手のひらを下に出して足を受ける形を作る。",
    markPoint: "足を手のひらに乗せ、引っ込めずに静止した瞬間。",
    howToTeach: [
      "手のひらを足の下に添え、犬が足を乗せたら「Yes」→ご褒美。最初はほんの一瞬でよい。",
      "乗せる動きが出たら「あんよ」と言ってから手を出す。",
      "乗せた足を軽く支え、1〜3秒保てたら「Yes」。引っ込めようとしたら無理に握らない。",
      "保持できたら、肉球を1本ずつ触る→爪を1本さわる、と接触を少しずつ増やす。",
    ],
    fadeLure: "足ふきや爪切りが終わる＝ご褒美と解放、を毎回セットにする。",
    proofing:
      "前足→後足→爪やすり/爪切りを“当てるだけ”→1本切る、と段階的に。1回1本でも十分な前進。",
    troubleshooting: [
      {
        problem: "足を掴んで引き寄せる",
        solution: "拘束されると感じて足を引く癖がつく。あくまで犬が“乗せる”のを待つ。",
      },
      {
        problem: "一度に全部の爪を切ろうとする",
        solution: "1日1〜2本でよい。嫌な記憶を作らないことが最優先。",
      },
    ],
    prerequisites: ["marker", "touch"],
    distinguishFrom:
      "お手＝挨拶・芸として足を“ポンと出す”／足を出す（協調ケア）＝出した足を“保持して触らせる”。目的が保持とケア受け入れ。",
    safety:
      "深爪（血管・神経のクイック）に注意。黒い爪は少しずつ。出血時用の止血剤を手元に。",
    sources: [`${AKC}how-to-train-your-dog-for-cooperative-care/`],
  },

  // ───────────────────────── 生活スキル（追加） ─────────────────────────
  {
    id: "give",
    name: "Give",
    nameJa: "ちょうだい",
    cue: "ちょうだい",
    category: "impulse-control",
    difficulty: "beginner",
    method: "trade",
    scene:
      "くわえた物を“手のひらに”渡させる。もってきて（持来）の仕上げや、回収・受け渡しに使う。地面に落とす「出して」と違い、手に乗せるのがゴール。",
    handSignal: "手のひらを物の下に差し出す。",
    markPoint: "口から物が離れ、手のひらに乗った瞬間。",
    howToTeach: [
      "犬がおもちゃをくわえている状態で、手のひらを口の下に出し「ちょうだい」と言う。",
      "もう一方の手でおやつを鼻先に出す→物を放して手に落ちたら「Yes」→ご褒美。",
      "交換が安定したら、おやつのにおいを見せず「ちょうだい」だけで手に渡せるようにする。",
      "渡したら多くの場合すぐ返す（取り上げられない＝安心）を経験させ、出し惜しみを防ぐ。",
    ],
    fadeLure:
      "物を返してもらえる・別の良いことが起きる、という交換の信頼自体が報酬。おやつは安定後に間引く。",
    proofing: "おもちゃ→ボール→価値の高い物（ガム等）と、手放しにくい物へ段階的に。",
    troubleshooting: [
      {
        problem: "無理やり口をこじ開けて取る",
        solution: "物を守る（リソースガード）の原因になる。必ず“交換”で気持ちよく渡させる。",
      },
      {
        problem: "渡すたびに取り上げて返さない",
        solution: "渡す＝損、と学習する。半分以上はすぐ返し、交換を得な取引にする。",
      },
    ],
    prerequisites: ["marker", "drop-it"],
    distinguishFrom:
      "出して（drop-it）＝その場に“放す/落とす”／ちょうだい＝口から“手のひらに渡す”。回収先が地面か手か。",
    safety: "危険物・誤飲しそうな物は、叱らず交換で。慌てて追いかけると遊びだと思って飲み込む。",
    sources: [`${AKC}teach-your-dog-to-drop-it/`],
  },
  {
    id: "fetch",
    name: "Fetch",
    nameJa: "もってきて",
    cue: "もってきて / とってこい",
    category: "life-skill",
    difficulty: "intermediate",
    method: "shape",
    scene:
      "投げた物を追い、くわえて手元へ持ち帰る。運動欲求の発散・雨の日の室内運動・知的刺激に最適。引っ張りっこやちょうだいとセットで完成する。",
    handSignal: "物を投げる動作そのもの。",
    markPoint: "くわえた物を持って“こちらへ向かって戻り始めた”瞬間。",
    howToTeach: [
      "犬が好きなおもちゃを30cm先に転がす→追ってくわえたら「Yes」。",
      "くわえたら名前を呼ぶ／後ずさりして、こちらへ来るのを誘う。来たら「Yes」。",
      "戻ってきたら「ちょうだい」で手に渡させる→すぐまた投げる（戻る＝もう一度遊べる）。",
      "距離を1m→3m→5mとのばす。途中で遊び始めたら、追いかけず一度終了（遊びが止まる）。",
    ],
    fadeLure:
      "“また投げてもらえる”こと自体が最大の報酬。おやつより「即・再投球」をご褒美に使う。",
    proofing: "ボール→ダミー→好みでない物、室内→庭→公園と環境を広げる。",
    troubleshooting: [
      {
        problem: "くわえたまま戻らない／逃げ回る",
        solution:
          "追いかけると“追いかけっこ”が報酬になる。逆に自分が後ずさり・しゃがむと寄ってくる。戻ったら即投げて強化。",
      },
      {
        problem: "物を渡さない",
        solution: "先に「ちょうだい」を仕上げる。2個使い、戻ったら2個目を見せて1個目を放させる。",
      },
    ],
    prerequisites: ["marker", "give"],
    distinguishFrom:
      "おいで＝自分が手元に来る／もってきて＝物をくわえて手元に持ち帰る。運ぶ対象の有無が違う。",
    safety: "硬すぎるボール・棒は歯折れ・口内裂傷の原因。サイズの合った布/ゴム製を。投げ過ぎの関節負担にも注意。",
    sources: [`${AKC}teach-your-dog-to-fetch/`],
  },
  {
    id: "quiet",
    name: "Quiet",
    nameJa: "静かに",
    cue: "静かに / シー",
    category: "life-skill",
    difficulty: "intermediate",
    method: "capture",
    scene:
      "吠えを“号令で止める”。来客・インターホン・要求吠えに。吠え自体を罰するのではなく、静かになった瞬間を強化して「静かに＝良いこと」を教える。",
    handSignal: "口の前に指を1本立てる（または手を下ろす）。",
    markPoint: "吠えが止まり、静かになった“最初の一瞬”。",
    howToTeach: [
      "犬が吠えている時、おやつを鼻先に近づける→においを嗅ぐために吠えが一瞬止まる。",
      "止まった瞬間に「Yes」→ご褒美。最初は1〜2秒の静寂でよい。",
      "止まる動きが出るようになったら、静かになった瞬間に「静かに」と言ってからご褒美。",
      "静かでいる時間を3秒→10秒→30秒と少しずつのばす。",
    ],
    fadeLure: "静か＝良いことが続く、を積む。安定したら毎回でなく時々ご褒美に。",
    proofing:
      "インターホン音・来客・窓の外の人など、吠えの“引き金”ごとに別々に練習する。",
    troubleshooting: [
      {
        problem: "「うるさい！」と大声で叱る",
        solution: "犬は“一緒に吠えてくれた”と興奮しやすい。静かな瞬間を静かな声で強化する方が速い。",
      },
      {
        problem: "要求吠えに根負けして応じる",
        solution: "吠え＝要求が通る、を学習させてしまう。静かになってから応じる。",
      },
      {
        problem: "吠え続けてご褒美のすきがない",
        solution: "引き金の刺激を弱める（窓を隠す/音量を下げる）など、環境を整えてから練習する。",
      },
    ],
    prerequisites: ["marker"],
    distinguishFrom:
      "やめなさい（leave-it）＝対象に近づくのをやめる／静かに＝吠えるのをやめる。止める対象が違う。",
    safety:
      "急な過剰吠え・夜鳴きの増加は痛みや不安のサインのことも。続く場合は獣医・専門家へ。",
    tips: "“静かにを教える前に、わざと吠えさせる「ワン」を教えると、オン/オフで制御しやすい”という上級アプローチもある。",
    sources: [`${AKC}how-to-teach-your-dog-to-be-quiet/`],
  },
  {
    id: "crate-out",
    name: "Out of crate",
    nameJa: "クレートから出る",
    cue: "（解除語）OK / ブレイク",
    category: "life-skill",
    difficulty: "beginner",
    method: "capture",
    scene:
      "ドアを開けても飛び出さず、解除語で落ち着いて出る。ハウス（入る）の対になるスキル。車・玄関・クレートからの“飛び出し事故”を防ぐ。",
    handSignal: "開けた手のひらを犬の前にかざして「待って」、解除で手を引く。",
    markPoint: "ドアが開いても出ず、解除語の後に落ち着いて出た瞬間。",
    howToTeach: [
      "クレートに入った犬の前で、ドアをほんの少し開ける。出ようとしたら無言で閉める。",
      "出ずに待てたら「Yes」→中でご褒美。ドアを開けても出ない＝得、を作る。",
      "少し開ける幅を広げ、全開でも待てるようにする。",
      "待てたら解除語（OK/ブレイク）で出るよう促し、出たらご褒美。出る合図は必ず解除語に統一する。",
    ],
    fadeLure: "出て自由になること自体が報酬。中でのご褒美は安定後に間引く。",
    proofing: "クレート→キャリー→車のドア→玄関、と“開いた出口で待つ”を般化する。",
    troubleshooting: [
      {
        problem: "ドアを開けた勢いで毎回飛び出す",
        solution: "出た瞬間に楽しいことが起きると強化される。出ようとした瞬間に閉め、待てた時だけ開ける。",
      },
    ],
    prerequisites: ["crate", "release"],
    distinguishFrom:
      "ハウス＝中に“入る”号令／クレートから出る＝開いても待ち、解除語で“出る”。入口での自制が目的。",
    safety: "車のドアでの飛び出しは交通事故に直結。車では必ずこの待ちを徹底する。",
    sources: [`${AKC}crate-training-benefits-getting-started/`],
  },
  {
    id: "door-wait",
    name: "Door wait",
    nameJa: "玄関でまて",
    cue: "待って",
    category: "stay-position",
    difficulty: "intermediate",
    method: "capture",
    scene:
      "玄関・門・エレベーターの前で、ドアが開いても勝手に出ない。脱走・交通事故・来客への突進を防ぐ、命を守る生活マナー。",
    handSignal: "開いた手のひらを犬に向けてかざす。",
    markPoint: "ドアノブを動かす／少し開けても、その場にとどまっている状態。",
    howToTeach: [
      "玄関の前で犬を座らせ「待って」。ドアノブに手をかける。動かなければ「Yes」→ご褒美。",
      "ノブを回す→数cm開ける→大きく開ける、と段階を進める。動いたらドアを閉め、一段やさしい所からやり直す。",
      "全開でも待てたら、解除語で外に出るよう促す（出る合図は解除語のみ）。",
      "実際の外出時に毎回行い、“玄関＝勝手に出ない”を生活習慣にする。",
    ],
    fadeLure: "外へ行ける（散歩が始まる）こと自体が報酬。おやつは安定後に間引く。",
    proofing: "自宅玄関→マンション共用扉→車のドア→公園のゲート、と場所を広げる。",
    troubleshooting: [
      {
        problem: "リードを引いて物理的に止めている",
        solution: "“引っ張られたら止まる”ではなく“自分で待つ”を教える。リードはたるませ、待てた時に進ませる。",
      },
      {
        problem: "ドアを開けた瞬間に飛び出す",
        solution: "開ける速度が速すぎる。1cm単位でやり直し、待てる幅まで戻す。",
      },
    ],
    prerequisites: ["wait", "release"],
    distinguishFrom:
      "まて（stay）＝姿勢と位置を保ち続ける／玄関でまて＝“出口で一時停止し解除で進む”動作直前の自制。",
    safety: "ドアダッシュは死亡事故の主因の一つ。子犬のうちから最優先で習慣化する。",
    sources: [`${AKC}how-to-teach-your-dog-to-wait-at-the-door/`],
  },
  {
    id: "car",
    name: "Car",
    nameJa: "車の乗り降り",
    cue: "乗って / 降りて",
    category: "life-skill",
    difficulty: "intermediate",
    method: "lure",
    scene:
      "号令で車に乗り、許可があるまで降りない。通院・旅行・災害避難の必須スキル。車を“怖くない・酔わない場所”にすることも含む。",
    handSignal: "乗車口を手のひらで指し示す／降車は解除語＋手で促す。",
    markPoint: "自分から車内（またはクレート）に乗り込んだ瞬間／解除語の後に落ち着いて降りた瞬間。",
    howToTeach: [
      "エンジンを切った車で、ドアを開けおやつを車内に置く→自分から乗ったら「Yes」→ご褒美。",
      "乗る動きが出たら「乗って」と言ってから誘導する。乗ったら車内で落ち着けるよう数粒あげる。",
      "短い時間エンジンをかける→近所を1分だけ走る、と“乗る＝良いことが起きる”を少しずつ。",
      "降りるときは飛び降りさせず「待って」→解除語で「降りて」。出口での自制を徹底する。",
    ],
    fadeLure: "到着先での散歩・遊びが報酬になる。短時間の“楽しいだけのドライブ”を挟むと車嫌いを防げる。",
    proofing: "停車中→近所一周→長距離、と時間をのばす。車内ではクレート/シートベルト固定で安全確保。",
    troubleshooting: [
      {
        problem: "抱えて無理やり乗せる",
        solution: "車＝嫌な場所になり乗車拒否や車酔いの原因に。自分から乗る成功体験を積む。",
      },
      {
        problem: "乗ると毎回“病院”だけに行く",
        solution: "車＝嫌なこと、と関連づく。楽しい目的地のドライブを混ぜる。",
      },
      {
        problem: "停車前から落ち着かない・よだれ・嘔吐",
        solution: "車酔い・不安のサイン。空腹気味で短時間から。続く場合は獣医に酔い止めを相談。",
      },
    ],
    prerequisites: ["release", "wait"],
    safety:
      "走行中は必ずクレートかドッグシートベルトで固定。窓から顔を出させない。夏の車内放置は短時間でも厳禁。",
    sources: [`${AKC}how-to-train-your-dog-to-love-car-rides/`],
  },
  {
    id: "go-to-bed",
    name: "Go to bed",
    nameJa: "ベッドで待機",
    cue: "ベッド / おうち",
    category: "stay-position",
    difficulty: "intermediate",
    method: "shape",
    scene:
      "離れた自分のベッド／マットへ行き、解除まで伏せて落ち着いて待つ。来客・食事中・宅配対応など“その場から動いてほしくない場面”の決定版。プレイスと落ち着いてを組み合わせた実用形。",
    handSignal: "ベッドの方向を手で指し示す。",
    markPoint: "ベッドに四肢が乗り、伏せて体の力が抜けた瞬間。",
    howToTeach: [
      "ベッドのそばで「ベッド」と言い、乗ったら「Yes」→ベッドの上でご褒美（床ではなく必ずベッド上で）。",
      "乗れたら「ふせ」、伏せたらご褒美。ベッド＝伏せて落ち着く場所、を結びつける。",
      "送り出す距離を1m→3mとのばす。離れた所からでも「ベッド」で行けるようにする。",
      "伏せていられる時間をのばし、最後に解除語で終了。インターホンを鳴らす等の“本番”でも試す。",
    ],
    fadeLure: "ベッドが一番落ち着く・良いことが起きる場所になれば、自分から行くようになる。おやつは間引く。",
    proofing:
      "距離→時間→誘惑（来客・食べ物の匂い・チャイム）の順に難度を上げる。場所を変えてもベッドを持ち込めば再現できる。",
    troubleshooting: [
      {
        problem: "すぐ起き上がって出てくる",
        solution: "時間を欲張りすぎ。伏せ1秒から少しずつ。出てきたら静かにベッドへ戻し、伏せたら強化。",
      },
      {
        problem: "床でご褒美をあげてしまう",
        solution: "価値が床に移る。ご褒美は必ずベッドの上に落とす。",
      },
    ],
    prerequisites: ["place", "settle", "down"],
    distinguishFrom:
      "プレイス＝定位置（マット）へ行って待つ基本形／ベッドで待機＝そこで“伏せて落ち着き続ける”実用形（来客・食事中向け）。",
    sources: [`${AKC}how-to-teach-your-dog-to-go-to-bed/`],
  },
  {
    id: "gentle",
    name: "Gentle",
    nameJa: "そっと",
    cue: "そっと",
    category: "impulse-control",
    difficulty: "beginner",
    method: "shape",
    scene:
      "手からおやつを“歯を当てずに”やさしく受け取る。子ども・高齢者のいる家庭で指を噛まれる事故を防ぐ。給餌やトレーニング全体の安全マナー。",
    handSignal: "おやつを握った拳を差し出す。",
    markPoint: "口を当てる勢いがゆるみ、舌・唇でそっと取ろうとした瞬間。",
    howToTeach: [
      "おやつを拳の中に握り込む。犬が噛んだり舐めたりしても、口を当てている間は開けない。",
      "勢いがゆるんで鼻や舌でそっと触れた瞬間に「そっと」と言い、手を開いて食べさせる。",
      "“ガツガツ＝もらえない／そっと＝もらえる”を反復する。",
      "指でつまんだおやつでも、急がず受け取れたら「Yes」。歯が当たったら手を引っ込めやり直す。",
    ],
    fadeLure: "そっとすればもらえる、という結果自体が報酬。号令なしでも丁寧に受け取るのが目標。",
    proofing: "価値の高いおやつ・興奮しやすい場面でも“そっと”を保てるようにする。",
    troubleshooting: [
      {
        problem: "歯が当たった時に叱る・手を強く引く",
        solution: "勢いよく引くと“動く手＝獲物”で逆に興奮。ただ握って待ち、ゆるんだ瞬間だけ開く。",
      },
    ],
    prerequisites: ["marker"],
    distinguishFrom:
      "やめなさい（leave-it）＝そもそも取らない／そっと＝取ってよいが“やさしく”取る。受け取り方の調整。",
    safety: "子どもが与える前に必ず仕込む。小さな子には“手のひらに平らに乗せて渡す”も併用する。",
    sources: [`${AKC}teaching-the-take-it-and-drop-it-cues/`],
  },

  // ───────────────────────── トリック・芸 ─────────────────────────
  {
    id: "shake",
    name: "Shake",
    nameJa: "お手",
    cue: "お手",
    category: "trick",
    difficulty: "beginner",
    method: "capture",
    scene:
      "差し出した手に前足をのせる定番の芸。教えやすく成功体験を作りやすいので、最初のトリックに最適。人との関係づくり・挨拶にも。",
    handSignal: "手のひらを上に向けて差し出す。",
    markPoint: "前足が持ち上がり、手のひらに乗った瞬間。",
    howToTeach: [
      "犬を座らせ、おやつを握った拳を前足の少し上に出す。",
      "犬が前足で取ろうとして足が上がった瞬間に「Yes」→手を開いてご褒美。",
      "足を上げる動きが安定したら「お手」と言ってから手を出す。",
      "握りおやつを“開いた手のひら”に替え、足が乗ったら別の手からご褒美（ルアーを抜く）。",
    ],
    fadeLure: "握りおやつ→空の手のひら→言葉だけ、と段階的に抜く。",
    proofing: "右手・左手どちらでも、立った状態でも、いろいろな人の手にも乗せられるように。",
    troubleshooting: [
      {
        problem: "足ではなく口で手を取ろうとする",
        solution: "拳を低めにし、足が動くのを待つ。口を当てた時は開けず、足が上がった時だけ開く。",
      },
    ],
    prerequisites: ["marker", "sit"],
    distinguishFrom:
      "お手＝挨拶/芸として足を“ポンと出す”／足を出す（協調ケア）＝出した足を保持して触らせる。",
    sources: [`${AKC}teach-your-dog-to-shake/`],
  },
  {
    id: "shake-other",
    name: "Other paw",
    nameJa: "おかわり",
    cue: "おかわり",
    category: "trick",
    difficulty: "beginner",
    method: "capture",
    scene:
      "お手と反対の前足を出させる。お手とセットの定番。左右の足を区別して出せるようになり、芸の幅と体の協調性が広がる。",
    handSignal: "もう一方の手（お手と逆側）を差し出す。",
    markPoint: "お手と反対側の前足が、差し出した手に乗った瞬間。",
    howToTeach: [
      "「お手」を仕上げてから始める。今度は反対側の手を、反対の前足の前に出す。",
      "犬がうっかりお手側の足を出したら反応せず、反対の足が動いた瞬間だけ「Yes」→ご褒美。",
      "反対の足が出る動きが安定したら「おかわり」と言ってから手を出す。",
      "「お手」「おかわり」を交互に出し、号令と足を正しく対応させる。",
    ],
    fadeLure: "握りおやつ→開いた手→言葉だけ、と段階的に抜く。",
    proofing: "お手と混ぜてランダムに出し、号令を聞き分けて正しい足を出せるようにする。",
    troubleshooting: [
      {
        problem: "いつもお手側の足を出してしまう",
        solution: "出す手の位置を反対足の真ん前にし、お手側の足が出ても無反応。反対足の時だけ強化。",
      },
    ],
    prerequisites: ["shake"],
    distinguishFrom: "お手＝決めた側の前足／おかわり＝反対側の前足。左右の区別が目的。",
    sources: [`${AKC}teach-your-dog-to-shake/`],
  },

  // ───────── 人気トリック（基本の先へ） ─────────
  {
    id: "spin",
    name: "Spin",
    nameJa: "おまわり",
    cue: "クルッ",
    category: "trick",
    difficulty: "beginner",
    method: "lure",
    scene:
      "その場で一周回るトリック。教えやすく達成感があり、ウォームアップや気分転換にも最適。最初のトリックの定番。",
    handSignal: "鼻先におやつ（または空の手）を近づけ、円を描くように回す。",
    markPoint: "体の向きが一周して元に戻った瞬間。",
    howToTeach: [
      "立った犬の鼻先におやつを当て、体に沿って円を描くようにゆっくり誘導する。",
      "つられて一周回りきった瞬間に「Yes」→ご褒美。",
      "スムーズに回れるようになったら「クルッ」と言ってから手を回す。",
      "手の動きを少しずつ小さくし、最後は小さな指の合図や言葉だけで回れるように。",
    ],
    fadeLure: "握りおやつ→空の手で円→小さな指の動き→言葉だけ、と段階的に抜く。",
    proofing: "右回り・左回りを別の号令にすると芸の幅が広がる。立つ場所を変えてもできるように。",
    prerequisites: ["marker"],
    tips: "速く回らせず、ゆっくり。目が回らないよう連続でやりすぎない。",
    troubleshooting: [
      { problem: "おやつだけ取って回らない／途中で止まる", solution: "手をもっとゆっくり・大きく、体に沿わせて動かす。回りやすい向きから始め、半周ずつ強化する。" },
    ],
    sources: [`${AKC}teach-your-dog-to-spin-around/`],
  },
  {
    id: "roll-over",
    name: "Roll over",
    nameJa: "ゴロン",
    cue: "ゴロン",
    category: "trick",
    difficulty: "intermediate",
    method: "lure",
    scene:
      "ふせから横に一回転する人気トリック。お腹を見せられる＝体を触られる信頼にもつながる。",
    handSignal: "ふせの状態で、鼻先のおやつを肩〜背中側へ回す。",
    markPoint: "背中が床について一回転しきった瞬間。",
    howToTeach: [
      "「ふせ」をさせる。鼻先のおやつを、犬の肩越し・背中の方へゆっくり動かす。",
      "顔を追って体が横向きに倒れたら、まず「Yes」→ご褒美（半回転から）。",
      "さらにおやつを回し、コロンと一回転できたら「Yes」→ご褒美。",
      "動きが安定したら「ゴロン」と言ってから誘導し、手を小さくしていく。",
    ],
    fadeLure: "おやつ誘導→空の手で回す動き→言葉だけ、と抜く。",
    prerequisites: ["marker", "down"],
    safety:
      "硬い床は避け、カーペットやマットの上で。胴が長い犬種・シニア・関節や背骨に不安がある犬は無理にさせない。",
    tips: "半回転（横たわり）で詰まる子は、そこを丁寧に強化してから一回転へ。",
    troubleshooting: [
      { problem: "半回転（横たわり）で止まる", solution: "そこを数回多めに強化してから、さらに背中側へおやつを回す。" },
      { problem: "背中を床につけるのを嫌がる", solution: "マットの上でゆっくり。怖がる子は無理せず、別のトリックから自信をつける。" },
    ],
    proofing: "右回り・左回りどちらにも転がれるように。立った姿勢からでも、合図だけでもできるように。",
    sources: [`${AKC}how-to-teach-a-dog-to-roll-over/`],
  },
  {
    id: "high-five",
    name: "High five",
    nameJa: "ハイタッチ",
    cue: "タッチ",
    category: "trick",
    difficulty: "beginner",
    method: "shape",
    scene: "立てた手のひらに前足をパチンと当てる。お手の応用で見栄えがよく、挨拶芸に。",
    handSignal: "手のひらを犬の方へ立てて見せる。",
    markPoint: "前足が、立てた手のひらに当たった瞬間。",
    howToTeach: [
      "「お手」ができる前提で、出す手を少し高く・手のひらを立て気味にする。",
      "足を上げて手に当てようとしたら「Yes」→ご褒美。",
      "手の高さを少しずつ上げ、しっかり当てにくるようにする。",
      "「タッチ」と言ってから手を出す。",
    ],
    fadeLure: "握りおやつ→立てた空の手→言葉＋手のサイン、と抜く。",
    prerequisites: ["marker", "shake"],
    distinguishFrom: "お手＝上向きの手のひらに足を“乗せる”／ハイタッチ＝立てた手のひらに足を“当てる”。",
    troubleshooting: [
      { problem: "お手と混同して手のひらに“乗せて”くる", solution: "手をしっかり立て、当てに来た時だけ強化。お手は上向き・ハイタッチは立てる、と手の形で区別する。" },
      { problem: "強く叩いてくる", solution: "低めの手で、やさしく当たった時だけ「Yes」。強い時は反応しない。" },
    ],
    proofing: "左右の手・立った姿勢・いろいろな人ともできるように。",
    tips: "お手がしっかり固まってから始めると早い。",
    sources: [`${AKC}teach-your-dog-to-give-you-a-high-five/`],
  },
  {
    id: "wave",
    name: "Wave",
    nameJa: "バイバイ",
    cue: "バイバイ",
    category: "trick",
    difficulty: "intermediate",
    method: "shape",
    scene: "前足を宙で振る「さようなら」の芸。お見送りや撮影に映える。",
    handSignal: "犬から少し離れた所で手を振る。",
    markPoint: "前足が宙で上下に動いた瞬間（どこにも触れずに）。",
    howToTeach: [
      "「お手」「ハイタッチ」の手を、犬の足が届かない少し手前に出す。",
      "犬が足を上げて空ぶりした（宙でかいた）瞬間に「Yes」→ご褒美。",
      "宙で足が上下する動きを強化し、「バイバイ」と言ってから手を振る。",
      "距離を少し離してもできるようにする。",
    ],
    fadeLure: "手を出す→手を振るだけ→言葉だけ、と抜く。",
    prerequisites: ["marker", "shake"],
    tips: "お手が染みついていると手に乗せに来る。届かない位置がコツ。",
    troubleshooting: [
      { problem: "手に足を乗せに来てしまう", solution: "足が届かない位置に手を出す。宙で空ぶりした瞬間だけ強化する。" },
      { problem: "振りが小さい", solution: "手を上下に動かして、足の上下を誘う。大きく動いた時に強化。" },
    ],
    proofing: "座っても立っても、少し離れた距離からでも振れるように。",
    sources: [`${AKC}advanced-dog-tricks/`],
  },
  {
    id: "bow",
    name: "Bow",
    nameJa: "ごあいさつ",
    cue: "おじぎ",
    category: "trick",
    difficulty: "intermediate",
    method: "lure",
    scene:
      "前足を伸ばし胸を床に下げ、お尻は上げたままお辞儀する芸（プレイバウの形）。撮影映え＆軽い準備運動にも。",
    handSignal: "立った状態で、鼻先のおやつを前足の間からまっすぐ下へ。",
    markPoint: "肘（前半身）が床に近づき、お尻が上がったままの瞬間。",
    howToTeach: [
      "犬を立たせ、鼻先のおやつを前足の間を通してまっすぐ床へ下げる。",
      "前半身だけが下がり、お尻が上がったままなら「Yes」→ご褒美。",
      "お尻まで落ちて「ふせ」になったらやり直し（おやつを下げすぎない）。",
      "お尻を上げたまま1〜2秒キープできたら「おじぎ」を付ける。",
    ],
    fadeLure: "おやつ誘導→手を下げる動き→言葉だけ、と抜く。",
    prerequisites: ["marker", "stand"],
    safety: "腰を強く反らせない。痛がる素振りがあれば中止。",
    distinguishFrom: "おじぎ＝お尻を上げたまま前半身だけ下げる／ふせ＝全身を伏せる。",
    troubleshooting: [
      { problem: "お尻まで落ちて“ふせ”になる", solution: "おやつを下げすぎない。お腹の下に手や腕をそっと添えてお尻を支え、前半身だけ下げる。" },
    ],
    proofing: "いろいろな場所で、合図だけでお辞儀できるように。",
    tips: "スタンド（立つ）が安定してから始めるとうまくいく。",
    sources: [`${AKC}advanced-dog-tricks/`],
  },
  {
    id: "play-dead",
    name: "Play dead",
    nameJa: "バーン",
    cue: "バーン",
    category: "trick",
    difficulty: "intermediate",
    method: "lure",
    scene: "「バーン！」の合図で横たわって動かない定番の芸。指鉄砲との組み合わせが人気。",
    handSignal: "指鉄砲（ピストルの形）、または手を横に倒すジェスチャー。",
    markPoint: "横向きに寝そべり、静止した瞬間。",
    howToTeach: [
      "「ふせ」から、鼻先のおやつを肩越しに動かして体を横倒しにする（ゴロンの半回転と同じ入り）。",
      "横たわって動きが止まったら「Yes」→ご褒美。",
      "静止していられる時間を少しずつ伸ばす。",
      "「バーン」＋指鉄砲の合図を付け、合図で横たわって静止できるように。",
    ],
    fadeLure: "おやつ誘導→指鉄砲の合図＋言葉、と抜く。",
    prerequisites: ["marker", "down"],
    tips: "ゴロンを先に教えていると、横倒しの動きがスムーズ。",
    troubleshooting: [
      { problem: "すぐ起き上がる", solution: "静止を“1秒”から強化し、徐々に伸ばす。止まった瞬間に「Yes」。" },
    ],
    proofing: "立った状態からでも、合図だけでも。静止時間を少しずつ伸ばす。",
    distinguishFrom: "バーン＝横たわって静止／ゴロン＝回転して起き上がる。",
    sources: [`${AKC}teach-your-dog-to-play-dead/`],
  },
  {
    id: "beg",
    name: "Beg",
    nameJa: "おねだり",
    cue: "ちんちん",
    category: "trick",
    difficulty: "intermediate",
    method: "lure",
    scene: "おすわりから両前足を上げてバランスをとる芸。可愛らしさ抜群の定番。",
    handSignal: "鼻先のおやつを、犬の頭の少し上へ持ち上げる。",
    markPoint: "両前足が床から浮き、上体が起きてバランスを取った瞬間。",
    howToTeach: [
      "「おすわり」をさせ、鼻先のおやつを頭の真上へ少しだけ持ち上げる。",
      "顔を上げて両前足が浮いたら「Yes」→ご褒美（最初はわずかでOK）。",
      "少しずつ上体を起こす時間・高さを伸ばす。",
      "安定したら「ちんちん」を付ける。",
    ],
    fadeLure: "おやつ誘導→手のサイン→言葉、と抜く。",
    prerequisites: ["marker", "sit"],
    safety:
      "⚠️ 腰・背中に負担がかかる芸。短時間・低い姿勢から。子犬・シニア・胴の長い犬種・関節に不安がある犬は避ける。痛がる素振りがあれば中止。",
    troubleshooting: [
      { problem: "すぐ立ち上がる・ジャンプする", solution: "おやつを高く上げすぎない。鼻先の少し上、わずかに浮く所で「Yes」。" },
      { problem: "バランスが崩れる", solution: "壁ぎわや、飼い主の手・腕で軽く支えて安定させてから少しずつ自立へ。" },
    ],
    proofing: "合図だけで、保てる時間を少しずつ伸ばす。",
    tips: "体幹を使う芸。短時間で切り上げ、腰に負担をかけない。",
    sources: [`${AKC}teach-dog-sit-pretty/`],
  },
  {
    id: "speak",
    name: "Speak",
    nameJa: "おはなし",
    cue: "おはなし",
    category: "trick",
    difficulty: "intermediate",
    method: "capture",
    scene:
      "合図で1回吠える芸。「静かに」とセットで教えると、吠えのオン・オフを管理する練習にもなる。",
    handSignal: "口元の前で手をパッと開く、など決めた合図。",
    markPoint: "合図のあとに“1回”吠えた瞬間。",
    howToTeach: [
      "吠えやすい状況（インターホンの真似など）で、吠えた瞬間に「Yes」→ご褒美。",
      "吠える動きが出せるようになったら「おはなし」と言ってから合図する。",
      "“1回だけ”を強化し、連続で吠えても追加では与えない。",
      "必ず「静かに（quiet）」とセットにし、合図で止められるようにする。",
    ],
    prerequisites: ["marker", "quiet"],
    safety:
      "要求吠え・無駄吠えを助長しないよう、必ず「静かに」で止められる状態で教える。吠え癖が強い犬には不向き。",
    distinguishFrom: "おはなし＝合図で吠える／静かに＝吠えを止める。必ず両方セットで。",
    fadeLure: "吠えやすい状況→言葉の合図→小さな手のサイン、と移していく。",
    troubleshooting: [
      { problem: "連続で吠えてしまう", solution: "“1回だけ”を強化。吠え止んで静かになってから次の合図を出す。" },
      { problem: "まったく吠えない", solution: "吠えやすい状況（インターホンの真似など）を作り、最初の小さな声も逃さず強化する。" },
    ],
    proofing: "いろいろな場所で、静かな状況でも合図で1回だけ吠えられるように。",
    sources: [`${AKC}train-your-dog-to-speak/`],
  },
  {
    id: "back-up",
    name: "Back up",
    nameJa: "バック",
    cue: "バック",
    category: "trick",
    difficulty: "intermediate",
    method: "shape",
    scene:
      "合図で後ろ向きに数歩下がる。芸としても、玄関や狭い場所で下がらせる実用としても便利。",
    handSignal: "犬の方へ一歩踏み出す、または手のひらを犬に向けて押し出す動き。",
    markPoint: "後ろ足が後方へ動き、まっすぐ下がった瞬間。",
    howToTeach: [
      "壁ぎわなど“まっすぐ下がるしかない”狭い通路で、犬と向かい合う。",
      "犬に向かって一歩踏み出すと、犬が一歩下がる→その瞬間「Yes」→ご褒美。",
      "下がる歩数を少しずつ伸ばし、「バック」と言ってから合図する。",
      "広い場所でもまっすぐ下がれるようにする。",
    ],
    fadeLure: "踏み込む動き→小さな手の合図→言葉だけ、と抜く。",
    prerequisites: ["marker"],
    tips: "斜めに逃げる子は、最初は壁と家具の“細い通路”を使うと真っすぐ下がる。",
    troubleshooting: [
      { problem: "斜めや横にそれる", solution: "壁と家具で作った“細い通路”で練習し、まっすぐ下がるしかない状況にする。" },
      { problem: "下がらず座ってしまう", solution: "踏み込みを小さくし、後ろ足が一歩でも後ろに動いた瞬間だけ「Yes」。" },
    ],
    proofing: "広い場所でも、合図だけで、歩数を伸ばして下がれるように。",
    sources: ["https://www.akc.org/canine-partners/teach-your-dog-to-back-up/"],
  },
  {
    id: "find-it",
    name: "Find it",
    nameJa: "さがせ",
    cue: "さがせ",
    category: "trick",
    difficulty: "beginner",
    method: "capture",
    scene:
      "嗅覚で隠したおやつや物を探す“ノーズワーク”。頭と鼻をたっぷり使うので、退屈・ストレス・雨の日の発散に最適。",
    handSignal: "「さがせ」と言って、隠した方向や床を手で示す。",
    markPoint: "鼻を使って探し、目標を見つけた瞬間。",
    howToTeach: [
      "犬の目の前の床におやつを置き、「さがせ」と言って食べさせる。",
      "次は犬が見ている前で少し離れた所に置き、「さがせ」で探させる。",
      "布やコップの下など“見えない所”に隠し、鼻で探し当てさせる。",
      "部屋に複数隠す・別の部屋に隠すなど、難易度を上げる。",
    ],
    prerequisites: ["marker"],
    tips: "嗅覚運動は短時間でもよく疲れる。クレートや家具を噛む退屈対策にも効果的。",
    fadeLure: "見せて隠す→見せずに隠す→隠す数や難度を上げる、と段階的に難しくする。",
    troubleshooting: [
      { problem: "すぐ諦める", solution: "簡単な隠し場所（目の前・布の半分だけ）に戻し、成功させてから難しくする。" },
      { problem: "鼻でなく目で探している", solution: "完全に見えない隠し方にして、鼻を使わざるを得ない状況を作る。" },
    ],
    proofing: "いろいろな部屋・屋外・探す物の種類を増やして般化する。",
    sources: [`${AKC}advanced-dog-tricks/`],
  },

  // ───────── 協調ケア（お手入れ・通院を楽に） ─────────
  {
    id: "side-lying",
    name: "Lie on side",
    nameJa: "横になる",
    cue: "ヨコ",
    category: "cooperative-care",
    difficulty: "intermediate",
    method: "lure",
    scene:
      "合図で横向きに寝そべり、体を預けて静止する。診察・肛門腺・お腹や後ろ足のお手入れ・心音チェックが格段に楽になる、協調ケアの主役級スキル。",
    handSignal: "「ふせ」から、鼻先のおやつを肩越し・床方向へ動かして体を横へ倒す。",
    markPoint: "横向きに寝て、体の力が抜けた瞬間。",
    howToTeach: [
      "「ふせ」をさせ、鼻先のおやつを肩越しに動かして体を横向きに倒す（ゴロンの半回転と同じ入り）。",
      "横向きに寝て肩や腰が床についたら「Yes」→ご褒美。",
      "体の力がふっと抜けたら、さらに強化。静かに寝ていられる時間を伸ばす。",
      "安定したら「ヨコ」を付け、横になったまま足・お腹・耳をそっと触る練習を少しずつ足す。",
    ],
    fadeLure: "おやつ誘導→手のサイン→言葉だけ、と抜く。",
    proofing: "左右どちらの向きでも、いろいろな場所・トリミング台の上でも、長く預けられるように。",
    troubleshooting: [
      { problem: "すぐ起き上がる", solution: "横になった“瞬間”を1秒から強化し、徐々に時間を伸ばす。落ち着けるマットの上で。" },
      { problem: "お腹を見せるのを怖がる", solution: "無理に仰向けにしない。横向きでOK。なでて安心させながらゆっくり。" },
    ],
    prerequisites: ["marker", "down", "settle"],
    safety:
      "シニア・妊娠中・痛みや不安がある犬は無理に倒さない。嫌がるサイン（こわばり・顔をそむける）が出たら中止し、やさしい段階へ戻す。",
    tips: "肛門腺やお腹のお手入れの前にこれができると、暴れず安全に行える。",
    sources: [`${AKC}dog-trick-training-vet-visits/`],
  },
  {
    id: "station",
    name: "Station",
    nameJa: "台に乗る",
    cue: "のって",
    category: "cooperative-care",
    difficulty: "intermediate",
    method: "shape",
    scene:
      "低い台やマットに自分から乗り、その上で待つ。体重測定・トリミング台・足ふきの定位置・順番待ちに便利。動いてほしくない場面の“安心ポジション”。",
    handSignal: "台を手で示す、または台の上におやつを示す。",
    markPoint: "四肢が台に乗り、その上で落ち着いた瞬間。",
    howToTeach: [
      "低くて安定した台（バスマット・踏み台・体重計など）を用意し、近づいたり前足が乗ったら「Yes」→ご褒美。",
      "四肢が乗ったらたっぷり強化。台の上が“良い場所”になる。",
      "乗ったまま数秒待てたら「Yes」。待てる時間を少しずつ伸ばす。",
      "「のって」を付け、合図で乗って待てるように。乗ったまま体を触る・持ち上げる練習も足す。",
    ],
    fadeLure: "おやつを台に置く→指で示す→言葉だけ、と抜く。",
    proofing: "いろいろな台（体重計・トリミング台・濡れマット）で、合図だけで乗って待てるように。",
    troubleshooting: [
      { problem: "すぐ降りてしまう", solution: "乗っている間こまめに「Yes」→ご褒美。降りる前に強化する間隔を短くする。" },
      { problem: "台を怖がる", solution: "低い・安定した・滑らない台から。床に置いたマットなど“高さゼロ”で慣らす。" },
    ],
    prerequisites: ["marker", "touch"],
    safety: "ぐらつかない・滑らない台を使う。高い台は落下に注意し、最初は低い物で。",
    tips: "体重計に乗る練習にしておくと、毎月の体重チェックが楽になる。",
    sources: [`${AKC}teaching-targeting-to-your-dog/`],
  },
  {
    id: "muzzle",
    name: "Muzzle",
    nameJa: "口輪に慣らす",
    cue: "くち",
    category: "cooperative-care",
    difficulty: "advanced",
    method: "shape",
    scene:
      "口輪（マズル）に自分から鼻を入れ、装着を受け入れる。通院・処置・災害時・他犬との安全確保に。正しく慣らせば“嫌な道具”でなく“良いことの合図”になる。",
    handSignal: "口輪を差し出す（中におやつを塗る／入れる）。",
    markPoint: "自分から鼻を口輪に入れた瞬間。",
    howToTeach: [
      "バスケット型口輪（呼吸・パンティング・飲水ができる物）を選び、中におやつ（ペースト等）を塗る。",
      "口輪を差し出し、犬が自分から鼻を入れて舐めたら「Yes」→ご褒美。決して押し付けない。",
      "鼻を入れていられる時間を少しずつ伸ばす。次にストラップを“留めずに”首の後ろへ回す→留める、と段階を踏む。",
      "短時間の装着→おやつ→外す、をくり返し、口輪＝良いことの合図にする。装着時間を徐々に伸ばす。",
    ],
    fadeLure: "口輪の中のおやつ→入れた後にご褒美→装着できたらご褒美、と移す。",
    proofing: "いろいろな場所・短い散歩・診察台の上でも、自分から鼻を入れて装着を受け入れられるように。",
    troubleshooting: [
      { problem: "口輪を嫌がって鼻を入れない", solution: "前の段階へ戻す。見せる→近づける→おやつで一瞬触れる、と細かく刻む。絶対に押し付けない。" },
      { problem: "装着するとパニックになる", solution: "装着時間が長すぎる。1秒から。留め具まで進むのを焦らない。" },
    ],
    prerequisites: ["marker", "touch"],
    safety:
      "⚠️ 呼吸・パンティング・水が飲めるバスケット型を選ぶ（布製の筒型は長時間×・熱中症の危険）。口輪は咬傷予防の“管理道具”であり、問題行動そのものの解決にはならない。攻撃性・強い恐怖がある場合は専門家と併用を。",
    tips: "予定がなくても平時にゆっくり慣らしておくと、いざという時に犬の負担が少ない。",
    sources: [`${AKC}dog-muzzles-when-why-how-to-use/`],
  },
];
