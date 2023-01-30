import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const TopRect = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: initial;
`;

export const TopImg = styled.img`
  width: 100%;
  height: auto;
  position: relative;
`;

export const TopText = styled.div`
  position: absolute;
  right: 10px;
  font-family: "Galmuri";
  font-weight: 700;
  font-size: 19px;
  color: #3a3a3a;
  text-align: right;
  word-break: keep-all;
`;

export const QuesRect = styled.div`
  width: 85%;
  min-height: 30px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  overflow: initial;
`;

export const Ques = styled.div`
  font-family: "Galmuri";
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  overflow: initial;
  text-align: left;
  word-break: keep-all;
  position: absolute;
  left: 0;
`;

export const TitleInput = styled.input`
  width: 85%;
  height: 35px;
  background-color: #fdfbf7;
  border-radius: 8px;
  border: 0;
  &:focus {
    outline: none;
  }
  font-family: "Galmuri";
  font-weight: 400;
  font-size: 14px;
  margin: 10px 0;
  padding-left: 10px;
`;

export const ContentInput = styled.textarea`
  width: 85%;
  height: 100px;
  background-color: #fdfbf7;
  border-radius: 8px;
  border: 0;
  &:focus {
    outline: none;
  }
  resize: none;
  font-family: "Galmuri";
  font-weight: 400;
  font-size: 14px;
  margin: 10px 0;
  padding: 10px 0 0 10px;
`;

export const RangeRect = styled.div`
  width: 88%;
  height: 80px;
  overflow-x: initial;
  margin-top: 10px;
  div {
    overflow-x: initial;
  }
  span {
    overflow-x: initial;
  }
  .css-1f77kgo {
    width: calc(100% - 24px);
    .MuiSlider-root {
      width: 100%;
      .MuiSlider-mark {
        margin-left: -4px;
        background-color: #97b094;
      }
      .MuiSlider-markActive {
        display: none;
      }
      .MuiSlider-markLabel {
        font-family: "Galmuri";
        font-weight: 400;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
      }
      .MuiSlider-markLabelActive {
        color: #000;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 85%;
  min-height: 830px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const CharmRect = styled.div`
  width: 48%;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CharmImg = styled.img`
  width: 90%;
  height: auto;
  object-fit: contain;
`;

export const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #afafaf;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckedCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #4a4a4a;
`;
