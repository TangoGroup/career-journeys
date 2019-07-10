import styles from './LeftNav.styles';

const RoleNavigation = (props) => {
  const { roles } = props;
  return (
    <div>
      {roles.map(role => (
        <div key={role.key}>
          <a href={`#${role.key}`}>{role.title}</a>
        </div>
      ))}
      <style jsx>{styles}</style>
    </div>
  );
};

export default RoleNavigation;
