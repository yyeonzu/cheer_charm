import CheerService from "./services/cheerservice";
import { requestLogout } from "./user";

export const GetAllCheer = async id => {
  try {
    const response = await CheerService.getAllCheer(id);
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

export const GetCheer = async cId => {
  try {
    const response = await CheerService.getCheer(cId);
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

export const SendCheer = async (id, nickname, content) => {
  try {
    const response = await CheerService.sendCheer(id, nickname, content);
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
