<template>
  <q-page class="bg-main">
    <div :class="$q.screen.lt.md ? '' : 'q-px-xl q-mx-xl'">
      <q-card flat dark class="bg-transparent">
        <q-table
          dense
          :rows="topicsArray"
          :columns="topicsCol"
          separator="none"
          title="Discussions"
          flat
          dark
          class="bg-transparent"
        >
          <template v-slot:top-right>
            <q-btn
              to="/discussions/create"
              class="q-mt-lg"
              icon="add"
              outline
              rounded
              color="white"
              no-caps
              label="New Topic"
            />
          </template>
          <template v-slot:body="props">
            <q-tr>
              <q-td>
                <q-item dark>
                  <q-item-section avatar>
                    <q-avatar color="yellow-10"> J </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-subtitle1">
                      {{ props.row.title }}
                    </q-item-label>
                    <q-item-label caption>
                      <!-- @{{ props.row.author.name }} -->
                      @Guest
                    </q-item-label>
                    <q-item-label class="text-tiny">
                      {{ formatShortDate(props.row.createdAt) }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-td>
              <q-td>
                <q-icon size="18px" name="comment" />
                <!-- {{ props.row.comments_count }} -->
                <span class="q-ml-sm">0</span>
              </q-td>
              <q-td>
                <q-icon size="18px" name="visibility" />
                <!-- {{ props.row.views }} -->
                <span class="q-ml-sm">0</span>
              </q-td>
            </q-tr>
          </template>
        </q-table>
        <q-card-section>
          <div class="text-h5 text-center q-my-lg">Under construction. . .</div>
          <div class="flex flex-center">
            <q-img width="360px" src="~assets/svg/undraw-building-blocks.svg" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script setup>
import { onBeforeMount, computed } from "vue";
import { topicStore } from "src/stores/topics";
import { useDateFns } from "src/composables/date-filters";
const { formatShortDate } = useDateFns();
const topicsCol = [
  { label: "Topics", field: "title", align: "left" },
  { label: "Comments", align: "left" },
  { label: "Views", align: "left" },
];
const topicsArray = computed(() => topicStore().topics);
onBeforeMount(() => topicStore().getAllTopics());
</script>
