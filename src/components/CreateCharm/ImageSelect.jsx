import React, { useState, useEffect } from "react";
import * as S from "./CreateCharm.style";
import charm1 from "../../assets/images/Charm/0charm.svg";
import charm2 from "../../assets/images/Charm/1charm.svg";
import charm3 from "../../assets/images/Charm/2charm.svg";
import charm4 from "../../assets/images/Charm/3charm.svg";
import charm5 from "../../assets/images/Charm/4charm.svg";
import charm6 from "../../assets/images/Charm/5charm.svg";

const ImageSelect = ({ setDesign }) => {
  const src = [charm1, charm2, charm3, charm4, charm5, charm6];
  const [clicked, setClicked] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });
  useEffect(() => {
    if (clicked.first === true) setDesign(0);
    else if (clicked.second === true) setDesign(1);
    else if (clicked.third === true) setDesign(2);
    else if (clicked.fourth === true) setDesign(3);
    else if (clicked.fifth === true) setDesign(4);
    else if (clicked.sixth === true) setDesign(5);
    else setDesign("");
  }, [clicked]);
  return (
    <>
      <S.CharmRect
        onClick={() =>
          setClicked({
            first: true,
            second: false,
            third: false,
            fourth: false,
            fifth: false,
            sixth: false,
          })
        }
      >
        <S.CharmImg src={src[0]} />
        <S.Circle>
          {clicked.first === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            first: false,
            second: true,
            third: false,
            fourth: false,
            fifth: false,
            sixth: false,
          })
        }
      >
        <S.CharmImg src={src[1]} />
        <S.Circle>
          {clicked.second === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            first: false,
            second: false,
            third: true,
            fourth: false,
            fifth: false,
            sixth: false,
          })
        }
      >
        <S.CharmImg src={src[2]} />
        <S.Circle>
          {clicked.third === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            first: false,
            second: false,
            third: false,
            fourth: true,
            fifth: false,
            sixth: false,
          })
        }
      >
        <S.CharmImg src={src[3]} />
        <S.Circle>
          {clicked.fourth === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            first: false,
            second: false,
            third: false,
            fourth: false,
            fifth: true,
            sixth: false,
          })
        }
      >
        <S.CharmImg src={src[4]} />
        <S.Circle>
          {clicked.fifth === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
      <S.CharmRect
        onClick={() =>
          setClicked({
            first: false,
            second: false,
            third: false,
            fourth: false,
            fifth: false,
            sixth: true,
          })
        }
      >
        <S.CharmImg src={src[5]} />
        <S.Circle>
          {clicked.sixth === true ? <S.CheckedCircle /> : null}
        </S.Circle>
      </S.CharmRect>
    </>
  );
};

export default React.memo(ImageSelect);
