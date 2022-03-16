import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import Img from "../components/sections/img";
import Portfolio from "../components/sections/portfolio";
import Head from "../components/sections/head";
import Services from "../components/sections/services";
import Prefooter from "../components/sections/prefooter";

export default function Home() {
  return (
    <>
      <Hero title="Frontend Developer & Digital Designer" />
      <Head cont="left" title="Great brands need great decisions" />
      <Services />

      <section className="image-section" data-scroll-section>
        <div
          className="image-section-container"
          data-scroll
          data-scroll-speed="-5"
        >
          <Img src="/images/03.webp" fallback="/images/02.webp" alt="banner" />
        </div>
      </section>
      <Head
        cont="right"
        title="We can create an amazing digital experience together"
      />
      <About />

      <Head cont="left" title="Selected works" />
      <Portfolio />
    </>
  );
}
