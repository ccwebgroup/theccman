import { boot } from "quasar/wrappers";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";

export default boot(({ app }) => {
  app.use(Vue3Lottie);
});
