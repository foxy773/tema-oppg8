<template>
<div class="games-container">																<!--This is a page that was not finished-->
	<h1 class="games-container__headline">Spill</h1>
  <ul class="games-container__game-list" v-if="getUserInfo && getGames" >
    <li class="game-list__game" v-for="game in getGames" v-bind:style="{ backgroundImage: 'url(' + game.thumbnail.image + ')' }">
      <p class="game__name">{{ game.gameName }}</p>
      <!-- <img class="game__image" :src="game.thumbnail.image" alt="" /> -->
    </li>
  </ul>
</div>
</template>

<script>
import sanity from "../sanity.js";
import queryAllGames from "../groq/allGames.groq?raw";

export default {
  data() {
    return {};
  },

  mounted() {
	  this.checkIfUserLoggedIn();
  },

  computed: {
    getUserInfo() {
      return this.$store.getters.getAllUserData;
    },

    getUserLoggedIn() {
      return this.$store.getters.getUserLoggedIn;
    },

	 getGames() {
		 return this.$store.getters.getGames;
	 }
  },

  methods: {
	  async checkIfUserLoggedIn() {											//Checks if users are logged in
      let userLoggedIn = await this.getUserLoggedIn;
      console.log(userLoggedIn, "CHECKIFUSER");
      if (userLoggedIn) {
			await this.getGamesFromSanity()
      } else {
        await this.$router.push({ name: "home" });
      }
    },

	 async getGamesFromSanity() {												// Fetches all games from sanity
      const query = queryAllGames;

      console.log(query);
      const sanityData = await sanity.fetch(query);
      console.log(sanityData);
      this.$store.dispatch("updateGames", sanityData);
    },
  }
};
</script>

<style scoped>
.games-container {
	width: 100%;
	height: 100%;
	padding: 0 2rem;
}

.games-container__headline {
	padding-top: 2rem;
	text-align: center;
}

.games-container__game-list {
	width: 100%;
	height: 100%;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 1fr);
	gap: 1rem;
	padding: 2rem 0;
}

.game-list__game {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	
	border-radius: 1rem;
	background: var(--background2);
	color: var(--background);
	font-weight: 600;
	font-size: 2rem;

	align-items: center;
	justify-content: center;
}

.game-list__game:hover {
	box-shadow: 0px 6px 0px 0px rgba(0,0,0,0.5);
	cursor: pointer;
}

.game-list__game:hover .game__name {
	font-size: 3.2rem;
	color: var(--highlight);
	text-shadow: 0 3px #ff7434, 0 5px #ff7434, 0 7px #ff7434;
}

.game__name {
	position: absolute;
	
	z-index: 2;
}
</style>