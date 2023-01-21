import React, { useEffect } from "react";
import * as S from "./Modal.style";
import { Galmuri } from "../../css/Font";
import { PinkButton } from "./PinkButton.style";
import { MdClose } from "react-icons/md";

const Modal = (props) => {
	const { isModalOpen, closer, maintext, buttontext, onClick, height } = props;
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
				<S.Container>
					<S.Background onClick={closer} />
					<S.ModalBlock height={height}>
						<S.DeleteRect onClick={closer}>
							<MdClose size="25" fill="#6B6A6A" />
						</S.DeleteRect>
						<S.Contents>
							<div>
								<S.TextWrapper>
									<Galmuri size="14px">
										{maintext &&
											(maintext.includes("\n") ? (
												<>
													{maintext.split("\n").map((line) => {
														return (
															<span>
																{line}
																<br />
															</span>
														);
													})}
												</>
											) : (
												<>
													<span>{maintext}</span>
												</>
											))}
									</Galmuri>
								</S.TextWrapper>
								<S.ButtonWrapper>
									<PinkButton onClick={onClick} width="123px" height="45px">
										{buttontext}
									</PinkButton>
								</S.ButtonWrapper>
							</div>
						</S.Contents>
					</S.ModalBlock>
				</S.Container>
			) : null}
		</>
	);
};

export default Modal;
