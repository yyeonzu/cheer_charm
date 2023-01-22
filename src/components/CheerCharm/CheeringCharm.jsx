import React, { useState, useEffect } from "react";
import * as S from "./CheeringCharm.style";
import Footer from "../common/Footer";
import ProgressBar from "../common/progressbar/ProgressBar";
import CheeringList from "./CheeringList";
import NotYetModal from "./NotYetModal";
import logo from "../../assets/images/CharmPage/charmpagelogo.svg";
import speechbubble from "../../assets/images/CharmPage/speechbubble.svg";
import testcharm from "../../assets/images/testcharm.png";
import { NanoomSquare, Galmuri } from "../../css/Font.js";
import { AiOutlineLink } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { testlist } from "../../_mock/data2";

import charm1 from "../../assets/images/Charm/charm1.svg";
import charm2 from "../../assets/images/Charm/charm2.svg";
import charm3 from "../../assets/images/Charm/charm3.svg";
import charm4 from "../../assets/images/Charm/charm4.svg";
import charm5 from "../../assets/images/Charm/charm5.svg";
import charm6 from "../../assets/images/Charm/charm6.svg";

const CheeringCharm = () => {
	const src = [charm1, charm2, charm3, charm4, charm5, charm6];
	const nickname = "이이름이름";
	const currentURL = window.location.href;
	const [modal, setModal] = useState(false);

	const [cId, setCId] = useState(1);
	// 부적 개별 조회 api

	const [currentCharm, setCurrentCharm] = useState({});
	const [total, setTotal] = useState(0);
	const [done, setDone] = useState(0);
	useEffect(() => {
		for (let i = 0; i < testlist.length; i++) {
			if (testlist[i].id === cId) {
				setCurrentCharm(testlist[i]);
			}
		}
		setTotal(currentCharm.total_cheer);
		setDone(currentCharm.cur_cheer);
		console.log(currentCharm, total, done);
	});
	return (
		<>
			<S.Container>
				<S.LogoContainer>
					<S.LogoImg src={logo} />
				</S.LogoContainer>
				<S.CharmContainer>
					<S.CharmImg src={src[currentCharm.image]} />
				</S.CharmContainer>
				<Galmuri size="18px" weight="700" color="#3A3A3A" margin="0 0 10px 0">
					{currentCharm.title}
				</Galmuri>
				<ProgressBar total={total} done={done} isRight={false} />
				<S.BubbleContainer>
					<S.BubbleImg src={speechbubble} />
					<div className="text1">
						부적이 완성되려면 응원 {total - done} 개가 더 필요해요
					</div>
					<div className="text2">｡ﾟ(ﾟ Ĭ ^ Ĭ ﾟ )ﾟ｡</div>
				</S.BubbleContainer>
				<CopyToClipboard
					text={currentURL}
					onCopy={() => {
						console.log("주소 복사 성공, ", currentURL);
						alert(
							"현재 부적 링크를 클립보드에 복사했습니다.\n다양한 곳에 공유하여 응원을 모아보세요!"
						);
					}}
				>
					<S.LinkRect>
						<AiOutlineLink size="12" />
						<NanoomSquare size="11px" weight="400">
							내 부적 링크 복사하기
						</NanoomSquare>
					</S.LinkRect>
				</CopyToClipboard>
				<S.CheerTitleContainer>
					<S.CheerTitleBlue className="icon">💌</S.CheerTitleBlue>
					<div className="inner">
						<S.CheerTitleBlue className="name">{nickname}</S.CheerTitleBlue>
						<S.CheerTitle>님에게 도착한</S.CheerTitle>
						<S.CheerTitleBlue>{done}</S.CheerTitleBlue>
						<S.CheerTitle>개의 응원</S.CheerTitle>
					</div>
				</S.CheerTitleContainer>
				<S.CheerContainer>
					<div className="inner">
						<CheeringList setModal={setModal} cId={cId} />
					</div>
				</S.CheerContainer>
				<Footer />
			</S.Container>
			{modal ? (
				<NotYetModal isModalOpen={modal} closer={() => setModal(false)} />
			) : null}
		</>
	);
};

export default CheeringCharm;
