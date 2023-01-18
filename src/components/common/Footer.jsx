import React, { useState } from "react";
import * as S from "./Footer.style";
import { NanoomSquare } from "../../css/Font";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
	return (
		<>
			<S.Container>
				<div style={{ display: "flex" }}>
					<NanoomSquare weight="500" size="14px" margin="0px 0px 0px 0px">
						상호: 소원수리 연구소 | 대표자명: 이화멋사졸프2팀 |
					</NanoomSquare>
					<S.Link href="https://github.com/CheerCharm" target="_blank">
						<BsGithub size="15" style={{ margin: "0px 0px 0px 5px" }} />
						<NanoomSquare weight="500" size="14px" margin="0px 0px 0px 5px">
							GitHub
						</NanoomSquare>
					</S.Link>
				</div>
				<S.Border />
				<NanoomSquare weight="500" size="14px" margin="0px 0px 0px 0px">
					Copyright ⓒ 소원수리 연구소
				</NanoomSquare>
			</S.Container>
		</>
	);
};

export default Footer;
