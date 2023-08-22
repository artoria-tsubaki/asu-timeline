<template>
  <div class="sns-list">
    <el-tooltip
      class="box-item"
      effect="dark"
      content="Twitter: ASU_virtual"
      placement="left"
    >
      <SvgIcon name="twitter" @click="jumpToTwitter" />
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      content="YouTube: @ASU_virtual"
      placement="left"
    >
      <SvgIcon name="youtube" @click="jumpToYoutube" />
    </el-tooltip>
    <el-tooltip
      class="box-item"
      effect="dark"
      :content="$t('home.search')"
      placement="left"
      :visible="visible"
    >
      <Search @changeVisible="changeVisible" />
    </el-tooltip>
  </div>
</template>

<script setup>
import Search from '@/components/Search.vue';
import SvgIcon from '@/components/SvgIcon/index.vue'
import { ref } from 'vue'

const visible = ref(false)

const changeVisible = (flag) => {
  console.log(flag);
  visible.value = flag
}

const jumpToTwitter = () => {
  window.open('https://twitter.com/ASU_virtual', '_blank')
}

const jumpToYoutube = () => {
  window.open('https://www.youtube.com/@ASU_virtual', '_blank')
}

</script>

<style lang="scss" scoped>
.sns-list {
  position: fixed;
  right: 40px;
  top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    right: 10px;
  }
}
</style>