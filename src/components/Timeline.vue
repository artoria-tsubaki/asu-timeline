<template>
  <div id='timeline-embed' style="width: 100%; height: 100%;"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import example from '@/assets/example.json'

onMounted(() => {
  const timeline = new TL.Timeline('timeline-embed', example)
})
</script>

<style lang="scss" scoped>

</style>