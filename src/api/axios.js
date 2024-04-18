import axios from "axios";

const req = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.VUE_APP_API_KEY,
    language: "ko-KR",
  },
});

const api = {
  getList: (path) => req.get(`movie/${path}`),
  getDetail: (id) =>
    req.get(`movie/${id}`, { params: { append_to_response: "videos, images" } }),
  getCredits: (id) => req.get(`movie/${id}/credits`),
  getSearch: (keyword) => req.get("search/movie", { params: { query: keyword } }),
};

export { api };
