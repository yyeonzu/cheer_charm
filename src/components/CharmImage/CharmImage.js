import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import package
import html2canvas from "html2canvas";

// import api
import { UploadImage } from "../../api/charm";

// import template
import yellow from "../../assets/images/CharmImage/template_yellow.svg";
import pink from "../../assets/images/CharmImage/template_pink.svg";

// import animal
import cat from "../../assets/images/CharmImage/yellow_cat.svg";
import bear from "../../assets/images/CharmImage/pink_bear.svg";

// 부적 디자인 정리
const design = [
  /*
  {
    id: 순서대로,
  template: 배경, 
  animal: 캐릭터, 
  border: wrapper의  boder 컬러, 
  background: wrapper의 bacground 컬러
  }
  */

  {
    id: 0,
    template: yellow,
    animal: cat,
    border: "#e6ce92",
    background: "#fefff5",
  },
  {
    id: 1,
    template: pink,
    animal: bear,
    border: "#FF9CC6",
    background: "#FFEBFC",
  },
];

const CharmImage = props => {
  const num = 1; // 나중에 img num으로 받아오는 상수
  html2canvas(document.getElementById("capture"), {
    backgroundColor: null,
    allowTaint: true,
    useCORS: true,
  }).then(canvas => {
    canvas.toBlob(function (blob) {
      const formData = new FormData();
      formData.append("file_front", blob);
      formData.append("file_back", blob);
      console.log(props.id);
      UploadImage(props.id, formData)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    });
  });
  return (
    <>
      <Container>
        <Template id="capture">
          <img className="background" src={design[num].template} />
          <Character src={design[num].animal} />
          <Wrapper
            background={design[num].background}
            border={design[num].border}
          >
            당신이 받은 {props.title}!
            <br />이 부적을 지니고 있으면 당신의 소망이 현실이 됩니다.
          </Wrapper>
        </Template>
        {/* <button onClick={() => onCapture()}>다운로드</button> */}
      </Container>
    </>
  );
};

export default CharmImage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* top: 0;
  left: 0; */
  z-index: -100;
  background-color: #ffffff;
`;

const Template = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;

  height: 270px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .background {
    position: absolute;
    z-index: -1;
  }
`;

const Character = styled.img`
  height: 45px;
`;

const Wrapper = styled.div`
  width: 105px;
  height: 144px;
  margin-top: 10px;

  display: flex;
  align-items: center;

  // props로 받아올 것 (background color, border clolr)
  background-color: ${props => props.background};
  border: 3px solid;
  border-color: ${props => props.border};
  border-radius: 10px;

  font-family: PFstardust;
  text-align: center;
  font-size: 13px;
  line-height: 13px;
`;
