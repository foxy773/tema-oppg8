import store from './views/store/store.js';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
console.log("routes")

const routes = [
	{	name: 'home',
	 	path: '/',
	  	component: Home
	},
	{ 	name: 'profile',
	 	path: '/profile',
		component: Profile
	},
	{ 	name: 'adminpanel',
	 	path: '/adminpanel',
		component: Profile
	}
];

const router = createRouter({
	routes: routes,
	history: createWebHistory()
})

export default router;