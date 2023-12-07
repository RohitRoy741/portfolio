import classes from "./Skill.module.css";

import react from "../../assets/React.png";
import spring from "../../assets/Spring.png";
import sql from "../../assets/SQL.png";

const images = {
  react,
  spring,
  sql,
};

function Skill(props) {
  const image = images[props.name.split(" ")[0].toLowerCase()];
  return (
    <article className={classes["skill-article"]}>
      <div className={classes["skill-logo-container"]}>
        <img src={image} alt={props.name.split(" ")[0]} height={"35px"} />
      </div>
      <h1 className={classes["skill-name"]}>{props.name}</h1>
      <div className={classes["horizontal-bar"]}></div>
      <p className={classes["skill-description"]}>{props.description}</p>
    </article>
  );
}

export default Skill;
