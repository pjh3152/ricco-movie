<template>
  <div>
    <div class="fixed-top"><TheHeader /></div>
    <div><router-view /></div>
    <div><TheFooter v-if="$route.name !== 'Detail'"/></div>
  </div>
</template>

<script setup>
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
</script>

<style lang="scss" scoped>
</style>