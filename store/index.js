export const state = () => ({
  tasks: [],
});

export const getters = {
  getTasks(state) {
    return state.tasks;
  },
};

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks.unshift(task);
  },
  REMOVE_TASK(state, taskId) {
    const idx = state.tasks.findIndex((task) => task.id === taskId);
    if (idx < 0) {
      console.log('Could not find task');
      return;
    }
    state.tasks.splice(idx, 1);
  },
  TOGGLE_TASK(state, taskId) {
    const idx = state.tasks.findIndex((task) => task.id === taskId);
    if (idx < 0) {
      console.log('Could not find task');
      return;
    }
    state.tasks[idx].done = !state.tasks[idx].done;
  },
  REMOVE_TASK(state, taskId) {
    const idx = state.tasks.findIndex((task) => task.id === taskId);
    if (idx < 0) {
      console.log('Could not find task');
      return;
    }
    state.tasks.splice(idx, 1);
  },
  REMOVE_DONE_TASKS(state) {
    state.tasks = state.tasks.filter(task => task.done === false);
  },
  SORT_TASKS(state) {
    state.tasks = state.tasks.sort((a, b) => {
      let ta = a.content.toLowerCase(),
        tb = b.content.toLowerCase();

      if (ta < tb) {
        return -1;
      }
      if (ta > tb) {
        return 1;
      }
      return 0;
    })
  },
  EDIT_TASK(state, newTask) {
    console.log(newTask.newcontent)
    const idx = state.tasks.findIndex((task) => task.id === newTask.id);
    if (idx < 0) {
      console.log('Could not find task');
      return;
    }
    state.tasks[idx].content = newTask.newContent
  }
};

export const actions = {
  addTask({ commit }, newTask) {
    commit('ADD_TASK', newTask);
  },
  toggleTask({ commit }, taskId) {
    commit('TOGGLE_TASK', taskId);
  },
  removeTask({ commit }, taskId) {
    commit('REMOVE_TASK', taskId);
  },
  removeDoneTasks({ commit }) {
    commit('REMOVE_DONE_TASKS');
  },
  sortTasks({ commit }) {
    commit('SORT_TASKS');
  },
  editTask({ commit }, newTask) {
    commit('EDIT_TASK', newTask);
  }
};
