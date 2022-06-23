<template>
	<main class="main">
		<h1>Task Board</h1>
		<div>
			<input
				type="text"
				placeholder="Add a new task"
				v-model="newTask.content"
			/>
			<button @click="addTask">Add</button>
		</div>
		<Options />
		<div class="task">
			<Tasks v-for="task in tasks" :key="task.id" :task="task" />
		</div>
	</main>
</template>
<script>
import { getEmptyTask } from '@/utils/utils';
import Options from '@/components/Options.vue';
export default {
	name: 'IndexPage',
	components: {
		Options,
	},
	// mounted() {
	// 	this.tasks = this.$store.getters.getTasks;
	// },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    }
  },
	data() {
		return {
			newTask: getEmptyTask(),
		};
	},
	methods: {
		addTask() {
			this.$store.dispatch('addTask', this.newTask);
			this.newTask = getEmptyTask();
		},
	},
};
</script>
<style scoped>
.main {
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 16px;
}
input {
	width: 300px;
	height: 40px;
	border: 1px solid violet;
	border-radius: 8px;
}
button {
	width: 100px;
	height: 30px;
	background-color: rgb(21, 49, 190);
	border-radius: 30px;
}
.task {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
}
</style>
