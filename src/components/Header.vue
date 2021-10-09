<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  foo: String,
  test: String as () => string,
});

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
  <div class="header">
    <div class="header__logo">
      <i class="fi br-book-alt"></i>
      <h6>BaconLib</h6>
    </div>
    <div class="header__mode">
      <div class="header__edit mode-active"><p>Rediger</p></div>
      <div class="header__preview"><p>Visning</p></div>
    </div>
  </div>
</template>

<style></style>
