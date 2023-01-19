import React, { useState } from 'react';
import LoginLanding from '../components/Landing/LoginLanding';
import LogoutLanding from '../components/Landing/LogoutLanding';

const LandingPage = () => {
  // 이것도 토큰값을 통해서 return 받아 옵니다...
  const [isLogin, setIsLogin] = useState(true);

  return <>{isLogin ? <LoginLanding /> : <LogoutLanding />}</>;
};

export default LandingPage;
