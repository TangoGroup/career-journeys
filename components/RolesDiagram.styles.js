import css from 'styled-jsx/css';
import THEME from '../lib/theme';

const styles = css`
  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .role-group {
    display: flex;
    flex-direction: row;
  }

  .role {
    min-width: 20rem;
    text-align: center;
    padding: 1.6rem;
    margin: 0.8rem;
    background-color: ${THEME.colors.green};
    color: #fff;
  }

  .role.wide {
    min-width: 30rem;
  }
`;

export default styles;
