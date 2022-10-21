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
