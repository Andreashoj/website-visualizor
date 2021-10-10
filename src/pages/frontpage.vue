<script setup lang="ts">
import DropRow from "../components/DropRow.vue";
import Button from "../components/Button.vue";
import useConfiguration from "../composables/useConfiguration"
import Row from "../models/Rows";

const { addRow, config } = useConfiguration();

function rowAdder() {
	addRow(new Row);
}

</script>

<template>
	<div class="container">
		<DropRow v-for="(row) in config.rows" :key="row.id" :row-id="row.id" :row-layouts="row.layout" />
		<button @click="rowAdder">Add row</button>
	</div>
</template>

<style>
</style>
