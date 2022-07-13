<template>
  <q-page padding class="bg-main">
    <div v-if="allProjects.length">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <div
          v-show="!loading"
          :class="$q.screen.lt.md ? '' : 'q-px-xl q-mx-xl'"
        >
          <div class="text-h5 text-white q-mb-md">Projects</div>
          <q-card
            v-for="proj in allProjects"
            :key="proj.id"
            style="max-width: 550px"
          >
            <q-card-section>
              <div class="text-subtitle1">
                <span>Project Name: </span>
                <span class="text-bold">{{ proj.title }}</span>
              </div>
              <div class="text-caption text-italic">
                <span>Date Started: </span>
                <span class="text-bold">{{ proj.started }}</span>
              </div>
              <div v-if="proj.completed" class="text-italic">
                <span>Date Completed: </span>
                <span class="text-bold">{{ proj.completed }}</span>
              </div>
              <div>
                <span class="q-mr-sm text-italic">Status:</span>
                <q-chip
                  dense
                  dark
                  class="glossy"
                  :color="proj.status == 'Completed' ? 'positive' : 'indigo'"
                  :label="proj.status"
                />
              </div>
            </q-card-section>
            <q-separator spaced />
            <q-card-section v-html="proj.desc" />
          </q-card>
        </div>
      </transition>
    </div>
  </q-page>
</template>
<script setup>
import { computed, ref } from "vue";
import { projectStore } from "stores/projects";

const allProjects = computed(() => projectStore().allProjects);

const loading = ref(true);
const getProjects = async () => {
  const res = await projectStore().getAllProjects();
  if (res) loading.value = false;
};

getProjects();
</script>
