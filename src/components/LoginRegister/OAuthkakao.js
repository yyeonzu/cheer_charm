import React, { useEffect } from "react";
import { KaKaoLogin } from "../../api/user";
import Spinner from "./Spinner";

const OAuthkakao = () => {
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    KaKaoLogin(code)
      .then(() => window.location.replace("/"))
      .catch(error => {
        alert("카카오 로그인 실패.\n다시 시도해주세요.");
        console.log(error);
      });
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
};

export default OAuthkakao;
