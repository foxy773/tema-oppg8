import store from './views/store/store.js';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
import AdminPanel from "./views/AdminPanel.vue";
import Games from "./views/Games.vue";
import Roulette from "./views/Roulette.vue"

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
		component: AdminPanel
	},
	{ 	name: 'games',
		path: '/games',
  		component: Games
	},
	{ 	name: 'roulette',
		path: '/games/roulette',
  		component: Roulette
	}
];

const router = createRouter({
	routes: routes,
	history: createWebHistory()
})

export default router;