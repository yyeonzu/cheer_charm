import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import style.js & fonts
import { Galmuri, NanoomSquare } from "../../css/Font";
import * as S from "./YesCharm.style";
// import Components
import ProgressBar from "../common/progressbar/ProgressBar";
import { PinkButton } from "../common/PinkButton.style";

// import api
import { GetCreatingCharm } from "../../api/charm";
import { RequestGetUser } from "../../api/user";

// import library
import CopyToClipboard from "react-copy-to-clipboard";

/*
  미완성

  4. 애니메이션 (눈내리기, 프로그레스바)

*/

const YesCharm = () => {
  // baseURL (배포 이후 변경 예정)
  const BASE_URL = "http://localhost:3000";
  const navigate = useNavigate();
  // id value
  const [id, setId] = useState();
  // 닉네임
  const [nickname, setNickname] = useState("");

  // 닉네임 길이 (title bar overflow 관련)
  const [namelength, setNicknamelength] = useState(0);

  // 전체 부적 리스트 (생성중인)
  const [charmlists, setCharmlists] = useState();

  // 전체 부적 개수 (생성중인)
  const [numberOfCheer, setNumberOfCheer] = useState();

  // 현재 보여지는 부적 id
  const [charmId, setCharmId] = useState(1);

  // 응원 개수
  const [done, setDone] = useState(0);
  const [total, setTotal] = useState(0);

  // 부적 링크
  const [hlink, setHlink] = useState("");

  useEffect(() => {
    GetCreatingCharm().then(response => {
      setCharmlists(response.data.data);
      setNumberOfCheer(response.data.data.length);
    });
    RequestGetUser().then(response => {
      setId(response.data.data.id);
      setNickname(response.data.data.nickname);
      setNicknamelength(response.data.data.username.length);
    });
    // console.log("렌더링");
  }, []);

  // 현재 보여지는 부적에 따른 progress bar 변경
  useEffect(() => {
    // console.log("렌더링2");
    // early return
    if (!charmlists) return;
    setDone(charmlists[charmId - 1].cur_cheer);
    setTotal(charmlists[charmId - 1].total_cheer);
    setHlink(charmlists[charmId - 1].id);
    // console.log("렌더링3");
  }, [charmId]);

  // 이미지 슬라이더를 위한 Ref
  const slideRef = useRef(null);
  const [imageOrder, setImageOrder] = useState(0);
  const IMG_WIDTH = 238; // 상수값, 부적과  동일한 width
  const slideRange = imageOrder * IMG_WIDTH; // 애니메이션 범위

  // imageOrder가 바뀔 때마다 애니메이션
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
  }, [imageOrder]);

  // prev 버튼 이벤트
  const moveToPrevSlide = e => {
    e.preventDefault();
    if (imageOrder === 0) {
      setImageOrder(numberOfCheer - 1);
      setCharmId(numberOfCheer);
      return;
    }
    setImageOrder(imageOrder - 1);
    setCharmId(charmId - 1);
  };

  // next 버튼 이벤트
  const moveToNextSlide = e => {
    e.preventDefault();
    if (imageOrder === numberOfCheer - 1) {
      setImageOrder(0);
      setCharmId(1);
      return;
    }
    setImageOrder(imageOrder + 1);
    setCharmId(charmId + 1);
  };

  return (
    <>
      <S.SnowingBack>
        <S.TitleBar length={namelength}>
          <Galmuri size="15px" weight="700">
            {nickname}님의 부적을 위한
          </Galmuri>
          <S.MiniTitle>
            <Galmuri
              size="18px"
              weight="700"
              color="#748EDB"
              margin="0px 0px 0px 4px"
            >
              응원
            </Galmuri>
            <Galmuri size="15px" weight="700">
              이 쌓이는 중이에요!
            </Galmuri>
          </S.MiniTitle>
        </S.TitleBar>
      </S.SnowingBack>

      {/* 부적 페이지 */}
      <S.CharmWrapper>
        <S.ArrowWrapperL onClick={moveToPrevSlide} />
        <S.Transparent>
          <S.SlideWrapper>
            <S.ImageWrapper ref={slideRef}>
              {charmlists &&
                charmlists.map(data => (
                  <S.Img
                    key={data.id}
                    src={require(`../../assets/images/Charm/${data.image.toLowerCase()}charm.png`)}
                  ></S.Img>
                ))}
            </S.ImageWrapper>
          </S.SlideWrapper>
          <S.ProgressBarWrapper>
            <ProgressBar done={done} total={total} isRight={true} />
          </S.ProgressBarWrapper>
          <CopyToClipboard
            text={`${BASE_URL}/${id}/charm_id/${hlink}`}
            onCopy={() =>
              alert(
                "현재 부적 링크를 클립보드에 복사했습니다.\n다양한 곳에 공유하여 응원을 모아보세요!",
              )
            }
          >
            <S.LinkWrapper>
              <S.LinkImage />
              <NanoomSquare size="14px" weight="400" margin="0 0 0 6px">
                내 부적 링크 복사하기
              </NanoomSquare>
            </S.LinkWrapper>
          </CopyToClipboard>
        </S.Transparent>
        <S.ArrowWrapperR onClick={moveToNextSlide} />
      </S.CharmWrapper>
      <S.ButtonWrapper>
        <PinkButton
          onClick={() => navigate("/create-charm")}
          width="160px"
          height="50px"
          radius="30px"
          margin="0px 2px 10px 2px"
        >
          새 부적 만들러 가기
        </PinkButton>
      </S.ButtonWrapper>
    </>
  );
};

export default YesCharm;
