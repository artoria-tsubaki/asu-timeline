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
  const timeline = new TL.Timeline('timeline-embed', data, { initial_zoom: 4 })
  
  // timeline.on('loaded', (e) => {
  //   console.log(e);
  // })
  
  // timeline.on('change', (id) => {
  //   console.log(id);
  // })
  
  mittBus.on('goto', (index) => {
    timeline.goTo(index)
  })

  // const timelineResize = () => {
  //   console.log('function timelineResize');
  //   timeline && timeline.updateDisplay();
  // }

  // window.addEventListener("resize", timelineResize);
})
</script>

<style lang="scss" scoped>

</style>