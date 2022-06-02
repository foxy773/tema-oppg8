<template>
	<div class="games-container">
		<h2>Våre spill</h2>
		<ul class="games-container__game-list">
			<li class="game-list__game">
				<p class="game__name">LIVE ROULETTE</p>
				<img class="game__image" src="/app/public/images/Lotto-thumb2Roulette.png" alt="">
			</li>
			<li class="game-list__game">
				<p class="game__name">LOTTO</p>
				<img class="game__image" src="/app/public/images/Lotto-thumb2.png" alt="">
			</li>
			<li class="game-list__game">
				<p class="game__name">BLACKJACK</p>
				<img class="game__image" src="/app/public/images/Lotto-thumb2Blackjack.png" alt="">
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			authenticated: false
		}
	}
}
</script>

<style scoped>
.games-container {
	width: 100%;
	height: 50%;
}

.games-container__game-list {
	width: 100%;
	height: 18rem;
	list-style: none;
	display: grid;
	grid-template: 1fr / repeat(3, 1fr);
	gap: 1rem;
}

.game-list__game {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.game__name {
	color: white;
	position: absolute;
	font-size: 3rem;
	font-family: maagkramp;
	cursor: pointer;
}

.game__image {
	width: 100%;
	height: auto;
	background: #261440;
	border-radius: 1rem;
}

.game-list__game:hover .game__image {
	box-shadow: 0px 6px 0px 0px rgba(0,0,0,0.5);
	cursor: pointer;
}

.game-list__game:hover .game__name  {
	font-size: 3.2rem;
	color: var(--highlight);
	text-shadow: 0 3px #ff7434, 0 5px #ff7434, 0 7px #ff7434;
}
</style>