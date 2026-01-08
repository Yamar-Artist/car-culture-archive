"use client";
import "./style.css";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const sections = [
    {
      title: "フェアレディZ S30 全体像",
      img: "/images/悪魔のZ.jpg",
      description: `
        <h1>伝説のスポーツカー：フェアレディZ S30の美学</h1>
        <p>ここでは、1970~80年代を代表する名車「フェアレディZ S30」の魅力を、デジタルアートを通じて紹介する。時代を超えて愛されるそのデザインと、現代の視点から見た価値を掘り下げていく。</p>

        <h2>時代を彩った名車のデザイン哲学</h2>
        <p>フェアレディZ S30は、流れるようなボディラインと丸型ヘッドライトが特徴のスポーツカーである。その美しさは、単なる機能美を超え、アートとしての価値を持っている。</p>

        <h3>デジタルアートで蘇るクラシックカー</h3>
        <p>掲載されている画像は、フェアレディZ S30を自分が描いたデジタルイラストである。白背景に浮かび上がるブルーの車体は、シンプルながらも力強い存在感を放つ。</p>

        <h4>細部に宿るこだわり：ホイールとバンパーの美学</h4>
        <p>厚みのあるタイヤと白いリム、黒で縁取られた窓やバンパーは、当時のスポーツカーらしい力強さと洗練を兼ね備えている。</p>

        <p>1970~80年代には、フェアレディZ S30の他にも様々なスポーツカーが生産・販売されていた。</p>

        <ul>
          <li>日産 スカイラインGT-R</li>
          <li>日産 シルビア</li>
          <li>日産 180SX</li>
          <li>トヨタ AE86</li>
          <li>トヨタ MR2</li>
          <li>トヨタ セリカ</li>
          <li>トヨタ カローラ</li>
          <li>トヨタ スープラ</li>
          <li>ホンダ シビック</li>
        </ul>

        <a href="https://nendai-ryuukou.com/1980/car.html">
          1970~80年代の名車
        </a>
      `,
    },
    {
      title: "フェアレディZ ロゴ",
      img: "/images/FairladyZ ロゴ.webp",
      description: `
        <h2>Zの象徴的なロゴ</h2>
        <p>フェアレディZのロゴは、シンプルながら強い存在感を放つデザインで、S30のアイデンティティを象徴している。</p>
      `,
    },
  ];

  return (
    <main className="s30-container">
      {/* Hero セクション */}
      <section className="s30-hero">
      <Image
        src="/images/悪魔のZ.jpg"   // ← 好きなS30の画像に変更OK
        alt="Fairlady Z S30"
        width={1600}
        height={900}
        className="s30-hero-img"
      />
      <h1 className="s30-hero-title">Fairlady Z S30</h1>
      <p className="s30-hero-sub">日本が世界に誇るスポーツカーの原点</p>
      </section>

      <h1 className="page-title">Fairlady Z S30</h1>

      {/* A案：左右交互レイアウト */}
      {sections.map((sec, index) => (
        <section
          key={index}
          className={`engine-row ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="engine-img">
            <Image
              src={sec.img}
              alt={sec.title}
              width={600}
              height={400}
            />
          </div>

          <div
            className="engine-text"
            dangerouslySetInnerHTML={{ __html: sec.description }}
          />
        </section>
      ))}

      <div className="back-link">
        <Link href="/">トップページへ戻る</Link>
      </div>

    </main>
  );
}