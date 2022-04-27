<template>
  <q-layout view="hHh lpR fff" class="main_layout">
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
        <q-route-tab class="tab-link" to="/" label="Home" />
        <q-route-tab to="/page2" label="About" />
        <q-route-tab to="/page3" label="Projects" />
        <q-route-tab to="/page3" label="Courses" />
        <q-route-tab to="/page3" label="Discussions" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-blue-grey-10 text-white">
      <q-toolbar class="q-py-sm">
        <q-toolbar-title class="text-center">
          <div class="text-subtitle2">theccman.com</div>
          <div class="text-caption">All rights reserved. 2022</div>
          <div style="font-size: 10px">
            Icons made by
            <a
              class="text-warning"
              style="text-decoration: none"
              href="https://www.freepik.com"
              title="Freepik"
              >Freepik</a
            >
            from
            <a
              class="text-warning"
              href="https://www.flaticon.com/"
              title="Flaticon"
              style="text-decoration: none"
              >www.flaticon.com</a
            >
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="sass" scope>
.q-tab__label
    font-size: 18px

.main_layout
    background-color: #520119
</style>
