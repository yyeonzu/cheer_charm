import CheerService from "./services/cheerservice";
import { requestLogout } from "./user";

export const GetAllCheer = async () => {
  try {
    const response = await CheerService.getAllCheer();
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      requestLogout();
    }
    return Promise.reject(error, "모든 응원 조회 실패");
  }
};

export const GetCheer = async () => {
  try {
    const response = await CheerService.getCheer();
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      requestLogout();
    }
    return Promise.reject(error, "개별 응원 조회 실패");
  }
};

export const SendCheer = async (nickname, content) => {
  try {
    const response = await CheerService.sendCheer(nickname, content);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      requestLogout();
    }
    return Promise.reject(error, "응원 전송 실패");
  }
};
