import styled from 'styled-components';
import arrowR from '../../assets/images/Landing/arrowR.svg';

export const TitleBar = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  margin-bottom: 40px;
`;

// 이 아이가 과연 정말로 필요한 것인지..
// 부적을 하나씩 옮기는 애니메이션을 위해서는 필요할 것 같은데... 한 번 알아봅시다
export const CharmWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Transparent = styled.div`
  width: 270px;
  height: 512px;

  background: rgba(253, 251, 247, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  position: relative;
  margin-bottom: 24px;
`;

export const SlideWrapper = styled.div`
  overflow: hidden;
  /* border: solid 1px; */
  width: 238px;
  height: 337px;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: -1;
`;

// 예시, API 나오면 사라질 컴포넌트
export const Div = styled.div`
  width: 238px;
  height: 337px;
`;

export const Img = styled.img`
  width: 238px;
  height: 337px;
`;

export const ArrowWrapperR = styled.img.attrs({ src: `${arrowR}` })``;

export const ArrowWrapperL = styled.img.attrs({ src: `${arrowR}` })`
  transform: scaleX(-1);
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  height: 45px;
  /* border: solid 1px; */
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: rgba(58, 58, 58, 0.1);
  padding: 4px;
`;

// 핑크 버튼
export const ButtonWrapper = styled.div``;

export const Transparent2 = styled.div`
  width: 270px;
  height: 512px;

  background: rgba(253, 251, 247, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  position: relative;
  margin-bottom: 24px;
`;
