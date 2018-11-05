import RolesOverview from '../md/RolesOverview.mdx';
import RolesDiagram from '../components/RolesDiagram';
import RoleNavigation from '../components/RoleNavigation';
import RoleList from '../components/RoleList';
import SideNavLayout from '../components/SideNavLayout';

const Roles = () => (
  <SideNavLayout>
    <SideNavLayout.Nav>
      <RoleNavigation />
    </SideNavLayout.Nav>
    <SideNavLayout.Content>
      <RolesOverview />
      <RolesDiagram />
      <RoleList />
    </SideNavLayout.Content>
  </SideNavLayout>
);

export default Roles;
