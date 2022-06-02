<template>
  <div class="header">
    <div class="header__content">
      <router-link :to="{ name: 'home' }"
        ><img
          class="content__logo"
          src="/app/public/images/Norsk-tipping-logo-trans2.png"
          alt="Torsk Tipping logo"
      /></router-link>
      <!-- <ProfileHeader /> -->
      <Navbar v-if="!getUserLoggedIn" />
      <UserNavbar v-if="getUserLoggedIn" />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import ProfileHeader from "./ProfileHeader.vue";
import UserNavbar from "./UserNavbar.vue";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {
        /* loggedIn: false */
    };
  },

  components: {
    Navbar,
    ProfileHeader,
    UserNavbar,
  },

  computed: {
    getUserLoggedIn() {
        return this.$store.getters.getUserLoggedIn
    }
  },

  methods: {
        
    },

    mounted() {
        /* this.onUserSignedIn() */
    }

};
</script>

<style scoped>
.header {
  width: 100%;
  height: 6rem;
  max-height: 6rem;
  background: var(--background2);
  padding: 0.2rem;
  display: flex;
  z-index: 100;
}

.header__content {
  width: 100%;
  height: 100%;
  padding: 0 10rem;
  display: flex;
  justify-content: space-between;
}

.content__logo {
  height: 100%;
  max-height: 100%;
  width: auto;
  max-width: 100%;
}

.content__logo:hover {
  cursor: pointer;
}
</style>