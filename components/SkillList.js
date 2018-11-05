import SKILLS from '../constants/skills';
import Skill from './Skill';

const Skills = () => (
  <div>
    {Object.keys(SKILLS).map(skillKey => (
      <Skill key={skillKey} skillKey={skillKey} />
    ))}
  </div>
);

export default Skills;
