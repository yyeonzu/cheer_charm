import React, { useState } from "react";
import * as S from "./CheeringCharm.style";
import Footer from "../common/Footer";
import ProgressBar from "../common/progressbar/ProgressBar";
import CheerList from "./CheerList";
import NotYetModal from "./NotYetModal";
import logo from "../../assets/images/CharmPage/charmpagelogo.svg";
import speechbubble from "../../assets/images/CharmPage/speechbubble.svg";
import testcharm from "../../assets/images/testcharm.png";
import { NanoomSquare } from "../../css/Font.js";
import { AiOutlineLink } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CheeringCharm = () => {
	let total = 10;
	let done = 6;
	const nickname = "이이름이름";
	const currentURL = window.location.href;
	const cheers = [
		{ name: "일이삼사오육칠팔구십일이", content: "내용~" },
		{ name: "하이2", content: "내용~" },
		{ name: "하이3", content: "내용~" },
		{ name: "하이4", content: "내용~" },
		{ name: "하이5", content: "내용~" },
		{ name: "하이6", content: "내용~" },
	];
	const [modal, setModal] = useState(false);
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
						{cheers && <CheerList cheers={cheers} setModal={setModal} />}
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
