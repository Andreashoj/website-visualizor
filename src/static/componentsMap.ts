import { defineAsyncComponent } from "vue";
import { v4 as uuid } from 'uuid';
const LayoutCustom1 = defineAsyncComponent(() => import('../components/LayoutCustom1.vue'));
const LayoutCustom2 = defineAsyncComponent(() => import('../components/LayoutCustom2.vue'));
import ButtonComponent from '../components/Button.vue';
import ImageComponent from '../components/ImageComponent.vue';
import VideoComponent from '../components/VideoComponent.vue';

const componentsMap = [
  {
    value: ButtonComponent,
    title: 'ButtonComponent',
    id: uuid(),
  },
  {
    value: ImageComponent,
    title: 'ImageComponent',
    id: uuid(),
  },
  {
    value: VideoComponent,
    title: 'VideoComponent',
    id: uuid(),
  },
  {
    value: LayoutCustom1,
    title: 'Layout 50/50',
    id: uuid(),
  },
  {
    value: LayoutCustom2,
    title: 'Layout 30/30/30',
    id: uuid(),
  },
];

export default componentsMap;
