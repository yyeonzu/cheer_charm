import React from "react";
import { Navigate } from "react-router-dom";

const isLogin = !!localStorage.getItem("token");

// 로그인 했을 때 접근 불가능한 페이지
export const AuthRouteLogin = ({ component: Component }) => {
  return isLogin ? <Navigate to="/" /> : Component;
};

// 로그아웃일 때 접근 불가능한 페이지
export const AuthRouteLogout = ({ component: Component }) => {
  return isLogin ? Component : <Navigate to="/auth/login" />;
};
