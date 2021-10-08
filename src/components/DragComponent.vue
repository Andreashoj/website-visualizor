<script setup lang="ts">
import { ref, shallowRef, defineEmits, watch, defineProps } from "vue";
import draggable from 'vuedraggable'

const props = defineProps({
	components: Array as () => IComponent[]
})
const emit = defineEmits(['update:components'])

const drag = ref(false)
const localComponents = shallowRef([])

const remove = (id: number) => {
	localComponents.value = localComponents.value.filter((item: any) => item.id !== id)
}

watch(localComponents ,() => {
	emit('update:components', localComponents.value)
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
				<Component :key="element.id" :is="element.value" />
				<button @click="remove(element.id)">remove</button>
			</div>
		</template>
	</draggable>
</template>

<style>
</style>
