<template>
  <div class="header">
      <div class="header__content">
            <img class="content__logo" src="/images/Norsk-tipping-logo-trans2.png" alt="">
            <Navbar />
      </div>
      
  </div>
</template>

<script>
import Navbar from "./Navbar.vue"

export default {
    components: {
        Navbar
    }
}
</script>

<style scoped>
    .header {
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
</style>