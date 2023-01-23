import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: solid; */
  margin-bottom: 50px;
`;

export const TitleBar = styled.div`
  margin-top: 40px;
  margin-bottom: 54px;
  display: flex;
  flex-direction: column;
`;

export const AddBox = styled.div`
  width: 222px;
  height: 320px;

  background: rgba(58, 58, 58, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 500px;
  height: 60px;
`;
