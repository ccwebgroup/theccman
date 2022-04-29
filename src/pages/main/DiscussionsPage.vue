<template>
  <q-page class="bg-main">
    <div :class="$q.platform.is.mobile ? '' : 'q-px-xl q-mx-xl'">
      <q-card flat dark class="bg-transparent">
        <q-card-section>
          <q-table
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
                        @{{ props.row.author.name }}
                      </q-item-label>
                      <q-item-label class="text-tiny">
                        {{ formatShortDate(props.row.created_at) }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-td>
                <q-td>
                  <q-icon size="18px" name="comment" />
                  {{ props.row.comments_count }}
                </q-td>
                <q-td>
                  <q-icon size="18px" name="visibility" />
                  {{ props.row.views }}
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<script setup>
import { onBeforeMount, computed } from "vue";
import { useTopicStore } from "src/stores/topics";
import { useDateFns } from "src/composables/date-utils";
const topicStore = useTopicStore();
const { formatShortDate } = useDateFns();
const topicsCol = [
  { label: "Topics", align: "left" },
  { label: "Comments", align: "left" },
  { label: "Views", align: "left" },
];
const topicsArray = computed(() => topicStore.topics);
onBeforeMount(() => topicStore.getAllTopics());
</script>
