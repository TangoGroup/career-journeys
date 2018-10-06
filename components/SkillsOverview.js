import styles from './SkillsOverview.styles';
import SKILLS from '../constants/skills';
import SkillCard from './SkillCard';

const SkillsOverview = () => (
  <div className="root">
    {Object.keys(SKILLS).map(skillKey => (
      <SkillCard key={skillKey} skillKey={skillKey} />
    ))}
    <style jsx>{styles}</style>
  </div>
);

export default SkillsOverview;
