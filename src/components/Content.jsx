import Button from "./Button";
import Logos from "./Logos";

const Content = () => {
  return (
    <main>
      <section>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button text={"Learn more"} />
        <Logos />
      </section>
      <picture>
        <source
          media="(min-width: 700px)"
          srcSet="/images/image-hero-desktop.png"
        />
        <img src="/images/image-hero-mobile.png" alt="hero image" />
      </picture>
    </main>
  );
};

export default Content;
