<!-- eslint-disable space-before-function-paren -->
<template>
  <div class="q-pa-md " style="max-width: auto">

    <q-list bordered separator class="q-gutter-md">
      <h1 class="text-h3">Taches</h1>

      <q-card v-for="task in tasksStore.tasks" :key="task.id">
        <q-card-section horizontal>
          <q-checkbox v-model="task.completed" :id="task.id" val="teal" color="teal" />
          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label class="text-h5"> {{ task.name }}</q-item-label>
              <q-item-label class="text-body2">{{ task.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-actions :align="'right'">
          <q-btn v-if="!task.completed" @click="editTask(task)" padding="xs" color="blue-2">
            <q-icon name="edit" color="blue" />
          </q-btn>
          <q-btn padding="xs" color="red-2">
            <q-icon name="delete" color="red" @click="deleteTask(task)" />
          </q-btn>
        </q-card-actions>
      </q-card>

    </q-list>
  </div>
</template>

<script setup>
import { useTasksStore } from 'src/stores/tasks'

const tasksStore = useTasksStore()

// eslint-disable-next-line space-before-function-paren
function deleteTask(task) {
  tasksStore.removeTask(task.id)
}

// eslint-disable-next-line space-before-function-paren
function editTask(task) {
  tasksStore.selectedTask = task
  tasksStore.removeTask(task.id)
}

</script>
