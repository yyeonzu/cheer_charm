import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PopUp = ({ isModalOpen, text1, text2 }) => {
  const [opacity, setOpacity] = useState(100);
  useEffect(() => {
    softRemover();
  }, [softRemover]);

  function softRemover() {
    if (opacity > 96) {
      setTimeout(() => {
        setOpacity(opacity - 1);
      }, 400);
    } else if (opacity > 5)
      setTimeout(() => {
        setOpacity(opacity - 8);
      }, 50);
  }
  return (
    <>
      {isModalOpen ? (
        <Container>
          <Background />
          <ModalBlock opacity={`${opacity}%`}>
            <Contents>
              <div className="inner">
                <Text>{text1}</Text>
                <Text style={{ marginBottom: "5px" }}>{text2}</Text>
              </div>
            </Contents>
          </ModalBlock>
        </Container>
      ) : null}
    </>
  );
};

export default React.memo(PopUp);

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: auto;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
`;

const ModalBlock = styled.div`
  position: absolute;
  bottom: 20%;
  background-color: #969696;
  width: 85%;
  height: 75px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  border-radius: 18px;
  animation: modal-show 0.3s;
  opacity: ${props => props.opacity};
  overflow: hidden;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: 20px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Text = styled.div`
  font-family: "Galmuri";
  font-stretch: condensed;
  font-size: 13px;
  width: 90%;
  height: auto;
  text-align: center;
  margin: 3px 0;
  word-break: keep-all;
`;
