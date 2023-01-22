import React, { useState } from "react";
import LoginMenu from "../components/LoginRegister/LoginMenu";
import MyMenu from "../components/My/MyMenu";

const MyPage = () => {
	// 토큰값을 통해서 로그인 상태 받아오기기
	const [isLogin, setIsLogin] = useState(true);
	return <>{isLogin ? <MyMenu /> : <LoginMenu />}</>;
};

export default MyPage;
