import { style } from "@mui/system";
import React, { useRef } from "react";
import styled from "styled-components";
import frontImage from "../../assets/images/CompletedCharm/nullframe2.svg";

import DomToImage from "dom-to-image";
import { saveAs } from "file-saver";

const CharmImage = () => {
  const imageRef = useRef();

  const onDownloadBtn = () => {
    const image = imageRef.current;
    console.log(image);
    DomToImage.toBlob(image).then(blob => {
      saveAs(blob, "charm.png");
    });
  };
  return (
    <>
      <Container ref={imageRef}>
        <ImageWrapper src={frontImage} />
        <TextWrapper>
          <Text>부적제목이</Text>
          <Text>이런식으로들어가요</Text>
          <Text>제목은세줄까지?</Text>
        </TextWrapper>
      </Container>
      <Button onClick={onDownloadBtn}>다운로드</Button>
    </>
  );
};

export default CharmImage;

const Container = styled.div`
  position: static;
  /* height: 358px; */
  /* border: solid 1px; */
  width: max-content;
`;

const ImageWrapper = styled.img`
  /* position: absolute; */
  z-index: 0;
`;

const TextWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  margin-left: 10px;
  width: 200px;
`;

const Text = styled.div`
  font-family: "Dunggeunmo";
  font-size: 22px;
  color: black;
`;

const Button = styled.button`
  position: absolute;
  z-index: 100;
`;
