import { boot } from "quasar/wrappers";

export default boot(async ({ router }) => {
  const authUser = null;

  router.beforeEach((to, from) => {
    if (to.meta.requiresAdmin && !authUser) return { path: "/not-found" };
  });
});
