<template>
  <q-form class="q-gutter-md" @submit.prevent="handleSubmit">

    <div class="q-pa-md q-gutter-md ">
      <q-item-label>
        <h1 class="text-h4">{{ tasksStore.selectedTask ? "Modifier une tache" : "Nouvelle tache" }}</h1>
      </q-item-label>

      <q-input outlined v-model="name" :dense="dense" placeholder="Nom de la tache" />

      <q-input outlined v-model="description" type="textarea" placeholder="Description de la tache" />

      <div>
        <q-btn label="Enregistrer" type="submit" color="primary" />
      </div>
    </div>
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import { useTasksStore } from 'src/stores/tasks'
import { v4 as uuid } from 'uuid'

const name = ref('')
const description = ref('')
const tasksStore = useTasksStore()

// eslint-disable-next-line space-before-function-paren
function handleSubmit() {
  const task = {
    id: tasksStore.selectedTask ? tasksStore.selectedTask.id : uuid(),
    completed: false,
    name: name.value,
    description: description.value
  }

  tasksStore.tasks.push(task)

  name.value = ''
  description.value = ''
}

tasksStore.$subscribe((mutation) => {
  const selectedTask = mutation.events.target.selectedTask

  if (selectedTask) {
    name.value = selectedTask.name
    description.value = selectedTask.description
  }
})

</script>
