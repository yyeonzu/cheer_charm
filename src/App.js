import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRouteLogin, AuthRouteLogout } from "./AuthRoute";

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
import CharmPage from "./pages/CharmPage";
// 카카오 redirect 페이지
import OAuthkakao from "./components/LoginRegister/OAuthkakao";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 로그인 & 회원가입 */}
          <Route
            exact
            path="/auth/login"
            element={<AuthRouteLogin component={<LoginPage />} />}
          />
          <Route
            exact
            path="/auth/join"
            element={<AuthRouteLogin component={<RegisterPage />} />}
          />
          {/* 카카오 소셜 로그인 관련 페이지 */}
          <Route
            exact
            path="/oauth"
            element={<AuthRouteLogin component={<OAuthkakao />} />}
          />
          {/* 랜딩페이지 (메인페이지) */}
          <Route exact path="/" element={<LandingPage />} />
          {/* 마이페이지 */}
          <Route
            exact
            path="/mypage"
            element={<AuthRouteLogout component={<MyPage />} />}
          />
          {/* 부적 생성 페이지 */}
          <Route
            exact
            path="/create-charm"
            element={<AuthRouteLogout component={<CreateCharmPage />} />}
          />
          {/* 응원 전송 페이지 */}
          <Route
            exact
            path="/:user/charm_id/:charm_id/send-cheer"
            element={<SendCheerPage />}
          />
          {/* 부적 공유 페이지 */}
          <Route
            exact
            path="/:user/charm_id/:charm_id"
            element={<CharmPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
