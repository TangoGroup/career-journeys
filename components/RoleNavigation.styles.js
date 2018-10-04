import css from 'styled-jsx/css';
import THEME from '../constants/theme';

const styles = css`
  .root {
    position: fixed;
    left: 0;
    top: ${THEME.topNavHeight};
    bottom: 0;
    width: ${THEME.leftNavWidth};
    padding: 0.8rem 1.6rem;
    background-color: #efefef;
    font-size: 1.8rem;
  }

  a.role-link {
    display: inline-block;
    width: 100%;
    padding: 0.8rem 0;
    text-decoration: none;
    color: #333;
  }

  a.role-link:hover {
    color: #999;
  }
`;

export default styles;
