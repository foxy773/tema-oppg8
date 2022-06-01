<template>
	<div class="main-container">
		<GamesGrid />
	</div>
</template>

<script>
import GamesGrid from "./../components/GamesGrid.vue"

export default {
	components: {
		GamesGrid
	},

	data() {
		return {
			
		}
	},

	async created() {
		
	},

	methods: {
		
	},

	mounted() {
		
	}
}
</script>
<style scoped>
.main-container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 16rem;
}
</style>

