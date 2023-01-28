import styled from "styled-components";
import { React, useEffect } from "react";
import Gradient from "./Gradient";

const Background = ({ children }) => {
  let arr = [];
  useEffect(() => {
    arr = [];
    calculate();
    console.log(arr.length);
  }, []);
  const calculate = () => {
    let height = document.body.scrollHeight;
    let times = Math.ceil(height / 520);
    for (let i = 0; i < times; i++) {
      arr.push("gradient");
    }
  };
  return (
    <>
      <Container>
        {arr.length != 0 && <Gradient arr={arr} />}
        {children}
      </Container>
    </>
  );
};

export default Background;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
