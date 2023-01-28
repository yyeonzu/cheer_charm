import CheerService from "./services/cheerservice";

// 전체 응원 조회 (GET)
export const GetAllCheer = async id => {
  try {
    const response = await CheerService.getAllCheer(id);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// 개별 응원 조회 (GET)
export const GetCheer = async cid => {
  try {
    const response = await CheerService.getCheer(cid);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// 응원 전송 (POST)
export const SendCheer = async (id, nickname, content) => {
  try {
    const response = await CheerService.sendCheer(id, nickname, content);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
