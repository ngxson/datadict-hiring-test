import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #27ae60;
  color: #fff;
  border-radius: 3px;
  border: 2px solid #27ae60;
  margin-right: 1em;
  padding: 0.25em 1em;

  :hover {
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.51);
  }

  ${props =>
    props.color === 'red' &&
    css`
      background-color: #e74c3c;
      border: 2px solid #e74c3c;
    `};
`;

export default Button;