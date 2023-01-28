import axios from "axios";
import { token } from "./http";
import { http } from "./http";

const serverURL = "https://server.cheercharms.link";

// 회원가입 요청
export const requestSignin = async (id, pw, nickname) => {
  const userData = {
    username: id,
    password: pw,
    nickname: nickname,
  };
  try {
    const response = await axios.post(
      `${serverURL}/accounts/signup/`,
      userData,
    );

    console.log(response);
    console.log("회원가입 성공");
  } catch (error) {
    console.log(error.response);
  }
};

// 로그인 요청
export const requestLogin = async (id, pw) => {
  const userData = {
    username: id,
    password: pw,
  };

  try {
    const response = await axios.post(
      `${serverURL}/accounts/login/`,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userData),
      userData,
    );
    localStorage.setItem("token", response.data.data.access_token);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// 로그아웃 요청
export const requestLogout = async () => {
  window.localStorage.removeItem("token");
  window.location.href = `${serverURL}/accounts/login/`;
};

export const requesGetUser = async () => {
  try {
    const response = await http.get(`/accounts/login/`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      //   withCredentials: true,
    });
    console.log(response);
    localStorage.setItem("nickname", response.data.data.nickname);
    localStorage.setItem("id", response.data.data.id);
  } catch (error) {
    console.log(error);
  }
};
