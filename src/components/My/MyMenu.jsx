import React, { useState } from "react";
import * as S from "./My.style";
import * as H from "../common/Header.style";
import logo from "../../assets/images/minilogo.svg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Galmuri } from "../../css/Font";

const MyMenu = () => {
	return (
		<>
			<S.Container>
				<H.Container>
					<H.LogoWrapper>
						<H.LogoImage src={logo} />
					</H.LogoWrapper>
				</H.Container>
				<S.MyBox></S.MyBox>
				<Footer />
			</S.Container>
		</>
	);
};

export default MyMenu;
