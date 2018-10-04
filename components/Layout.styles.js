import css from 'styled-jsx/css';
import THEME from '../constants/theme';

const styles = css`
  .top-nav {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    width: 100%;
    height: ${THEME.topNavHeight};
    box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 20px;
    background-color: #fff;
    z-index: 1000;
  }

  .top-nav-links {
    margin-left: 0.8rem;
  }

  .top-nav-links a {
    color: #999;
    text-decoration: none;
    margin-right: 4.8rem;
  }

  .top-nav-links a:hover {
    color: #333;
  }

  .top-nav-links a.active {
    color: ${THEME.colors.blue};
  }
`;

export default styles;
