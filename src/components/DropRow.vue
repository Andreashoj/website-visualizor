<script setup lang="ts">
import { ref, shallowRef, defineProps, watch, onMounted } from "vue";
import draggable from 'vuedraggable'
import useConfiguration from "../composables/useConfiguration"

const { addLayout } = useConfiguration();

const props = defineProps({
	rowId: { type: String, required: true },
	rowLayouts: { type: Array as () => ILayout[] }
});

const drag = ref(false)
const layout = shallowRef([])

// Update row content on change 
watch(layout, () => {
	addLayout(layout.value, props.rowId)
})

onMounted(() => {
	props.rowLayouts?.forEach((row) => {
		//@ts-ignore
		layout.value.push(row)
	})
})

</script>

<template>
	<div class="dropzone row">
		<draggable
			class="dropzone"
			v-model="layout"
			group="layout"
			@start="drag = true"
			@end="drag = false"
			item-key="value"
		>
			<template #item="{ element, index }">
				<Component :key="index" :is="element.value" :id="element.id" :row-id="props.rowId" />
			</template>
		</draggable>
	</div>
</template>

<style lang="scss">
.dropzone {
	min-height: 400px;
	height: 100%;
	width: 100%;
	border: 1px dotted black;
}
</style>

