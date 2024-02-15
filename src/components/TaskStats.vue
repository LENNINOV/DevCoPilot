<template>
  <q-card class="bg-transparent no-shadow no-border">
    <q-card-section class="q-pa-md q-gutter-xl row items-center" horizontal>
      <!--div class="row q-col-gutter-sm"-->
      <!--div class="col-md-3 col-sm-12 col-xs-12"-->

      <q-item class="col no-wrap q-pa-xs" style="background-color: white;">
        <q-item-section class="column q-pa-lg q-mr-none justify-center" style="background-color: white;">
          <q-icon name="done" color="green" size="34px" />
        </q-item-section>
        <q-item-section class="column q-pa-md q-ml-none text-black justify-center">
          <q-item-label class="text-black text-h6 text-weight-bolder">{{ tasksStore.completedTasks }}</q-item-label>
          <q-item-label>Terminées</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col no-wrap q-pa-none" style="background-color: white;">
        <q-item-section class="column q-pa-lg q-mr-none justify-center" style="background-color: white;">
          <q-icon name="hourglass_empty" color="orange" size="34px" />
        </q-item-section>
        <q-item-section class="column q-pa-md q-ml-none text-black justify-center">
          <q-item-label class="text-black text-h6 text-weight-bolder">{{ tasksStore.pendingTasks }}</q-item-label>
          <q-item-label>En attente</q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="col no-wrap q-pa-none" style="background-color: white;">
        <q-item-section class="column q-pa-lg q-mr-none justify-center" style="background-color: white;">
          <q-icon name="playlist_add_check" color="grey-7" size="34px" />
        </q-item-section>
        <q-item-section class="column q-pa-md q-ml-none text-black justify-center">
          <q-item-label class="text-black text-h6 text-weight-bolder">{{ allTasks }}</q-item-label>
          <q-item-label>Total</q-item-label>
        </q-item-section>
      </q-item>

    </q-card-section>
  </q-card>
</template>

<script setup >
import { useTasksStore } from 'src/stores/tasks'
import { computed } from 'vue'

const tasksStore = useTasksStore()
const allTasks = computed(() => tasksStore.tasks.length)

</script>

<style lang="scss"></style>
