import Intro from "./Intro";
import Picture from "./Picture";

import classes  from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes["hero-section"]}>
      <Picture />
      <Intro />
    </section>
  );
}

export default Hero;
