<script setup lang="ts">
import { ref, shallowRef, watch, onBeforeMount } from "vue";
import draggable from 'vuedraggable'
import useConfiguration from "../composables/useConfiguration"

const props = defineProps({
	components: { type: Array as () => IComponent[] }
})
const emit = defineEmits(['update:components'])

const drag = ref(false)
const localComponents = shallowRef<IComponent[]>([])
const { findComponent } = useConfiguration();

const remove = (id: number) => {
	localComponents.value = localComponents.value.filter((item: any) => item.id !== id)
}

watch(localComponents, () => {
	emit('update:components', localComponents.value)
})

onBeforeMount(() => {
	if (props.components && props.components.length > 0) {
		props.components.forEach(component => {
			localComponents.value.push(component)
		})
	}
})

</script>

<template>
	<draggable
		class="dropzone"
		v-model="localComponents"
		group="components"
		@start="drag = true"
		@end="drag = false"
		item-key="id"
	>
		<template #item="{ element }">
			<div>
				<Component :key="element.id" :is="findComponent(element)" />
				<button @click="remove(element.id)">remove</button>
			</div>
		</template>
	</draggable>
</template>

<style>
</style>
