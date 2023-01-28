import React from "react";
import { useNavigate } from "react-router";

// import style.js
import * as S from "./Header.style";

// import Image
import logo from "../../assets/images/minilogo.svg";

const Header = props => {
  const status = props.type;
  const navigate = useNavigate();
  return (
    <>
      <S.Container>
        <S.LogoWrapper>
          <S.LogoImage src={logo} />
        </S.LogoWrapper>
        <S.Menus>
          {status === "logout" && (
            <S.Text
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              로그인
            </S.Text>
          )}
          {status === "login" && (
            <>
              <S.Text onClick={() => navigate("/mypage")}>마이페이지</S.Text>
              <S.Text onClick={() => alert("로그아웃!")}>로그아웃</S.Text>
            </>
          )}
        </S.Menus>
      </S.Container>
    </>
  );
};

export default Header;
