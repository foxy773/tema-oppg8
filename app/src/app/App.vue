<template>
  <Header v-if="!getLoadingState"/>
  <RouterView v-if="!getLoadingState" v-on:updateUserInfo="onUserSignedIn()"/>
  <Loading v-if="getLoadingState" />

  <SignIn v-if="getSignInVisible" />
  <Register v-if="getRegisterVisible" />
</template>

<script>
import Header from "../components/Header.vue";
import SignIn from "../components/SignIn.vue";
import Register from "../components/register.vue";
import Loading from "../components/Loading.vue";

import sanity from "../sanity.js";
/* import query from "../groq/usersById.groq?raw"; */
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  data() {
    return {};
  },

  components: {
    Header,
    SignIn,
    Register,
    Loading,
  },

  computed: {
    getSignInVisible() {
      return this.$store.getters.getSignInVisible;
    },

    getRegisterVisible() {
      return this.$store.getters.getRegisterVisible;
    },

    getLoadingState() {
      return this.$store.getters.getWebsiteLoading;
    }

  },

  methods: {
    async getUserFromSanity(user) {                                       // Gets the user from sanity based on firebase UID
      const currentUser = user;
      const query = `*[_type == 'users' && uid == "${currentUser.uid}"] {
                        uid,
                        username,
                        email,
                        image,
                        credits,
                        admin,
                        banned,
                        deleted,
                        _id
                      }`;

      console.log(query);
      const sanityData = await sanity.fetch(query);
      this.$store.dispatch("updateUserData", sanityData[0]);
    },

    async onUserSignedIn() {                                          // Switches a boolean in vuex if user is signed in by checking
      const auth = getAuth();                                         // With Firebase's getAuth() function
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("User Logged In!");
          console.log(user);
          this.getUserFromSanity(user);
          this.$store.dispatch("updateUserLoggedIn", true);
        } else {
          this.$store.dispatch("updateUserLoggedIn", false);
        }
      });
    },
  },

  mounted() {
    this.onUserSignedIn();
    
  },

  created() {
    this.onUserSignedIn();
  },
};
</script>

<style>
@import "../style/reset.css";
@import "../style/variables.css";
@import "../style/fonts.css";
@import "../style/style.css";
</style>