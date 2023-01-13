import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 로그인 & 회원가입 페이지
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 로그인 & 회원가입 */}
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
