import ROLES from '../constants/roles';

const Role = (props) => {
  const { roleKey } = props; // eslint-disable-line react/prop-types
  const role = ROLES[roleKey];
  return (
    <div key={roleKey}>
      <h2>{role.title}</h2>
      <p>{role.description}</p>
    </div>
  );
};

export default Role;
