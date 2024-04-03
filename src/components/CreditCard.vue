<template>
  <div class="container">
    <div class="card my-3 rounded-3 shadow border-0">
      <a :href="searchUrl(m.data.name)" target="blank" :title="m.data.name">
        <img :src="credit(m.data.profile_path)" :alt="m.data.name" @error="replaceImg"
          class="card-img-top rounded-top-3 shadow img-fluid">
      </a>
      <div class="card-body">
        <div class="card-title fw-bold text-center">{{ m.data.name }}</div>
        <div class="card-text ms-1">{{ m.data.character }}</div>
        <div class="card-text ms-1">{{ setDept(m.data.known_for_department) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { credit } from "@/util/poster";

const m = defineProps({
  data: Object,
})

const searchUrl = (name) => {
  return "https://www.google.com/search?q=" + name;
}

const setDept = (dept) => {
  if (dept === "Directing") {
    return "감독";
  } else {
    return "";
  }
}

// 프로필 이미지가 없을경우 처리
const replaceImg = (e) => {
  e.target.src = require("@/assets/images/profile.jpg");
}

</script>

<style lang="scss" scoped>
@font-face {
  font-family: '휴먼편지체';
  src: url('@/assets/fonts/휴먼편지체.ttf') format('truetype');
}

.card {
  width: 11rem;
  margin: 0 auto;
  font-family: '휴먼편지체';

  img:hover {
    transform: scale(1.05, 1.05);
    transition-duration: 0.5s;
    box-shadow: 3px 3px 7px gray;
  }
}
</style>