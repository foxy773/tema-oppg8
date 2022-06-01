<template>
  <div class="win-container">
    <h2 class="win-container__title">YOU WON!</h2>
<!--     <h2 class="win-container__name">Felix</h2> -->
    <h3 class="win-container__amount">{{winningNumber.amount.toLocaleString("no-NO")}} Credits</h3>
	 <h4>On Number</h4>
    <div class="win-container__win-number" :class="winningNumber.color">
      <p class="win-number__number">{{ winningNumber.number }}</p>
    </div>
    
  </div>
</template>

<script>
export default {
	
	props: {
		winningNumber: Object
	},

  data() {},

  mounted() {
    confetti();
  },

  methods: {},
};
</script>

<style>
.win-container {
  display: flex;
  flex-direction: column;
  width: 20%;
  position: absolute;
  align-self: center;
  justify-self: center;
  align-items: center;
  background: var(--highlight);
  z-index: 100;
  border-radius: 1rem;
  padding: 2rem 2rem;
}

.win-container__title {
  padding: 0 2rem;
}

.win-container__win-number {
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
      font-family: jubel;
    font-size: 1.5rem;
  }

  .green {
	  background-color: #43a047;
  }

  .red {
	  background-color: #e53935;
  }

  .black {
	  background-color: #424242;
  }
</style>