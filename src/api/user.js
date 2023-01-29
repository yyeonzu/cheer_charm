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
    window.location.reload();
  } catch (error) {
    Refresh(error);
  }
};

// 토큰 만료 & Refresh token (GET)
export const Refresh = async error => {
  const refresh = localStorage.getItem("refresh_token");
  if (
    error.response.data.detail === "Given token not valid for any token type"
  ) {
    try {
      const response = await http.post(`/accounts/token/refresh/`, {
        refresh: refresh,
      });
      localStorage.setItem("token", response.data.access);
      window.location.reload();
    } catch (error) {
      // test를 아직 못해봄
      alert("세션 만료. 다시 로그인해주세요.");
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      window.location.href("/auth/login");
    }
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
    return Promise.resolve(response);
  } catch (error) {
    console.log(error);
    Refresh(error);
  }
};
