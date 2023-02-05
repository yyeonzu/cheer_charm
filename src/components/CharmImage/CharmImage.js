import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import package
import html2canvas from "html2canvas";

// import api
import { UploadImage } from "../../api/charm";

// import template
import yellow from "../../assets/images/CharmImage/template_yellow.svg";
import pink from "../../assets/images/CharmImage/template_pink.svg";
import purple from "../../assets/images/CharmImage/template_purple.svg";
import blue from "../../assets/images/CharmImage/template_blue.svg";

// import animal
import cat1 from "../../assets/images/CharmImage/yellow_cat.svg";
import bear1 from "../../assets/images/CharmImage/pink_bear.svg";
import cat2 from "../../assets/images/CharmImage/purple_cat.svg";
import bear2 from "../../assets/images/CharmImage/blue_bear.svg";

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
    animal: cat1,
    border: "#e6ce92",
    background: "#fefff5",
  },
  {
    id: 1,
    template: pink,
    animal: bear1,
    border: "#FF9CC6",
    background: "#FFEBFC",
  },
  {
    id: 2,
    template: purple,
    animal: cat2,
    border: "#BD6ADA",
    background: "#FBEBFF",
  },
  {
    id: 3,
    template: blue,
    animal: bear2,
    border: "#5A749A",
    background: "#EBEBFF",
  },
];

const CharmImage = props => {
  const formData = new FormData();
  const { num, setUpload } = props;

  if (props.upload) {
    html2canvas(document.getElementById("capture_front"), {
      backgroundColor: null,
      allowTaint: true,
      useCORS: true,
    }).then(canvas => {
      canvas.toBlob(function (blob) {
        formData.append("file_front", blob);
      });
      html2canvas(document.getElementById("capture_back"), {
        backgroundColor: null,
        allowTaint: true,
        useCORS: true,
      }).then(canvas => {
        canvas.toBlob(function (blob) {
          formData.append("file_back", blob);
          UploadImage(props.id, formData)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        });
      });
    });
  }
  useEffect(() => {}, [formData]);

  // 스크롤 방지
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
      <Container>
        <UploadButton onClick={() => setUpload(true)}>확인</UploadButton>
        <ModalBox>
          <Template id="capture_front">
            <img className="background" src={design[num].template} />
            <Character src={design[num].animal} />
            <Wrapper
              front={true}
              background={design[num].background}
              border={design[num].border}
            >
              <div className="front">{props.title}</div>
            </Wrapper>
          </Template>
          <Template id="capture_back">
            <img className="background" src={design[num].template} />
            <Character src={design[num].animal} />
            <Wrapper
              front={false}
              background={design[num].background}
              border={design[num].border}
            >
              <div className="back">
                당신이 받은 {props.title}!
                <br />이 부적을 지니고 있으면 당신의 소망이 현실이 됩니다.
              </div>
            </Wrapper>
          </Template>
        </ModalBox>
        {/* <button onClick={() => onCapture()}>다운로드</button> */}
      </Container>
    </>
  );
};

export default CharmImage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const UploadButton = styled.button`
  position: absolute;
  top: 500px;
  z-index: 100;
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
  justify-content: center;

  // props로 받아올 것 (background color, border clolr)
  background-color: ${props => props.background};
  border: 3px solid;
  border-color: ${props => props.border};
  border-radius: 10px;

  font-family: PFstardust;
  text-align: center;

  .front {
    width: 70px;
    height: 120px;

    font-size: 24px;
    line-height: 24px;

    text-align: center;
    display: flex;
    align-items: center;
  }

  .back {
    width: 90px;
    height: 135px;

    font-size: 13px;
    line-height: 13px;

    text-align: center;
    display: flex;
    align-items: center;
  }
`;
