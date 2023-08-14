<template>
  <div class="menu-search-dialog">
    <SvgIcon @click="handleOpen" name="search" @mouseenter="mouseenterHandler" @mouseleave="mouseleaveHandler" />
    <el-dialog v-model="isShowSearch" destroy-on-close :modal="false" :show-close="false" fullscreen @click="closeSearch">
      <el-autocomplete
        ref="menuInputRef"
        v-model="searchMenu"
        value-key="path"
        placeholder="search by keyword or date"
        :fetch-suggestions="searchMenuList"
        @select="handleClickMenu"
        @click.stop
      >
        <template #prefix>
          <el-icon>
            <Search />
          </el-icon>
        </template>
        <template #default="{ item }">
          <div class="search-item">
            <span> {{ item.value }} </span>
            <span class="date-text"> {{ item.date }} </span></div>
        </template>
      </el-autocomplete>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from "vue";
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import data from '@/assets/data.json'
import SvgIcon from '@/components/SvgIcon/index.vue'
import mittBus from '@/utils/mittBus'
// const authStore = useAuthStore();
console.log(data);
const menuList = computed(() => data.events.map((item, index) => {
  item.value = item.text.headline
  const { year, month, day } = item.start_date.data
  item.date = `${year}/${month}/${day}`
  item.slide_index = index + 1
  return item
}));

const searchMenuList = (queryString, cb) => {
  const results = queryString ? menuList.value.filter(filterNodeMethod(queryString)) : menuList.value;
  console.log(menuList);
  cb(results);
};

// 父组件方法
const emits = defineEmits(['changeVisible'])

const mouseenterHandler = () => {
  emits('changeVisible', true)
}

const mouseleaveHandler = () => {
  emits('changeVisible', false)
}

// 打开搜索框
const isShowSearch = ref(false);
const menuInputRef = ref();
const searchMenu = ref("");
const handleOpen = () => {
  console.log('click');
  isShowSearch.value = true;
  emits('changeVisible', false)
  nextTick(() => {
    setTimeout(() => {
      menuInputRef.value.focus();
    });
  });
};

// 搜索窗关闭
const closeSearch = () => {
  isShowSearch.value = false;
};

// 筛选菜单
const filterNodeMethod = (queryString) => {
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1 || restaurant.date.toLowerCase().indexOf(queryString.toLowerCase()) > -1
    );
  };
};

// 点击菜单跳转
const handleClickMenu = (item) => {
  console.log(item);
  searchMenu.value = "";
  closeSearch();
  mittBus.emit('goto', item.slide_index)
  // searchMenu.value = "";
  // if (menuItem.meta.isLink) window.open(menuItem.meta.isLink, "_blank");
  // else router.push(menuItem.path);
  // closeSearch();
};
</script>

<style scoped lang="scss">

.menu-search-dialog {
  :deep(.el-dialog) {
    background-color: rgb(0 0 0 / 50%);
    border-radius: 0 !important;
    box-shadow: unset !important;
    .el-dialog__header {
      border-bottom: none !important;
    }
  }
  :deep(.el-autocomplete) {
    position: absolute;
    top: 100px;
    left: 50%;
    width: 550px;
    transform: translateX(-50%);
    .el-input__wrapper {
      background-color: '#000';
    }
  }
}
.el-autocomplete__popper {
  .el-icon {
    position: relative;
    top: 2px;
    font-size: 16px;
  }
  span {
    font-size: 14px;
  }
}

.search-item {
  display: flex;
  justify-content: space-between;

  .date-text {
    color: #ccc;
  }
}
</style>
