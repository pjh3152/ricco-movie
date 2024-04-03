<template>
  <div class="container">
    <div class="row" v-for="(list, i) in movieList" :key="list">
      <div class="ms-4">{{ movieKind[i] }} <span class="ms-2">
          <router-link :to="{ name: 'List', params: { path: movieRoutes[i] } }">more..</router-link></span>
      </div>
      <div class="col-lg-2" v-for="(d, n) in list" :key="d.id">
        <movieCard :data="d" v-if="n < 6" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { api } from "@/api/axios";
import movieCard from "@/components/MovieCard";

const movieList = ref([]);
const movieKind = ["현재상영작", "인기작", "최고등급", "개봉예정"];
const movieRoutes = ["now_playing", "popular", "top_rated", "upcoming"];

const getList = async () => {

  const [now, pop, top, up] = await Promise.all([
    api.getList("now_playing"),
    api.getList("popular"),
    api.getList("top_rated"),
    api.getList("upcoming"),
  ]).catch(err => { console.log(err); })

  movieList.value = [now, pop, top, up].map(li => li.data.results);
}

getList();

</script>

<style lang="scss" scoped>
.ms-4 {
  font-weight: bold;
  color: #696969;
}

.row:first-child {
  padding-top: 80px;
}

.row {
  padding-top: 15px;
}

a {
  text-decoration: none;
  color: #696969;
  font-weight: bold;
}
</style>