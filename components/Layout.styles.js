import css from 'styled-jsx/css';
import THEME from '../constants/theme';

const styles = css`
  .root {

  }

  .top-nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: ${THEME.topNavHeight};
    box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 20px;
    background-color: #fff;
  }

  .top-nav-links {
    width: 100%;
    text-align: center;
    max-width: ${THEME.containerMaxWidth};
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
