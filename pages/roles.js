import ROLES from '../constants/roles';
import Role from '../components/Role';

const Roles = () => (
  <div>
    <h1>Roles</h1>
    <div>
      {Object.keys(ROLES).map(roleKey => (
        <Role key={roleKey} roleKey={roleKey} />
      ))}
    </div>
  </div>
);

export default Roles;
