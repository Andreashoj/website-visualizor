import { shallowRef } from 'vue';
import { v4 as uuid } from 'uuid';
import ButtonComponent from '../components/Button.vue';
import ImageComponent from '../components/ImageComponent.vue';
import VideoComponent from '../components/VideoComponent.vue';

const components = shallowRef([
  {
    value: ButtonComponent,
    title: 'Button component',
    id: uuid(),
  },
  {
    value: ImageComponent,
    title: 'Image Component',
    id: uuid(),
  },
  {
    value: VideoComponent,
    title: 'Video Component',
    id: uuid(),
  },
]);

export default components;
