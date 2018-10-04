import Link from 'next/link';
import styles from './Layout.styles';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="root">
      <div className="top-nav">
        <div className="top-nav-links">
          <Link href="/"><a>Home</a></Link>
          <Link href="/roles"><a>Roles</a></Link>
          <Link href="/skills"><a>Skills</a></Link>
        </div>
      </div>
      {children}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Layout;
