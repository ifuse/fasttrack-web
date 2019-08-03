import Vue from "vue"
import Router from "vue-router"
import { publicRoute, protectedRoute } from "./config"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
const routes = publicRoute.concat(protectedRoute)
import AuthGuard from './auth-guard'
Vue.use(Router)
const router = new Router({
        mode: "history",
        linkActiveClass: "active",
        routes: routes
    })
    // router gards
router.beforeEach((to, from, next) => {
    NProgress.start()
    redirect: "/auth/login",

        next()
})

router.afterEach((to, from) => {
    NProgress.done()
})

export default router