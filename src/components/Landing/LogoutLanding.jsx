import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Logout.style';
import Header from '../common/Header';
import { Container } from '../SendCheer/SendCheer.style';
import { Galmuri } from '../../css/Font';
import { PinkButton } from '../common/PinkButton.style';
import landingimage from '../../assets/images/Landing/landinglogo.svg';

const LogoutLanding = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/login');
  };

  return (
    <>
      {/* 컨테이너 다른 폴더에서 데려왔음!!! 까먹지마세요 */}
      <Container>
        <Header type='logout' />
        <S.TitleBar>
          <Galmuri size='13px' weight='400' padding='5px'>
            내 소원을 응원하는 마음이 가득 담긴
          </Galmuri>
          <Galmuri size='15px' weight='700' padding='5px'>
            나만의 부적을 만들어보세요!
          </Galmuri>
        </S.TitleBar>
        <S.ImageWrapper>
          <img src={landingimage} />
        </S.ImageWrapper>
        <PinkButton width='173px' height='50px' radius='30px' onClick={onClick}>
          부적 만들러 가기
        </PinkButton>
      </Container>
    </>
  );
};

export default LogoutLanding;
