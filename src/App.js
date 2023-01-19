import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 로그인 & 회원가입 페이지
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
// 랜딩페이지 (메인페이지)
import LandingPage from "./pages/LandingPage";
// 마이페이지
import MyPage from "./pages/MyPage";
// 부적 생성 페이지
import CreateCharmPage from "./pages/CreateCharmPage";
// 응원 전송 페이지
import SendCheerPage from "./pages/SendCheerPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* 로그인 & 회원가입 */}
					<Route exact path="/login" element={<LoginPage />} />
					<Route exact path="/register" element={<RegisterPage />} />

					{/* 랜딩페이지 (메인페이지) */}
					<Route exact path="/main" element={<LandingPage />} />

					{/* 마이페이지 */}
					<Route exact path="/my" element={<MyPage />} />

					{/* 부적 생성 페이지 */}
					<Route exact path="/create" element={<CreateCharmPage />} />

					{/* 응원 전송 페이지 */}
					<Route exact path="/sendcheer" element={<SendCheerPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
