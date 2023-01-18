import React, { useState } from "react";
import * as S from "./My.style";
import { Galmuri } from "../../css/Font";
import { BiCheck } from "react-icons/bi";

const MyList = ({ isDone }) => {
	let arr = [];
	if (isDone) {
		arr = [1, 2, 3];
	} else {
		arr = [];
	}
	const [isEditing, setIsEditing] = useState(false);
	return (
		<>
			{arr.length === 0 ? (
				<h1>텅</h1>
			) : (
				<>
					<S.FlexContainer>
						{arr &&
							arr.map((ch, index) => {
								return (
									<>
										<S.CharmRect>
											{isEditing ? (
												<S.CheckCircle>
													<BiCheck fill="#155726" size="15" />
												</S.CheckCircle>
											) : null}
											<S.TestCharm />
											<Galmuri weight="400" size="12px" color="#4A4A4A">
												제목{index + 1}
											</Galmuri>
										</S.CharmRect>
									</>
								);
							})}
					</S.FlexContainer>
					<S.ButtonContainer>
						<S.DButton
							style={{ backgroundColor: isEditing ? "#F9D7CD" : "#ececec" }}
							onClick={() => {
								setIsEditing(!isEditing);
							}}
						>
							<Galmuri weight="400" size="14px">
								{isEditing ? "완료하기" : "삭제하기"}
							</Galmuri>
						</S.DButton>
					</S.ButtonContainer>
				</>
			)}
		</>
	);
};

export default MyList;
