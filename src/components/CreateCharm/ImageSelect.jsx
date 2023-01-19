import React, { useState, useEffect } from "react";
import * as S from "./CreateCharm.style";
import testcharm from "../../assets/images/testcharm.png";

const ImageSelect = ({ setImg }) => {
	const src = [testcharm, testcharm, testcharm, testcharm, testcharm];
	const [clicked, setClicked] = useState({
		first: false,
		second: false,
		third: false,
		fourth: false,
		fifth: false,
	});
	useEffect(() => {
		if (clicked.first === true) setImg(1);
		else if (clicked.second === true) setImg(2);
		else if (clicked.third === true) setImg(3);
		else if (clicked.fourth === true) setImg(4);
		else if (clicked.fifth === true) setImg(5);
		else setImg(0);
	}, [clicked]);
	return (
		<>
			<S.CharmRect
				onClick={() =>
					setClicked({
						first: true,
						second: false,
						third: false,
						fourth: false,
						fifth: false,
					})
				}
			>
				<S.CharmImg src={src[0]} />
				<S.Circle>
					{clicked.first === true ? <S.CheckedCircle /> : null}
				</S.Circle>
			</S.CharmRect>
			<S.CharmRect
				onClick={() =>
					setClicked({
						first: false,
						second: true,
						third: false,
						fourth: false,
						fifth: false,
					})
				}
			>
				<S.CharmImg src={src[1]} />
				<S.Circle>
					{clicked.second === true ? <S.CheckedCircle /> : null}
				</S.Circle>
			</S.CharmRect>
			<S.CharmRect
				onClick={() =>
					setClicked({
						first: false,
						second: false,
						third: true,
						fourth: false,
						fifth: false,
					})
				}
			>
				<S.CharmImg src={src[2]} />
				<S.Circle>
					{clicked.third === true ? <S.CheckedCircle /> : null}
				</S.Circle>
			</S.CharmRect>
			<S.CharmRect
				onClick={() =>
					setClicked({
						first: false,
						second: false,
						third: false,
						fourth: true,
						fifth: false,
					})
				}
			>
				<S.CharmImg src={src[3]} />
				<S.Circle>
					{clicked.fourth === true ? <S.CheckedCircle /> : null}
				</S.Circle>
			</S.CharmRect>
			<S.CharmRect
				onClick={() =>
					setClicked({
						first: false,
						second: false,
						third: false,
						fourth: false,
						fifth: true,
					})
				}
			>
				<S.CharmImg src={src[4]} />
				<S.Circle>
					{clicked.fifth === true ? <S.CheckedCircle /> : null}
				</S.Circle>
			</S.CharmRect>
		</>
	);
};

export default React.memo(ImageSelect);
