"use client";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

export default function Home() {
  return (
    <main className="home-container">

      {/* Hero セクション */}
      <section className="home-hero">
        <Image
          src="/images/TOYOTA_GR_GT_etc.jpg"
          alt="Car Hero"
          width={1600}
          height={900}
          className="home-hero-img"
        />
        <h1 className="home-hero-title">CAR CULTURE ARCHIVES</h1>
        <p className="home-hero-sub">日本の名車 × 技術 × 歴史</p>
      </section>

      {/* カードリンク */}
      <section className="home-links">
        <Link href="/lfa" className="home-card">
          <h2>Lexus LFA</h2>
          <p>究極のV10スーパーカー</p>
        </Link>

        <Link href="/v-engine" className="home-card">
          <h2>V型エンジン特集</h2>
          <p>V6 / V8 / V10 / V12 の魅力</p>
        </Link>

        <Link href="/s30" className="home-card">
          <h2>Fairlady Z S30</h2>
          <p>日本が誇るスポーツカーの原点</p>
        </Link>
      </section>

    </main>
  );
}