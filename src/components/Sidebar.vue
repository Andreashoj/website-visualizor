<script setup lang="ts">
import draggable from "vuedraggable";
import { ref } from "vue";
import { v4 as uuid } from "uuid";
import layouts from "../static/sidebarLayouts";
import components from "../static/sideBarComponents";
import useTheme from "../composables/useTheme";

const drag = ref(false);
const { theme, setTheme, themes } = useTheme();

const addIdToCLone = (original: any) => {
  let copyObj = Object.assign({}, original);
  copyObj.id = uuid();
  return copyObj;
};
</script>

<template>
  <div class="sidebar">
    <div>
      <h3 class="sidebar__layout-title">Layout</h3>
      <draggable
        v-model="layouts"
        @start="drag = true"
        @end="drag = false"
        item-key="value"
        class="draggable sidebar__layout-container"
        handle=".draggable"
        :group="{ name: 'layout', pull: 'clone', put: false }"
        :sort="false"
        :clone="addIdToCLone"
      >
        <template #item="{ element }">
          <div :id="element.title" class="sidebar__layout">
            {{ element.title }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="sidebar__component-section">
      <h3 class="sidebar__layout-title">Components</h3>
      <draggable
        v-model="components"
        @start="drag = true"
        @end="drag = false"
        item-key="value"
        class="draggable sidebar__layout-container"
        handle=".draggable"
        :group="{ name: 'components', pull: 'clone', put: false }"
        :sort="false"
        :clone="addIdToCLone"
      >
        <template #item="{ element }">
          <div :id="element.title" class="sidebar__layout">
            {{ element.title }}
          </div>
        </template>
      </draggable>
    </div>

    <div class="sidebar__component-section">
      <h3 class="sidebar__layout-title">Temaer</h3>
      <span
        v-for="theme in themes"
        :key="theme.value"
        @click="setTheme(theme)"
        >{{ theme.title }}</span
      >
    </div>
    active theme: {{ theme.title }}
  </div>
</template>

<style lang="scss"></style>
