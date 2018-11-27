import { QA_ROLES_ARRAY } from '../data/qa-roles';
import QARolesOverview from '../md/QARolesOverview.mdx';
import RoleNavigation from '../components/RoleNavigation';
import SideNavLayout from '../components/SideNavLayout';

const Roles = () => (
  <SideNavLayout>
    <SideNavLayout.Nav>
      <RoleNavigation roles={QA_ROLES_ARRAY} />
    </SideNavLayout.Nav>
    <SideNavLayout.Content>
      <QARolesOverview />
    </SideNavLayout.Content>
  </SideNavLayout>
);

export default Roles;
