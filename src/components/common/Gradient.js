import styled from "styled-components";

const Gradient = arr => {
  console.log(arr);
  const array = arr;
  return (
    <>
      {array.map((a, index) => {
        return (
          <Gradient0 className={a + index}>
            <Gradient1></Gradient1>
            <Gradient2></Gradient2>
          </Gradient0>
        );
      })}
    </>
  );
};

export default Gradient;

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
`;
