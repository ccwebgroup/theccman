<template>
  <q-page padding class="flex flex-center bg-main">
    <q-card dark flat style="width: 280px" class="bg-transparent">
      <q-card-section class="text-center text-h5 text-warning"
        >Secret Auth</q-card-section
      >
      <q-card-section>
        <q-form @submit="login" class="q-gutter-sm">
          <q-input
            dark
            v-model="creds.email"
            type="email"
            dense
            label="Email"
          />
          <q-input
            dark
            v-model="creds.password"
            type="password"
            dense
            label="Password"
          />
          <q-card-actions align="center" class="q-mt-lg">
            <q-btn type="submit" flat label="Log in" />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { authStore } from "src/stores/auth";
import { reactive } from "vue";

const creds = reactive({
  email: "",
  password: "",
});

const login = () => authStore().signinWithEmail({ ...creds });
</script>
