<template>
  <q-page padding class="bg-grey-3">
    <div class="text-h6 q-pa-md">Manage Projects</div>
    <q-card style="height: 510px">
      <q-splitter v-model="splitterModel">
        <template v-slot:before>
          <q-tabs v-model="menuTab" vertical class="text-primary">
            <q-tab
              no-caps
              name="new"
              icon="dashboard_customize"
              label="New Project"
            />
            <q-tab no-caps name="projects" icon="view_list" label="Projects" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="menuTab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="new">
              <create-project />
            </q-tab-panel>

            <q-tab-panel name="projects">
              <projects-table />
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

import ProjectsTable from "components/ProjectsTable.vue";
import CreateProject from "components/CreateProject.vue";

const splitterModel = ref(25);
const menuTab = ref("new");
</script>
