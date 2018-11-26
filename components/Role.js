import styles from './Role.styles';
import SKILLS from '../data/skills';
import RoleSkillExpectations from './RoleSkillExpectations';

const Role = (props) => {
  const { role } = props; // eslint-disable-line react/prop-types
  return (
    <div className="root">
      <div id={role.key} className="hidden-anchor" />
      <h2>{role.title}</h2>
      <p>{role.description}</p>
      {Object.keys(SKILLS).map(skillKey => (
        <RoleSkillExpectations key={skillKey} roleKey={role.key} skillKey={skillKey} />
      ))}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Role;
