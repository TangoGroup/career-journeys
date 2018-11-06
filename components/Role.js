import styles from './Role.styles';
import ROLES from '../data/roles';
import SKILLS from '../data/skills';
import RoleSkillExpectations from './RoleSkillExpectations';

const Role = (props) => {
  const { roleKey } = props; // eslint-disable-line react/prop-types
  const role = ROLES[roleKey];
  return (
    <div className="root">
      <div id={roleKey} className="hidden-anchor" />
      <h2>{role.title}</h2>
      <p>{role.description}</p>
      {Object.keys(SKILLS).map(skillKey => (
        <RoleSkillExpectations key={skillKey} roleKey={roleKey} skillKey={skillKey} />
      ))}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Role;
