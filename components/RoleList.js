import ROLES from '../constants/roles';
import Role from './Role';

const RoleList = () => (
  <div>
    {Object.keys(ROLES).map(roleKey => (
      <Role key={roleKey} roleKey={roleKey} />
    ))}
  </div>
);

export default RoleList;
