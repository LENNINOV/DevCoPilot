import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state () {
    return {
      tasks: [],
      selectedTask: null
    }
  },
  actions: {
    removeTask (taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
    }
  },
  getters: {
    completedTasks (state) {
      return state.tasks.filter(task => task.completed).length
    },
    pendingTasks (state) {
      return state.tasks.length - this.completedTasks
    }
  }
})
