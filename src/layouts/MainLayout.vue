<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated reveal class="bg-main">
      <q-toolbar class="q-my-md q-px-md">
        <q-btn
          v-if="$q.screen.lt.md"
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <q-avatar size="50px" square>
            <q-img src="~assets/cc-logo.png" />
          </q-avatar>
          <span v-if="!$q.screen.lt.md">TheCCMan</span>
        </q-toolbar-title>
        <q-tabs no-caps shrink v-if="!$q.screen.lt.md">
          <q-route-tab to="/home" label="Home" exact />
          <q-route-tab to="/projects" label="Projects" />
          <!-- <q-route-tab to="/discussions" label="Discussions" /> -->
        </q-tabs>
        <q-space />
        <!--   <q-btn
          v-if="!authUser"
          @click="handleSignInDialog"
          no-caps
          rounded
          outline
          padding="xs md"
          size="17px"
          color="warning"
          label="Sign in"
        />
        <q-btn
          v-else
          @click="signout"
          no-caps
          rounded
          outline
          padding="xs md"
          size="17px"
          color="warning"
          label="Sign out"
        /> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      bordered
      class="bg-primary"
    >
      <div class="text-center q-my-md">
        <q-avatar size="100px" square>
          <q-img src="~assets/cc-logo.png" />
        </q-avatar>
      </div>
      <q-list dark class="q-mt-lg q-mx-md">
        <q-item clickable to="/home" v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/projects" v-ripple>
          <q-item-section avatar>
            <q-icon name="web" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">Projects</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item clickable to="/discussions" v-ripple>
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">Discussions</q-item-label>
          </q-item-section>
        </q-item> -->
      </q-list>

      <q-separator spaced dark />

      <div class="column q-mx-lg q-mt-lg">
        <q-btn
          no-caps
          @click="leftDrawerOpen = false"
          color="white"
          outline
          rounded
          label="Close"
        />
      </div>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="sass" scope>
.q-tab__label
    font-size: 18px
.q-item.q-router-link--active, .q-item--active
  color: $warning
</style>

<script setup>
import { useQuasar } from "quasar";
import SignInVue from "components/dialogs/SignIn.vue";
import { authStore } from "stores/auth";
import { computed, ref } from "vue";

const $q = useQuasar();
const authUser = computed(() => authStore().authUser);
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const handleSignInDialog = () => {
  $q.dialog({
    component: SignInVue,
  });
};
const signout = () => authStore().signOut();
</script>
