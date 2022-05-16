<template>
  <div class="navBar">
      <ul class="navBar__list">
          <li class="list__item">
              <button @click="goToProfile" class="item__button">
                  <img src="" alt="">
                  <p class="button__text">Min profil</p>
            </button>
          </li>
          <li class="list__item">
              <button @click="signOutUser" class="item__button">
                  <p class="button__text">Logg ut</p>
                  <img class="button__img" src="/images/right-arrow.png" alt="">
            </button>
          </li>
      </ul>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
	data() {
		return {

		}
	},

	computed: {

	},

	methods: {
		signOutUser() {
			const auth = getAuth();
			
			signOut(auth).then(() => {
				console.log(auth)
				this.$router.push({name: 'home'})
				}).catch((error) => {
					console.log(error)
				});
		},

		goToProfile() {
			this.$router.push({name: 'profile'})
		}
	}
}
</script>

<style>

</style>