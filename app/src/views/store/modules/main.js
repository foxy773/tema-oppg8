
export default {
	state() {
		return {
			generalWebsite: {
				loading: true,
				games: null
			},

			loggedInUser: null,
			userLoggedIn: false,
			allUsers: null,

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
		},

		updateAllUsers(state, data) {
			state.allUsers = data
		},

		loadingSwitch(state, data) {
			state.generalWebsite.loading = data
		},

		updateUserLoggedIn(state, data) {
			state.userLoggedIn = data
		},

		updateGames(state, data) {
			state.generalWebsite.games = data
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

		updateUserData({commit, dispatch}, data) {
			console.log(data, "User sendt too store")
			commit("updateUserData", data)
			dispatch("loadWebsite")
		},

		updateAllUsers({commit}, data) {
			commit("updateAllUsers", data)
		},

		loadingSwitch({commit}, data) {
			commit("loadingSwitch", data)
			dispatch("loadWebsite")
		},

		updateUserLoggedIn({commit, dispatch}, data) {
			commit("updateUserLoggedIn", data)
			console.log("updatedUserLoginStatus")
			dispatch("loadWebsite")
		},

		updateGames({commit}, data) {
			commit("updateGames", data)
		},

		async loadWebsite({commit, state}, data) {
			let loggedInUserData = await state.loggedInUser
			let userLoggedIn = await state.userLoggedIn
			console.log(loggedInUserData, userLoggedIn, "test")
			if (userLoggedIn === false && loggedInUserData === null) {
				console.log("YES!")
				commit("loadingSwitch", false)
			} else if (userLoggedIn === true && loggedInUserData !== null) {
				console.log("YES!")
				commit("loadingSwitch", false)
			} else {
				console.log("NO!")
				commit("loadingSwitch", true)
			}
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

		getAllUsers(state) {
			return state.allUsers
		},

		getWebsiteLoading(state) {
			return state.generalWebsite.loading
		},

		getLoggedInUser(state) {
			return state.loggedInUser
		},

		getUserLoggedIn(state) {
			return state.userLoggedIn
		},

		getGames(state) {
			return state.generalWebsite.games
		}
	}
};
