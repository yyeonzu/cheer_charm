import styled from "styled-components";
import sparkle from "../../assets/images/sparkle.svg";

const Background = ({ children }) => {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Container>
        {arr.map(a => {
          return (
            <Gradient0 key={a} style={{ marginTop: `${520 * a}px` }}>
              <Gradient1>
                <S2 src={sparkle} style={{ left: "20%", top: "10%" }} />
                <S1 src={sparkle} style={{ left: "85%", top: "16%" }} />
                <S1 src={sparkle} style={{ left: "55%", top: "25%" }} />
                <S2 src={sparkle} style={{ left: "85%", top: "50%" }} />
                <S1 src={sparkle} style={{ left: "12%", top: "52%" }} />
                <S1 src={sparkle} style={{ left: "55%", top: "25%" }} />
                <S2 src={sparkle} style={{ left: "60%", top: "75%" }} />
                <S1 src={sparkle} style={{ left: "92%", top: "90%" }} />
              </Gradient1>
              <Gradient2>
                <S2 src={sparkle} style={{ left: "20%", bottom: "10%" }} />
                <S1 src={sparkle} style={{ left: "85%", bottom: "16%" }} />
                <S1 src={sparkle} style={{ left: "55%", bottom: "25%" }} />
                <S2 src={sparkle} style={{ left: "85%", bottom: "50%" }} />
                <S1 src={sparkle} style={{ left: "10%", bottom: "65%" }} />
                <S1 src={sparkle} style={{ left: "38%", bottom: "52%" }} />
                <S1 src={sparkle} style={{ left: "55%", bottom: "25%" }} />
                <S1 src={sparkle} style={{ left: "60%", bottom: "80%" }} />
                <S1 src={sparkle} style={{ left: "92%", bottom: "90%" }} />
              </Gradient2>
            </Gradient0>
          );
        })}
        {children}
      </Container>
    </>
  );
};

export default Background;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Gradient0 = styled.div`
  width: 100%;
  height: 520px;
  position: absolute;
  z-index: -5;
`;

const Gradient1 = styled.div`
  width: 100%;
  height: 260px;
  background: linear-gradient(
    107.73deg,
    #eae7ec 0,
    #efebe6 15.24%,
    #e7eae7 30.97%,
    #d4dfe6 47.18%,
    #d9dfe9 62.42%,
    #e1e0e9 78.15%,
    #f0ece9 94.37%
  );
  position: relative;
`;

const Gradient2 = styled.div`
  width: 100%;
  height: 260px;
  background: linear-gradient(
    107.73deg,
    #eae7ec 0,
    #efebe6 15.24%,
    #e7eae7 30.97%,
    #d4dfe6 47.18%,
    #d9dfe9 62.42%,
    #e1e0e9 78.15%,
    #f0ece9 94.37%
  );
  transform: matrix(1, 0, 0, -1, 0, 0);
  position: relative;
`;

const S1 = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
`;

const S2 = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
`;
