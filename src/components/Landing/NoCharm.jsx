import React from 'react';
import { Galmuri } from '../../css/Font';
import * as S from './NoCharm.style';
import addIcon from '../../assets/images/Landing/addicon.svg';
import { PinkButton } from '../common/PinkButton.style';
import { useNavigate } from 'react-router-dom';

const NoCharm = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/login');
  };

  return (
    <>
      <S.Container>
        <S.TitleBar>
          <Galmuri size='15px' weight='700'>
            아직 응원 받을 부적이 없어요 : (
          </Galmuri>
          <Galmuri size='15px' weight='700'>
            부적을 생성해주세요 : )
          </Galmuri>
        </S.TitleBar>
        <S.AddBox>
          <img src={addIcon} onClick={onClick} />
        </S.AddBox>
        <S.ButtonWrapper>
          <PinkButton width='160px' height='50px' onClick={onClick}>
            부적 만들러 가기
          </PinkButton>
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};

export default NoCharm;
