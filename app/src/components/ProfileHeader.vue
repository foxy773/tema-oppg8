<template>
  <div class="profile-header" v-if="getUserInfo">
	  <img class="profile-header__image" @click="goToProfile" :src="getUserInfo.image || '/images/default-profile.png'" alt="">
	  <div class="profile-header__info">
		  <p class="info__username">{{ getUserInfo.username }}</p>
		<p class="info__credits">{{ getUserInfo.credits.toLocaleString("no-NO") }}</p>
	  </div>
  </div>
</template>

<script>
import { SignInMethod } from '@firebase/auth';
export default {
	data() {
		return {

		}
	},

	computed: {
		getUserInfo() {
			console.log(this.$store.getters.getAllUserData, "profile")
      return this.$store.getters.getAllUserData;
    },
	},

	methods: {
		goToProfile() {
			this.$router.push({name: 'profile'})
		}
	}
}
</script>

<style scoped>
	.profile-header {
		height: 100%;
		display: flex;
		padding: 0.5rem;
	}

	.profile-header__image {
		aspect-ratio: 1 / 1;
  		object-fit: cover;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 0.15rem solid var(--highlight);
	}

	.profile-header__image:hover {
		opacity: 0.5;
		cursor: pointer;
	}

	.profile-header__info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		color: var(--background);
		padding: 0.5rem;
		font-family: Jubel;
		font-weight: lighter;
		font-size: 1.1rem;
	}

	.info__username {
	}

	.info__credits {
		opacity: 0.5;
	}
</style>