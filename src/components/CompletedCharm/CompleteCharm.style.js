import styled from "styled-components";
import frontImage from "../../assets/images/CompletedCharm/frontofcheer.png";
import backImage from "../../assets/images/CompletedCharm/backofcheer.png";

export const Container = styled.div`
  width: 100%;

  height: 350px;
  /* border: solid 1px; */

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlipWrapper = styled.div`
  width: 150px;
  height: 220px;
  perspective: 1000px;

  position: absolute;
  z-index: 1;

  left: ${props => props.left};
  filter: blur(${props => props.blur});
  backface-visibility: hidden;
  /* transition: 1s linear; */
`;

export const FrontWrapper = styled.div`
  width: 150px;
  height: 200px;

  position: absolute;

  backface-visibility: hidden;
  background-image: url(${frontImage});
  background-size: cover;
  transform: rotateY(${props => (props.cur ? 0 : -180)}deg);
  transition: 1s linear;
`;

export const BackWrapper = styled.div`
  width: 150px;
  height: 200px;

  position: absolute;
  backface-visibility: hidden;
  background-image: url(${backImage});
  background-size: cover;
  transform: rotateY(${props => (props.cur ? 0 : 180)}deg);
  transition: 1s linear;
`;
