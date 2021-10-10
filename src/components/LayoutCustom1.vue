<script setup lang="ts">
import { ref, watch, onBeforeMount } from "vue";
import DragComponent from "./DragComponent.vue";
import useConfiguration from "../composables/useConfiguration"

const { updateComponents, findLayoutCols } = useConfiguration();

const props = defineProps({
	id: { type: String, required: true },
	rowId: { type: String, required: true },
})

let cols = ref<IColumn>({
	col1: {
		components: []
	},
	col2: {
		components: []
	}
})

const loading = true;

watch(cols, () => {
	updateComponents(cols.value, props.rowId, props.id)
}, { deep: true })

onBeforeMount(() => {
	const layoutCols = findLayoutCols(props.rowId, props.id)

	if (layoutCols && layoutCols.col1) {
		cols.value = layoutCols
	}
})

</script>
	
<template>
	<div class="row layout-row" v-if="cols">
		<div class="col-lg-6">
			<DragComponent v-model:components="cols.col1.components" />
		</div>
		<div class="col-lg-6">
			<DragComponent v-model:components="cols.col2.components" />
		</div>
	</div>
</template>

<style lang="scss">
.layout-row {
	height: 100%;
}
</style>

