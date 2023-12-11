import rohit from "../../assets/Rohit.png";

import classes from "./Picture.module.css";

function Picture() {
  return (
    <div className={classes["profile-div"]}>
      <img className={classes["profile-pic"]} src={rohit} alt="rohit"/>
    </div>
  );
}

export default Picture;
