import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./CheeredCharm.style";
import CompleteCharm from "../CompletedCharm/CompleteCharm";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ProgressBar from "../common/progressbar/ProgressBar";
import CheeredList from "./CheeredList";
import logo from "../../assets/images/CharmPage/charmpagelogo.svg";
import speechbubble from "../../assets/images/CharmPage/speechbubble.svg";
import { NanoomSquare, Galmuri } from "../../css/Font.js";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import Background from "../common/Background";
import { GetCharm } from "../../api/charm";

import charm1 from "../../assets/images/Charm/charm1.svg";
import charm2 from "../../assets/images/Charm/charm2.svg";
import charm3 from "../../assets/images/Charm/charm3.svg";
import charm4 from "../../assets/images/Charm/charm4.svg";
import charm5 from "../../assets/images/Charm/charm5.svg";
import charm6 from "../../assets/images/Charm/charm6.svg";

const CheeredCharm = () => {
  const isLogin = !!localStorage.getItem("token");
  const params = useParams();
  const src = [charm1, charm2, charm3, charm4, charm5, charm6];
  const [modal, setModal] = useState(false);

  // 부적 이미지 애니메이션 관리
  const [charmclick, setCharmclick] = useState(true);

  const [currentCharm, setCurrentCharm] = useState({});
  const [total, setTotal] = useState(0);
  const [cur, setCur] = useState(0);
  useEffect(() => {
    GetCharm(params.charm_id)
      .then(res => {
        setCurrentCharm(res.data.data);
        setTotal(res.data.data.total_cheer);
        setCur(res.data.data.cur_cheer);
      })
      .catch();
  }, []);
  return (
    <>
      <Background>
        <Header type={isLogin ? "login" : "logout"} />
        <S.LogoContainer>
          <S.LogoImg src={logo} />
        </S.LogoContainer>
        <S.CharmContainer>
          <CompleteCharm click={charmclick} />
        </S.CharmContainer>
        <Galmuri size="18px" weight="700" color="#3A3A3A" margin="0 0 10px 0">
          {currentCharm.title}
        </Galmuri>
        <div className="button-container">
          <S.ButtonRect onClick={e => setCharmclick(!charmclick)}>
            <MdOutlineFlipCameraAndroid size="12" />
            <NanoomSquare size="11px" weight="400">
              부적 뒷면 보기
            </NanoomSquare>
          </S.ButtonRect>
        </div>
        <div className="button-container">
          <S.ButtonRect onClick={() => alert("엥")}>
            <FiDownload size="12" />
            <NanoomSquare size="11px" weight="400">
              부적 이미지 저장하기
            </NanoomSquare>
          </S.ButtonRect>
        </div>
        <ProgressBar total={total} done={cur} isRight={false} />
        <S.BubbleContainer>
          <S.BubbleImg src={speechbubble} />
          <div className="text1">친구들의 응원을 모아 부적 생성 완료!</div>
          <div className="text2">( ˘͈ ᵕ ˘͈♡)˚๐*˟</div>
        </S.BubbleContainer>
        <S.CheerTitleContainer>
          <S.CheerTitleBlue className="icon">💌</S.CheerTitleBlue>
          <div className="inner">
            <S.CheerTitleBlue className="name">
              {currentCharm.nickname}
            </S.CheerTitleBlue>
            <S.CheerTitle>님에게 도착한</S.CheerTitle>
            <div className="one">
              <S.CheerTitleBlue>{cur}</S.CheerTitleBlue>
              <S.CheerTitle>개의 응원</S.CheerTitle>
            </div>
          </div>
        </S.CheerTitleContainer>
        <S.CheerContainer>
          <div className="inner">
            <CheeredList modal={modal} setModal={setModal} />
          </div>
        </S.CheerContainer>
        <Footer />
      </Background>
    </>
  );
};

export default CheeredCharm;
