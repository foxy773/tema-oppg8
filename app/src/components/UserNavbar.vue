<template>
  <div class="navBar">
      <ul class="navBar__list">
          <li class="list__item">
				 <ProfileHeader />
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
import ProfileHeader from "./ProfileHeader.vue";
import { getAuth, signOut } from "firebase/auth";
export default {
	data() {
		return {

		}
	},

	components: {
    ProfileHeader
  },

	computed: {

	},

	methods: {
		signOutUser() {
			const auth = getAuth();										// Signs out the user using firebases simple logout function
			signOut(auth).then(() => {
				console.log(auth)
				this.$store.dispatch("updateUserData", null)
				this.$router.push({name: 'home'})
				}).catch((error) => {
					console.log(error)
				});
		}
	}
}
</script>

<style scoped>

</style>