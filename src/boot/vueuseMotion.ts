import { boot } from 'quasar/wrappers';
import { MotionPlugin } from '@vueuse/motion';

export default boot(({ app }) => {
  app.use(MotionPlugin);
});
