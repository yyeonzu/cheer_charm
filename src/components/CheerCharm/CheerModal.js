import React, { useEffect } from "react";
import styled from "styled-components";
import cheerbubble from "../../assets/images/CharmPage/cheerbubble.svg";

const CheerModal = props => {
  const { isModalOpen, closer, from, text } = props;
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <>
      {isModalOpen ? (
        <Container>
          <Background onClick={closer} />
          <ModalBlock>
            <Contents>
              <img src={cheerbubble} />
              <Text1>From. {from}</Text1>
              <div className="inner">
                <Text2>
                  {text && text.includes("\n") ? (
                    <>
                      {text.split("\n").map(line => {
                        return (
                          <span>
                            {line}
                            <br />
                          </span>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <span>{text}</span>
                    </>
                  )}
                </Text2>
              </div>
            </Contents>
          </ModalBlock>
        </Container>
      ) : null}
    </>
  );
};

export default React.memo(CheerModal);

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBlock = styled.div`
  position: relative;
  background-color: transparent;
  width: 85%;
  height: auto;
  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -20px;
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
  img {
    width: 100%;
    height: auto;
  }
  .inner {
    width: 80%;
    height: 130px;
    position: absolute;
    top: 95px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Text1 = styled.div`
  font-family: "PFStardust";
  font-weight: 600;
  font-size: 16px;
  position: absolute;
  top: 45px;
  left: 38px;
`;

const Text2 = styled.div`
  font-family: "PFStardust";
  text-align: center;
  font-size: 13px;
  line-height: 20px;
  word-break: keep-all;
`;
