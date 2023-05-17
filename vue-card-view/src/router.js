import { createRouter, createWebHistory } from 'vue-router';
import Main from "./components/pages/Main.vue";
import Detail from "./components/pages/Detail.vue";
import Profile from "./components/pages/Profile.vue";
import NotFound from "./components/pages/404.vue";

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', name: "Main", component: Main},
    {path: '/work/:number/detail', name: "Works", component: Detail},
    {path: '/profile', name: "Profile", component: Profile},
    {path: '/:patchMatch(.*)*', name:"NotFound", component: NotFound}
]

const router = createRouter({
    history: createWebHistory('/nhantt92.github.io/'),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        } else {
            return new Promise(resolve => {
                if(to.matched.some(m => m.meta.scrollToTopp)) {
                    setTimeout(() => {
                        resolve({top: 0, left: 0})
                    }, 750);
                }
            })
        }
    }
})

export default router;