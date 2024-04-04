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
          <span class="ms-2">{{ mData.runtime }}분</span>
          <div class="my-3">
            {{ mData.overview }}
          </div>
        </h5>

        <div class="area" v-if="mVideo.length > 0 && mVideo[0]">
          <iframe class="video" :src="`https://www.youtube.com/embed/${mVideo[0].key}?autoplay=0&controls=0`"
            allow="autoplay" />
        </div>
      </div>
    </div>

    <div class="row" v-if="mVideo.length > 0 && mVideo[1]">
      <div v-for="(v, idx) in mVideo" :key="idx" class="col-lg-3">
        <VideoCard :videoKey="v.key" v-if="idx < 4"/>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-2" v-if="mDirector">
        <CreditCard :data="mDirector" />
      </div>
      <div v-for="(d, idx) in mCredit.cast" :key="idx" class="col-lg-2">
        <CreditCard :data="d" v-if="idx < 18" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { api } from "@/api/axios";
import { useRoute } from "vue-router";
import { poster, backDrop } from "@/util/poster";
import CreditCard from "@/components/CreditCard";
import VideoCard from "@/components/VideoCard";

const mData = ref({});
const mVideo = ref({});
const mCredit = ref({});
const mDirector = ref({});
const route = useRoute();
const bgStyle = ref("");
const originTitle = ref("");

const getData = async () => {

  const [detail, credit] = await Promise.all([
    api.getDetail(route.params.id),
    api.getCredits(route.params.id),
  ]).catch((err) => { console.log(err); })

  mData.value = detail.data;
  mCredit.value = credit.data;
  mVideo.value = detail.data.videos.results;

  // 영어제목
  originTitle.value = `(${detail.data.original_title})`;

  // 배경이미지
  bgStyle.value = "url('" + backDrop(detail.data.backdrop_path) + "')";

  // 감독
  mDirector.value = credit.data.cast.find((item) => item.known_for_department === "Directing");
}

getData();

</script>

<style lang="scss" scoped>
@font-face {
  font-family: '맑은고딕';
  src: url('@/assets/fonts/맑은고딕.ttf') format('truetype');
}

.container-fluid {

  font-family: '맑은고딕';

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