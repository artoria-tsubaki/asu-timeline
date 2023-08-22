<template>
	<svg class="svg-icon" :style="iconStyle" aria-hidden="true">
		<use :xlink:href="symbolId" />
	</svg>
</template>

<script setup name="SvgIcon">
import { computed } from "vue";
// 接收父组件参数并设置默认值
const props = defineProps({
	prefix: {
		required: false,
		type: String,
		default: "icon"
	},
	iconStyle: {
		required: false,
		default: () => ({ width: "32px", height: "32px" })
	},
	name: {
		required: true,
		type: String
	}
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>


<style lang="scss">
.svg-icon {
	outline: none;
	&:hover {
		cursor: pointer;
	}
}
</style>