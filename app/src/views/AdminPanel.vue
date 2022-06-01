<template>
  <ul class="userlist-container">
    <li v-for="user in updateAllUsers" class="userlist-container__user">
      Username: {{ user.username }}
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
    },

     getUserAdmin() {    
      return this.$store.getters.getAllUserData;
    },
  },

  methods: {
    async checkIfUserAdmin() {
      let userLoggedIn = await this.getUserLoggedIn;
      console.log(userLoggedIn, "CheckIfLoggedIn");

      if (userLoggedIn) {
        let userAdmin = this.getUserAdmin;
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

    async getAllUsersFromSanity() {
      const query = queryAllUsers;

      const sanityData = await sanity.fetch(query);
      console.log(sanityData);
      this.$store.dispatch("updateAllUsers", sanityData);
    },

    async giveUserCredits(user) {
      const chosenCredits = parseFloat(
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

    async removeUserCredits(user) {
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

    async deleteUser(user) {
      if (
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