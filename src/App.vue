<script setup>
import mittBus from '@/utils/mittBus';

mittBus.on('loaded', () => {
  document.querySelector('#loading').classList.remove('loading')
})
</script>

<template>
  <div class="app">
    <div id="loading" class="loading"></div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
}

/* Page Loader */
.loading::before,
.loading::after {
	content: '';
	position: fixed;
	z-index: 20210823;
}

.loading::before {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 140, 0);
}

.loading::after {
	top: 50%;
	left: 50%;
	width: 48px;
	height: 48px;
	margin: -30px 0 0 -30px;
	opacity: 0.4;
	background: url(./assets/load.png) no-repeat center center;
	animation: loaderAnim 0.7s linear infinite alternate forwards;

}

@keyframes loaderAnim {
	to {
		opacity: 1;
		transform: scale3d(0.5,0.5,1);
	}
}
</style>
