<template>
  <div class="navbar navbar-expand bg-primary text-white py-1">
    <div class="container-fluid">
      <img src="@/images/ricco.png" class="navbar-brand rounded-circle">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item mx-3">
            <router-link to="/" class="item text-white">Home</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link :to="{name:'List', params:{ path:'now_playing' }}" class="item text-white">현재상영작</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link :to="{name:'List', params:{ path:'popular' }}" class="item text-white">인기작</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link :to="{name:'List', params:{ path:'top_rated' }}" class="item text-white">최고등급</router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link :to="{name:'List', params:{ path:'upcoming' }}" class="item text-white">개봉예정</router-link>
          </li>
          <li class="nav-item mx-3">
            <a class="item text-white" @click="search">검색</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { router } from '@/router/router';


const search = () => {
  localStorage.clear();
  router.push("/search");
}

</script>

<style lang="scss" scoped>
img {
  width: 35px;
}
.item {
  text-decoration:none;
  font-size:13px;
  font-weight: bold;
  cursor: pointer;
}
</style>