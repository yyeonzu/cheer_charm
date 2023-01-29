import CheerService from "./services/cheerservice";
import { Refresh } from "./user";

// 전체 응원 조회 (GET)
export const GetAllCheer = async id => {
  try {
    const response = await CheerService.getAllCheer(id);
    return Promise.resolve(response);
  } catch (error) {
    Refresh(error);
    return Promise.reject(error);
  }
};

// 개별 응원 조회 (GET)
export const GetCheer = async cid => {
  try {
    const response = await CheerService.getCheer(cid);
    return Promise.resolve(response);
  } catch (error) {
    Refresh(error);
    return Promise.reject(error);
  }
};

// 응원 전송 (POST)
export const SendCheer = async (id, nickname, content) => {
  try {
    const response = await CheerService.sendCheer(id, nickname, content);
    return Promise.resolve(response);
  } catch (error) {
    Refresh(error);
    return Promise.reject(error);
  }
};
