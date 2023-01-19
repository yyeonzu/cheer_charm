import React, { useEffect, useRef, useState } from 'react';
import { Galmuri, NanoomSquare } from '../../css/Font';
import * as S from './YesCharm.style';
import temp from '../../assets/images/Landing/landinglogo.svg';
import linkicon from '../../assets/images/linkicon.svg';
import ProgressBar from '../common/progressbar/ProgressBar';
import { PinkButton } from '../common/PinkButton.style';

// 눈 내리는 애니메이션 아직 적용 X
// scss를 통해 해야할 지 pure css로도 가능할 지 잘 고민해보고 적용하기

// 부적 목록을 불러오는 방법
// 랜딩페이지에서 필요한 항목: 전체 id에 대한 부적 목록만 불러올 수 있으면 된다
// 부적 목록을 불러오면, 부적 이미지 & 비율만 뽑아서 렌더링하면 된다.

// 이 때 done/total은 버튼이 클릭될 때마다 렌더링을 새로 해줘야한다
// 이미지의 경우 하나의 div 내에 전부 저장되어 있고, 이를 하나씩 이동시켜주는 것이므로 numbering에 주의

const YesCharm = () => {
  // 닉네임 받아오기 (전역변수에 함께 존재하지 않을까)
  const nickname = '성연';

  // 응원 개수
  // 이 때 done과 total은 가짜 db에서 받아오기
  // 굳이 useState로 받아와야하는 이유가 있는가? <= 고민해보기
  const [done, setDone] = useState(0);
  const [total, setTotal] = useState(10);
  // 전체 부적 개수
  const [numberOfCheer, setNumberOfCheer] = useState(2);
  // 현재 보여지는 부적 id
  const [charmId, setCharmId] = useState(0);

  // 전체 data 받아오기 (image 정렬할 때 필요) <= 물론 이걸 굳이 여기서 할 필요는??
  const response = 0;

  // done과 total 할당
  useEffect(() => {
    setDone(charmId);
    // setTotal(charmId);
  }, [charmId]);

  // Sliding 부적과 관련된 코드

  // 렌더링없이 이미지 슬라이딩을 위해 ref를 사용
  // 하지만 이미지 슬라이딩 때 어차피 progress도 함께 변하기 때문에, 굳이 ref를 사용할 필요는 없다고도 생각한다.
  // 이미 슬라이드를 이렇게 구현했으니 일단은 그대로...

  const slideRef = useRef(null);
  const [imageOrder, setImageOrder] = useState(0);
  const IMG_WIDTH = 238; // 상수값으로 지정, 부적과  동일한 width
  const slideRange = imageOrder * IMG_WIDTH; // 애니메이션 범위

  // imageOrder가 바뀔 때마다 애니메이션
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
  }, [imageOrder]);

  // 좌,우 버튼에 대한 함수
  const moveToPrevSlide = () => {
    if (imageOrder === 0) {
      setImageOrder(numberOfCheer - 1);
      setCharmId(numberOfCheer - 1);
      return;
    }
    setImageOrder(imageOrder - 1);
    setCharmId(charmId + 1);
  };

  const moveToNextSlide = () => {
    if (imageOrder === numberOfCheer - 1) {
      setImageOrder(0);
      setCharmId(0);
      return;
    }
    setImageOrder(imageOrder + 1);
    setCharmId(charmId + 1);
  };

  return (
    <>
      <S.TitleBar>
        <Galmuri size='15px' weight='700'>
          {nickname}님의 부적을 위한
        </Galmuri>
        <Galmuri
          size='20px'
          weight='700'
          color='#748EDB'
          margin='0px 0px 0px 4px'
        >
          응원
        </Galmuri>
        <Galmuri size='15px' weight='700'>
          이 쌓이는 중이에요!
        </Galmuri>
      </S.TitleBar>

      {/* 부적 페이지 */}
      <S.CharmWrapper>
        <S.ArrowWrapperL onClick={moveToPrevSlide} />
        <S.Transparent>
          <S.SlideWrapper>
            <S.ImageWrapper ref={slideRef}>
              {/* {data.map((data) => (
                <S.Img key={data.id} src={data.image} />
              ))} */}
              <S.Img src={temp} />
              <S.Img src={linkicon} />
            </S.ImageWrapper>
          </S.SlideWrapper>
          <S.ProgressBarWrapper>
            <ProgressBar done={done} total={total} />
          </S.ProgressBarWrapper>
          <S.LinkWrapper>
            <img src={linkicon} />
            <NanoomSquare size='14px' weight='400' margin='0 0 0 6px'>
              내 부적 링크 복사하기
            </NanoomSquare>
          </S.LinkWrapper>
        </S.Transparent>
        <S.ArrowWrapperR onClick={moveToNextSlide} />
      </S.CharmWrapper>
      <S.ButtonWrapper>
        <PinkButton width='160px' height='50px' radius='30px'>
          새 부적 만들러 가기
        </PinkButton>
      </S.ButtonWrapper>
    </>
  );
};

export default YesCharm;
