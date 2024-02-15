<template>
  <q-page class="flex">
    <div class="left-column">
      <div>
        <TaskStat />
        <TaskList />
      </div>
    </div>
    <div class="right-column ">
      <TaskForm />
    </div>
  </q-page>
</template>

<script>
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
import TaskStat from '../components/TaskStats.vue'

export default {
  components: {
    TaskForm,
    TaskList,
    TaskStat
  }
}
</script>

<style lang="scss">
.left-column {
  background-color: $grey-4;
  width: 60%;
}

.right-column {
  background-color: white;
  width: 30%;
  align-self: center;
}
</style>
