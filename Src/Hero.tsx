import "./../styles/Hero.css";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-wrapper">

        <video
          className="hero-video"
          src="/videos/showreel.mp4"
          muted
          playsInline
          preload="auto"
        />

        <div className="hero-overlay" />

        <Navbar />

        <div className="hero-content">

          <h1 className="hero-heading">
            EMBER
          </h1>

          <p className="hero-subtitle">
            Premium Steakhouse • Lagos
          </p>

          <button className="hero-button">
            Reserve Table
          </button>

        </div>

        <div className="scroll-indicator">
          ↓ Scroll
        </div>

      </div>

    </section>
  );
}
