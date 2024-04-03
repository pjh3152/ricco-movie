import axios from "axios";

const req = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "938c9ed1eb9ec0d4ee00c02de50214cf",
    language: "ko-KR",
  },
});

const api = {
  getList: (path) => req.get(`movie/${path}`),
  getDetail: (id) =>
    req.get(`movie/${id}`, { params: { append_to_response: "videos, images" } }),
  getSearch: (keyword) => req.get("search/movie", { params: { query: keyword } }),
};

export { api };
