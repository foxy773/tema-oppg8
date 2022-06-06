<template>
  <ul class="userlist-container" v-if="getUserInfo.admin">
    <li v-for="user in updateAllUsers" class="userlist-container__user">    <!--Welcome too my admin panel that has barily been-->
      Username: {{ user.username }}                                         <!--barely touched-->
      <button @click="giveUserCredits(user)">Give Credits</button>
      <button @click="removeUserCredits(user)">Remove Credits</button>
      <button @click="deleteUser(user)">Delete User</button>
      <button>Ban User</button>
    </li>
  </ul>
</template>

<script>
import sanity from "../sanity.js";
import queryAllUsers from "../groq/allUsers.groq?raw";

export default {
  data() {
    return {};
  },

  created() {},

  async mounted() {
     this.checkIfUserAdmin();
  },

  computed: {
    updateAllUsers() {
      return this.$store.getters.getAllUsers;           
    },

    getUserInfo() {
      return this.$store.getters.getAllUserData;
    },

    getUserLoggedIn() {
      return this.$store.getters.getUserLoggedIn;
    }
  },

  methods: {
    async checkIfUserAdmin() {                          // Checks if user is logged in, and then if the user contains the role as
      let userLoggedIn = await this.getUserLoggedIn;    // an admin. Sends the user back to the "home" page before anything loads
      console.log(userLoggedIn, "CheckIfLoggedIn");

      if (userLoggedIn) {
        let userAdmin = this.getUserInfo.admin;
        console.log(userAdmin, "CheckIfAdmin");
        if (userAdmin) {
          console.log("Admin!");
          await this.getAllUsersFromSanity();
        } else {
          this.$router.push({ name: "home" });
        }
      } else {
        this.$router.push({ name: "home" });
      }
    },

    async getAllUsersFromSanity() {                               // Fetches all users from Sanity and send it to the store for
      const query = queryAllUsers;                                // Admins.

      const sanityData = await sanity.fetch(query);
      console.log(sanityData);
      this.$store.dispatch("updateAllUsers", sanityData);
    },

    async giveUserCredits(user) {                                                   // Gives users the chosen amount by an alert
      const chosenCredits = parseFloat(                                             // and an UID.
        prompt(`How many credits do you want too give to ${user.username} ?`, 0)
      );
      if (
        chosenCredits === null ||
        chosenCredits === "" ||
        chosenCredits <= 0 ||
        isNaN(chosenCredits)
      ) {
        console.log("NOT VALID U FOOL!");
      } else {
        console.log(chosenCredits, typeof chosenCredits);
        try {
          await sanity
            .patch(user._id)
            .inc({ credits: chosenCredits })
            .commit()
            .then((res) => {
              console.log("Credits given", res);
            });
        } catch (err) {
          console.log(err, "ERROR!!!");
        }
      }
    },

    async removeUserCredits(user) {                                                   //Same as above, just removes credits.
      const chosenCredits = parseFloat(
        prompt(
          `How many credits do you want too remove from ${user.username} ?`,
          0
        )
      );
      if (
        chosenCredits === null ||
        chosenCredits === "" ||
        chosenCredits <= 0 ||
        isNaN(chosenCredits) ||
        chosenCredits > user.credits
      ) {
        console.log("NOT VALID U FOOL!");
      } else {
        console.log(chosenCredits, typeof chosenCredits);
        try {
          await sanity
            .patch(user._id)
            .dec({ credits: chosenCredits })
            .commit()
            .then((res) => {
              console.log("Credits removed", res);
            });
        } catch (err) {
          console.log(err, "ERROR!!!");
        }
      }
    },

    async deleteUser(user) {                                                  // Just switches an boolean in sanity to "delete" an user
      if (                                                                    // This was never finished
        confirm(
          `Click OK to delete ${user.username} (THIS CAN NOT BE UNDONE!!!)`
        )
      ) {
        console.log("YES");
        try {
          await sanity
            .patch(user._id)
            .set({ deleted: true })
            .commit()
            .then((res) => {
              console.log("User Deleted!", res);
            });
        } catch (err) {
          console.log(err, "ERROR!!!");
        }
      } else {
        console.log("Canceled deletion");
      }
    },
  },
};
</script>

<style>
.userlist-container {
  padding: 2rem;
  list-style: none;
}

.userlist-container__user {
  padding: 0.6rem;
}
</style>