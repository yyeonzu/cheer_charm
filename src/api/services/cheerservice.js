import { http } from "../http";

const CheerService = {
  getAllCheer: id => http.get(`/cheers/${id}/`),
  getCheer: cId => http.get(`/cheers/detail/${cId}/`),
  sendCheer: (id, nickname, content) =>
    http.post(`/cheers/${id}/`, {
      nickname: nickname,
      content: content,
    }),
};

export default CheerService;
