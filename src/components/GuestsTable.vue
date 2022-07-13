<template>
  <div>
    <q-table
      title="List Of Projects"
      :rows="allGuest"
      :columns="guestCols"
      :loading="loading"
    >
      <template v-slot:body="props">
        <q-tr :key="props">
          <q-td class="text-center">{{ props.row.email }}</q-td>
          <q-td class="text-center">{{ props.row.createdAt }}</q-td>
          <q-td>
            <q-btn
              @click="deleteGuest(props.row)"
              dense
              flat
              round
              icon="delete"
              color="negative"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { useDateFns } from "src/composables/date-filters";
import { guestStore } from "src/stores/guests";
const { formatDateSimple } = useDateFns();

const deleteGuest = (proj) => {
  guestStore().deleteGuest(proj.id);
};

const loading = ref(true);
const allGuest = computed(() => guestStore().allGuest);
onBeforeMount(async () => {
  const res = await guestStore().getAllGuest();
  if (res) loading.value = false;
});
const guestCols = [
  { name: "email", label: "Email", field: "email", align: "center" },
  {
    name: "createdAt",
    label: "Added",
    field: "createdAt",
    format: (val) => formatDateSimple(val),
    align: "left",
  },
  {
    name: "actions",
    label: "Actions",
    align: "left",
  },
];
</script>
