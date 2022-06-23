<template>
	<section class="task">
		<div @click="toggleTask">
			<span :class="{ done: task.done }"> {{ task.content }}</span>
			<button @click.stop="toggleTask">Done</button>
			<button @click.stop="removeTask">Remove</button>
			<button @click.stop="toggleEdit">Edit</button>
		</div>
		<div v-if="edit">
			<input type="text" v-model="editedTask.newContent" />
			<button @click.stop="editTask">OK</button>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		task: {
			type: Object,
			default: null,
			required: false,
		},
	},
	data() {
		return {
			editedTask: {
				id: this.task.id, 
				newContent: this.task.content
			},
			edit: false,
		}
	},
	methods: {
		toggleTask() {
			this.$store.dispatch('toggleTask', this.task.id);
		},
		removeTask() {
			this.$store.dispatch('removeTask', this.task.id);
		},
		toggleEdit() {
			this.edit = !this.edit;
		},
		editTask() {
			this.$store.dispatch('editTask', this.editedTask);
			this.toggleEdit();
		}
	},
};
</script>

<style>
div {
	margin-top: 20px;
}
span {
	font-size: 20px;
}
.done {
	text-decoration: line-through;
}
</style>