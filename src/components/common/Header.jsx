import React, { useState } from 'react';
import * as S from './Header.style';
import logo from '../../assets/images/minilogo.svg';
import { NanoomSquare } from '../../css/Font';

const Header = (props) => {
  const status = props.type;

  return (
    <>
      <S.Container>
        <S.LogoWrapper>
          <S.LogoImage src={logo} />
        </S.LogoWrapper>
        <S.Menus>
          {status === 'logout' && <S.Text>로그인</S.Text>}
          {status === 'login' && (
            <>
              <S.Text>마이페이지</S.Text>
              <S.Text>로그아웃</S.Text>
            </>
          )}
        </S.Menus>
      </S.Container>
    </>
  );
};

export default Header;
