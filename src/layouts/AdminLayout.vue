<template>
  <q-layout view="hHh LpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar size="50px" square>
            <q-img src="~assets/cc-logo.png" />
          </q-avatar>
          Admin Panel
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      :width="230"
      :mini="!leftDrawerOpen || miniState"
      side="left"
      bordered
      @click.capture="drawerClick"
    >
      <q-list class="q-mt-lg q-px-md">
        <q-item clickable to="/admin/dashboard">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="language" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">Preview Site</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/admin/manage-projects">
          <q-item-section avatar>
            <q-icon name="web" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">Projects</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/admin/manage-guests">
          <q-item-section avatar>
            <q-icon name="groups" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">Guests</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="logout" class="text-negative">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">Log Out</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="accent"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { authStore } from "src/stores/auth";
import { ref } from "vue";
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
const miniState = ref(false);
const drawerClick = (e) => {
  if (miniState.value) {
    miniState.value = false;
    e.preventDefault();
  }
};

const logout = () => authStore().signOut();
</script>
