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
          :class="$q.screen.lt.md ? '' : 'q-px-xl'"
          style="max-width: 1000px"
          class="q-mx-auto"
        >
          <div class="text-h4 text-white q-mb-md">Projects</div>
          <q-card
            dark
            bordered
            v-for="proj in allProjects"
            :key="proj.id"
            class="q-my-xl bg-transparent"
          >
            <q-card-section class="bg-overlay">
              <div class="text-h5 text-warning text-bold">
                {{ proj.title }}
              </div>

              <div v-if="proj.site" class="text-subtitle1 q-mb-sm">
                <q-item-section>
                  <q-item-label>
                    <span
                      class="text-info cursor-pointer ellipsis-2-lines"
                      @click="openLink(proj.site)"
                      ><q-icon name="language" class="q-mr-sm" />{{
                        proj.site
                      }}</span
                    >
                  </q-item-label>
                </q-item-section>
              </div>

              <div class="text-caption text-italic">
                <span>Date started: </span>
                <span class="text-bold">{{ proj.started }}</span>
              </div>
              <div v-if="proj.completed" class="text-italic">
                <span>Date completed: </span>
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
              <q-separator spaced dark />
            </q-card-section>
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

const openLink = (link) => {
  openURL(link);
};

const loading = ref(true);
const getProjects = async () => {
  const res = await projectStore().getAllProjects();
  if (res) loading.value = false;
};

getProjects();
</script>
