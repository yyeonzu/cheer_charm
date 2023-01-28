import axios from "axios";
import { persistor } from "../../index";

const UserService = {
  //로그인 유저 정보
  getProfile: token =>
    axios.get("https://server.cheercharms.link/accounts/login/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  //로그인
  login: (id, password) =>
    axios.post("https://server.cheercharms.link/accounts/login/", {
      username: id,
      password: password,
    }),

  // 로그아웃
  logout: () => {
    console.log("로그아웃 되었습니다.");
    persistor.purge();
    window.localStorage.removeItem("token");
    window.location.href = "https://localhost:3000/";
  },

  //회원가입
  signup: (id, password, nickname) =>
    axios.post("https://server.cheercharms.link/accounts/signup/", {
      username: id,
      password: password,
      nickname: nickname,
    }),
};

export default UserService;
