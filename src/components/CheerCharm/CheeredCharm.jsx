import React, { useState } from "react";
import * as S from "./CheeredCharm.style";
import Footer from "../common/Footer";
import ProgressBar from "../common/progressbar/ProgressBar";
import CheerList from "./CheerList";
import logo from "../../assets/images/CharmPage/charmpagelogo.svg";
import speechbubble from "../../assets/images/CharmPage/speechbubble.svg";
import testcharm from "../../assets/images/testcharm.png";
import { NanoomSquare } from "../../css/Font.js";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { FiDownload } from "react-icons/fi";

const CheeredCharm = () => {
	let total = 10;
	let done = 10;
	const nickname = "이름이름";
	const cheers = [
		{ name: "일이삼사오육칠팔구십일이", content: "내용~" },
		{ name: "하이2", content: "내용~" },
		{ name: "하이3", content: "내용~" },
		{ name: "하이4", content: "내용~" },
		{ name: "일이삼사오육칠팔구십일이", content: "내용~" },
		{ name: "하이6", content: "내용~" },
		{ name: "하이7", content: "내용~" },
		{ name: "하이8", content: "내용~" },
		{ name: "일이삼사오육칠팔구십일이", content: "내용~" },
		{ name: "하이10", content: "내용~" },
	];
	return (
		<>
			<S.Container>
				<S.LogoContainer>
					<S.LogoImg src={logo} />
				</S.LogoContainer>
				<S.CharmContainer>
					<S.CharmImg src={testcharm} />
				</S.CharmContainer>
				<ProgressBar total={total} done={done} isRight={false} />
				<S.BubbleContainer>
					<S.BubbleImg src={speechbubble} />
					<div className="text1">친구들의 응원을 모아 부적 생성 완료!</div>
					<div className="text2">( ˘͈ ᵕ ˘͈♡)˚๐*˟</div>
				</S.BubbleContainer>
				<S.ButtonRect>
					<MdOutlineFlipCameraAndroid size="12" />
					<NanoomSquare size="11px" weight="400">
						부적 뒷면 보기
					</NanoomSquare>
				</S.ButtonRect>
				<S.ButtonRect>
					<FiDownload size="12" />
					<NanoomSquare size="11px" weight="400">
						부적 이미지 저장하기
					</NanoomSquare>
				</S.ButtonRect>
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
					<div className="inner">{cheers && <CheerList cheers={cheers} />}</div>
				</S.CheerContainer>
				<Footer />
			</S.Container>
		</>
	);
};

export default CheeredCharm;
