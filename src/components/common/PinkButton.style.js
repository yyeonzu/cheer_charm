import styled from 'styled-components';

export const PinkButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  outline: none;
  background-color: #f9d7cd;
  font-family: Galmuri;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => (props.radius ? props.radius : '20px')};
  font-size: ${(props) => (props.size ? props.size : '14px')};
`;
