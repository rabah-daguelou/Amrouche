
import { createRouter, createWebHistory} from 'vue-router';

import Home from '@/views/AppHome.vue'
import About from '@/views/AppAbout.vue'
import Login from '@/views/AppLogin.vue'
import NotFound from '@/views/NotFound.vue'

const routes= [
    {
        name: 'Home',
        path: '/',
        component: Home,
        meta: {
            title:"Accueil",
        }
    },
    {
        name: 'About',
        path: '/About',
        component:About,
        meta: {
            title:" A propos",
        }
    },
    {
        name: 'Login',
        path: '/Login',
        component: Login,
        meta: {
            title:" Se connecter ",
        }
    },
    {
        name: 'Not Found',
        path: '/:pathMatch(.*)',
        component: NotFound,
        meta: {
            title:" 404 Not Found ",
        }
    },

]
const router= createRouter ({
    history: createWebHistory(),
    routes,
})

// Insérer un titre à chaque vue
router.afterEach((to)=> document.title=to.meta.title);

export default router;