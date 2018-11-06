import RolesOverview from '../md/RolesOverview.mdx';
import RoleNavigation from '../components/RoleNavigation';
import SideNavLayout from '../components/SideNavLayout';

const Roles = () => (
  <SideNavLayout>
    <SideNavLayout.Nav>
      <RoleNavigation />
    </SideNavLayout.Nav>
    <SideNavLayout.Content>
      <RolesOverview />
    </SideNavLayout.Content>
  </SideNavLayout>
);

export default Roles;
