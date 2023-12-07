import Contacts from "./Contacts";
import classes from "./Intro.module.css";

function Intro() {
  return (
    <div className={classes["intro-div"]}>
      <p className={classes["greeting"]}>HELLO WORLD!</p>
      <h1 className={classes["name"]}>I&apos;M ROHIT ROY</h1>
      <h2 className={classes["title"]}>FULLSTACK SOFTWARE DEVELOPER</h2>
      <p className={classes["description"]}>
        I have 2 years of industry experience working as a fullstack software
        developer. I have worked on various tech stacks and I am always ready to
        learn new technologies.
      </p>
      <Contacts />
    </div>
  );
}

export default Intro;
