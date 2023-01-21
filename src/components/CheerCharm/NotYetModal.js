import React, { useEffect } from "react";
import styled from "styled-components";

const NotYetModal = (props) => {
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
							<div className="inner">
								<Text>🥺🪄⏱️</Text>
								<Text>
									부적이 완성되어야 친구들의 응원 메시지를 확인할 수 있어요!
								</Text>
							</div>
						</Contents>
					</ModalBlock>
				</Container>
			) : null}
		</>
	);
};

export default React.memo(NotYetModal);

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
`;

const ModalBlock = styled.div`
	position: relative;
	background-color: #969696;
	width: 85%;
	height: 75px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
	border-radius: 18px;
	animation: modal-show 0.3s;
	@keyframes modal-show {
		from {
			opacity: 0;
			margin-top: 20px;
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
	.inner {
		width: 100%;
		height: 75px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
