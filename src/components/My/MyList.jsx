import React, { useState } from "react";
import * as S from "./My.style";
import Modal from "../common/Modal";
import { Galmuri } from "../../css/Font";
import { BiTrash } from "react-icons/bi";

const MyList = ({ isDone }) => {
	let arr = [];
	if (isDone) {
		arr = [
			{ title: "부적이름1", id: 1 },
			{ title: "부적이름2", id: 2 },
			{ title: "부적이름3", id: 3 },
		];
	} else {
		arr = [];
	}
	const findById = (fId) => {
		for (let i = 0; i < arr.length; i++) {
			if (fId === arr[i].id) return arr[i].title;
		}
	};
	const [isEditing, setIsEditing] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [deleteId, setDeleteId] = useState();
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};
	const preDelete = (cId) => {
		setDeleteId(cId);
		openModal();
	};
	const onButton = () => {
		console.log(findById(deleteId), " 삭제하기");
		closeModal();
	};
	console.log(isModalOpen);
	return (
		<>
			{arr.length === 0 ? (
				<h1>텅</h1>
			) : (
				<>
					<S.FlexContainer>
						{arr &&
							arr.map((ch) => {
								return (
									<>
										<S.CharmRect>
											{isEditing ? (
												<S.TrashRect onClick={() => preDelete(ch.id)}>
													<BiTrash fill="#155726" size="18" />
												</S.TrashRect>
											) : null}
											<S.TestCharm />
											<Galmuri weight="400" size="12px" color="#4A4A4A">
												{ch.title}
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
					{isModalOpen ? (
						<Modal
							isModalOpen={isModalOpen}
							closer={closeModal}
							maintext={`삭제한 부적은 복구할 수 없습니다. \n 정말 '${findById(
								deleteId
							)}' 부적을 삭제하시겠습니까?`}
							buttontext="삭제하기"
							onClick={onButton}
							height="200px"
						/>
					) : null}
				</>
			)}
		</>
	);
};

export default MyList;
