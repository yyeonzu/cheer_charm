import React, { useState } from 'react';
import * as S from './LoginRegister.style';
import { NanoomSquare } from '../../css/Font';

import idIcon from '../../assets/images/Login/idicon.svg';
import pwIcon from '../../assets/images/Login/pwicon.svg';
import axios from 'axios';

/*
  JWT Token을 사용한 사용자 인증절차

  프론트에서 ID와 비밀번호 전달
  백에서 AccessToken, RefreshToken, AccessToken의 만료시간 반환
  반환받은 AccessToken을 매 api 호출마다 헤더에 붙여서 전송
  백엔드에서 AccessToken 체크
  프론트에서 AccessToken의 만료가 지났다면, RefreshToken을 붙여서 백에 Reissue 요청
  백에서 다시 AccessToken 반환
  프론트에서 AccessToken과 만료시간 저장하여 다시 AccessToken으로 사용
*/

/* API가 아직 안나왔을 때 프론트엔드에서 TEST 하는 법
  -Promise 사용
  -Fake API 사용
*/

// const apiTest = (url) => {
//   return new Promise((resolve, reject) => {
//     const response = {
//       data: { message: 'Hello world!' },
//       status: 200,
//       statusText: 'OK',
//       // headers:; config:; request:;
//     };

//     setTimeout(() => {
//       resolve(response);
//     }, 1000);
//   });
// };

const LoginMenu = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // 로그인 기능 함수 (미완)
  const Login = (e) => {
    e.preventDefault();

    if (!id) {
      return alert('아이디를 입력해주세요');
    } else if (!pw) {
      return alert('비밀번호를 입력해주세요');
    } else {
      return alert('아이디와 비밀번호가 전송은 되고 있답니다');
    }
  };

  return (
    <>
      <S.Container>
        <S.TitleBar>
          <NanoomSquare weight='800' size='20px' color='#3A3A3A'>
            나만의 부적을 만들어볼까요?
          </NanoomSquare>
        </S.TitleBar>
        <S.LoginBox height='380px'>
          <NanoomSquare weight='800' size='18px' margin='30px'>
            로그인
          </NanoomSquare>
          <S.InputForm onSubmit={Login}>
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

            <S.Button type='submit'>
              <NanoomSquare weight='800' size='15px' color='#545454'>
                로그인
              </NanoomSquare>
            </S.Button>
          </S.InputForm>
        </S.LoginBox>
        <S.Line>
          <S.Hr></S.Hr>
          <NanoomSquare weight='800' size='10px' color='#FFFFFF'>
            OR
          </NanoomSquare>
          <S.Hr></S.Hr>
        </S.Line>
      </S.Container>
    </>
  );
};

export default LoginMenu;
