<template>
  <q-page padding class="bg-main">
    <div class="q-px-xl">
      <q-card flat dark class="bg-transparent">
        <q-card-section>
          <q-table title="Discussions" flat dark class="bg-transparent">
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
          </q-table>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
