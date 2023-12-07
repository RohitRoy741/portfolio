import Skill from "./Skill";
import classes from "./TopSkills.module.css";

const skills = [
  {
    id: 1,
    name: "React JS",
    description:
      "I have a good grasp on Javascript and React JS library. I can leverage these tools to create responsive and interactive frontends matching the required design specifications.",
  },

  {
    id: 2,
    name: "Spring Boot",
    description:
      "I have been building backend applications and microservices using Java and Spring Boot for the last two years. I write clean, robust and performant code that results in maintainable applications.",
  },

  {
    id: 3,
    name: "SQL",
    description:
      "I am familiar with intermediate SQL and I can design database schema for complex applications. I can also write fairly complex sql queries to optimize data operations on the database.",
  },
];

function TopSkills() {
  const skillElements = skills.map((skill) => (
    <li key={skill.id}>
      {" "}
      <Skill key={skill.id} name={skill.name} description={skill.description} />
    </li>
  ));
  return (
    <section className={classes["top-skill-section"]}>
      <h1 className={classes["heading"]}>MY TOP SKILLS</h1>
      <ul className={classes["skill-list"]}>{skillElements}</ul>
    </section>
  );
}

export default TopSkills;
