import React, { useState } from 'react';
import * as S from './SendCheer.style';
import Header from '../common/Header';
import { Galmuri } from '../../css/Font';
import { PinkButton } from '../common/PinkButton.style';

// login 상태에서도 sendcheer를 할 수 있는지 질문!! -> Header 상태를 토큰값에 따라 변경해야함

const SendCheerMenu = () => {
  // 토큰값의 response를 통해 가져올 예정
  const nickname = '연주연주연주연주연주연주';
  const content =
    '감사위원은 원장의 제청으로 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다.';

  return (
    <>
      <S.Container>
        <Header type='logout'></Header>
        <S.TitleText direction={nickname.length > 4 ? 'column' : 'row'}>
          <Galmuri size='18px'>{nickname} 님</Galmuri>
          <S.exNameText>
            <Galmuri size='18px' margin='0px 8px 0px 0px'>
              의 성공을
            </Galmuri>
            <Galmuri size='24px' weight='800'>
              응원
            </Galmuri>
            <Galmuri size='18px'>해주세요!</Galmuri>
          </S.exNameText>
        </S.TitleText>
        <S.Line />
        <S.ContentTitle>
          <Galmuri size='15px'>{nickname}님이 소망하는 내용</Galmuri>
        </S.ContentTitle>
        <S.ContentText>
          <Galmuri size='12px'>{content}</Galmuri>
        </S.ContentText>
        <S.CheerText placeholder='응원을 남겨주세요'></S.CheerText>
        <S.CheerName placeholder='전달할 이름을 남겨주세요'></S.CheerName>
        <PinkButton width='150px' height='40px'>
          응원 보내기
        </PinkButton>
      </S.Container>
    </>
  );
};

export default SendCheerMenu;
