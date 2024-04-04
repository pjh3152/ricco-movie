<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <iframe class="video" :src="`https://www.youtube.com/embed/${m.videoKey}?autoplay=0&controls=0`" allow="autoplay" />
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
.video {
  border-radius: 15px;
}
</style>