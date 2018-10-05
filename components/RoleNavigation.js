import ROLES from '../constants/roles';
import styles from './RoleNavigation.styles';

const RoleNavigation = () => (
  <div>
    {Object.keys(ROLES).map((roleKey) => {
      const { title } = ROLES[roleKey];

      return (
        <div key={roleKey}>
          <a href={`#${roleKey}`} className="role-link">{title}</a>
        </div>
      );
    })}
    <style jsx>{styles}</style>
  </div>
);

export default RoleNavigation;
