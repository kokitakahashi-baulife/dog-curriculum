// しつけ辞典（用語）。犬のしつけ・行動学の用語を、飼い主向けの言葉で1語ずつ解説する。
// 方針: 陽性強化・LIMA。罰や支配性理論は「仕組みの説明」と「勧めない理由」を出典つきで。
// 出典はすべて取得して中身を確認したページ。

export type GlossaryGroup = "learning" | "technique" | "reading" | "philosophy";

export interface GlossaryTerm {
  id: string;
  term: string; // 見出し語
  reading: string; // よみ（ひらがな）
  en: string; // 英語
  group: GlossaryGroup;
  short: string; // 1文の定義
  body: string[]; // 本文の段落
  example: string; // 具体例
  mistakes: string[]; // よくある間違い
  related: string[]; // 関連する用語id
  relatedCommands: string[]; // commands.ts の id
  sources: { label: string; url: string }[];
}

export const glossaryGroupLabels: Record<GlossaryGroup, string> = {
  learning: "学習の仕組み",
  technique: "教え方の技法",
  reading: "犬の状態を読む",
  philosophy: "考え方",
};

export const glossary: GlossaryTerm[] = [
  {
    "id": "positive-reinforcement",
    "term": "陽性強化（正の強化）",
    "reading": "ようせいきょうか",
    "en": "Positive reinforcement",
    "group": "learning",
    "short": "行動の直後に犬がうれしいものを「足す」ことで、その行動を増やす学習の仕組みです。",
    "body": [
      "陽性強化は、犬がある行動をした直後に、フードや遊び、声かけなど犬にとってうれしいものを与えることで、その行動が起きやすくなる仕組みです。ここでいう「陽性（正）」は「良い」ではなく「足す」という意味です。オペラント条件づけの4つの組み合わせのうちの1つにあたります。",
      "大事なのはタイミングと一貫性です。ごほうびが遅れると、犬はそのあいだにした別の行動（立ち上がる、吠えるなど）と結びつけてしまいます。また、ごほうびを渡しただけで陽性強化になるわけではなく、その行動が実際に増えてはじめて「強化された」といえます。",
      "家では、まず自分の犬が何をもらうと喜ぶかを確かめましょう。フードのほか、遊びや散歩、なでられることが好きな犬もいますが、気分によってはなでられるのを嫌がることもあります。AVSAB（米国獣医動物行動学会）は、しつけにも問題行動の改善にも、ごほうびを使う方法だけを用いるよう勧めています。"
    ],
    "example": "オスワリを教える場面で、お尻が床に着いた瞬間に「イエス」と言い、すぐに小さなおやつを渡します。短い練習でこれを繰り返すと、犬は自分から座ることが増え、座るといいことがあると覚えていきます。",
    "mistakes": [
      "吠えや飛びつきを落ち着かせようとして声をかけたりなでたりし、困った行動のほうを強化してしまう",
      "ごほうびを渡すのが遅く、犬が立ち上がったあとに渡してしまう",
      "行動の前におやつを見せて取引にしてしまい、おやつが見えないと動かなくなる"
    ],
    "related": [
      "operant-conditioning",
      "marker-training",
      "reinforcement-schedule",
      "negative-punishment"
    ],
    "relatedCommands": [
      "marker",
      "sit"
    ],
    "sources": [
      {
        "label": "VCA Animal Hospitals「強化とごほうびを使ったトレーニング」",
        "url": "https://vcahospitals.com/know-your-pet/using-reinforcement-and-rewards-to-train-your-pet"
      },
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      },
      {
        "label": "AVSAB（米国獣医動物行動学会）「人道的な犬のトレーニングに関するポジションステートメント」",
        "url": "https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf"
      }
    ]
  },
  {
    "id": "negative-reinforcement",
    "term": "負の強化",
    "reading": "ふのきょうか",
    "en": "Negative reinforcement",
    "group": "learning",
    "short": "犬にとって嫌なものを「取り除く」ことで、その直前の行動を増やす仕組みです。",
    "body": [
      "負の強化は、犬がある行動をしたときに、それまで続いていた不快なもの（首への圧迫、怖い相手など）がなくなり、その行動が増える仕組みです。「負」は「悪い」ではなく「取り除く」という意味です。罰と混同されがちですが、罰は行動を減らし、強化は行動を増やすという点で正反対です。",
      "よく挙げられる例は、首輪やヘッドカラーに圧をかけ続け、犬が求められた動きをしたら緩めるやり方です。行動が増えるのは「嫌なことが終わったから」なので、先に不快なものを与えることが前提になっています。また、犬が唸ったり吠えたりした結果、相手の犬や配達員が去ると、その威嚇が負の強化で強まることもあります。",
      "家庭のトレーニングで、わざわざ使う必要のある方法ではありません。AKCは、陽性強化を中心とするトレーナーは不快なものを使う正の罰や負の強化を使わないと説明しています。唸りや吠えなどの威嚇が続く場合は、獣医行動診療医や認定トレーナー（IAABC・CCPDT-KA）に相談しましょう。"
    ],
    "example": "散歩中に知らない犬が近づくと吠える犬は、吠えたあとに相手が通り過ぎていくことで「吠えれば怖いものが去る」と学んでいることがあります。このしくみに気づいたら、吠えずにいられる距離を保ち、落ち着いて相手を見られたらごほうびを出します。すると、吠える以外の行動をとる機会が少しずつ増えていきます。",
    "mistakes": [
      "「負」を「悪いこと」の意味だと思い、正の罰と取り違える",
      "リードや首輪に圧をかけ、従ったら緩める方法を、罰ではないから穏やかな方法だと思い込む",
      "吠えるたびに相手が去る経験が重なり、吠えが強まっていることに気づかない"
    ],
    "related": [
      "positive-reinforcement",
      "positive-punishment",
      "operant-conditioning",
      "lima"
    ],
    "relatedCommands": [],
    "sources": [
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      },
      {
        "label": "AKC（アメリカンケネルクラブ）「陽性強化トレーニングとオペラント条件づけ」",
        "url": "https://www.akc.org/expert-advice/training/operant-conditioning-positive-reinforcement-dog-training/"
      }
    ]
  },
  {
    "id": "positive-punishment",
    "term": "正の罰",
    "reading": "せいのばつ",
    "en": "Positive punishment",
    "group": "learning",
    "short": "犬が嫌がるものを「足す」ことで、その直前の行動を減らす仕組みです。",
    "body": [
      "正の罰は、犬がある行動をした直後に、大きな音、叩く、リードを強く引くといった不快なものを与え、その行動を減らす仕組みです。「正」は「足す」という意味で、日常でいう「叱る」「罰を与える」に近いものです。行動が実際に減ったときに、罰として働いたといえます。",
      "正の罰が効くには、行動が始まってすぐに、毎回、適切な強さで与える必要があり、正しく使える人はほとんどいないとされています。さらに、罰は困った行動を止めるだけで、代わりに何をすればよいかは教えられません。飼い主がいるときだけ行動が止まり、いないときには続くことも起こります。",
      "AVSAB（米国獣医動物行動学会）は、痛みや恐怖を伴う方法は不安や恐怖による攻撃、回避、学習のしにくさなどの副作用につながるとして、しつけにも問題行動の治療にも使わないよう勧めています。チョークチェーンや電気ショックカラー、大声、犬を仰向けに押さえつける「アルファロール」も避けるべき方法に挙げられています。家では、してほしい行動を教え、困った行動が起きにくい環境を整えることから始めましょう。"
    ],
    "example": "他の犬に吠えるたびにリードを強く引くと、その場は静かになっても、他の犬を見ること自体が嫌な経験と結びつき、怖さが増すことがあります。代わりに、吠えずにいられる距離で他の犬を見られたらごほうびを出すと、他の犬を落ち着いて見ていられる練習になります。",
    "mistakes": [
      "時間がたってから叱り、犬は何を叱られたのかわからない",
      "叱っても行動が減らないのに、罰をだんだん強くしていく",
      "止めることばかり考え、代わりにしてほしい行動を教えていない"
    ],
    "related": [
      "negative-punishment",
      "positive-reinforcement",
      "operant-conditioning",
      "lima",
      "dominance-myth"
    ],
    "relatedCommands": [],
    "sources": [
      {
        "label": "AVSAB（米国獣医動物行動学会）「人道的な犬のトレーニングに関するポジションステートメント」",
        "url": "https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf"
      },
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      },
      {
        "label": "AKC（アメリカンケネルクラブ）「陽性強化トレーニングとオペラント条件づけ」",
        "url": "https://www.akc.org/expert-advice/training/operant-conditioning-positive-reinforcement-dog-training/"
      }
    ]
  },
  {
    "id": "negative-punishment",
    "term": "負の罰",
    "reading": "ふのばつ",
    "en": "Negative punishment",
    "group": "learning",
    "short": "犬が好きなものを「取り除く」ことで、その直前の行動を減らす仕組みです。",
    "body": [
      "負の罰は、犬が困った行動をしたときに、遊びや注目など犬が欲しいものを取り除き、その行動を減らす仕組みです。「負」は「取り除く」という意味です。痛みや恐怖を与えないため、陽性強化を中心とするトレーナーも、陽性強化の次の手段として使います。",
      "たとえば遊んでいる最中に強くかんだら、すぐに遊びを止めます。大切なのは、どの行動で楽しいことが終わったのかが犬にわかることです。その関係がわからないと、欲しいものがもらえない欲求不満から、かえって行動が激しくなることがあります。",
      "負の罰だけに頼らず、してほしい行動（おもちゃをかむ、4本の足を床につけておくなど）をごほうびで増やすことと組み合わせるのが基本です。取り除いたあと、犬が望ましい行動をしたらすぐに楽しいことを再開すると、何をすればよいかが伝わりやすくなります。"
    ],
    "example": "あいさつで飛びつく犬に対し、飛びついた瞬間に声かけやなでるのを止めて横を向き、4本の足が床に着いたら声をかけてなでます。飛びつくと注目が消え、立っていると注目がもらえることがわかると、足を床につけたまま待つことが増えていきます。",
    "mistakes": [
      "時間がたってから取り上げ、何が原因かが犬にわからない",
      "取り上げるだけで、代わりにどうすればよいかを教えない",
      "家族によって対応がばらばらで、ときどき飛びつきに応じてしまう"
    ],
    "related": [
      "positive-reinforcement",
      "positive-punishment",
      "extinction",
      "operant-conditioning"
    ],
    "relatedCommands": [
      "polite-greeting"
    ],
    "sources": [
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      },
      {
        "label": "VCA Animal Hospitals「強化とごほうびを使ったトレーニング」",
        "url": "https://vcahospitals.com/know-your-pet/using-reinforcement-and-rewards-to-train-your-pet"
      },
      {
        "label": "AKC（アメリカンケネルクラブ）「陽性強化トレーニングとオペラント条件づけ」",
        "url": "https://www.akc.org/expert-advice/training/operant-conditioning-positive-reinforcement-dog-training/"
      }
    ]
  },
  {
    "id": "extinction",
    "term": "消去",
    "reading": "しょうきょ",
    "en": "Extinction",
    "group": "learning",
    "short": "これまで強化されていた行動が、ごほうびがなくなることで徐々に減っていく現象です。",
    "body": [
      "消去は、ある行動で得られていたごほうびがなくなると、その行動がだんだん起きなくなることです。たとえば食卓でおねだりする犬に何もあげないようにすると、やがておねだりしなくなります。オペラント条件づけの基本的な仕組みのひとつです。",
      "消去には時間がかかることがあります。元のごほうびの価値が高いほど、長く続いてきた行動ほど、そして「ときどきはもらえた」経験があるほど、行動はなくなりにくくなります。また、いったん消えた行動がしばらくしてふと戻ってくることがあり、これを自発的回復と呼びます。",
      "家で使うときは、まずその行動を支えているごほうび（注目や食べ物など）を見きわめ、家族全員で与えないようにそろえます。同時に、代わりにしてほしい行動をごほうびで教えると、犬が次に何をすればよいか迷わずにすみます。恐怖や不安から出ている行動は、無視するだけでは解決しにくいので別の方法が必要です。"
    ],
    "example": "食事の準備中に吠えて催促する犬には、吠えているあいだは器を置かず、静かになった瞬間に置くようにします。はじめは吠えが強まることもありますが、吠えても食事は早く出てこないと学ぶと、静かに待つことが増えていきます。",
    "mistakes": [
      "ときどき根負けして応じてしまい、かえって行動を長引かせる",
      "無視するだけで、代わりの行動を教えない",
      "恐怖や不安が原因の吠えまで、無視で解決しようとする"
    ],
    "related": [
      "extinction-burst",
      "reinforcement-schedule",
      "negative-punishment",
      "incompatible-behavior"
    ],
    "relatedCommands": [
      "quiet"
    ],
    "sources": [
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）飼い主向け「犬の行動修正」",
        "url": "https://www.merckvetmanual.com/dog-owners/behavior-of-dogs/behavior-modification-in-dogs"
      },
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      },
      {
        "label": "AKC（アメリカンケネルクラブ）「犬のトレーニング用語集」",
        "url": "https://www.akc.org/expert-advice/training/dog-training-terms-lingo/"
      }
    ]
  },
  {
    "id": "extinction-burst",
    "term": "消去バースト",
    "reading": "しょうきょばーすと",
    "en": "Extinction burst",
    "group": "learning",
    "short": "消去を始めた直後に、なくしたい行動が一時的に強く・多くなる現象です。",
    "body": [
      "消去バーストは、それまでごほうびがもらえていた行動に応じるのをやめたとき、その行動がいったん激しくなったり回数が増えたりすることです。「よくなる前に一度悪くなる」と言い表されます。以前はうまくいった行動なので、犬はもっと強く求めれば手に入るかのように振る舞います。",
      "反応しない横断歩道のボタンを何度も押してしまう人の行動と似ています。ここで根負けして応じると、犬は「もっと強くやれば手に入る」と学び、以前より激しい行動が身についてしまいます。消去を成功させるには、バーストが出ても応じずに乗り切ることが大切です。",
      "家では、始める前に「一時的に悪くなることがある」と家族で共有し、途中で応じないと決めておきます。代わりにしてほしい行動も教えておくと、犬が行き場をなくさずにすみます。攻撃的な行動や強い恐怖が関わる場合は、消去に頼らず、獣医行動診療医や認定トレーナー（IAABC・CCPDT-KA）に相談しましょう。"
    ],
    "example": "テーブルの下から前足をかけておねだりする犬に、家族全員で応じないようにします。始めてしばらくは前足をかける回数や鳴き声が増えることがありますが、応じずにマットで待てたときにごほうびを出すと、おねだりは次第に減り、マットで待つことが増えていきます。",
    "mistakes": [
      "行動が悪化したのを見て逆効果だと判断し、途中でやめてしまう",
      "激しくなったところで根負けして応じ、より強い行動を教えてしまう",
      "代わりの行動を教えず、犬を行き場のない状態にしてしまう"
    ],
    "related": [
      "extinction",
      "reinforcement-schedule",
      "negative-punishment"
    ],
    "relatedCommands": [
      "place"
    ],
    "sources": [
      {
        "label": "Whole Dog Journal「無視するだけでは危うい（Ignore at Your Peril）」",
        "url": "https://www.whole-dog-journal.com/behavior/ignore-at-your-peril/"
      },
      {
        "label": "AKC（アメリカンケネルクラブ）「犬のトレーニング用語集」",
        "url": "https://www.akc.org/expert-advice/training/dog-training-terms-lingo/"
      },
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）飼い主向け「犬の行動修正」",
        "url": "https://www.merckvetmanual.com/dog-owners/behavior-of-dogs/behavior-modification-in-dogs"
      }
    ]
  },
  {
    "id": "classical-conditioning",
    "term": "古典的条件づけ",
    "reading": "こてんてきじょうけんづけ",
    "en": "Classical conditioning",
    "group": "learning",
    "short": "2つの出来事がくり返し一緒に起きることで、片方からもう片方を予測するようになる学習です。",
    "body": [
      "古典的条件づけは、もともと意味のなかった刺激（音など）が、食べ物のような刺激とくり返しセットで起きることで、その刺激だけで同じ反応が出るようになる学習です。ベルの音でよだれを出すようになったパブロフの犬の実験がよく知られています。フードの袋の音でよだれが出たり、チャイムで興奮したりするのもこの例です。",
      "この学習は犬の意思とは関係なく起きるため、よい連想だけでなく嫌な連想もできてしまいます。チャイムの音に喜ぶか怖がるかは、その後に来客とのどんな経験が続いてきたかで変わります。罰を使われた犬が、罰を与えた人やトレーニングそのものを嫌なものと結びつけることもあります。",
      "家では、犬が苦手なものを大好きなおやつと組み合わせ、よい連想を作るときに役立ちます。これは拮抗条件づけ（カウンターコンディショニング）と呼ばれ、苦手なものを弱い形から少しずつ見せる脱感作と組み合わせるのが基本です。クリッカーの音に「ごほうびが来る」という意味をもたせるのも、古典的条件づけの応用です。"
    ],
    "example": "掃除機を見ると逃げる犬には、スイッチを入れない掃除機を離れた場所に置き、犬が掃除機を見たらおやつを渡す、という短い練習を繰り返します。掃除機が見えるとおやつを期待して飼い主の方を見るようになったら、少しずつ距離を縮めていきます。",
    "mistakes": [
      "苦手なものを一度に強く見せ、かえって怖い連想を強めてしまう",
      "叱ったり罰を与えたりすると、その人や場所まで嫌なものとして結びつくことに気づかない"
    ],
    "related": [
      "operant-conditioning",
      "counterconditioning",
      "desensitization",
      "marker-training"
    ],
    "relatedCommands": [
      "marker"
    ],
    "sources": [
      {
        "label": "AKC（アメリカンケネルクラブ）「陽性強化トレーニングとオペラント条件づけ」",
        "url": "https://www.akc.org/expert-advice/training/operant-conditioning-positive-reinforcement-dog-training/"
      },
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）飼い主向け「犬の行動修正」",
        "url": "https://www.merckvetmanual.com/dog-owners/behavior-of-dogs/behavior-modification-in-dogs"
      },
      {
        "label": "VCA Animal Hospitals「脱感作と拮抗条件づけ入門」",
        "url": "https://vcahospitals.com/know-your-pet/introduction-to-desensitization-and-counterconditioning"
      }
    ]
  },
  {
    "id": "operant-conditioning",
    "term": "オペラント条件づけ",
    "reading": "おぺらんとじょうけんづけ",
    "en": "Operant conditioning",
    "group": "learning",
    "short": "行動とその結果の結びつきを学び、結果によって行動が増えたり減ったりする学習です。",
    "body": [
      "オペラント条件づけは、犬が「この行動をすると、こうなる」という行動と結果の関係を学ぶことです。うれしい結果が続く行動は増え、嫌な結果が続く行動は減ります。試行錯誤による学習とも呼ばれ、しつけの多くはこの仕組みを使っています。",
      "結果は「足す（正）か、取り除く（負）か」と「行動が増える（強化）か、減る（罰）か」の組み合わせで、陽性強化・負の強化・正の罰・負の罰の4つに分けられます。ここでの正・負は良い・悪いではなく、足し算と引き算の意味です。ある結果が強化か罰かは、その後に行動が増えたか減ったかで決まります。",
      "4つとも犬の学習に働きますが、同じように使ってよいわけではありません。AKCは、陽性強化を中心に、必要に応じて負の罰を使い、不快なものを使う正の罰や負の強化は避けるよう説明しています。家では、望ましい行動に気づいたらごほうびを出すことを積み重ねるのが基本です。"
    ],
    "example": "散歩の前、玄関で座るとドアが開くようにします。座ったらドアを開け、立ち上がったら閉じることを繰り返すと、犬は「座るとドアが開く」と学び、玄関で自分から座って待つようになっていきます。",
    "mistakes": [
      "「正＝良い」「負＝悪い」と取り違える",
      "意図せず、困った行動に注目などのごほうびを与えて増やしてしまう",
      "罰で止めることばかり考え、してほしい行動を増やす方法を考えない"
    ],
    "related": [
      "positive-reinforcement",
      "negative-reinforcement",
      "positive-punishment",
      "negative-punishment",
      "classical-conditioning"
    ],
    "relatedCommands": [
      "door-wait",
      "sit"
    ],
    "sources": [
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      },
      {
        "label": "AKC（アメリカンケネルクラブ）「陽性強化トレーニングとオペラント条件づけ」",
        "url": "https://www.akc.org/expert-advice/training/operant-conditioning-positive-reinforcement-dog-training/"
      }
    ]
  },
  {
    "id": "reinforcement-schedule",
    "term": "強化スケジュール（連続強化・間欠強化）",
    "reading": "きょうかすけじゅーる",
    "en": "Schedules of reinforcement",
    "group": "learning",
    "short": "行動に対して、どのくらいの頻度・タイミングでごほうびを出すかの決め方です。",
    "body": [
      "強化スケジュールは、犬の行動に対してごほうびを「いつ、どのくらいの割合で」出すかのルールです。毎回ごほうびを出す連続強化と、ときどき出す間欠強化（部分強化）に大きく分けられます。間欠強化はさらに、回数で決めるか時間で決めるか、決まっているか変動するかによって、固定比率・変動比率・固定間隔・変動間隔の4つに分かれます。",
      "連続強化は行動とごほうびの関係がわかりやすいので、新しいことを教えるときに向いています。ただし、毎回もらえていたごほうびが止まると、行動もやみやすくなります。間欠強化は覚えるまでに時間がかかる一方、身についた行動が消えにくく、いつもらえるか予測できない変動型では反応が安定しやすいとされています。",
      "家では、新しい合図を教えるあいだは毎回ごほうびを出し、犬が安定してできるようになったら少しずつ間欠強化に切り替えます。フードのほかに遊びやほめ言葉を混ぜると、変化をつけやすくなります。なお、間欠強化は困った行動にも働くため、ときどき応じてしまうおねだりほどなくなりにくくなります。"
    ],
    "example": "オスワリを覚えたばかりの犬には、はじめは毎回おやつを渡します。確実に座れるようになったら、続けて渡す日もあれば数回おいて渡すこともある、と不規則にし、おやつのない回はほめ言葉で応えます。犬はいつもらえるかわからないため、毎回しっかり座るようになっていきます。",
    "mistakes": [
      "覚えきる前にごほうびを減らし、犬を混乱させる",
      "不規則のつもりが毎回同じ回数ごとになり、犬に読まれてしまう",
      "困った行動にときどき応じてしまい、かえって消えにくくする"
    ],
    "related": [
      "positive-reinforcement",
      "extinction",
      "extinction-burst",
      "luring"
    ],
    "relatedCommands": [
      "sit"
    ],
    "sources": [
      {
        "label": "AKC（アメリカンケネルクラブ）「強化スケジュール：いつごほうびを出すか」",
        "url": "https://www.akc.org/expert-advice/training/schedules-of-reinforcement-for-dogs/"
      },
      {
        "label": "VCA Animal Hospitals「強化とごほうびを使ったトレーニング」",
        "url": "https://vcahospitals.com/know-your-pet/using-reinforcement-and-rewards-to-train-your-pet"
      },
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      }
    ]
  },
  {
    "id": "marker-training",
    "term": "マーカートレーニング（クリッカートレーニング）",
    "reading": "まーかーとれーにんぐ",
    "en": "Marker training (clicker training)",
    "group": "technique",
    "short": "正解の瞬間を音や短い言葉で知らせ、そのあとにごほうびを渡す教え方です。",
    "body": [
      "マーカートレーニングは、犬が望ましい行動をしたその瞬間を、クリッカーの音や「イエス」などの短い言葉（マーカー）で知らせ、そのあとでごほうびを渡す方法です。クリッカーを使う場合はクリッカートレーニングと呼ばれます。陽性強化に、正解の瞬間を伝える合図を加えたものといえます。",
      "マーカーは、はじめは何の意味もない音です。音のすぐあとにごほうびを渡すことを繰り返すと、音が「ごほうびが来る」合図になります（古典的条件づけ）。こうして意味をもった音は二次強化子（条件性強化子）と呼ばれ、写真のシャッターを切るように行動の一瞬を正確に伝えられるうえ、犬が離れた場所にいても使えます。",
      "家では、まず音（または言葉）を出してすぐにおやつを渡すことを繰り返し、マーカーに意味をもたせます。そのあとは、たとえばオスワリならお尻が床に着いた瞬間に鳴らします。鳴らしたら必ずごほうびを渡すこと、ふだんの会話では使わない音や言葉を選ぶことがポイントです。耳の聞こえにくい犬には、親指を立てるなどの手のサインをマーカーにできます。"
    ],
    "example": "フセを教えている犬に、ひじとおなかが床に着いた瞬間に「イエス」と言い、すぐにおやつを渡します。フセからすぐ起き上がってしまう犬でも、どの瞬間が正解だったかが伝わりやすくなります。",
    "mistakes": [
      "鳴らしたのにごほうびを渡さず、マーカーの意味が薄れてしまう",
      "行動が終わってから遅れて鳴らし、別の行動をマークしてしまう",
      "クリッカーは一生手放せないと思い込む（身についた行動は、ほめ言葉やおやつだけで強化してよい）"
    ],
    "related": [
      "positive-reinforcement",
      "classical-conditioning",
      "shaping",
      "capturing"
    ],
    "relatedCommands": [
      "marker"
    ],
    "sources": [
      {
        "label": "VCA Animal Hospitals「行動修正：クリッカートレーニングとターゲットトレーニング」",
        "url": "https://vcahospitals.com/know-your-pet/behavior-modification-clicker-and-target-training"
      },
      {
        "label": "AKC（アメリカンケネルクラブ）「クリッカートレーニング：マークしてごほうび」",
        "url": "https://www.akc.org/expert-advice/training/clicker-training-your-dog-mark-and-reward/"
      },
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      }
    ]
  },
  {
    "id": "luring",
    "term": "ルアー（誘導）",
    "reading": "るあー",
    "en": "Luring",
    "group": "technique",
    "short": "おやつなどを犬の鼻先で動かし、体を目的の姿勢へ導いて教える方法です。",
    "body": [
      "ルアーは、おやつやおもちゃを犬の鼻先に持ち、それを動かして犬の体を目的の姿勢や場所へ導く教え方です。たとえばおやつを鼻先から頭の上の少し後ろへ動かすと、多くの犬はお尻を床につけて座ります。飼い主が取り組みやすく、短い時間で多くの行動を教えられます。",
      "注意したいのは、犬も人もルアーに頼りきりになりやすいことです。手におやつがないと動かない状態にならないよう、行動が安定したら早めにルアーを減らしていく（フェードする）必要があります。ルアーは行動の形を教えるための手助けで、行動の前に見せて従わせる「わいろ」とは使い方が違います。",
      "家では、おやつを持った手で何回か成功したら、同じ手の動きを空の手で行い、できたら別の手からごほうびを渡します。次に手の動きを少しずつ小さくしていくと、それがハンドサインになります。言葉の合図をつけるときは、先に言葉を言って少し待ち、できなければ手で助けるようにします。"
    ],
    "example": "フセを教える場面で、おやつを持った手を犬の鼻先から床へゆっくり下ろし、伏せたらそのおやつを渡します。数回できたら空の手で同じ動きをし、伏せたら反対の手からおやつを渡します。やがて犬は手の動きを合図に伏せ、小さなハンドサインでも伏せられるようになっていきます。",
    "mistakes": [
      "ルアーを外すのが遅れ、おやつが見えないと動かない犬にしてしまう",
      "急にルアーを外しすぎて、犬のやる気を下げてしまう",
      "オスワリの誘導でおやつを高く上げすぎ、座る代わりに飛びつかせてしまう"
    ],
    "related": [
      "shaping",
      "capturing",
      "targeting",
      "cue"
    ],
    "relatedCommands": [
      "sit",
      "down",
      "stand"
    ],
    "sources": [
      {
        "label": "AKC（アメリカンケネルクラブ）「ルアーを上手に減らす方法」",
        "url": "https://www.akc.org/expert-advice/training/how-to-fade-the-lure/"
      },
      {
        "label": "Whole Dog Journal「ルアー・シェイピング・キャプチャリングで新しい行動を教える」",
        "url": "https://www.whole-dog-journal.com/training/advanced-dog-training/how-to-get-a-dog-to-behave/"
      },
      {
        "label": "AKC（アメリカンケネルクラブ）「犬のトレーニング用語集」",
        "url": "https://www.akc.org/expert-advice/training/dog-training-terms-lingo/"
      }
    ]
  },
  {
    "id": "shaping",
    "term": "シェイピング",
    "reading": "しぇいぴんぐ",
    "en": "Shaping",
    "group": "technique",
    "short": "目標の行動を小さな段階に分け、少しずつ近づく行動を強化して完成させる方法です。",
    "body": [
      "シェイピングは、最終的に教えたい行動をいくつもの小さなステップに分け、目標に少しずつ近づいた行動を順番に強化していく教え方です。「漸次的接近（逐次接近）」とも呼ばれます。はじめは目標に少しでも似た行動にごほうびを出し、段階を追って基準を上げていきます。",
      "犬の行動には毎回少しずつばらつきがあるため、そのなかから目標に近いものを選んで強化すると、行動がその方向へ変わっていきます。正解の瞬間を正確に伝える必要があるので、クリッカーなどのマーカーと相性のよい方法です。犬が自分から行動を試すようになりやすく、ルアーで誘導しにくい複雑な行動も教えられます。",
      "家では、始める前に目標までのステップを書き出しておきます。1つのステップが安定してから次へ進み、つまずいたら1つ前に戻ります。1回の練習は短くし、犬がいら立たないうちに成功で終えるようにしましょう。"
    ],
    "example": "「バイバイ（前足を振る）」を教える場面では、まず前足が少しでも浮いたらマーカーとごほうび、安定したら肩の高さまで上げたときだけ、次は足を動かしたときだけ、と基準を上げていきます。前足を上下に振る動きが安定してできるようになったところで、合図の言葉をつけます。",
    "mistakes": [
      "一度に大きく基準を上げすぎて、犬がどうすればよいかわからなくなる",
      "同じステップに長くとどまりすぎ、犬がそれで完成だと思い込む",
      "大きな行動ばかり待ち、細かく分けて強化できていない"
    ],
    "related": [
      "marker-training",
      "capturing",
      "luring",
      "positive-reinforcement"
    ],
    "relatedCommands": [
      "marker",
      "down"
    ],
    "sources": [
      {
        "label": "AKC（アメリカンケネルクラブ）「シェイピングとは」",
        "url": "https://www.akc.org/expert-advice/training/training-tips-shaping/"
      },
      {
        "label": "Whole Dog Journal「ルアー・シェイピング・キャプチャリングで新しい行動を教える」",
        "url": "https://www.whole-dog-journal.com/training/advanced-dog-training/how-to-get-a-dog-to-behave/"
      },
      {
        "label": "MSD獣医マニュアル（Merck Veterinary Manual）「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      }
    ]
  },
  {
    "id": "capturing",
    "term": "キャプチャリング",
    "reading": "きゃぷちゃりんぐ",
    "en": "Capturing",
    "group": "technique",
    "short": "犬が自然にとった行動をその場でマークして強化し、合図で出せるようにする方法です。",
    "body": [
      "キャプチャリングは、犬が自分から自然にとった行動を見逃さずにマーカーで知らせ、ごほうびを渡すことで、その行動を増やしていく教え方です。「捕まえる」という名前のとおり、よい瞬間を捉えるのがポイントです。あくびや伸びのように、ルアーやシェイピングでは教えにくい行動に向いています。",
      "繰り返すうちに、犬はごほうびをもらうためにその行動を自分からするようになります。そうなったら、行動の直前に合図の言葉を言うようにすると、合図で出せる行動になります。犬が自分からしない行動は捉えられないため、ある程度予測できる行動から始めると成功しやすくなります。",
      "家では、マーカーとごほうびをいつでも出せるように準備しておきます。たとえばケージから出るたびに伸びをする犬なら、その瞬間を待ってマークします。タイミングが遅れると別の行動を強化してしまうので、素早く反応することが大切です。"
    ],
    "example": "来客中に自分からマットで伏せて落ち着く犬には、伏せて落ち着いた瞬間に静かに「イエス」と言い、ごほうびをそっと置きます。これを繰り返すと落ち着いて伏せることが増え、そこで合図の言葉をつけると、合図でマットに伏せて待てるようになっていきます。",
    "mistakes": [
      "マークが遅れ、行動が終わってから鳴らしてしまう",
      "ごほうびを手元に用意しておらず、よい瞬間を逃してしまう",
      "めったにしない行動を選び、強化の機会が少なすぎて犬に伝わらない"
    ],
    "related": [
      "marker-training",
      "shaping",
      "luring",
      "cue"
    ],
    "relatedCommands": [
      "marker",
      "settle",
      "place"
    ],
    "sources": [
      {
        "label": "Whole Dog Journal「ルアー・シェイピング・キャプチャリングで新しい行動を教える」",
        "url": "https://www.whole-dog-journal.com/training/advanced-dog-training/how-to-get-a-dog-to-behave/"
      },
      {
        "label": "VCA Animal Hospitals「行動修正：クリッカートレーニングとターゲットトレーニング」",
        "url": "https://vcahospitals.com/know-your-pet/behavior-modification-clicker-and-target-training"
      },
      {
        "label": "AKC（アメリカンケネルクラブ）「犬のトレーニング用語集」",
        "url": "https://www.akc.org/expert-advice/training/dog-training-terms-lingo/"
      }
    ]
  },
  {
    "id": "targeting",
    "term": "ターゲット",
    "reading": "たーげっと",
    "en": "Targeting",
    "group": "technique",
    "short": "手のひらや物に鼻や足でタッチすることを教え、犬の動きを導くための技法です。",
    "body": [
      "ターゲットは、体の一部（多くは鼻先、ときに前足や後ろ足）で決まった目標物にタッチすることを犬に教える技法です。目標物は飼い主の手のひらや指、容器のふた、ターゲットスティックなど、さまざまなものが使えます。鼻の向かう方へ頭と体がついてくるので、多くの動きの土台になります。",
      "一度覚えると、ターゲットを動かすだけで犬をある位置や姿勢へ導けるため、おやつを見せずに誘導する手段になります。気になるものから犬の注意をそらし、飼い主に向け直すときにも使えます。スリッパを持ってくる、クレートに入るなど、それ自体は犬にとって興味のない物に関わる行動を教えるのにも役立ちます。",
      "家では、手のひらを犬の顔の近くに出し、においを嗅ごうとして鼻が触れた瞬間にマーカーを出して、すぐにごほうびを渡します。自分から鼻でタッチするようになったら「タッチ」などの合図をつけ、距離や手の位置を少しずつ変えます。慣れてきたら、刺激の少ない場所から順に練習の場を広げていきます。"
    ],
    "example": "散歩中、向こうから来る自転車に気を取られやすい犬には、自転車に気づいたところで手のひらを出して「タッチ」と言い、鼻が触れたらごほうびを渡します。練習を重ねると、自転車ではなく飼い主の手に注意を向けやすくなります。",
    "mistakes": [
      "鼻が触れた瞬間ではなく、離れてからマークしてしまう",
      "最初から距離を取りすぎたり刺激の多い場所で練習したりして、失敗が続く",
      "手のひらを犬の顔に押しつけてしまい、犬が自分から触れる行動にならない"
    ],
    "related": [
      "marker-training",
      "luring",
      "capturing",
      "cue"
    ],
    "relatedCommands": [
      "touch",
      "paw-target"
    ],
    "sources": [
      {
        "label": "AKC（アメリカンケネルクラブ）「ターゲットの教え方と役立つ理由」",
        "url": "https://www.akc.org/expert-advice/training/teaching-targeting-to-your-dog/"
      },
      {
        "label": "AKC（アメリカンケネルクラブ）「鼻タッチ（タッチ）の教え方」",
        "url": "https://www.akc.org/expert-advice/training/teach-dog-nose-target-touch/"
      },
      {
        "label": "VCA Animal Hospitals「行動修正：クリッカートレーニングとターゲットトレーニング」",
        "url": "https://vcahospitals.com/know-your-pet/behavior-modification-clicker-and-target-training"
      }
    ]
  },
  {
    "id": "cue",
    "term": "キュー（合図）",
    "reading": "きゅー",
    "en": "Cue",
    "group": "technique",
    "short": "特定の行動をしてほしいことを犬に伝える、言葉や手の合図、周りの状況のことです。",
    "body": [
      "キューは、「今この行動をすればごほうびがもらえる」と犬に伝える合図です。以前は「コマンド（命令）」と呼ばれていましたが、無理にさせる響きがあるため、今は「キュー」という言葉が広く使われています。言葉やハンドサインのほか、道路の縁石で座るなど、周りの状況がキューになることもあります。",
      "犬は主に体の動きで伝え合う動物なので、ハンドサインや体の動きはすぐに覚える一方、言葉のキューには手間がかかります。飼い主が気づかないうちに、言葉と一緒に肩の動きや目線などの体の合図も出していて、犬は実はそちらに反応している、ということもよくあります。どんな環境でも合図どおりに確実に行動できる状態を「刺激性制御（キューのもとにある）」と呼びます。",
      "家では、ルアーなどで行動の形ができてから合図の言葉をつけます。1つの行動には1つの言葉を決め、家族全員で同じ言葉を使いましょう。大声でくり返すと犬の興奮や不安を高めることがあるので、名前を呼んで注意を向けてから、落ち着いた声で一度伝えて待つのが基本です。"
    ],
    "example": "言葉だけでフセができるか確かめたいときは、手も目線も動かさずに「フセ」と言い、数秒待ちます。できなければルアーで助け、次は助けを少し小さくしていきます。これを繰り返すと、やがて言葉だけで伏せられるようになっていきます。",
    "mistakes": [
      "同じ合図を何度もくり返して言う",
      "家族ごとに違う言葉を使い、犬を混乱させる",
      "言葉と一緒に無意識のジェスチャーをしていて、言葉だけでは通じていない"
    ],
    "related": [
      "luring",
      "capturing",
      "generalization",
      "proofing"
    ],
    "relatedCommands": [
      "sit",
      "down",
      "name-response"
    ],
    "sources": [
      {
        "label": "AKC（アメリカンケネルクラブ）「犬のトレーニング用語集」",
        "url": "https://www.akc.org/expert-advice/training/dog-training-terms-lingo/"
      },
      {
        "label": "Whole Dog Journal「言葉のキュー：コマンドに代わる考え方」",
        "url": "https://www.whole-dog-journal.com/training/verbal-cues/"
      },
      {
        "label": "VCA Animal Hospitals「強化とごほうびを使ったトレーニング」",
        "url": "https://vcahospitals.com/know-your-pet/using-reinforcement-and-rewards-to-train-your-pet"
      }
    ]
  },
  {
    "id": "generalization",
    "term": "般化",
    "reading": "はんか",
    "en": "Generalization",
    "group": "technique",
    "short": "ある場所で覚えた行動を、場所・人・状況が変わっても同じようにできるようにすること。",
    "body": [
      "般化とは、ある場所や状況で覚えた行動を、ほかの場所や状況でも同じようにできるようになることです。犬は教わった場面とセットで行動を覚えやすく、「リビングのラグの上でのオスワリ」と「散歩道でのオスワリ」を別のものとして受け取りがちです。家ではできるのに外ではできない、という悩みの多くは、この般化がまだ済んでいないことが原因です。",
      "合図の意味をどこでも通じるものにするには、場所・時間帯・人・周りの刺激などの条件を一つずつ変えながら練習を重ねる必要があります。条件が変わるたびに犬にとっては少し難しくなるので、そのつど成功しやすい状態からやり直します。この手順を何度か経験すると、犬は新しい行動も前より早く般化できるようになっていきます。",
      "家では、まず静かな部屋で、10回中8回ほどすぐにできるようになるまで練習します。次に別の部屋、玄関、家の前の道、公園と、少しずつ場所を広げていきましょう。新しい場所ではいったんルアー（誘導）に戻したり、ごほうびの回数を増やしたりしてかまいません。"
    ],
    "example": "リビングではすぐ座るのに、動物病院の待合室では座らない犬。まず家の別の部屋、次に玄関、家の前と場所を変えて練習し、うまくいかない場所ではおやつで誘導し直してごほうびを多めに出します。練習を重ねるうちに、初めての場所でも合図だけで座れる場面が増えていきます。",
    "mistakes": [
      "家で完璧にできるから外でもできるはずと考え、できないと「言うことを聞かない」と叱ってしまう",
      "場所・距離・誘惑など、いくつもの条件を一度に難しくしてしまう"
    ],
    "related": [
      "proofing",
      "cue",
      "luring"
    ],
    "relatedCommands": [
      "sit",
      "down"
    ],
    "sources": [
      {
        "label": "Whole Dog Journal「ドッグトレーナーが使う行動の般化」",
        "url": "https://www.whole-dog-journal.com/training/dog-trainers-use-of-generalizing-a-behavior/"
      },
      {
        "label": "アメリカンケネルクラブ（AKC）「ドッグトレーナーが知ってほしい一貫性の話」",
        "url": "https://www.akc.org/expert-advice/training/consistency-in-dog-training/"
      }
    ]
  },
  {
    "id": "proofing",
    "term": "プルーフィング",
    "reading": "ぷるーふぃんぐ",
    "en": "Proofing",
    "group": "technique",
    "short": "時間・距離・誘惑の3つを一つずつ上げ、どんな状況でもできる行動に仕上げる練習。",
    "body": [
      "プルーフィングとは、覚えた行動を「どんな状況でもできる」レベルまで仕上げていく練習です。ドッグスポーツで、会場の拍手や物音の中でも演技できるように練習することを指して使われてきた言葉で、般化の一部と考えることができます。難しさを調整する目安として、よく「3D」と呼ばれる3つの要素が使われます。",
      "3Dとは、行動を続ける時間（Duration）、飼い主との距離（Distance）、周りの誘惑（Distraction）のことです。どれか一つが上がるだけで犬にとっては難しくなり、3つが同時に上がると成功はぐっと難しくなります。そのため、一度に上げる要素は一つだけにして、誘惑は最後に加えるのが基本です。",
      "家では、たとえばマテなら1秒ほどの短い時間から始めて、少しずつ延ばします。距離を練習するときは時間を短く戻し、誘惑を足すときは時間も距離も易しくします。失敗したら一段階前の易しい条件に戻り、成功で終わらせましょう。"
    ],
    "example": "台所では長くマテできるのに、公園では数歩離れただけで立ってしまう犬。家で「時間」と「距離」を別々に練習してから、公園では時間を短く・距離をすぐそばに戻し、遠くに人がいる程度の小さな誘惑から始めます。誘惑のある場所でも短いマテが成功するようになり、そこから少しずつ条件を上げていけます。",
    "mistakes": [
      "時間・距離・誘惑を同時に上げてしまい、失敗を繰り返させる",
      "離れた位置から解除の合図を出し、犬が早く動き出すくせをつけてしまう（犬のそばに戻ってから解除する）"
    ],
    "related": [
      "generalization",
      "cue",
      "reinforcement-schedule"
    ],
    "relatedCommands": [
      "stay",
      "wait",
      "leave-it"
    ],
    "sources": [
      {
        "label": "アメリカンケネルクラブ（AKC）「トレーニングの3つのD：時間・距離・誘惑」",
        "url": "https://www.akc.org/expert-advice/training/dog-training-duration-distance-distraction/"
      },
      {
        "label": "Whole Dog Journal「ドッグトレーナーが使う行動の般化」",
        "url": "https://www.whole-dog-journal.com/training/dog-trainers-use-of-generalizing-a-behavior/"
      }
    ]
  },
  {
    "id": "desensitization",
    "term": "脱感作",
    "reading": "だつかんさ",
    "en": "Desensitization",
    "group": "technique",
    "short": "苦手な刺激を、犬が怖がらないほど弱いレベルから少しずつ強めて慣らしていく方法。",
    "body": [
      "脱感作（系統的脱感作）とは、犬が怖がったり興奮したりする刺激に、ごく弱いレベルから段階的に触れさせていく行動修正の方法です。最初は犬がほとんど反応しない弱さから始め、何回かの練習に分けて少しずつ強くしていきます。最終的に、ふだんの強さの刺激でも感情的な反応が出なくなることを目指します。",
      "大切なのは、いつも犬が落ち着いていられる範囲（閾値の下）で練習することです。刺激の強さは、距離（遠くから近くへ）、音量（小さくから大きく）、動く速さ（ゆっくりから速く）、要素の分解（掃除機なら止めたまま→音だけ→動かす）で調整できます。怖がっている状態で刺激を続けると、かえって反応が強くなる「鋭敏化」が起きることがあるため、急がないことが何より大切です。",
      "家で行うときは、刺激とおいしいものを結びつける拮抗条件づけと組み合わせるのが一般的です。犬がおやつをすぐに受け取らなくなる、合図に反応しにくくなるといった様子は進めすぎのサインなので、その日は終えて、次回は刺激を弱めます。恐怖が強い場合や進歩が見られない場合は、獣医行動診療医や認定トレーナー（IAABC・CCPDT-KAなど）に相談しましょう。"
    ],
    "example": "掃除機の音で逃げ回る犬。掃除機を止めたまま部屋の遠くに置き、犬が平気でおやつを食べられる距離から始めます。慣れたら同じ距離で電源を入れ、次に少しだけ動かす、と一段階ずつ進めます。掃除機が動いていても、離れた場所で落ち着いて過ごせる時間が増えていきます。",
    "mistakes": [
      "早く慣れさせようと、強い刺激に長時間さらしてしまう（恐怖がかえって悪化しやすい）",
      "犬がおやつを食べなくなっても練習を続け、閾値を超えさせてしまう"
    ],
    "related": [
      "counterconditioning",
      "threshold",
      "sensitization"
    ],
    "relatedCommands": [
      "settle"
    ],
    "sources": [
      {
        "label": "VCA Animal Hospitals「脱感作と拮抗条件づけ入門」",
        "url": "https://vcahospitals.com/know-your-pet/desensitization-and-counterconditioning"
      },
      {
        "label": "MSD（Merck）獣医マニュアル 飼い主向け「犬の行動修正」",
        "url": "https://www.merckvetmanual.com/dog-owners/behavior-of-dogs/behavior-modification-in-dogs"
      },
      {
        "label": "MSD（Merck）獣医マニュアル「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      }
    ]
  },
  {
    "id": "counterconditioning",
    "term": "拮抗条件づけ",
    "reading": "きっこうじょうけんづけ",
    "en": "Counterconditioning",
    "group": "technique",
    "short": "苦手なものと犬が喜ぶものを結びつけ、その刺激への感じ方を変えていく方法。",
    "body": [
      "拮抗条件づけ（カウンターコンディショニング）とは、犬が嫌な気持ちになる刺激と、うれしい気持ちになるもの（おいしいおやつや遊びなど）を、くり返しセットで経験させる方法です。目的は、目に見える行動よりも「その刺激に出会ったときの気持ち」を変えることにあります。古典的条件づけの仕組みを使った技法です。",
      "たとえば車が通るたびにとびきりおいしいおやつが出てくる経験を重ねると、犬にとって車は「いいことが起きる合図」に変わっていきます。ただし反応が強い犬では、この方法だけでは足りないことが多く、刺激を弱めて与える脱感作と組み合わせるのが効果的とされています。刺激が弱いうちに良い結びつきを作り、それから少しずつ強さを上げていきます。",
      "家では、苦手なものが現れたらすぐにおやつを出し、それが通り過ぎる間も与え続けるようにします。ごほうびは、ふだんのフードより価値の高いものを用意しましょう。犬が怖がっておやつを食べられないときは近すぎるサインなので、距離をとってからやり直します。"
    ],
    "example": "自転車を見ると吠える犬。止まっている自転車が遠くに見える場所から始め、自転車が見えている間においしいおやつを与えます。平気で食べられたら数歩近づき、次はゆっくり動く自転車で同じことをします。やがて自転車を見ると、飼い主の顔を見ておやつを期待するようになります。",
    "mistakes": [
      "犬が怖がっておやつを食べられない距離のまま続けてしまう",
      "いつものフードなど価値の低いごほうびを使い、苦手な気持ちを上回れない"
    ],
    "related": [
      "desensitization",
      "classical-conditioning",
      "trigger"
    ],
    "relatedCommands": [
      "watch-me",
      "settle"
    ],
    "sources": [
      {
        "label": "VCA Animal Hospitals「脱感作と拮抗条件づけ入門」",
        "url": "https://vcahospitals.com/know-your-pet/desensitization-and-counterconditioning"
      },
      {
        "label": "MSD（Merck）獣医マニュアル「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      },
      {
        "label": "コーネル大学獣医学部「反応しやすい犬への対応」",
        "url": "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/managing-reactive-behavior"
      }
    ]
  },
  {
    "id": "habituation",
    "term": "馴化",
    "reading": "じゅんか",
    "en": "Habituation",
    "group": "technique",
    "short": "害のない刺激に何度も出会ううちに、その刺激への反応が小さくなっていくこと。",
    "body": [
      "馴化（慣れ）とは、同じ刺激をくり返し、または長く経験するうちに、その刺激への反応が弱まったり、なくなったりすることです。ごほうびを使わない、もっとも単純な学習の一つとされています。新しいドライヤーの音に最初は吠えていた犬が、しばらくすると気にしなくなる、というのが典型的な例です。",
      "馴化が起きるのは、その刺激が犬にとって「何も起きない、危険ではない」と分かったときです。ただし馴化はその刺激に限ったもので、ある音に慣れても別の音にまで慣れるわけではありません。また、しばらく経験しない期間が空くと反応が戻ることがあり（自発的回復）、刺激が犬にとって怖すぎる場合は、慣れるどころか反応が強まる「鋭敏化」が起きることもあります。",
      "日常の物音や物ごとの多くには、特別な練習をしなくても自然に慣れていきます。ただ、雷や花火のように怖さの強い刺激は「そのうち慣れる」と放っておかず、様子をよく見ることが大切です。反応が回を追うごとに強くなっているなら、脱感作と拮抗条件づけに切り替えましょう。"
    ],
    "example": "引っ越し先で、週に一度のごみ収集車の音に驚いて吠える犬。飼い主は騒がずに見守り、毎回の反応の強さをメモしておきます。反応が回を追うごとに小さくなっていけば馴化が進んでいるサインで、逆に強くなっていくなら練習での対応が必要です。",
    "mistakes": [
      "怖がっている刺激に「慣れさせるため」とくり返しさらし、かえって鋭敏化させてしまう",
      "一度慣れた音に久しぶりに反応したとき、しつけが失敗したと考えてしまう（期間が空くと反応が戻ることはある）"
    ],
    "related": [
      "sensitization",
      "desensitization",
      "socialization"
    ],
    "relatedCommands": [],
    "sources": [
      {
        "label": "米国獣医動物行動学会（AVSAB）「慣れるか、慣れないか：馴化と鋭敏化」",
        "url": "https://avsab.org/getting-used-to-things-or-not-habituation-vs-sensitization/"
      },
      {
        "label": "MSD（Merck）獣医マニュアル 飼い主向け「犬の行動修正」",
        "url": "https://www.merckvetmanual.com/dog-owners/behavior-of-dogs/behavior-modification-in-dogs"
      },
      {
        "label": "MSD（Merck）獣医マニュアル「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      }
    ]
  },
  {
    "id": "management",
    "term": "環境管理",
    "reading": "かんきょうかんり",
    "en": "Management",
    "group": "technique",
    "short": "困った行動が起きにくい環境を整え、犬が失敗を練習しないようにすること。",
    "body": [
      "環境管理（マネジメント）とは、犬の周りの環境を工夫して、困った行動をそもそも起こさせない、または起きてもごほうびにならないようにすることです。ゲート、クレート、サークル、リード、閉めたドア、窓の目隠しなどが代表的な道具です。新しい行動を教えている間の「つなぎ」として使うことも、それ自体が長く続く解決策になることもあります。",
      "行動はごほうびを得るたびに強まるので、困った行動をくり返すほど、その行動は身についていきます。獣医師向けのマニュアルでも、問題行動への対応はまず安全を確保し、望ましくない行動のくり返し（リハーサル）を防ぐことから始めるとされています。吠える、飛びつく、盗み食いをするといった行動に成功体験を積ませないことが、しつけの土台になります。",
      "家では「やめさせたい行動」ではなく「代わりにしてほしい行動」を決め、その行動がしやすく、困った行動がしにくい環境を用意します。たとえば、カウンターに食べ物を置かない、来客時はゲートの向こうで待たせる、通行人に吠えるなら窓に目隠しをする、などです。そのうえで、望ましい行動にしっかりごほうびを出しましょう。"
    ],
    "example": "来客に飛びつく犬。来客時はリードをつけるかゲートの向こうに置き、飛びつけない状態にします。お客さんには、犬が座ったときだけおやつをあげたりなでたりしてもらいます。飛びついても何も得られず、座るといいことが起きる経験が積み重なり、落ち着いたあいさつが増えていきます。",
    "mistakes": [
      "環境管理を「甘やかし」や「逃げ」と考え、困った行動を何度もくり返させてしまう",
      "管理だけで満足し、代わりにしてほしい行動を教えてごほうびを出すことを忘れる"
    ],
    "related": [
      "incompatible-behavior",
      "trigger",
      "extinction"
    ],
    "relatedCommands": [
      "crate",
      "place",
      "polite-greeting"
    ],
    "sources": [
      {
        "label": "Whole Dog Journal「管理するとき、トレーニングするとき」",
        "url": "https://www.whole-dog-journal.com/behavior/your-dogs-behavior-when-to-manage-when-to-train/"
      },
      {
        "label": "MSD（Merck）獣医マニュアル「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      }
    ]
  },
  {
    "id": "incompatible-behavior",
    "term": "両立しない行動を教える",
    "reading": "りょうりつしないこうどうをおしえる",
    "en": "Incompatible behavior (DRI/DRA)",
    "group": "technique",
    "short": "困った行動の代わりに、それと同時にはできない行動を教えてほめる方法。",
    "body": [
      "困った行動を叱ってやめさせる代わりに、その行動と同時にはできない別の行動を教えて強化する方法です。両立しない行動を強化することをDRI、代わりになる行動（必ずしも両立しなくてよい）を強化することをDRAと呼びます。獣医行動学では「反応置換（レスポンス・サブスティテューション）」という名前でも紹介されています。",
      "座りながら飛びつくことはできないように、両立しない行動をしている間、困った行動は起きません。代わりの行動にはたっぷりごほうびを出し、困った行動では何も得られないようにすることで、犬は自然に代わりの行動を選ぶようになります。罰を使わずに行動を変えられるため、LIMAの考え方でも、罰より先に検討すべき方法に位置づけられています。",
      "家では、まず落ち着いた環境で代わりの行動（オスワリ、マットに行ってフセなど）を陽性強化で教えます。確実にできるようになったら、少しずつ気が散る場所や、実際に困った行動が起きる場面で練習します。強く怖がっている犬には、行動を教えるより先に、脱感作と拮抗条件づけで気持ちを変えることを優先しましょう。"
    ],
    "example": "チャイムが鳴ると玄関へ走って吠える犬。ふだんから「マットに行ってフセ」を教えておき、次にチャイムの録音を小さな音で流しながらマットで待てたらごほうびを出します。チャイムが鳴るとマットに向かうようになり、玄関で吠える時間が減っていきます。",
    "mistakes": [
      "困った行動が起きているその場で、初めて代わりの行動を教えようとする",
      "代わりの行動はほめているのに、困った行動にも時々ごほうび（注目・遊び・食べ物）が出てしまっている"
    ],
    "related": [
      "management",
      "positive-reinforcement",
      "extinction"
    ],
    "relatedCommands": [
      "place",
      "sit",
      "watch-me"
    ],
    "sources": [
      {
        "label": "VCA Animal Hospitals「脱感作と拮抗条件づけ入門」（反応置換の項）",
        "url": "https://vcahospitals.com/know-your-pet/desensitization-and-counterconditioning"
      },
      {
        "label": "MSD（Merck）獣医マニュアル「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      },
      {
        "label": "CCPDT（認定プロフェッショナルドッグトレーナー評議会）「LIMA方針」",
        "url": "https://ccpdt.org/wp-content/uploads/2021/10/LIMA-Policy-2021.pdf"
      }
    ]
  },
  {
    "id": "threshold",
    "term": "閾値",
    "reading": "いきち",
    "en": "Threshold",
    "group": "reading",
    "short": "犬が落ち着いた状態から、刺激に反応してしまう状態へ切り替わる境目のこと。",
    "body": [
      "閾値とは、犬が落ち着いていられる状態から、強いストレスや興奮で「反応してしまう」状態へ移る境目のことです。吠える・突進するといった分かりやすい反応だけでなく、固まる、おやつを食べなくなる、急に静かになるといった形で閾値を超えることもあります。行動修正では「閾値の下で練習する」ことが基本です。",
      "閾値を超えた犬は、考えるより先に反応している状態で、飼い主の声も届きにくく、新しいことを学べません。閾値は決まった位置にあるものではなく、苦手な刺激の数、距離、頻度、強さ、それまでにたまったストレスによって、その時々で変わります。一つ一つは平気でも、いくつも重なると一気に超えてしまうことがあります。",
      "家では、まず犬の苦手なもの（トリガー）と、閾値に近づいたときのサイン（体がこわばる、おやつの取り方が荒くなる、地面のにおいを嗅ぎ始めるなど）を知ることから始めます。サインに気づいたら、超える前に距離をとりましょう。超えてしまったときはその場で練習をやめてすぐに離れ、次に同じ状況にならない計画を立てます。"
    ],
    "example": "道の向こう側の犬なら見ていられるが、近づくと吠え出す犬。吠えずにおやつを食べられ、体がゆるんでいる距離を保ったまま、ほかの犬が見えたらおやつを与えます。閾値の下での練習を重ねると、落ち着いていられる距離が少しずつ縮まっていきます。",
    "mistakes": [
      "「慣れさせよう」と近づけて、閾値を超えた状態のまま練習を続ける",
      "吠えたり突進したりしていないから大丈夫と考え、固まる・おやつを食べないといった静かなサインを見落とす"
    ],
    "related": [
      "trigger",
      "stress-signals",
      "desensitization"
    ],
    "relatedCommands": [
      "watch-me"
    ],
    "sources": [
      {
        "label": "Whole Dog Journal「犬の閾値について知っておきたい5つのこと」",
        "url": "https://www.whole-dog-journal.com/behavior/5-things-to-know-about-a-dogs-threshold/"
      },
      {
        "label": "VCA Animal Hospitals「脱感作と拮抗条件づけで恐怖を克服する」",
        "url": "https://vcahospitals.com/know-your-pet/overcoming-fears-with-desensitization-and-counterconditioning"
      }
    ]
  },
  {
    "id": "trigger",
    "term": "トリガー",
    "reading": "とりがー",
    "en": "Trigger",
    "group": "reading",
    "short": "犬の吠え・恐怖・興奮などの強い反応を引き起こす、きっかけとなる刺激のこと。",
    "body": [
      "トリガーとは、犬が強く反応するきっかけになる刺激のことです。ほかの犬、見知らぬ人、帽子をかぶった人やひげのある男性、子どもなどがよく挙がります。怖いものに限らず、激しい遊びのように興奮を高めるものもトリガーになります。",
      "同じ相手でも、リードにつながれているとき、混雑した場所、夜など、状況によって反応が変わる犬もいます。トリガーの数が多いほど、距離が近いほど、短い間に何度も出会うほど、犬は閾値を超えやすくなります。人にとっては怖くないものでも、犬にとって怖ければトリガーになる点も覚えておきましょう。",
      "家では、まず犬が何に、どんな状況で反応するのかを具体的に書き出します。特定できたら、練習の計画ができるまではトリガーを避け（環境管理）、そのうえで脱感作と拮抗条件づけで「トリガー＝いいことの合図」に変えていきます。反応が強い場合や攻撃につながりそうな場合は、獣医師や獣医行動診療医に相談してください。"
    ],
    "example": "散歩中、帽子をかぶった男性にだけ吠える犬。どんな人に、どの距離で、どの時間帯に吠えるかをメモし、しばらくは出会いやすい時間を避けます。そのうえで、遠くに帽子の人が見えた瞬間におやつを出す練習を続けると、帽子の人を見て飼い主を見上げる場面が増えていきます。",
    "mistakes": [
      "「人が嫌いなだけ」とひとまとめにして、どんな相手・距離・状況で反応するかを観察しない",
      "克服させようとトリガーにわざと近づけ、くり返し反応させてしまう"
    ],
    "related": [
      "threshold",
      "counterconditioning",
      "management"
    ],
    "relatedCommands": [
      "watch-me"
    ],
    "sources": [
      {
        "label": "コーネル大学獣医学部「反応しやすい犬への対応」",
        "url": "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/managing-reactive-behavior"
      },
      {
        "label": "Whole Dog Journal「犬の閾値について知っておきたい5つのこと」",
        "url": "https://www.whole-dog-journal.com/behavior/5-things-to-know-about-a-dogs-threshold/"
      },
      {
        "label": "アメリカンケネルクラブ（AKC）「反応性と攻撃性の違い」",
        "url": "https://www.akc.org/expert-advice/training/reactivity-vs-aggression/"
      }
    ]
  },
  {
    "id": "calming-signals",
    "term": "カーミングシグナル",
    "reading": "かーみんぐしぐなる",
    "en": "Calming signals",
    "group": "reading",
    "short": "あくびや顔をそむける動きなど、犬が緊張をやわらげるために出すとされるしぐさ。",
    "body": [
      "カーミングシグナルとは、ドッグトレーナーのトゥーリッド・ルーガス氏が名づけた、犬が相手や自分を落ち着かせ、争いを避けるために使うとされるしぐさです。あくび、鼻をなめる、顔や体をそむける、地面のにおいを嗅ぐ、プレイバウ（前足を伏せたおじぎの姿勢）などが挙げられ、同氏は30種類ほどあるとしています。犬どうしだけでなく、人に対しても使われるとされています。",
      "たとえば、上からかがみこむ、正面からまっすぐ近づく、きつい声で呼ぶといった人の行動に対して、犬があくびをしたり顔をそむけたりすることがあります。これを「無視している」「反抗している」と受け取って叱ると、犬はさらに不安になります。なお、これらのしぐさを「相手をなだめる合図」と見るか「ストレスのサイン」と見るかは専門家の間でも解釈が分かれていますが、どちらにしても犬が居心地の悪さを感じている可能性を示すと考えると実用的です。",
      "家では、犬があくびや鼻なめ、顔そむけをしたら、その直前に何があったかを振り返ってみましょう。同じ場面でくり返し出るなら、その場面が犬にとって負担になっているのかもしれません。かがみこまずに横向きで近づく、練習を短くするなど、こちらの接し方を見直すきっかけにします。"
    ],
    "example": "ブラッシングのたびに顔をそむけて鼻をなめる犬。いったんブラシを置き、ブラシを見せたらおやつ、軽く一回とかしたらおやつ、と短い時間で終えるようにします。くり返すうちに顔をそむける回数が減り、ブラシを見ても落ち着いていられるようになります。",
    "mistakes": [
      "あくびを「眠い・退屈」とだけ受け取り、緊張のサインを見落とす",
      "顔をそむける犬を「無視した」と叱ったり、無理に目を合わせさせたりする"
    ],
    "related": [
      "stress-signals",
      "threshold",
      "socialization"
    ],
    "relatedCommands": [],
    "sources": [
      {
        "label": "トゥーリッド・ルーガス公式サイト「カーミングシグナル：生き抜くための技術」",
        "url": "https://en.turid-rugaas.no/calming-signals---the-art-of-survival.html"
      },
      {
        "label": "アメリカンケネルクラブ（AKC）「犬のボディランゲージの読み方」",
        "url": "https://www.akc.org/expert-advice/advice/how-to-read-dog-body-language/"
      },
      {
        "label": "Synergy Veterinary Behavior（獣医行動診療施設）「カーミングシグナルか、ストレスサインか」",
        "url": "https://www.synergybehavior.com/calming-signals-or-stress-signs/"
      }
    ]
  },
  {
    "id": "stress-signals",
    "term": "ストレスサイン",
    "reading": "すとれすさいん",
    "en": "Stress signals",
    "group": "reading",
    "short": "あくび・パンティング・耳を伏せるなど、犬が不安や緊張を示す体のサイン。",
    "body": [
      "ストレスサインとは、犬が不安、恐怖、緊張などを感じているときに体に表れるサインのことです。犬は気持ちを言葉で伝えられないため、表情や姿勢、しぐさ（ボディランゲージ）から読み取る必要があります。サインは小さく短いことも多く、場面を知らないと見落としがちです。",
      "代表的なものに、疲れていないのにあくびをする、口をなめる、運動していないのにハアハアと口で息をする（パンティング）、耳を後ろに伏せる、白目が見える（ホエールアイ）、しっぽを下げる・巻き込む、体を低くする、震える、うろうろ歩く、顔をそむけて場を避ける、毛が急に抜ける、などがあります。しっぽを振っていても喜んでいるとは限らず、振り方や高さ、全身の様子と合わせて判断します。一つのサインだけで決めず、状況と組み合わせて見ることが大切です。",
      "家では、ふだんのリラックスした犬の姿（耳の位置、口元、体重のかけ方）をよく知っておくと、変化に気づきやすくなります。サインに気づいたら、まず原因から犬を離し、静かな場所で落ち着かせましょう。ストレスサインが頻繁に出る、多くのものに反応するといった場合は、動物病院に相談してください。"
    ],
    "example": "動物病院の待合室で、口をなめ、耳を伏せてうろうろしている犬。混み合った待合室を避けて外や車の中で順番を待ち、診察が終わったら静かな場所で休ませます。犬の緊張をそれ以上高めずに済み、落ち着くまでの時間も短くしやすくなります。",
    "mistakes": [
      "しっぽを振っているから喜んでいると決めつける",
      "おなかを見せる、うなだれるといった姿を「反省している」と受け取る（実際には不安や緊張のサインのことがある）"
    ],
    "related": [
      "calming-signals",
      "threshold",
      "trigger"
    ],
    "relatedCommands": [],
    "sources": [
      {
        "label": "VCA Animal Hospitals「犬のストレスのサインとやわらげ方」",
        "url": "https://vcahospitals.com/know-your-pet/signs-your-dog-is-stressed-and-how-to-relieve-it"
      },
      {
        "label": "VCA Animal Hospitals「犬のコミュニケーション：犬の言葉を読む」",
        "url": "https://vcahospitals.com/know-your-pet/canine-communication---interpreting-dog-language"
      },
      {
        "label": "アメリカンケネルクラブ（AKC）「犬のボディランゲージの読み方」",
        "url": "https://www.akc.org/expert-advice/advice/how-to-read-dog-body-language/"
      }
    ]
  },
  {
    "id": "socialization",
    "term": "社会化",
    "reading": "しゃかいか",
    "en": "Socialization",
    "group": "reading",
    "short": "子犬期に人・動物・音・場所などを良い経験として知り、世の中に慣れていくこと。",
    "body": [
      "社会化とは、子犬がさまざまな人、動物、音、場所、物ごとに出会い、それらを安全で楽しいものとして受け入れられるようになっていく過程です。特に生後3か月ごろまでは、怖がる気持ちよりも人や物への親しみやすさが勝りやすい時期で、社会化期と呼ばれます。この時期の経験は、成犬になってからの性格や反応に大きく影響します。",
      "この時期の社会化が不十分だったり不適切だったりすると、成長後に恐怖、回避、攻撃といった行動の問題が起きやすくなるとされています。そのため米国獣医動物行動学会（AVSAB）は、ワクチン接種がすべて終わる前から、安全に配慮して社会化を始めることを標準的なケアとしています。同学会は、少なくとも1回目のワクチンを7日以上前に済ませ、駆虫もしていれば、生後7〜8週からパピークラスに参加できるとしていますので、時期はかかりつけの獣医師と相談してください。",
      "家では、床の素材の違い、年齢や服装の違う人、生活音など、できるだけ多くのものを、おやつやほめ言葉と組み合わせて経験させます。大事なのは数よりも「良い経験になっているか」で、子犬が怖がっておやつを食べないときは、刺激を弱めたり距離をとったりします。一度にたくさんの刺激を与えず、家族から少しずつ始めましょう。"
    ],
    "example": "迎えたばかりの子犬。家の中でフローリング、マット、タイルなど違う床を歩かせ、家族以外の人にも一人ずつ会わせて、そのたびにおやつをあげてもらいます。怖がっておやつを食べない場面では距離をとってやり直します。新しいものを見ると近づいてにおいを嗅ぐような、落ち着いた反応が増えていきます。",
    "mistakes": [
      "にぎやかな場所に一度に連れて行き、たくさんの刺激で子犬を圧倒してしまう",
      "ワクチンが全部終わるまで家の外の刺激に一切ふれさせず、社会化期を逃してしまう"
    ],
    "related": [
      "habituation",
      "counterconditioning",
      "sensitization"
    ],
    "relatedCommands": [],
    "sources": [
      {
        "label": "米国獣医動物行動学会（AVSAB）「子犬の社会化に関するポジションステートメント」",
        "url": "https://avsab.org/wp-content/uploads/2018/03/Puppy_Socialization_Position_Statement_Download_-_10-3-14.pdf"
      },
      {
        "label": "アメリカンケネルクラブ（AKC）「子犬の社会化：理由・時期・正しいやり方」",
        "url": "https://www.akc.org/expert-advice/training/puppy-socialization/"
      }
    ]
  },
  {
    "id": "sensitization",
    "term": "鋭敏化",
    "reading": "えいびんか",
    "en": "Sensitization",
    "group": "reading",
    "short": "刺激にくり返し出会ううちに、慣れるどころか反応がどんどん強くなっていくこと。",
    "body": [
      "鋭敏化とは、ある刺激をくり返し経験するうちに、反応が弱まるのではなく、逆に強くなっていくことです。馴化（慣れ）と正反対の現象で、犬はその刺激をより怖がり、より激しく反応するようになります。雷や花火の音への恐怖が、経験するたびにひどくなっていくのが典型的な例です。",
      "同じ刺激に出会っても、慣れる犬と鋭敏化する犬がいて、事前に見分けるのは難しいとされています。ただ、単に目新しいだけでなく、犬にとって少しでも「怖い」刺激ほど鋭敏化を起こしやすいと考えられています。行動修正の途中で、犬が怖がっているのに刺激を続けたり、強い刺激に長くさらし続けたりした場合にも起こりえます。",
      "家では、苦手な刺激への反応が回を追うごとに強くなっていないかを観察しましょう。強くなっているなら「そのうち慣れる」と待たずに、刺激を弱めて与える脱感作と拮抗条件づけに切り替えます。音で驚かせて行動を止める道具も鋭敏化の原因になりうるので避け、練習中に反応が以前より大きくなったと感じたら、いったん休んで獣医行動診療医や認定トレーナーに相談してください。"
    ],
    "example": "散歩コースの家の窓から吠えてくる犬に、毎日吠え返すようになり、日に日に激しくなっている犬。しばらくコースを変えてその家の前を通らないようにし、遠く離れた位置から窓の犬が見えたらおやつを出す練習を始めます。反応がそれ以上強まるのを防ぎ、少しずつ落ち着いて通れる距離を広げていけます。",
    "mistakes": [
      "「慣れさせるため」と、怖がる刺激に何度もさらし続ける",
      "缶を振る、エアスプレーを吹きつけるなど、音や驚きで吠えを止めようとする"
    ],
    "related": [
      "habituation",
      "desensitization",
      "threshold"
    ],
    "relatedCommands": [],
    "sources": [
      {
        "label": "米国獣医動物行動学会（AVSAB）「慣れるか、慣れないか：馴化と鋭敏化」",
        "url": "https://avsab.org/getting-used-to-things-or-not-habituation-vs-sensitization/"
      },
      {
        "label": "MSD（Merck）獣医マニュアル「動物の問題行動の治療」",
        "url": "https://www.merckvetmanual.com/behavior/behavioral-medicine-introduction/treatment-of-behavior-problems-in-animals"
      },
      {
        "label": "VCA Animal Hospitals「脱感作と拮抗条件づけ入門」",
        "url": "https://vcahospitals.com/know-your-pet/desensitization-and-counterconditioning"
      }
    ]
  },
  {
    "id": "lima",
    "term": "LIMA",
    "reading": "りま",
    "en": "LIMA (Least Intrusive, Minimally Aversive)",
    "group": "philosophy",
    "short": "効果が見込める方法のうち、犬への負担と不快さが最も少ないものから選ぶ考え方。",
    "body": [
      "LIMAは「Least Intrusive, Minimally Aversive（最も侵襲が少なく、嫌悪刺激が最小限）」の頭文字で、トレーナーや行動コンサルタントが方法を選ぶときの考え方です。人道的で効果が見込める方法のなかから、犬の自由や選択をなるべく奪わず、不快さの最も少ないものを選ぶことを求めます。陽性強化を最初に検討すべき方法とし、LIMAは他の有効な方法の代わりに罰を使う理由にはならない、とされています。",
      "この考え方には「人道的な介入の順序（ヒューメイン・ヒエラルキー）」が添えられています。まず健康・栄養・体の問題を獣医師が確認し、次に環境や合図など行動のきっかけを整え、陽性強化、代わりの行動の強化へと進みます。負の罰・負の強化・消去はその後で、正の罰は最後の段階に置かれています。",
      "飼い主にとっての実践はシンプルで、「やめさせたいこと」ではなく「代わりにしてほしいこと」を考えるところから始まります。困った行動があれば、まず体調を疑い、次に環境を工夫し、望ましい行動をほめて育てます。なお米国獣医動物行動学会（AVSAB）は、問題行動の治療を含むすべての犬のトレーニングで、ごほうびを使う方法だけを用いることを推奨しています。"
    ],
    "example": "散歩中に拾い食いをする犬。LIMAの順で考え、まず体調や食事量に問題がないかを確認します。次に落ちている物が多い道を避ける、リードを短めに持つなど環境を整え、そのうえで「リーブイット（放っておく）」や「ちょうだい」を教えてほめます。叱ったりリードを強く引いたりせずに、拾い食いの機会そのものが減っていきます。",
    "mistakes": [
      "LIMAを「ほかがだめなら罰を使ってよい」という許可だと受け取る",
      "体調や環境を確かめる前に、いきなりトレーニングや道具で行動を抑えようとする"
    ],
    "related": [
      "positive-reinforcement",
      "dominance-myth",
      "management"
    ],
    "relatedCommands": [
      "leave-it",
      "drop-it"
    ],
    "sources": [
      {
        "label": "CCPDT（認定プロフェッショナルドッグトレーナー評議会）「LIMA方針（最も侵襲が少なく嫌悪刺激が最小限の効果的な行動介入）」",
        "url": "https://ccpdt.org/wp-content/uploads/2021/10/LIMA-Policy-2021.pdf"
      },
      {
        "label": "米国獣医動物行動学会（AVSAB）「人道的なドッグトレーニングに関するポジションステートメント（2021）」",
        "url": "https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf"
      }
    ]
  },
  {
    "id": "dominance-myth",
    "term": "支配性理論",
    "reading": "しはいせいりろん",
    "en": "Dominance theory",
    "group": "philosophy",
    "short": "犬の問題行動を順位争いとみなし、力で従わせる考え方と、それが勧められない理由。",
    "body": [
      "支配性理論とは、犬が困った行動をするのは群れの中で上の順位を得ようとしているからで、飼い主が「リーダー」「アルファ」として力で上に立つ必要がある、という考え方です。この考え方からは、犬をあお向けに押さえつける（アルファロール）、強くにらむ、リードを強く引くといった対決的な方法が生まれました。米国獣医動物行動学会（AVSAB）は、この理論を行動修正の一般的な指針として使うことを勧めないと公式に表明しています。",
      "理由の一つは、飼い主が困る行動のほとんどが順位とは関係ないことです。むだ吠え、飛びつき、呼んでも来ないといった行動は、多くの場合、知らないうちにごほうびが与えられてきたことと、代わりの望ましい行動を教えていないことが原因です。さらに、威圧や罰は犬の恐怖や不安を強め、それが原因の攻撃行動をかえって悪化させるおそれがあります。犬どうしの関係も、単純な一直線の順位で決まっているわけではないとされています。",
      "AVSABは、リーダーシップとは力で従わせることではなく、望ましい行動をほめ、望ましくない行動がごほうびにならないようにして、ルールを分かりやすく伝えることだとしています。家では「犬が上に立とうとしている」と考える前に、その行動で犬が何を得ているのかを考えてみましょう。うなる・かむなどの攻撃的な行動がある場合は、獣医師による診察を受け、獣医行動診療医や認定トレーナーに相談してください。"
    ],
    "example": "ソファから降ろそうとするとうなる犬。「順位を思い知らせる」ために押さえつけるのではなく、まず体の痛みがないかを動物病院で確認します。そのうえで、留守中や目を離すときはソファに上がれないようにし、「オフ」やベッドに行く行動をおやつと交換で教えます。対決せずにソファから降りられるようになり、うなる場面そのものが減っていきます。",
    "mistakes": [
      "うなる・言うことを聞かない理由を、すべて「犬が自分を下に見ているから」と考える",
      "アルファロールや大声、リードを強く引くことで「上下関係」を教えようとする"
    ],
    "related": [
      "lima",
      "positive-punishment",
      "stress-signals"
    ],
    "relatedCommands": [
      "off",
      "go-to-bed"
    ],
    "sources": [
      {
        "label": "米国獣医動物行動学会（AVSAB）「動物の行動修正における支配性理論の使用に関するポジションステートメント」",
        "url": "https://avsab.org/wp-content/uploads/2018/03/Dominance_Position_Statement_download-10-3-14.pdf"
      },
      {
        "label": "米国獣医動物行動学会（AVSAB）「人道的なドッグトレーニングに関するポジションステートメント（2021）」",
        "url": "https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf"
      },
      {
        "label": "VCA Animal Hospitals「犬のコミュニケーション：犬の言葉を読む」",
        "url": "https://vcahospitals.com/know-your-pet/canine-communication---interpreting-dog-language"
      }
    ]
  }
];
