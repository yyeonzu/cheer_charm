import styled from "styled-components";
import background from "../../assets/images/background.png";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url(${background});
	background-repeat: repeat-y;
	background-size: 100%;
	position: relative;
`;

export const TopRect = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
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
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin-top: 10px;
`;

export const Ques = styled.div`
	font-family: "Galmuri";
	font-weight: 400;
	font-size: 15px;
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
	font-family: "NanoomSquare";
	font-weight: 400;
	font-size: 15px;
	margin: 10px 0;
	padding-left: 7px;
`;

export const ContentInput = styled.textarea`
	width: 85%;
	height: 90px;
	background-color: #fdfbf7;
	border-radius: 8px;
	border: 0;
	&:focus {
		outline: none;
	}
	resize: none;
	font-family: "NanoomSquare";
	font-weight: 400;
	font-size: 15px;
	margin: 10px 0;
	padding: 7px;
`;
