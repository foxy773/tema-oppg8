<template>
  <div class="navBar">
      <ul class="navBar__list">
          <li class="list__item">
              <button class="item__button">
                  <img src="" alt="">
                  <p class="button__text">Registrer deg her</p>
            </button>
          </li>
          <li class="list__item">
              <button class="item__button">
                  <p class="button__text">Logg inn</p>
                  <!-- <img class="button__img" src="/images/right-arrow.png" alt=""> -->
            </button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .navBar{
        width: 16rem;
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
        box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.75);
    }

    .button__text {
        font-family: var(--font-family);
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