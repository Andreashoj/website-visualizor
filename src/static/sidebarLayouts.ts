import { shallowRef } from 'vue';
import { v4 as uuid } from 'uuid';
import LayoutCustom1 from '../components/LayoutCustom1.vue';
import LayoutCustom2 from '../components/LayoutCustom2.vue';

const layouts = shallowRef([
  {
    value: LayoutCustom1,
    title: 'Layout 50/50',
    id: uuid(),
    components: {},
  },
  {
    value: LayoutCustom2,
    title: 'Layout 33/33/33',
    id: uuid(),
    components: {},
  },
]);

export default layouts;
