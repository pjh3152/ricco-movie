<template>
  <div class="container">
    <div class="area">
      <iframe class="video img-fluid" :src="`https://www.youtube.com/embed/${m.videoKey}?autoplay=0&controls=0`" allow="autoplay" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const m = defineProps({
  videoKey: String,
})

</script>

<style lang="scss" scoped>
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
</style>