import styles from './SkillNavigation.styles';
import SKILLS from '../data/skills';

const SkillNavigation = () => (
  <div>
    <div>
      <a href="#engineers" className="role-link">Engineers</a>
      <div className="skill-links">
        {Object.keys(SKILLS).map(skillKey => (
          <a key={skillKey} href={`#ENGINEERS_${skillKey}`}>{SKILLS[skillKey].name}</a>
        ))}
      </div>
    </div>
    <div>
      <a href="#qa-engineers" className="role-link">QA Engineers</a>
      <div className="skill-links">
        {Object.keys(SKILLS).map(skillKey => (
          <a key={skillKey} href={`#QA_ENGINEERS_${skillKey}`}>{SKILLS[skillKey].name}</a>
        ))}
      </div>
    </div>
    <style jsx>{styles}</style>
  </div>
);


export default SkillNavigation;
