import SKILLS from '../constants/skills';

const Skills = () => (
  <div>
    <h1>Skills</h1>
    <div>
      {Object.keys(SKILLS).map((skillKey) => {
        const skill = SKILLS[skillKey];
        return (
          <div key={skillKey}>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Skills;
