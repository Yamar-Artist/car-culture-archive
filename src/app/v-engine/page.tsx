"use client";
import Image from "next/image";
import "./style.css";
import Link from "next/link";

export default function Page() {
  const historyHTML = `
    <h1>V型エンジンの歴史</h1>
    <p>V型エンジンは19世紀末〜20世紀初頭に登場し、自動車・航空機・レーシングカーなどで「高出力とコンパクトさ」を両立させるエンジンとして発展してきた形式である。</p>

    <h2>誕生と黎明期</h2>
    <p>V型エンジンは、シリンダーをV字状に配置して全長を短くしつつ、多気筒化による高出力・低振動を狙って考案された内燃機関レイアウトである。
    20世紀初頭にはフランスでV型8気筒がボートや自動車用として開発され、1900年代前半には航空機用エンジンにも採用されるようになった。</p>

    <h3>自動車への本格普及</h3>
    <p>1909年、フランスのド・ディオン・ブートンが市販乗用車にV型8気筒エンジンを採用し、V型エンジンが乗用車分野に本格的に導入され始めた。
    実用水準に達したV8としてよく知られるのが1910年代のキャデラックのV型8気筒で、高級車で主流だった直列6気筒に対抗するため、小型・高回転・低振動を狙って採用された。</p>

    <h4>アメリカでの大衆化</h4>
    <p>1920〜30年代には、アメリカでV8が「高級レイアウト」から大衆車レベルにまで普及し、特にフォードは中級車が直列6気筒を採用する流れに対抗して、自社の大衆車にV型8気筒を積極的に投入した。
    1950年代にはOHV式V8の開発ラッシュが起こり、シボレーのスモールブロックV8などが軽量・高出力・低コストの代表的なエンジンとしてアメリカ車の歴史を形作った。</p>

    <h5>レーシングと高性能車での発展</h5>
    <p>V型エンジンは、限られたスペースで高出力を求められるモータースポーツにも早期から導入され、1950年代以降のフォーミュラカーではV型が主流形式の一つとなった。
    排気量1.5リッター規制の時期には直列や水平対向も使われたが、多くのチャンピオンマシンはV型を採用し、排気量上限が3リッター超に変わった1990年代にはほぼV型一色となった。</p>

    <h6>近現代の多気筒Vエンジン</h6>
    <p>スポーツカーや高級GTカーの分野では、V6・V8に加え、より滑らかな回転と高出力を狙ったV型12気筒が「フラッグシップ・エンジン」として採用されてきた。
    1960年代のランボルギーニ・ミウラは、大排気量V型12気筒をミッドシップ横置きで搭載したスーパーカーとして知られ、その後のスーパーカー像に大きな影響を与えた。</p>
  `;

  const engines = [
    {
      title: "V6エンジン",
      img: "/images/V6エンジン.jpg",
      description: `
        <h3>V6エンジン</h3>
        <p><b>特徴：</b> コンパクトで軽量。直列6より短く、FF車にも搭載しやすい。</p>
        <p><b>代表車：</b> 日産 フェアレディZ（Z32〜Z34）、ホンダ NSX、トヨタ ハリアー。</p>
      `,
    },
    {
      title: "V8エンジン",
      img: "/images/V8エンジン.avif",
      description: `
        <h3>V8エンジン</h3>
        <p><b>特徴：</b> パワフルで高回転域までスムーズ。スポーツカー・高級車の定番。</p>
        <p><b>代表車：</b> フォード マスタング、シボレー コルベット、レクサス LC500。</p>
      `,
    },
    {
      title: "V10エンジン",
      img: "/images/LEXUS_LFA_V10エンジン.webp",
      description: `
        <h3>V10エンジン</h3>
        <p><b>特徴：</b> 高回転・高出力。レーシング技術のフィードバックが多い。</p>
        <p><b>代表車：</b> レクサス LFA、ランボルギーニ ガヤルド、BMW M5（E60）。</p>
      `,
    },
    {
      title: "V12エンジン",
      img: "/images/V12エンジン.webp",
      description: `
        <h3>V12エンジン</h3>
        <p><b>特徴：</b> 極めて滑らかで高級車の象徴。大排気量で圧倒的トルク。</p>
        <p><b>代表車：</b> フェラーリ F12、ランボルギーニ アヴェンタドール、ロールスロイス ファントム。</p>
      `,
    },
  ];

  return (
    <main className="lfa-container">

      {/* ヒーロー */}
      <section className="hero">
        <Image
          src="/images/V8エンジン.avif"
          alt="V型エンジン"
          width={1600}
          height={900}
          className="hero-img"
        />
        <h1 className="hero-title">V型エンジンの歴史と種類</h1>
        <p className="hero-sub">高出力 × コンパクト × 技術革新の象徴</p>
      </section>

      {/* 導入 */}
      <section className="section">
        <h2>V型エンジンとは</h2>
        <p>
          V型エンジンは、シリンダーをV字状に配置することで高出力とコンパクトさを両立したエンジン形式であり、
          スポーツカー・高級車・レーシングカーに広く採用されてきた。
        </p>
      </section>

      {/* 歴史セクション */}
      <section className="section">
        <h2>V型エンジンの歴史</h2>
        <div
          className="history-block"
          dangerouslySetInnerHTML={{ __html: historyHTML }}
        />
      </section>

      {/* A案：左右交互レイアウト */}
      {engines.map((engine, index) => (
        <section
          key={index}
          className={`engine-row ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="engine-img">
            <Image
              src={engine.img}
              alt={engine.title}
              width={600}
              height={400}
            />
          </div>

          <div
            className="engine-text"
            dangerouslySetInnerHTML={{ __html: engine.description }}
          />
        </section>
      ))}

      {/* 戻るリンク */}
      <div className="back-link">
        <Link href="/">トップページへ戻る</Link>
      </div>

    </main>
  );
}