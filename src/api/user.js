import axios from "axios";

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
    const response = await axios.post(`${serverURL}/accounts/login/`, userData);
    console.log(response);
    // const nickname = response.data.data.nickname;
    // const id = response.data.data.id;

    return Promise.resolve(response.data.data.nickname);
  } catch (error) {
    console.log(error.response.data.message);
  }
};

// 로그아웃 요청
export const requestLogout = async () => {
  window.localStorage.removeItem("token");
  window.location.href = `${serverURL}/auth/login/`;
};

// getUser -> 404 에러 발생 : request할 때 다른 값이 필요 없는지 질문
export const requestGetUser = async token => {
  //   const data = axios.get(`${serverURL}/accounts/login/`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  try {
    const response = axios.get(`${serverURL}/accounts/login/`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
