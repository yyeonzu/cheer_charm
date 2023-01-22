import React, { useState } from 'react';
import Header from '../common/Header';
import { Container } from '../SendCheer/SendCheer.style';
import { Space } from './Logout.style';
import NoCharm from './NoCharm';
import YesCharm from './YesCharm';

const LoginLanding = () => {
  // 부적 리스트를 api를 통해 받아오고, (아마 useEffect/useMemo 사용)
  // 리스트 내부의 값이 없는 경우 / 있는 경우로 나누어서 return
  // 위의 내용은 각각 NoCharm, YesCharm이라는 별도의 컴포넌트를 데려오는 방식으로 적용

  const [isCharm, setIsCharm] = useState('{');

  return (
    <>
      {/* 컨테이너 다른 폴더에서 데리고 왔음 까먹지 말기 */}
      <Container>
        <Header type='login' />
        {isCharm === '' ? <NoCharm /> : <YesCharm />}
        <Space></Space>
      </Container>
    </>
  );
};

export default LoginLanding;
