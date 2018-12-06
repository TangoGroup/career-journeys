import SKILLS from '../data/skills';
import Skill from './Skill';

const Skills = (props) => {
  const { roles } = props;
  return (
    <div>
      {Object.keys(SKILLS).map(skillKey => (
        <Skill key={skillKey} skillKey={skillKey} roles={roles} />
      ))}
    </div>
  );
};

export default Skills;
