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
                  <img class="button__img" src="/images/right-arrow.png" alt="">
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
    }

    .item__button:hover {
        transform: translate(1, 1) rotate(5) skewX(1) skewY(1) scaleX(1) scaleY(1);
    }

    .button__text {
        
    }

    .button__img {
        height: 100%;
        width: auto;
    }

    

</style>