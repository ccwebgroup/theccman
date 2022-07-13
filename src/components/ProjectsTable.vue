<template>
  <div>
    <q-table
      title="List Of Projects"
      :rows="allProjects"
      :columns="projCols"
      :loading="loading"
    >
      <template v-slot:body="props">
        <q-tr :key="props">
          <q-td class="text-center">{{ props.row.title }}</q-td>
          <q-td>{{ props.row.started }}</q-td>
          <q-td>{{ props.row.completed }}</q-td>
          <q-td>{{ props.row.status }}</q-td>
          <q-td>
            <div>
              <q-btn
                @click="$emit('clickEdit', props.row)"
                dense
                flat
                round
                icon="edit"
                color="positive"
              />
              <q-btn
                @click="deleteProj(props.row)"
                dense
                flat
                round
                icon="delete"
                color="negative"
              />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { projectStore } from "stores/projects";
import { useDateFns } from "src/composables/date-filters";
const { formatDateSimple } = useDateFns();

defineEmits(["clickEdit"]);

const deleteProj = (proj) => {
  projectStore().deleteProject(proj.id);
};

const loading = ref(true);
const allProjects = computed(() => projectStore().allProjects);
onBeforeMount(async () => {
  const res = await projectStore().getAllProjects();
  if (res) loading.value = false;
});
const projCols = [
  { name: "title", label: "Project Title", field: "title", align: "center" },
  {
    name: "started",
    label: "Date Started",
    field: "started",
    format: (val) => formatDateSimple(val),
    align: "left",
  },
  {
    name: "completed",
    label: "Date Completed",
    field: "completed",
    format: (val) => formatDateSimple(val),
    align: "left",
  },
  {
    name: "status",
    label: "Status",
    field: "status",
    align: "left",
  },
  {
    name: "actions",
    label: "Actions",
    align: "left",
  },
];
</script>
