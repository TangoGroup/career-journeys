import css from 'styled-jsx/css';
import THEME from '../constants/theme';

const styles = css`
  .heading {
    background-color: ${THEME.colors.blue};
    padding: 2.4rem;
    color: #fff;
    font-size: 1.8rem;
  }

  .body {
    background-color: #efefef;
    padding: 2.4rem 0;
  }

  .body ul {
    margin: 0;
  }
`;

export default styles;
