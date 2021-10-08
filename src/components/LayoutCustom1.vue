<script setup lang="ts">
import { defineProps, reactive, watch } from "vue";
import DragComponent from "./DragComponent.vue";
import useConfiguration from "../composables/useConfiguration"

const { updateComponents } = useConfiguration();

const props = defineProps({
	id: { type: String, required: true },
	rowId: { type: String, required: true },
})

const cols = reactive<IColumn>({
	col1: {
		components: []
	},
	col2: {
		components: []
	}
})

watch(cols, () => {
	updateComponents(cols, props.rowId, props.id)
}, { deep: true })

</script>
	
<template>
	<div class="row layout-row">
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

