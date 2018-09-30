import ROLES from '../constants/roles';

const Roles = () => (
  <div>
    <h1>Roles</h1>
    <div>
      {Object.keys(ROLES).map((roleKey) => {
        const role = ROLES[roleKey];
        return (
          <div key={roleKey}>
            <h2>{role.title}</h2>
            <p>{role.description}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Roles;
