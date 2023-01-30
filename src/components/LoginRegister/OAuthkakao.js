import React from "react";
import Spinner from "./Spinner";

const OAuthkakao = () => {
  const code = new URL(window.location.href).searchParams.get("code");

  if (code) {
  }

  return <Spinner />;
};

export default OAuthkakao;
