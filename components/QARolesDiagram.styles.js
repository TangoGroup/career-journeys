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

  .associate-qa-engineer, .qa-engineer {
    grid-column: 3 / span 3;
  }

  .senior-qa-engineer {
    grid-row: 3;
    grid-column: 1 / span 3;
  }

  .qa-automation-engineer {
    grid-row: 3;
    grid-column: 5 / span 3;
  }

  .qa-manager {
    grid-row: 4;
    grid-column: 1 / span 3;
  }

  .senior-qa-automation-engineer {
    grid-row: 4;
    grid-column: 5 / span 3;
  }

  .qa-director {
    grid-row: 5;
    grid-column: 1 / span 3;
  }

  .staff-qa-automation-engineer {
    grid-row: 5;
    grid-column: 5 / span 3;
  }

  .role {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1.6rem;
    margin: 0.8rem;
    background-color: ${THEME.colors.green};
    color: #fff;
  }
`;

export default styles;
