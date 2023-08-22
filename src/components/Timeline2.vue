<template>
  <Snslist />
  <div id='timeline-embed' style="height: 100%;"></div>
</template>

<script setup>
import { onMounted } from 'vue';

import Snslist from './Snslist.vue';

import data from '@/assets/data.json'
import mittBus from '@/utils/mittBus';
import { useI18n } from 'vue-i18n';

const i18n = useI18n()
const lang = i18n.locale.value

const additionalOptions  = {
  language: lang === 'zh' ? 'zh-cn' : lang,
  initial_zoom: 4
}

onMounted(() => {
  const timeline = new TL.Timeline('timeline-embed', data, additionalOptions)
  
  timeline.on('loaded', (e) => {
    mittBus.emit('loaded')
  })
  
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