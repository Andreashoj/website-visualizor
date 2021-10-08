<script setup lang="ts">
import { onBeforeMount, VueElement } from "vue";
import DropRow from "../components/DropRow.vue";
import useConfiguration from "../composables/useConfiguration"
import Row from "../models/Rows";

const { addRow, config } = useConfiguration();

let component: any = "";

function rowAdder() {
	addRow(new Row);
}


</script>

<template>
	<div class="container">
		<DropRow v-for="(row) in config.rows" :key="row.id" :row-id="row.id" :row-layouts="row.layout" />
		<button @click="rowAdder">Add row</button>
		<dynamic :is="config.rows[0].value" />
	</div>
</template>

<style>
</style>
