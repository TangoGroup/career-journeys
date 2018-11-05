import styles from './SkillCards.styles';
import SKILLS from '../data/skills';
import SkillCard from './SkillCard';

const SkillCards = () => (
  <div className="root">
    {Object.keys(SKILLS).map(skillKey => (
      <SkillCard key={skillKey} skillKey={skillKey} />
    ))}
    <style jsx>{styles}</style>
  </div>
);

export default SkillCards;
