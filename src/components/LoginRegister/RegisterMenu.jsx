import React, { useState } from 'react';
import * as S from './LoginRegister.style';
import { NanoomSquare } from '../../css/Font';

import idIcon from '../../assets/images/Login/idicon.png';
import pwIcon from '../../assets/images/Login/pwicon.png';
import nicknameIcon from '../../assets/images/Login/nicknameicon.png';

const RegisterMenu = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [nickname, setNickname] = useState('');

  return (
    <>
      <S.Container>
        <S.TitleBar>
          <NanoomSquare weight='800' size='20px' color='#3A3A3A'>
            나만의 부적을 만들어볼까요?
          </NanoomSquare>
        </S.TitleBar>
        <S.LoginBox height='425px'>
          <NanoomSquare weight='800' size='18px' margin='30px'>
            회원가입
          </NanoomSquare>
          <S.InputForm>
            <S.Input
              type='text'
              placeholder='아이디'
              fontFamily='NanoomSquare'
              icon={idIcon}
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <S.Input
              type='password'
              placeholder='비밀번호'
              icon={pwIcon}
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
            <S.Input
              type='password'
              placeholder='비밀번호 확인'
              icon={pwIcon}
              value={pw2}
              onChange={(e) => {
                setPw2(e.target.value);
              }}
            />
            <S.Input
              type='text'
              placeholder='닉네임'
              icon={nicknameIcon}
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            />
            <S.Button type='submit'>
              <NanoomSquare weight='800' size='15px' color='#545454'>
                회원가입
              </NanoomSquare>
            </S.Button>
          </S.InputForm>
        </S.LoginBox>
        <div>푸터</div>
      </S.Container>
    </>
  );
};

export default RegisterMenu;
