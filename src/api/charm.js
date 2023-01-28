import CharmService from "./services/charmservice";
import { requestLogout } from "./user";

// 전체 부적 조회 (GET)
export const GetAllCharm = async () => {
  try {
    const response = await CharmService.getAllCharm();
    console.log(response);
  } catch (error) {
    console.log(MediaError);
  }
};

// 현재 진행중인 부적 조회 (GET)
export const GetCreatingCharm = async () => {
  try {
    const response = await CharmService.getCreatingCharm();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// 개별 부적 조회(GET)
export const GetCharm = async id => {
  try {
    const response = await CharmService.getCharm(id);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// 부적 생성 (POST)
export const CreateCharmA = async (
  title,
  user,
  content,
  total_cheer,
  image,
) => {
  try {
    const response = await CharmService.createCharm(
      title,
      user,
      content,
      total_cheer,
      image,
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// 부적 삭제 (DELETE)
export const DeleteCharm = async id => {
  try {
    const response = await CharmService.deleteCharm(id);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
