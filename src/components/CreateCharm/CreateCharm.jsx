import React, { useCallback, useState, useEffect } from "react";
import * as S from "./CreateCharm.style";
import Header from "../common/Header";
import Footer from "../common/Footer";
import blueback from "../../assets/images/bluegradient.png";
import CustomizedSlider from "./Range.tsx";
import { PinkButton } from "../common/PinkButton.style";

const CreateCharm = () => {
	const nickname = "이름이름";
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [num, setNum] = useState(5);
	const onChangeTitleInput = useCallback(
		(e) => {
			setTitle(e.target.value);
		},
		[title]
	);
	const onChangeContentInput = useCallback(
		(e) => {
			setContent(e.target.value);
		},
		[content]
	);
	const onChangeNumInput = (e, value) => {
		setNum(value);
	};
	useEffect(() => {
		console.log(num);
	}, [num]);
	return (
		<>
			<S.Container>
				<Header type="login" />
				<S.TopRect>
					<S.TopImg src={blueback} />
					<S.TopText>{nickname}님의 소망을 가득 담아</S.TopText>
				</S.TopRect>
				<S.QuesRect>
					<S.Ques>부적의 이름은 무엇인가요?</S.Ques>
				</S.QuesRect>
				<S.TitleInput type="text" maxLength={8} onChange={onChangeTitleInput} />
				<S.QuesRect>
					<S.Ques>부적의 내용을 적어주세요</S.Ques>
				</S.QuesRect>
				<S.ContentInput maxLength={100} onChange={onChangeContentInput} />
				<S.QuesRect>
					<S.Ques>몇 명의 응원을 받고 싶나요?</S.Ques>
				</S.QuesRect>
				<S.RangeRect>
					<CustomizedSlider value={num} onChange={onChangeNumInput} />
				</S.RangeRect>
				<S.QuesRect>
					<S.Ques>원하는 부적 이미지를 골라주세요</S.Ques>
				</S.QuesRect>
				<h1>.</h1>
				<h1>.</h1>
				<h1>.</h1>
				<h1>.</h1>
				<h1>.</h1>
				<h1>.</h1>
				<h1>.</h1>
				<h1>.</h1>
				<PinkButton
					width="165px"
					height="50px"
					size="15px"
					style={{ margin: "40px" }}
				>
					부적 생성 시작!
				</PinkButton>
				<Footer />
			</S.Container>
		</>
	);
};

export default CreateCharm;
