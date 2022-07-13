const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("pages/main/HomePage.vue"),
      },
      {
        path: "/projects",
        name: "Projects",
        component: () => import("pages/main/ProjectsPage.vue"),
      },
    ],
  },

  // Admin Auth
  {
    path: "/secret",
    name: "Secret Auth",
    redirect: "/secret/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "/secret/auth",
        name: "Secret Auth",
        component: () => import("pages/admin/AuthPage.vue"),
      },
    ],
  },

  // Admin Routes
  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    meta: {
      requiresAuth: true,
    },
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
      {
        path: "/admin/manage-guests",
        name: "Manage Guests",
        component: () => import("pages/admin/ManageGuests.vue"),
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
