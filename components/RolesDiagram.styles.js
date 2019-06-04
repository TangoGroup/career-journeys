import css from 'styled-jsx/css';
import THEME from '../lib/theme';

const styles = css`
  .root {
    max-width: 50rem;
    margin: auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-content: center;
  }
`;

export const roleStyles = css`
  .role {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 1.6rem;
    margin: 0.8rem;
    background-color: ${THEME.colors.green};
  }

  .role a {
    color: #fff;
    text-decoration: none;
  }

  .associate-engineer, .engineer, .senior-engineer {
    grid-column: 3 / span 3;
  }

  .staff-engineer {
    grid-column: 2 / span 5;
  }

  .senior-staff-engineer {
    grid-row: 5;
    grid-column: 1 / span 3;
  }

  .engineering-manager {
    grid-row: 5;
    grid-column: 5 / span 3;
  }

  .principal-engineer {
    grid-row: 6;
    grid-column: 1 / span 3;
  }

  .engineering-director {
    grid-row: 6;
    grid-column: 5 / span 3;
  }
`;

export const functionStyles = css`
  .function {
    display: block;
    margin-top: 0.8rem;
    padding: 0.8rem 0;
    background-color: ${THEME.colors.yellow};
  }

  .function a {
    color: #fff;
    text-decoration: none;
  }
`;
export default styles;
