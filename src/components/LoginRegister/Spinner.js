import React from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const Spinner = () => {
  return (
    <>
      <Overlay>
        <BeatLoader color="#AFAFAF" height={15} width={3} />
      </Overlay>
    </>
  );
};

export default Spinner;

const Overlay = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
