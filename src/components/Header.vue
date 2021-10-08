<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  foo: String,
	test: String as () => string,
})

const capacity = ref(4);
const attending = ref(["Tim", "Bob", "Joe"]);

const spacesLeft = computed(() => {
	return capacity.value - attending.value.length;
});

function increaseCapacity() {
	capacity.value++;
}

</script>

<template>
	<div class="container"></div>
</template>

<style>
</style>
