<template>
  <div class="container">
    <div class="ms-4">{{ movieKind }}</div>
    <div class="row">
      <div class="col-md-2" v-for="d in movieData" :key="d.id">
        <MovieCard :data="d" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { api } from "@/api/axios";
import { useRoute } from "vue-router";
import MovieCard from "@/components/MovieCard";

const route = useRoute();

const movieKind = ref("");
const movieData = ref({});

watch(() => route.params.path, (newPath) => {
  getData(newPath);
  setKind(newPath);
})

const getData = async (path) => {
  const { data } = await api.getList(path).catch(err => { console.log(err); });
  movieData.value = data.results;
  setKind(path);
}

const setKind = (kind) => {
  if (kind == "now_playing") {
    movieKind.value = "현재상영작";
  } else if (kind == "popular") {
    movieKind.value = "인기작";
  } else if (kind == "top_rated") {
    movieKind.value = "최고등급";
  } else if (kind == "upcoming") {
    movieKind.value = "개봉예정";
  }
}

getData(route.params.path);

</script>

<style lang="scss" scoped>
.ms-4 {
  color: #696969;
  font-weight: bold;
  padding-top: 80px;
}
</style>