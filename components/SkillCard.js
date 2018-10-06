import styles from './SkillCard.styles';
import SKILLS from '../constants/skills';

const SkillCard = (props) => {
  const { skillKey } = props;
  const skill = SKILLS[skillKey];

  return (
    <div className="root">
      <div className="heading">
        <div className="title">{skill.name}</div>
      </div>
      <div className="body">
        <p>{skill.description}</p>
        <ul>
          {skill.details.map(detail => <li key={detail}>{detail}</li>)}
        </ul>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default SkillCard;
