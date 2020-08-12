import styled from 'styled-components';

const Half = styled.div`
  display: inline-block;
  padding: 1em;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Grid = { Half };

export default Grid;