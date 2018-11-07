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

  .role {
    text-align: center;
    padding: 1.6rem;
    margin: 0.8rem;
    background-color: ${THEME.colors.green};
    color: #fff;
  }
`;

export default styles;
