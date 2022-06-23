<template>
	<div>
		<button @click.stop="removeDoneTasks">Remove Done</button>
		<button @click.stop="sortTasks">Sort Tasks</button>
    <!-- <span>Filter by:</span>
    <button>Completed</button>
    <button>Not Completed</button> -->


	</div>
</template>

<script>
export default {
	methods: {
		removeDoneTasks() {
			this.$store.dispatch('removeDoneTasks');
		},
		sortTasks() {
			this.$store.dispatch('sortTasks');
		}
	},
}
</script>

<style>
</style>