
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
			rouletteChipsPallet: [
				{ value: 1, chipDisplay: "1" },
				{ value: 10, chipDisplay: "10" },
				{ value: 100, chipDisplay: "100" },
				{ value: 1e3, chipDisplay: "1K" },
				{ value: 1e4, chipDisplay: "10K" },
				{ value: 1e5, chipDisplay: "100K" },
				{ value: 1e6, chipDisplay: "1M" },
				{ value: 1e7, chipDisplay: "10M" },
				{ value: 1e8, chipDisplay: "100M" },
				{ value: 1e9, chipDisplay: "1B" },
				{ value: 1e10, chipDisplay: "10B" },
				{ value: 1e11, chipDisplay: "100B" }
			],
			currentNumber: null,
			numberHistory: [],
			serverRoundStatusBoard:[
			{ statusCode: 0, message: "Waiting for new round!" },
			{ statusCode: 1, message: "Bets open!" },
			{ statusCode: 2, message: "Bets closed!" },
			{ statusCode: 3, message: "Spinning!" },
			{ statusCode: 4, message: "Server down for maintenance!" },
		]
		};
	},

	mutations: {
		updateCurrentNum(state, data) {
			state.currentNumber = data
		},

		updateNumberHistory(state, data) {
			state.numberHistory.push(data)
		}
	},

	actions: {
		updateCurrentNum({ commit }, data) {
			commit("updateCurrentNum", data)
		},
		updateNumberHistory({ commit }, data) {
			commit("updateCurrentNum", data)
		}
	},

	getters: {
		getRoulettePallet(state) {
			return state.roulettePallet
		},

		getRouletteChipsPallet(state) {
			return state.rouletteChipsPallet
		},

		getServerRoundStatusBoard(state) {
			return state.serverRoundStatusBoard
		},

		getnumberHistory(state) {
			return state.numberHistory
		}
	}
};
