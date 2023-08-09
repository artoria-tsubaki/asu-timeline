<template>
  
  <Snslist />
  <div id='timeline-embed' style="width: 100%; height: 100%;"></div>
</template>

<script setup>
import { onMounted } from 'vue';

import Snslist from './Snslist.vue';

import data from '@/assets/data.json'
import mittBus from '@/utils/mittBus';

onMounted(() => {
  const timeline = new TL.Timeline('timeline-embed', data)

  timeline.on('change', (id) => {
    console.log(id);
  })
  
  mittBus.on('goto', (index) => {
    timeline.goTo(index)
  })
})
</script>

<style lang="scss" scoped>

</style>