import axios from "axios";
import { http } from "./http";

const serverURL = "https://server.cheercharms.link";

// 회원가입
export const requestSignin = async (id, pw, nickname) => {
  const userData = {
    username: id,
    password: pw,
    nickname: nickname,
  };
  try {
    await axios.post(`${serverURL}/accounts/signup/`, userData);
  } catch (error) {
    console.log(error.response);
    alert("회원가입에 실패했습니다. 다시 요청해주세요.");
  }
};

// 로그인
export const requestLogin = async (id, pw) => {
  const userData = {
    username: id,
    password: pw,
  };

  try {
    const response = await axios.post(
      `${serverURL}/accounts/login/`,
      userData,
      { withCredentials: true },
    );
    // 로컬 스토리지에 토큰 저장
    localStorage.setItem("token", response.data.data.access_token);
    //localStorage.setItem("nickname", response.data.data.nickname);
    //localStorage.setItem("id", response.data.data.id);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// 로그아웃 요청
export const requestLogout = async () => {
  window.localStorage.removeItem("token");
  // window.location.href = `${serverURL}/accounts/login/`;
  window.location.href = "/auth/login";
};

// export const requesGetUser = async () => {
//   try {
//     const response = await http.get(`/accounts/login/`, {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,
//       //   },
//       //   withCredentials: true,
//     });
//     console.log(response);
//     localStorage.setItem("nickname", response.data.data.nickname);
//     localStorage.setItem("id", response.data.data.id);
//   } catch (error) {
//     console.log(error);
//   }
// };
