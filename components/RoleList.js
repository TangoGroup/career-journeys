import ROLES from '../constants/roles';
import Role from './Role';
import styles from './RoleList.styles';

const RoleList = () => (
  <div>
    {Object.keys(ROLES).map(roleKey => (
      <Role key={roleKey} roleKey={roleKey} />
    ))}
    <style jsx>{styles}</style>
  </div>
);

export default RoleList;
