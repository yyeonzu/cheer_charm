import React, { useEffect } from "react";
import styled from "styled-components";
import cheerbubble from "../../assets/images/CharmPage/cheerbubble.svg";

const CheerModal = (props) => {
	const { isModalOpen, closer } = props;
	useEffect(() => {
		document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = "";
			window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
		};
	}, []);
	return (
		<>
			{isModalOpen ? (
				<Container>
					<Background onClick={closer} />
					<ModalBlock>
						<Contents>
							<img src={cheerbubble} />
						</Contents>
					</ModalBlock>
				</Container>
			) : null}
		</>
	);
};

export default React.memo(CheerModal);

const Container = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 100;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
`;

const Background = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	animation: modal-bg-show 0.3s;
	@keyframes modal-bg-show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const ModalBlock = styled.div`
	position: relative;
	background-color: transparent;
	width: 85%;
	height: auto;
	animation: modal-show 0.3s;
	@keyframes modal-show {
		from {
			opacity: 0;
			margin-top: -20px;
		}
		to {
			opacity: 1;
			margin-top: 0;
		}
	}
`;

const Contents = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 100%;
		height: auto;
	}
`;

const Text = styled.div`
	font-family: "Galmuri";
	font-stretch: condensed;
	font-size: 15px;
	width: 90%;
	text-align: center;
	margin: 3px 0;
`;
