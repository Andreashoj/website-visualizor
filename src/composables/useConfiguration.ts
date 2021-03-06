import { reactive, watch, onBeforeMount } from 'vue';
import { v4 as uuid } from 'uuid';

// Outside of function scope to create global variable
const config = reactive<IConfiguration>({ rows: [], id: uuid() });

export default function useConfiguration() {
  // Check for previous configs in local storage
  onBeforeMount(() => {
    const configs = localStorage.getItem('baconLibConfig');
    if (configs) {
      const { id, rows } = JSON.parse(configs);
      config.id = id;
      config.rows = rows;
    }
  });

  // Update local storage
  watch(
    config,
    () => {
      localStorage.setItem('baconLibConfig', JSON.stringify(config));
    },
    { deep: true }
  );

  // Add row
  const addRow = (row: IRow) => {
    config.rows.push(row);
  };

  const addLayout = (layout: ILayout[], id: string) => {
    // Find the row with matching id, and insert layout values into the row
    config.rows.forEach((row) => {
      if (row.id === id) {
        row.layout = layout;
      }
    });
  };

  // Update components in a layout column
  const updateComponents = (
    components: IColumn,
    rowId: string,
    layoutId: string
  ) => {
    config.rows.forEach((row) => {
      if (row.id === rowId) {
        row.layout?.forEach((layout) => {
          if (layout.id === layoutId) {
            layout.components = components;
          }
        });
      }
    });
  };

  return {
    config,
    addRow,
    addLayout,
    updateComponents,
  };
}
