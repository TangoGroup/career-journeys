import css from 'styled-jsx/css';
import THEME from '../constants/theme';

const styles = css`
  .root {
    max-width: 26rem;
    display: flex;
    flex-direction: column;
  }

  .heading {
    background-color: ${THEME.colors.blue};
    padding: 2.4rem;
    color: #fff;
    font-size: 1.8rem;
  }

  .body {
    background-color: #efefef;
    padding: 0.8rem 0.8rem 2.4rem 2.4rem;
    flex-grow: 1;
  }

  .body ul {
    margin: 0;
    padding-left: 2.4rem;
  }
`;

export default styles;
