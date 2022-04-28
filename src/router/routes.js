const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),

    children: [
      {
        path: "",
        name: "Home",
        component: () => import("src/pages/main/HomePage.vue"),
      },
      {
        path: "/discussions",
        name: "Discussions",
        component: () => import("src/pages/main/DiscussionsPage.vue"),
      },
      {
        path: "/discussions/create",
        name: "Create Topic",
        component: () => import("src/pages/main/CreateTopic.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
