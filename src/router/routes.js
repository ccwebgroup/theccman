const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("pages/main/HomePage.vue"),
      },
      {
        path: "/discussions",
        name: "Discussions",
        component: () => import("pages/main/DiscussionsPage.vue"),
      },
      {
        path: "/discussions/create",
        name: "Create Topic",
        component: () => import("pages/main/CreateTopic.vue"),
      },
      {
        path: "/projects",
        name: "Projects",
        component: () => import("pages/main/ProjectsPage.vue"),
      },
    ],
  },

  // Admin Routes
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    // meta: {
    //   requiresAdmin: true,
    // },
    redirect: "/admin/dashboard",
    children: [
      {
        path: "/admin/dashboard",
        name: "Dashboard",
        component: () => import("pages/admin/DashboardPage.vue"),
      },
      {
        path: "/admin/manage-projects",
        name: "Manage Projects",
        component: () => import("pages/admin/ManageProjects.vue"),
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
