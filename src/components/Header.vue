<template>
  <div class="header">
    <div class="header__content">
      <router-link :to="{ name: 'home' }"
        ><img
          class="content__logo"
          src="/images/Norsk-tipping-logo-trans2.png"
          alt=""
      /></router-link>
      <Navbar v-if="!getUserLoggedIn" />
      <UserNavbar v-if="getUserLoggedIn" />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
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
  position: fixed;
  width: 100%;
  height: 6rem;
  max-height: 6rem;
  background: var(--background2);
  padding: 0.2rem;
  display: flex;
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
  width: auto;
}

.content__logo:hover {
  cursor: pointer;
}
</style>