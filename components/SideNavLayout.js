import { contentStyles, navStyles } from './SideNavLayout.styles';

const SideNavLayout = ({ children }) => (
  <div>
    {children}
  </div>
);

SideNavLayout.Nav = ({ children }) => (
  <div>
    {children}
    <style jsx>{navStyles}</style>
  </div>
);

SideNavLayout.Content = ({ children }) => (
  <div>
    {children}
    <style jsx>{contentStyles}</style>
  </div>
);

export default SideNavLayout;
