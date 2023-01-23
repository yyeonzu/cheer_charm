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
// 부적 공유 페이지
import CheeringCharm from "./pages/CheeringCharmPage";
// 부적 결과 페이지
import CheeredCharm from "./pages/CheeredCharmPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* 로그인 & 회원가입 */}
					<Route exact path="/auth/login" element={<LoginPage />} />
					<Route exact path="/auth/join" element={<RegisterPage />} />

					{/* 랜딩페이지 (메인페이지) */}
					<Route exact path="/" element={<LandingPage />} />

					{/* 마이페이지 */}
					<Route exact path="/mypage" element={<MyPage />} />

					{/* 부적 생성 페이지 */}
					<Route exact path="/create-charm" element={<CreateCharmPage />} />

					{/* 응원 전송 페이지 */}
					<Route exact path="/send-cheer" element={<SendCheerPage />} />

					{/* 부적 공유 페이지 & 부적 결과 페이지 */}
					<Route exact path="/cheering" element={<CheeringCharm />} />
					<Route exact path="/cheered" element={<CheeredCharm />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
