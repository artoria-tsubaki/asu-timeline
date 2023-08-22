<template>
  <div id='timeline-embed' style="width: 100%; height: 100%;"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import example from '@/assets/example.json'
import { useI18n } from 'vue-i18n';

const i18n = useI18n()

onMounted(() => {
  const additionalOptions  = {
    language: i18n.locale.value
  }
  const timeline = new TL.Timeline('timeline-embed', example, additionalOptions)
})
</script>

<style lang="scss" scoped>

</style>