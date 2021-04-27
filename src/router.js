import Vue from 'vue';
import Router from 'vue-router';
import login from './views/auth/login';
import dashboard from './views/pages/dashboard';

Vue.use(Router);

export default new Router ({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {name: 'login', path: '/', component: login},
        {name: 'dashboard', path: '/dashboard', component: dashboard},
    ]
})