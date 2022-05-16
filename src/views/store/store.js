import { createStore } from "vuex"
import main from "./modules/main"

const store = createStore({
	modules: {
		main,
	}
})

export default store;