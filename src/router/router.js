import { createRouter, createWebHistory } from "vue-router";
import TheHome from "@/views/TheHome";
import MovieList from "@/views/MovieList";
import MovieDetail from "@/views/MovieDetail";
import TheSearch from "@/views/TheSearch";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TheHome,
  },
  {
    path: "/list/:path",
    name: "List",
    component: MovieList,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: MovieDetail,
  },
  {
    path: "/search",
    name: "Search",
    component: TheSearch,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// 요건 named export -> import { router } 로 선언해야함. 이름변경 할 수 없음
// 반대로 export default router 로 할 경우 import 할때 중괄호 없이 이름도 변경할 수 있음
export { router };
