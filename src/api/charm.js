import CharmService from "./services/CharmService";

export const GetAllCharm = async () => {
  try {
    const response = await CharmService.getAllCharm();
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }
    return Promise.reject(error, "모든 부적 조회 실패");
  }
};

export const GetCreatingCharm = async () => {
  try {
    const response = await CharmService.getCreatingCharm();
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }
    return Promise.reject(error, "모든 생성 중인 부적 조회 실패");
  }
};

export const GetCharm = async id => {
  try {
    const response = await CharmService.getCharm(id);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }
    return Promise.reject(error, "개별 부적 조회 실패");
  }
};

export const CreateCharm = async (title, user, content, total_cheer, image) => {
  try {
    const response = await CharmService.createCharm(
      title,
      user,
      content,
      total_cheer,
      image,
    );
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }
    return Promise.reject(error, "부적 생성 실패");
  }
};

export const DeleteCharm = async id => {
  try {
    const response = await CharmService.deleteCharm(id);
    return Promise.resolve(response);
  } catch (error) {
    if (
      error.response.data.detail ==
      "이 토큰은 모든 타입의 토큰에 대해 유효하지 않습니다"
    ) {
      Logout();
    }
    return Promise.reject(error, "부적 삭제 실패");
  }
};
