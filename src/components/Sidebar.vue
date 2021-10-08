<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref } from "vue";
import { v4 as uuid } from 'uuid';
import layouts from "../static/sidebarLayouts"
import components from "../static/sideBarComponents"
import useTheme from "../composables/useTheme"

const drag = ref(false);
const { theme, setTheme, themes } = useTheme()

const addIdToCLone = (original: any) => {
	let copyObj = Object.assign({}, original)
	copyObj.id = uuid()
	return copyObj
}

</script>

<template>
	<div class="sidebar">
		<h2>Sidebar</h2>
		<div class>
			<h3>Layout</h3>
			<draggable
				v-model="layouts"
				@start="drag = true"
				@end="drag = false"
				item-key="value"
				class="draggable"
				handle=".draggable"
				:group="{ name: 'layout', pull: 'clone', put: false }"
				:sort="false"
				:clone="addIdToCLone"
			>
				<template #item="{ element }">
					<div :id="element.title">{{ element.title }}</div>
				</template>
			</draggable>
		</div>
		<div>
			<h3>Components</h3>
			<draggable
				v-model="components"
				@start="drag = true"
				@end="drag = false"
				item-key="value"
				class="draggable"
				handle=".draggable"
				:group="{ name: 'components', pull: 'clone', put: false }"
				:sort="false"
				:clone="addIdToCLone"
			>
				<template #item="{ element }">
					<div :id="element.title">{{ element.title }}</div>
				</template>
			</draggable>
		</div>

		<div class="themes">
			<span v-for="theme in themes" :key="theme.value" @click="setTheme(theme)">{{ theme.title }}</span>
		</div>
		active theme: {{ theme.title }}
	</div>
</template>

<style lang="scss">
.sidebar {
	position: absolute;
	height: 100vh;
	background-color: #89b0ae;
	left: 0;
	top: 0;
	width: 200px;
}

.draggable {
	cursor: grab;
}

.themes {
	margin-top: 20px;
}
</style>
