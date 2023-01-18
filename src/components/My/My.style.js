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
`;

export const MyBox = styled.div`
	width: 90%;
	height: 600px;
	display: flex;
	flex-direction: column;
	margin-top: 50px;
	border-radius: 30px;
	background-color: #fdfbf7;
`;
