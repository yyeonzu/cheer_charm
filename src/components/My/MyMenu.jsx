import React, { useState } from "react";
import * as S from "./My.style";
import * as H from "../common/Header.style";
import logo from "../../assets/images/minilogo.svg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Galmuri } from "../../css/Font";
import { MdEdit } from "react-icons/md";
import MyList from "./MyList";

const MyMenu = () => {
	const nickname = "이름";
	const [isDoneTab, setIsDoneTab] = useState(true);
	return (
		<>
			<S.Container>
				<H.Container>
					<H.LogoWrapper>
						<H.LogoImage src={logo} />
					</H.LogoWrapper>
				</H.Container>
				<S.Top>
					<div style={{ display: "flex" }}>
						<Galmuri weight="600" size="16px" color="#4A4A4A">
							{nickname}
						</Galmuri>
						<MdEdit size="15" style={{ margin: "4px 0 0 7px" }} />
					</div>
					<Galmuri
						weight="400"
						size="12px"
						margin="4px 0 0 0"
						onClick={() => {
							console.log("로그아웃 성공");
						}}
					>
						로그아웃
					</Galmuri>
				</S.Top>
				<S.Border />
				<S.MyBox>
					<S.TabTitle>
						<Galmuri
							weight="400"
							size="14px"
							onClick={() => {
								setIsDoneTab(true);
							}}
							style={{ textDecoration: isDoneTab ? "underline" : null }}
						>
							내 부적함
						</Galmuri>
						<Galmuri
							weight="400"
							size="14px"
							onClick={() => {
								setIsDoneTab(false);
							}}
							style={{ textDecoration: isDoneTab ? null : "underline" }}
						>
							아직 응원이 부족함
						</Galmuri>
					</S.TabTitle>
					{isDoneTab ? <MyList isDone={true} /> : <MyList isDone={false} />}
				</S.MyBox>
				<Footer />
			</S.Container>
		</>
	);
};

export default MyMenu;
