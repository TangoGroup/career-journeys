import SKILLS from '../constants/skills';
import Skill from '../components/Skill';
import SkillsOverview from '../components/SkillsOverview';

const Skills = () => (
  <div>
    <SkillsOverview />
    <div>
      {Object.keys(SKILLS).map(skillKey => (
        <Skill key={skillKey} skillKey={skillKey} />
      ))}
    </div>
  </div>
);

export default Skills;
