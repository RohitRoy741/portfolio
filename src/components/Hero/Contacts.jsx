import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

import classes from "./Contacts.module.css";

function Contacts() {
  return (
    <div className={classes["contacts-div"]}>
      <a href="#" target="_blank">
        <img src={github} alt="github" height={"50px"} />
      </a>
      <a href="#" target="_blank">
        <img src={linkedin} alt="linkedin" height={"50px"} />
      </a>
      <a href="#" className={classes["contact-btn"]}>Contact</a>
    </div>
  );
}

export default Contacts;
