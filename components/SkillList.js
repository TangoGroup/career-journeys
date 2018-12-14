import SKILLS from '../data/skills';
import Skill from './Skill';

const Skills = (props) => {
  const { roles, team } = props;
  return (
    <div>
      {Object.keys(SKILLS).map(skillKey => (
        <Skill key={skillKey} skillKey={skillKey} roles={roles} team={team} />
      ))}
    </div>
  );
};

export default Skills;
