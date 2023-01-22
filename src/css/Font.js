import styled from 'styled-components';

export const NanoomSquare = styled.p`
  font-family: 'NanoomSquare';
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  line-height: ${({ height }) => height};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export const Galmuri = styled.p`
  font-family: 'Galmuri';
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  line-height: ${({ height }) => height};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
`;
