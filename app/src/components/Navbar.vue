<template>
  <div class="navBar">
      <ul class="navBar__list">                                         <!--Two buttons that show the login and register module-->
          <li class="list__item">
              <button @click="registerVisible" class="item__button">
                  <img src="" alt="">
                  <p class="button__text">Registrer deg her</p>
            </button>
          </li>
          <li class="list__item">
              <button @click="signInVisible" class="item__button">
                  <p class="button__text">Logg inn</p>
            </button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    computed: {
        
    },

    methods: {
        signInVisible() {
            this.$store.dispatch("switchSignInVisible")
            console.log("store")
        },

        registerVisible() {
            this.$store.dispatch("switchRegisterVisible")
            console.log("storeReg")
        }
    }
}
</script>

<style>
    .navBar{
        height: 100%;
        background: inherit;
        display: flex;
    }

    .navBar__list {
        width: 100%;
        height: 100%;
        display: flex;
        list-style: none;
        justify-content: space-between;
    }

    .list__item {
        display: flex;
        align-items: center;
        padding: 0 1rem;
    }

    .item__button {
        display: flex;
        align-items: center;
        height: 3rem;
        border: 0;
        background: var(--highlight);
        border-radius: 0.4rem;
        padding: 1rem;
        cursor: pointer;
    }

    .item__button:hover {
        -webkit-transform: scale(1.03);
        box-shadow: 0px 6px 0px 0px rgba(0,0,0,0.5);
	    font-size: 1.02rem;
    }

    .button__text {
        font-family: var(--font-family), Arial, Helvetica, sans-serif;
        font-weight: 500;
        font-size: .875rem;
    }

    .button__img {
        height: 100%;
        width: auto;
        padding: 0.1rem 0.1rem;
    }

    /* @-webkit-keyframes {
        
    } */

    

</style>