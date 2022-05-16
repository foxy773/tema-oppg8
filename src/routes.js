import store from './views/store/store.js';

import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
console.log("routes")

export default [
	{	name: 'home',
	 	path: '/',
	  	component: Home
	},
	{ 	name: 'profile',
	 	path: '/profile',
		 beforeEach: ( async(to, from, next) => {
			 let userLoggedIn = await store.getters["getUserLoggedIn"]
			 console.log("check")
			if(userLoggedIn) {
				next()
				console.log("Profile authenticated")

			/* } else if (!userLoggedIn  ) {
				next("/") */

			} else {
				next(false)
				console.log("Profile failed authentication")
			}
		}),
		/* beforeEnter : ( async(to, from, next) => {
			let userLoggedIn = store.getters["getUserLoggedIn"]
		  console.log(userLoggedIn, "User Logged in")
		  if(userLoggedIn) {
			  next("/profile")			
		  } else {
			  next(false)
		  }
	  }), */
		component: Profile
	}
];
