
export default {
	state() {
		return {
			roulettePallet: [
				{ color: "green", number: 0 },
				{ color: "red", number: 32 },
				{ color: "black", number: 15 },
				{ color: "red", number: 19 },
				{ color: "black", number: 4 },
				{ color: "red", number: 21 },
				{ color: "black", number: 2 },
				{ color: "red", number: 25 },
				{ color: "black", number: 17 },
				{ color: "red", number: 34 },
				{ color: "black", number: 6 },
				{ color: "red", number: 27 },
				{ color: "black", number: 13 },
				{ color: "red", number: 36 },
				{ color: "black", number: 11 },
				{ color: "red", number: 30 },
				{ color: "black", number: 8 },
				{ color: "red", number: 23 },
				{ color: "black", number: 10 },
				{ color: "red", number: 5 },
				{ color: "black", number: 24 },
				{ color: "red", number: 16 },
				{ color: "black", number: 33 },
				{ color: "red", number: 1 },
				{ color: "black", number: 20 },
				{ color: "red", number: 14 },
				{ color: "black", number: 31 },
				{ color: "red", number: 9 },
				{ color: "black", number: 22 },
				{ color: "red", number: 18 },
				{ color: "black", number: 29 },
				{ color: "red", number: 7 },
				{ color: "black", number: 28 },
				{ color: "red", number: 12 },
				{ color: "black", number: 35 },
				{ color: "red", number: 3 },
				{ color: "black", number: 26 }
			],
			currentNumber: null,
			numberHistory: []
		};
	},

	mutations: {
		updateCurrentNum(state, data) {
			state.currentNumber = data
		}
	},

	actions: {
		updateCurrentNum({commit}, data) {
			commit("updateCurrentNum", data)
		}
	},

	getters: {
		getRoulettePallet(state) {
			return state.roulettePallet
		}
	}
};
