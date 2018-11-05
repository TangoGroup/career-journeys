import styles from './SkillCard.styles';
import SKILLS from '../constants/skills';
import SkillIcon from './SkillIcon';

const SkillCard = (props) => {
  const { skillKey } = props;
  const skill = SKILLS[skillKey];

  return (
    <div className="root">
      <div className="heading">
        <div className="title">{skill.name}</div>
        <SkillIcon skillKey={skillKey} className="icon" />
      </div>
      <div className="body">
        <p>{skill.description}</p>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SkillCard;
