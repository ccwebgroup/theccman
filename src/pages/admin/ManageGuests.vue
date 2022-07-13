<template>
  <q-page padding class="bg-grey-3">
    <q-card>
      <q-card-section class="text-h6">Manage Guest</q-card-section>
      <q-card-section>
        <guests-table />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import GuestsTable from "components/GuestsTable.vue";
import ProjectDialog from "components/dialogs/ProjectDialog.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const editProj = (project) => {
  handleDialog(project);
};

const handleDialog = (project) => {
  $q.dialog({
    component: ProjectDialog,
    componentProps: {
      project: project,
    },
  });
};
</script>
