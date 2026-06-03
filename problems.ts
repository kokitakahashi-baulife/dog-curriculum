// お悩みのタクソノミー（軽量メタデータ）。
// ※ ユーザー向けの「お悩み解決ページ」は廃止し、すべて「ミッション」に統合した。
//    このデータは (1) スタート診断 (2) コマンド⇄お悩みの相互参照 のために残し、
//    リンク先は missionId で対応する /missions/* に飛ばす。
// 方針: 陽性強化・環境管理（LIMA準拠）。罰に頼らない。

export interface ProblemTopic {
  id: string;
  title: string; // お悩み（口語）
  missionId: string; // 対応する解決ミッション（/missions/{missionId}）
  symptom: string; // どんな状態か
  why: string; // なぜ起こるか
  solution: string; // 基本方針（陽性強化・管理）
  commandIds: string[]; // 効くコマンド（commands.ts の id）
  caution?: string; // 専門家相談など安全注記
  sources?: string[];
}

// お悩みid → 解決ミッションid を引く
export function missionIdForProblem(problemId: string): string | undefined {
  return problems.find((p) => p.id === problemId)?.missionId;
}

const AKC = "https://www.akc.org/expert-advice/";

export const problems: ProblemTopic[] = [
  {
    id: "jumping",
    missionId: "no-jump-greeting-week",
    title: "人に飛びつく",
    symptom: "出迎えや来客のとき、興奮して人に飛びついてしまう。",
    why: "飛びつくと『構ってもらえた』と学習し、興奮＋注目で強化されている。",
    solution:
      "飛びつきを叱るより、『4本足／座ったら構う』を徹底。興奮を煽って、飛びつかなかった瞬間を強化する。乗ってしまったら無言で背を向ける。",
    commandIds: ["polite-greeting", "off", "sit"],
    sources: [`${AKC}training/how-to-train-a-dog-to-stop-jumping/`],
  },
  {
    id: "scavenging",
    missionId: "no-scavenge-week",
    title: "拾い食い・誤飲しそう",
    symptom: "散歩中や室内で、落ちている物を口に入れてしまう。",
    why: "犬にとって地面の物は『早い者勝ちの宝』。止められる前に食べる方が得、と学習している。",
    solution:
      "触る前に離れる『やめなさい』を先回りで。口に入った後は交換ゲームの『出して』で安全に放させる。",
    commandIds: ["leave-it", "drop-it"],
    caution: "中毒物・鋭利物を飲んだ恐れがあるときは、すぐ動物病院へ。",
    sources: [`${AKC}training/teach-your-dog-leave-it/`],
  },
  {
    id: "pulling",
    missionId: "loose-leash-week",
    title: "リードを引っ張る",
    symptom: "散歩でぐいぐい前に引っ張り、歩きにくい・首が苦しそう。",
    why: "『引っ張れば進める』が報酬になっている。引っ張るほど目的地に近づく＝強化。",
    solution:
      "リードが張ったら止まる／たるんだら進む、を一貫。アイコンタクトで飼い主に注目させてから歩き出す。",
    commandIds: ["loose-leash", "watch-me", "heel"],
    sources: [`${AKC}training/how-to-train-your-dog-to-walk-on-a-leash/`],
  },
  {
    id: "barking",
    missionId: "visitor-calm-week",
    title: "よく吠える",
    symptom: "インターホン・通行人・要求などで吠える。",
    why: "吠える理由は多様（警戒・要求・退屈・不安）。原因で対処が変わる。",
    solution:
      "『落ち着いて』『マットへ』で代替行動を教え、吠える前に名前で注意をこちらへ。要求吠えは応じない一貫性が鍵。",
    commandIds: ["settle", "place", "watch-me", "name-response"],
    caution:
      "不安・恐怖が原因の過剰な吠えは、陽性強化の専門家（CCPDT-KA / IAABC）に相談を。",
    sources: [`${AKC}training/how-to-get-your-dog-to-stop-barking/`],
  },
  {
    id: "mouthing",
    missionId: "stop-mouthing-week",
    title: "甘噛みがひどい（子犬）",
    symptom: "手や服を噛んでくる。歯が当たって痛い。",
    why: "子犬は口で世界を確かめ、噛む力の加減を学んでいる発達段階。",
    solution:
      "噛んでよいおもちゃに誘導し、噛んだら遊びを一旦中断（噛む＝楽しいことが止まる）。咥えた物は『出して』で交換。",
    commandIds: ["drop-it", "leave-it"],
    sources: [`${AKC}training/how-to-stop-a-puppy-from-biting/`],
  },
  {
    id: "alone",
    missionId: "home-alone-week",
    title: "留守番ができない・破壊する",
    symptom: "一人になると鳴く・物を壊す・粗相する。",
    why: "一人＝不安、という関連ができている。クレートや落ち着きの土台が不足。",
    solution:
      "クレートを安心できる場所にし、不在時間を数秒から少しずつ延ばす。在宅中も『落ち着いて』で一人時間を作る。",
    commandIds: ["crate", "settle", "place"],
    caution:
      "強い分離不安（よだれ・自傷・パニック）は専門家＋獣医に相談を。罰は悪化させる。",
    sources: [`${AKC}training/separation-anxiety/`],
  },
  {
    id: "house-soiling",
    missionId: "potty-success-week",
    title: "トイレの失敗が多い",
    symptom: "決まった場所で排泄せず、室内で粗相してしまう。",
    why: "排泄したい場所がまだ定まっていない／タイミングの管理不足。失敗を叱ると隠れて排泄するように。",
    solution:
      "起床後・食後・遊んだ後にトイレへ誘導し、成功を強化。号令『ワンツー』で排泄を出せるようにする。失敗は無言で片付ける。",
    commandIds: ["potty"],
    caution: "急な失敗の増加・頻尿・血尿は膀胱炎など病気の可能性。動物病院へ。",
    sources: [`${AKC}training/how-to-potty-train-a-puppy/`],
  },
  {
    id: "no-recall",
    missionId: "recall-week",
    title: "呼んでも来ない",
    symptom: "名前や『おいで』を無視する。公園で捕まえられない。",
    why: "『おいで＝遊びが終わる・嫌なことが起きる』になっている、または般化不足。",
    solution:
      "『おいで＝必ず良いこと』を再構築。短い距離・低い誘惑から成功体験を積み、夢中の最中の中断は最後に。",
    commandIds: ["come", "name-response"],
    caution: "確実になるまでは安全な場所・ロングラインで。道路際でのノーリードは避ける。",
    sources: [`${AKC}training/how-to-teach-your-dog-to-come-when-called/`],
  },
  {
    id: "door-dashing",
    missionId: "door-wait-week",
    title: "ドアから飛び出す・脱走する",
    symptom: "玄関や車のドアが開くと外へ飛び出す。",
    why: "ドアが開く＝外に行ける、が強化されている。安全に関わる危険な癖。",
    solution:
      "『待って』でドアが開いても止まる、解除語で出る、を徹底。位置を保つ『まて』も合わせて安全を二重化。",
    commandIds: ["wait", "stay", "come"],
    caution: "交通事故の危険が高い。確実になるまで二重扉・リードで管理を。",
    sources: [`${AKC}training/how-to-teach-your-dog-to-wait/`],
  },
  {
    id: "guarding",
    missionId: "resource-guarding-safety",
    title: "物やフードを取られると唸る",
    symptom: "おもちゃ・食器・場所に近づくと、固まる・唸る・噛もうとする。",
    why: "『大事な物を守らないと取られる』という不安。叱ると不安が増し悪化する。",
    solution:
      "取り上げではなく『交換ゲーム』で“人が近づく＝もっと良いことが起きる”を教える。無理に取らない。",
    commandIds: ["drop-it", "leave-it"],
    caution:
      "唸り・歯を当てる等が出ている資源ガードは、自己流は危険。陽性強化の専門家（CCPDT-KA / IAABC）に必ず相談を。",
    sources: [`${AKC}training/resource-guarding-dogs/`],
  },
];
