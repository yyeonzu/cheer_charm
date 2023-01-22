import React, { useState, useEffect } from "react";
import * as S from "./CheerList.style";
import cheer1 from "../../assets/images/CharmPage/cheer1.svg";
import cheer2 from "../../assets/images/CharmPage/cheer2.svg";
import cheer3 from "../../assets/images/CharmPage/cheer3.svg";
import { testlist } from "../../_mock/data2";

const CheeredList = ({ setModal, cId }) => {
	const src = [cheer1, cheer2, cheer3];
	// 부적 개별 조회 api

	const [currentCharm, setCurrentCharm] = useState({});
	const [cheerlist, setCheerlist] = useState([]);
	useEffect(() => {
		for (let i = 0; i < testlist.length; i++) {
			if (testlist[i].id === cId) {
				setCurrentCharm(testlist[i]);
			}
		}
		console.log(currentCharm);

		setCheerlist(currentCharm.cheer);
		console.log(cheerlist);
	});
	return (
		<>
			{cheerlist && cheerlist.length === 0 ? (
				<h1>텅</h1>
			) : (
				<>
					{cheerlist &&
						cheerlist.map((ch, idx) => {
							return (
								<S.CheerRect onClick={() => setModal(true)}>
									<S.CheerImg src={src[idx % 3]} />
									<S.CheerText>{ch.nickname}</S.CheerText>
								</S.CheerRect>
							);
						})}
				</>
			)}
		</>
	);
};

export default React.memo(CheeredList);
