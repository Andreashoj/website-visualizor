<script setup lang="ts">
import { ref, shallowRef } from "vue";
import draggable from 'vuedraggable'
import DragComponent from "./DragComponent.vue";

const drag = ref(false)
</script>

<template class="layout-row">
	<div class="row">
		<div class="col-lg-4" v-for="index in 3" :key="index">
			<DragComponent />
		</div>
	</div>
</template>

<style>
.layout-row {
	height: 100%;
}
</style>

