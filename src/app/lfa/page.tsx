"use client";
import Image from "next/image";
import "./style.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
    <main className="lfa-container">

      <section className="hero">
        <Image
          src="/images/LEXUS_LFA.jpg"
          alt="LEXUS LFA"
          width={1600}
          height={900}
          className="hero-img"
        />
        <h1 className="hero-title">LEXUS LFA</h1>
        <p className="hero-sub">職人の情熱と技術の結晶 日本が生んだスーパーカー</p>
      </section>

      {/* ② LFAとは */}
      <section className="section">
        <h2>LFAとは何か</h2>
        <div className="section-flex">
          <p>
            Lexus LFA は、レクサスが世界に向けて放ったフラッグシップスーパーカーであり、日本の自動車技術の象徴ともいえる存在である。
            10年以上にわたる開発期間を経て2010年に市販化され、世界限定500台のみが生産された。
            その軽量なカーボンボディ、F1を思わせる高回転V10エンジン、そして徹底した職人技によって、LFAは「日本が本気で作ったスーパーカー」として今なお高い評価を受けている。
          </p>
          <Image
            src="/images/LEXUS_LFA_driftver.jpg"
            alt="LFA"
            width={500}
            height={300}
            className="side-img"
          />
        </div>
      </section>

      {/* ③ 開発ストーリー */}
      <section className="section">
        <h2>開発ストーリー：10年越しの挑戦</h2>
        <div className="section-flex reverse">
          <Image
            src="/images/V6エンジン.jpg"
            alt="LFA 開発"
            width={500}
            height={300}
            className="side-img"
          />
          <p>
            LFAの開発は2000年代初頭に始まり、当初はアルミフレームを採用したプロトタイプとして発表された。
            しかし、開発チームは「世界基準のスーパーカーを作る」という目標を掲げ、素材から設計思想まで根本的に見直すことを決断。
            その結果、トヨタ自社開発のCFRP（炭素繊維強化プラスチック）技術が誕生し、ボディの65%以上がカーボン製という革新的な構造が実現した。
            試作と改良を繰り返し、10年以上の歳月をかけて完成したLFAは、まさに執念と情熱の結晶である。
          </p>
        </div>
      </section>

      {/* ④ V10エンジン */}
      <section className="section">
        <h2>V10エンジン：咆哮の正体</h2>
        <Image
          src="/images/LEXUS_LFA_V10エンジン.webp"
          alt="LFA V10"
          width={900}
          height={600}
          className="center-img"
        />
        <p>
          LFAの心臓部は、ヤマハと共同開発された4.8L V型10気筒自然吸気エンジン。
          9,000rpmまで一気に吹け上がる鋭いレスポンスは、当時の市販車では異例の領域だった。
          エンジン音は「天使の咆哮」と称され、吸気・排気・機械音を綿密に調律することで、F1マシンを思わせる高周波サウンドを実現している。
          0-100km/h加速は約3.7秒、最高速度は325km/h。
          単なるスペック以上に、ドライバーの感性に訴えかけるエンジンとして語り継がれている。
        </p>
      </section>

      {/* ⑤ デザインと空力 */}
      <section className="section">
        <h2>デザインとエアロダイナミクス</h2>
        <div className="section-flex reverse">
          <Image
            src="/images/LEXUS_LFA_circuitver.jpg"
            alt="LFA デザイン"
            width={900}
            height={700}
            className="side-img"
          />
          <p>
            LFAのデザインは、空力性能と冷却性能を最優先に考えた“機能美”が特徴。
            フロントの大型エアインテーク、サイドの深いダクト、リアの固定式三連エキゾーストなど、すべてが走行性能に直結している。
            カーボンモノコック構造により高い剛性と軽量化を両立し、インテリアはレクサスらしい上質さと先進性を融合。
            メーターはアナログでは追いつかないほどの回転上昇速度に対応するため、デジタルタコメーターが採用されている。
          </p>
        </div>
      </section>
        
      {/* ⑥ 走行性能 */}
      <section className="section">
        <h2>走行性能とドライビング体験</h2>
        <div className="section-flex reverse">
          <Image
            src="/images/LEXUS_LFA_Speedmater.jpg"
            alt="LFA 開発"
            width={500}
            height={300}
            className="side-img"
          />
          <p>
            LFAはフロントミッドシップ・リアトランスアクスルというレイアウトを採用し、理想的な重量配分を実現している。
            ステアリングの応答性、ブレーキの制動力、シャシー剛性の高さが相まって、サーキットでも極めて高い安定性とコントロール性を発揮する。
            特にニュルブルクリンクで鍛え上げられた「LFA Nürburgring Package」は、空力強化・サスペンション改良・出力向上が施され、よりレーシングカーに近い走りを実現した。
          </p>
        </div>
      </section>

      {/* ⑦ 限定生産 */}
      <section className="section">
        <h2>限定生産と希少性</h2>
        <p>
            LFAは世界限定500台、日本国内では約165台のみが販売された。
            購入希望者は抽選制で、レクサスは「本当に大切に乗ってくれる人」を選ぶため、オーナー審査を行ったことでも話題になった。
            現在の中古市場では価格が新車時より高騰しており、希少性とブランド価値の高さからコレクターズアイテムとして扱われている。
        </p>
      </section>

        {/* ⑧ LFAの遺産 */}
      <section className="section">
        <h2> LFAが残したもの：未来へ受け継がれる哲学</h2>
          <Image
            src="/images/TOYOTA_GR_GT_etc.jpg"
            alt="LFA 開発"
            width={900}
            height={300}
            className="center-img"
          />
          <Image
            src="/images/TOYOTA_GR_GT_etc2.jpg"
            alt="LFA 開発"
            width={900}
            height={600}
            className="center-img"
          />
          <p>
            Lexus LFAは、日本のスーパーカー史において特別な存在だ。  
            CFRPモノコック、F1を思わせる高回転V10、徹底した軽量化と音響設計など、当時のトヨタが持つ技術と情熱を極限まで注ぎ込んだ結果、LFAは「官能性を追求するクルマづくり」という新しい基準をレクサスにもたらした。  
            この哲学はRC FやLC500など後続モデルに受け継がれ、レクサスのスポーツライン全体の方向性を決定づけた。

            近年では、このLFAの精神を現代的に継承する存在として「GR GT（GR Grand Touring）」が登場した。  
            電動化時代における“ドライバーズカーの理想像”を追求し、ロングノーズのプロポーションや軽量・高剛性ボディ、空力重視の設計など、随所にLFAの思想が息づいている。  
            GR GTは、LFAが示した“感性の走り”を新しい技術で再構築したモデルと言える。

            さらにレクサス自身も、LFA後継を強く意識した次世代スーパーカー「Lexus Electrified Sport」を発表している。  
            全固体電池を視野に入れた電動パワートレイン、2秒台を想定する加速性能、LFAを思わせるシルエットなど、明らかに“LFAの精神的後継”として開発が進められている。  
            レクサスはこのモデルについて「LFAの走りの感性を継承する」と明言しており、LFAの哲学が未来の電動スーパーカーへと確実に受け継がれている。
            
            LFAは過去の名車でありながら、今もなおトヨタとレクサスのスポーツカー開発を方向づける存在だ。  
            そのレガシーは、GR GTや次世代レクサスのフラッグシップモデルへとつながり、未来のスポーツカーに息づき続けている。
          </p>
      </section>



      {/* ⑨ ギャラリー */}
      <section className="section">
        <h2>ギャラリー</h2>
        <div className="gallery">
          <Image src="/images/LEXUS_LFA.jpg" width={300} height={200} alt="" />
          <Image src="/images/LEXUS_LFA_driftver.jpg" width={300} height={200} alt="" />
          <Image src="/images/LEXUS_LFA_V10エンジン.webp" width={300} height={200} alt="" />
          <Image src="/images/LEXUS_LFA_circuitver.jpg" width={300} height={200} alt="" />
          <Image src="/images/LEXUS_LFA_Speedmater.jpg" width={300} height={200} alt="" />
          <Image src="/images/TOYOTA_GR_GT_etc.jpg" width={300} height={200} alt="" />
          <Image src="/images/TOYOTA_GR_GT_etc2.jpg" width={300} height={200} alt="" />
        </div>
      </section>

      {/* ⑩ スペック表 */}
      <section className="section">
        <h2>LEXUS LFA スペック一覧</h2>
        <table className="spec-table">
          <tbody>
            <tr><th>エンジン形式</th><td>4.8L V10 DOHC</td></tr>
            <tr><th>最高出力</th><td>560ps / 8,700rpm</td></tr>
            <tr><th>最大トルク</th><td>480Nm / 6,800rpm</td></tr>
            <tr><th>0-100km/h</th><td>3.7秒</td></tr>
            <tr><th>最高速度</th><td>325km/h</td></tr>
            <tr><th>車両重量</th><td>1,480kg</td></tr>
          </tbody>
        </table>
      </section>
      <div className="back-link">
        <Link href="/">トップページへ戻る</Link>
      </div> 
    </main>
    </>
  );
}