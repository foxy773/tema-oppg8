
export default {
	state() {
		return {
			generalWebsite: {
				loading: true
			},

			loggedInUser: null,
			userLoggedIn: false,

			userAuth: {
				signInVisible: false,
				registerVisible: false
			}
		};
	},

	mutations: {
		switchSignInVisible(state, data) {
			state.userAuth.signInVisible = !state.userAuth.signInVisible
		},

		switchRegisterVisible(state, data) {
			state.userAuth.registerVisible = !state.userAuth.registerVisible
		},

		updateUserData(state, data) {
			state.loggedInUser = data
			console.log(data, "hello")
		},

		loadingSwitch(state, data) {
			state.generalWebsite.loading = data
		},

		updateUserLoggedIn(state, data) {
			state.userLoggedIn = data
		}
	},

	actions: {
		switchSignInVisible({commit}, data) {
			commit("switchSignInVisible", data)
		},

		switchRegisterVisible({commit}, data) {
			commit("switchRegisterVisible", data)
		},

		changeVisableRegisterForm({commit}, data) {
			commit("switchSignInVisible", data)
			commit("switchRegisterVisible", data)
		},

		updateUserData({commit}, data) {
			console.log(data, "User sendt too store")
			commit("updateUserData", data)
		},

		loadingSwitch({commit}, data) {
			commit("loadingSwitch", data)
			console.log("loadingsw")
		},

		updateUserLoggedIn({commit}, data) {
			commit("updateUserLoggedIn", data)
			console.log("updatedUserLoginStatus")
		}
	},

	getters: {

		getSignInVisible(state) {
			return state.userAuth.signInVisible
		},

		getRegisterVisible(state) {
			return state.userAuth.registerVisible
		},

		getAllUserData(state) {
			return state.loggedInUser
		},

		getWebsiteLoading(state) {
			return state.generalWebsite.loading
		},

		getLoggedInUser(state) {
			return state.loggedInUser
		},

		getUserLoggedIn(state) {
			return state.userLoggedIn
		}
	},

	computed: {
		/* onUserSignedIn() {
      	onAuthStateChanged(auth, (user) => {
        if (user) {
			  console.log(user)
		  }
      })
    } */
	}
};
