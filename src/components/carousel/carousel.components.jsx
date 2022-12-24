import SkillImage, {skills} from "../skill/skill.components";
import "./carousel.components.scss";

export default function SkillsCarousel() {
  return (
    <div className="section__carousel">
      <div className="carousel__skills">
        <SkillImage skill={skills.docker} skillName='Docker' />
        <SkillImage skill={skills.python} skillName='Python' />
        <SkillImage skill={skills.node} skillName='Node.js' />
        <SkillImage skill={skills.graphql} skillName='GraphQL' />
        <SkillImage skill={skills.postgresql} skillName='PostgreSQL' />
        <SkillImage skill={skills.php} skillName='PHP' />
        <SkillImage skill={skills.mongo} skillName='MongoDB' />
        <SkillImage skill={skills.docker} skillName='Docker' />
        <SkillImage skill={skills.python} skillName='Python' />
        <SkillImage skill={skills.node} skillName='Node.js' />
        <SkillImage skill={skills.graphql} skillName='GraphQL' />
        <SkillImage skill={skills.postgresql} skillName='PostgreSQL' />
        <SkillImage skill={skills.php} skillName='PHP' />
        <SkillImage skill={skills.mongo} skillName='MongoDB' />
      </div>
    </div>
  )
}