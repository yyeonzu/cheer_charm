import React, { useEffect, useState } from "react";
import * as S from "./CompleteCharm.style";

const CompleteCharm = props => {
  const [front, setFront] = useState(true);

  useEffect(() => {
    setFront(props.click);
  });

  return (
    <>
      <S.Container>
        <S.FlipWrapper left="35%" blur="2px">
          <S.FrontWrapper cur={!front}></S.FrontWrapper>
          <S.BackWrapper cur={front}></S.BackWrapper>
        </S.FlipWrapper>
        <S.FlipWrapper left="25%">
          <S.FrontWrapper cur={front}></S.FrontWrapper>
          <S.BackWrapper cur={!front}></S.BackWrapper>
        </S.FlipWrapper>
      </S.Container>
    </>
  );
};

export default CompleteCharm;

// 부모 div로 하위를 모두 감싸야 함
// 하위 div는 나머지는 동일한데,
