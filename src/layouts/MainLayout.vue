<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated>
      <q-toolbar class="q-mx-lg q-mt-lg">
        <q-toolbar-title>
          <q-avatar size="50px" square>
            <q-img ratio="1" src="~assets/cc-logo.png" />
          </q-avatar>
          TheCCMan
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs no-caps shrink>
        <q-route-tab class="tab-link" to="/" label="Home" exact />
        <q-route-tab to="/page2" label="About" />
        <q-route-tab to="/page3" label="Projects" />
        <q-route-tab to="/page3" label="Courses" />
        <q-route-tab to="/discussions" label="Discussions" />
      </q-tabs>
    </q-header>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="sass" scope>
.q-tab__label
    font-size: 18px
</style>
