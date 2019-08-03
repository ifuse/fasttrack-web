import { AuthLayout, DefaultLayout } from "@/components/layouts"
export const publicRoute = [{
        path: "/auth",
        component: AuthLayout,
        meta: { title: "Login" },
        redirect: "/auth/login",
        hidden: true,
        children: [{
            path: "login",
            name: "login",
            meta: { title: "Login" },
            component: () =>
                import ("@/views/auth/Login.vue")
        }]
    },

    {
        path: "/404",
        name: "404",
        meta: { title: "Not Found" },
        component: () =>
            import ("@/views/error/NotFound.vue")
    },

    {
        path: "/500",
        name: "500",
        meta: { title: "Server Error" },
        component: () =>
            import ( /* webpackChunkName: "errors-500" */ "@/views/error/Error.vue")
    }
]
export const protectedRoute = [{
    path: "/",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [{
            path: "/dashboard",
            name: "Dashboard",
            meta: { title: "Home", group: "apps", icon: "dashboard" },
            component: () =>
                import ("@/views/Dashboard.vue")
        },

        {
            path: "/403",
            name: "Forbidden",
            meta: { title: "Access Denied", hiddenInMenu: true },
            component: () =>
                import ( /* webpackChunkName: "error-403" */ "@/views/error/Deny.vue")
        }
    ]
}]
router.beforeEach((to, _from, next) => {
    const requiresAuth = to
        .matched
        .some(record => record.meta.requiresAuth)
    const user = firebase
        .auth()
        .currentUser
    if (requiresAuth && !user) {
        next('/auth')
    }
    next()
})

export default router