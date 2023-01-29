import { http } from "./http";

// 회원가입 (POST)
export const RequestSignin = async (id, pw, nickname) => {
  const userData = {
    username: id,
    password: pw,
    nickname: nickname,
  };
  try {
    await http.post(`/accounts/signup/`, userData);
  } catch (error) {
    console.log(error.response);
    alert("회원가입에 실패했습니다. 다시 요청해주세요.");
  }
};

// 로그인 (POST)
export const RequestLogin = async (id, pw) => {
  const userData = {
    username: id,
    password: pw,
  };

  try {
    const response = await http.post(`/accounts/login/`, userData);
    // 로컬 스토리지에 토큰 저장
    localStorage.setItem("token", response.data.data.access_token);
    localStorage.setItem("refresh_token", response.data.data.refresh_token);
    //localStorage.setItem("nickname", response.data.data.nickname);
    //localStorage.setItem("id", response.data.data.id);
    console.log(response);
  } catch (error) {
    Refresh(error);
  }
};

// 토큰 만료 & Refresh token (GET)
export const Refresh = async error => {
  const refresh = localStorage.getItem("refresh_token");
  console.log("refresh", refresh);
  if (
    error.response.data.detail === "Given token not valid for any token type"
  ) {
    const response = await http.post(`/accounts/token/refresh/`, {
      refresh: refresh,
    });
    console.log(response);
    localStorage.setItem("token", response.data.access);
  }
};

// 로그아웃
export const RequestLogout = async () => {
  window.localStorage.removeItem("token");
  // window.location.href = `${serverURL}/accounts/login/`;
  window.location.href = "/auth/login";
};

// User 프로필 (GET) (id(hashed), nickname, password, username 반환)
export const RequestGetUser = async () => {
  try {
    const response = await http.get(`/accounts/login/`);
    console.log(response);
    // 추후에 어떻게 변경될지...
    localStorage.setItem("nickname", response.data.data.nickname);
    localStorage.setItem("id", response.data.data.id);
    const nickname = response.data.data.nickname;
    const id = response.data.data.id;
  } catch (error) {
    console.log(error);
    Refresh(error);
  }
};
