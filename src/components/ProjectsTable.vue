<template>
  <div>
    <q-table title="List Of Projects" :rows="allProjects"></q-table>
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { projectStore } from "stores/projects";

const allProjects = computed(() => projectStore().allProjects);
onBeforeMount(() => projectStore().getAllProjects());
</script>
