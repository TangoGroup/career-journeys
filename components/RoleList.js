import Role from './Role';

const RoleList = (props) => {
  const { roles } = props;
  return (
    <div>
      {roles.map(role => <Role key={role.key} role={role} />)}
    </div>
  );
};

export default RoleList;
