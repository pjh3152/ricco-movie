<template>
  <div class="container">
    <div class="card my-3 rounded-3 shadow">
      <router-link :to="{ name: 'Detail', params: { id: m.data.id } }">
        <img :src="poster(m.data.poster_path)" :alt="m.data.title" class="card-img-top rounded-top-3 shadow img-fluid">
      </router-link>
      <div class="card-body">
        <div class="card-title fw-bold">{{ m.data.title }}</div>
        <div class="card-text ms-1"><i class="bi bi-star-fill text-warning"></i> {{ m.data.vote_average?.toFixed(1) }}
        </div>
        <div class="card-text ms-1 mt-2">{{ m.data.release_date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";
import { poster } from "@/util/poster";

const m = defineProps({
  data: Object,
})

// 애니메이션 효과
onMounted(async () => {
  const items = document.querySelectorAll(".card");
  const timer = ms => new Promise(res => setTimeout(res, ms));

  for (var i = 0; i < items.length; i++) {
    items[i].style.cssText = "opacity:1;rotate:0deg;transform:scale(1);";
    await timer(70);
  }
})

</script>

<style lang="scss" scoped>
img:hover {
  transform: scale(1.05, 1.05);
  transition-duration: 0.5s;
  box-shadow: 3px 3px 7px gray;
}

.card {
  opacity: 0;
  rotate: -20deg;
  transform: scale(2);
  transition: all 0.7s ease 0.1s;

  .card-body {
    color: #696969;

    .card-title {
      font-size: 13px;
    }

    .card-text {
      font-size: 12px;
    }
  }
}

.average {
  padding-top: -10px;
}
</style>