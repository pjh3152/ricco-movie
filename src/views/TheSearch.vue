<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center mb-4">
        <input type="text" id="input" ref="input" placeholder="영화제목을 입력해 주세요" autocomplete="off" v-model="keyword" @keyup.enter="search">
      </div>
      <div class="col-2" v-for="d in movieList" :key="d.id">
        <MovieCard :data="d" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api } from "@/api/axios";
import MovieCard from "@/components/MovieCard";

const input = ref("");
const keyword = ref("");
const movieList = ref({});

onMounted(() => {
  if( localStorage.getItem("searchInput") ) {
    keyword.value = localStorage.getItem("searchInput");
    search();
  }
  input.value.focus();
})

const search = async () => {
  if (!keyword.value) return;

  const { data } = await api.getSearch(keyword.value).catch(err => { console.log(err); });
  movieList.value = data.results;

  localStorage.setItem("searchInput", keyword.value);

  keyword.value = "";
}
</script>

<style lang="scss" scoped>
.row {
  padding-top: 85px;

  input {
    width: 30%;
    padding-left:8px;
    outline: none;
  }
}
</style>