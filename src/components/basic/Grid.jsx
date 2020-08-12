import styled from 'styled-components';

const Half = styled.div`
  padding: 1em;
  width: 50%;
  max-height: 100vh;
  overflow: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Grid = { Half };

export default Grid;