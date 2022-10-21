import docker from "../../assets/skills/skill_docker.png";
import python from "../../assets/skills/skill_python.png";
import node from "../../assets/skills/skill_node.png";
import graphql from "../../assets/skills/skill_graphql.png";
import php from "../../assets/skills/skill_php.png";
import mongo from "../../assets/skills/skill_mongo.png";
import postgresql from "../../assets/skills/skill_postgresql.png";
import mysql from "../../assets/skills/skill_mysql.png";
import typescript from "../../assets/skills/skill_typescript.png";
import javascript from "../../assets/skills/skill_javascript.png";
import git from "../../assets/skills/skill_git.png";

export default function SkillImage({skill, skillName}) {
  return (
    <>
      <div className="skill__image">
        <img src={skill} alt={`${skill}.png`} />
        <p>{skillName}</p>
      </div>
    </>
  )
}

export const skills = {
  docker,
  python,
  node,
  graphql,
  php,
  mongo,
  postgresql,
  mysql,
  typescript,
  javascript,
  git,
}