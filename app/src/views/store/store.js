import { createStore } from "vuex"
import main from "./modules/main"
import roulette from "./modules/roulette"

const store = createStore({
	modules: {
		main,
		roulette
	}
})

export default store;