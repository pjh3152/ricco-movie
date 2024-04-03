<template>
  <div class="container-fluid">

    <div class="row justify-content-center">
      <div class="col-lg-4 d-flex justify-content-center align-items-center">
        <img :src="poster(mData.poster_path)" :alt="mData.title" class="img-fluid rounded-3">
      </div>
      <div class="col-lg-7 text-white">
        <div class="btn btn-primary py-1" onclick="history.back();">이전</div>
        <h2 class="my-3">
          {{ mData.title }} {{ originTitle }}
        </h2>
        <h5>
          <span class="me-3">{{ mData.release_date }}</span>
          <span class="me-1"><i class="bi bi-star-fill text-warning"></i></span>
          <span class="me-3">{{ mData.vote_average?.toFixed(1) }}</span>
          <span v-for="d in mData.genres" :key="d" class="mx-1">
            {{ d.name }}
          </span>
          <div class="my-3">
            {{ mData.overview }}
          </div>
        </h5>
        <div class="area" v-if="mData.videos && mData.videos.results[0]">
          <iframe class="video"
            :src="`https://www.youtube.com/embed/${mData.videos.results[0].key}?autoplay=0&controls=0`"
            allow="autoplay" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { api } from "@/api/axios";
import { useRoute } from "vue-router";
import { poster, backDrop } from "@/util/poster";

const mData = ref({});
const route = useRoute();
const bgStyle = ref("");
const originTitle = ref("");

const getData = async () => {
  const { data } = await api.getDetail(route.params.id);
  mData.value = data;
  originTitle.value = `(${data.original_title})`;
  bgStyle.value = "url('" + backDrop(data.backdrop_path) + "')";
}

getData();

</script>

<style lang="scss" scoped>
.container-fluid {

  background-image: linear-gradient(rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)), v-bind(bgStyle);

  background-size: cover;
  background-attachment: fixed;

  .row {
    padding-top: 70px;
    padding-bottom: 20px;
  }

  h5 {
    font-size: 16px;
  }

  .area {
    position: relative;
    /* absolute는 부모가 relative일 때 부모를 따라간다. */
    width: 100%;
    padding-bottom: 56.25%;
    /* 16:9 비율 */
  }

  .video {
    position: absolute;
    width: 100%;
    /* 부모에 맞게 꽉 채운다. */
    height: 100%;
    border-radius: 15px;
  }
}
</style>