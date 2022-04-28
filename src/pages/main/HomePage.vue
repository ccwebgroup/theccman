<template>
  <q-page class="bg-main">
    <img src="~assets/svg/bg-img.svg" alt="" class="absolute" />

    <q-card
      flat
      class="q-mb-xl q-mx-auto bg-transparent"
      style="max-width: 1100px"
    >
      <q-card-section class="catchy-line">
        <div class="text-h3 text-bold">Everything you need</div>
        <div class="text-h4">to build a web or mobile apps.</div>
        <q-btn
          padding="sm xl"
          size="lg"
          class="text-bold q-mt-sm"
          text-color="dark"
          color="yellow-9"
          no-caps
          label="Get Qoutes"
        />
      </q-card-section>
    </q-card>

    <div class="newsletter-section q-pt-md">
      <q-card class="q-mx-auto q-mb-xl bg-grey-5" style="max-width: 450px">
        <q-card-section class="text-center q-pa-lg">
          <div class="q-mb-sm text-subtitle1 text-bold">
            Enter your email to join the newsletter!
          </div>
          <q-input
            type="email"
            color="white"
            bg-color="white"
            outlined
            placeholder="Enter your email"
          >
            <template v-slot:after>
              <q-btn flat color="white" icon="send" />
            </template>
          </q-input>
        </q-card-section>
      </q-card>
    </div>

    <div class="skill-section">
      <div class="text-h3 text-white text-center q-mb-lg">What I do</div>
      <div class="row q-gutter-md justify-center">
        <!-- UX/UI Definitions -->
        <div class="col-11 col-md-3">
          <q-card class="bg-primary" dark style="height: 370px">
            <q-card-section class="text-center">
              <img src="~assets/icons/layers.png" alt="" />
              <div class="text-subtitle1 text-bold">UX/UI Design</div>
            </q-card-section>
            <q-card-section>
              <div class="text-body1 text-center">
                I am working on cross-platform applications using different
                Javascript frameworks. Using a single code-base I can design an
                application for mobile and desktop in any platform IOS, Android,
                Windows or Mac. Providing a smooth user experience and friendly
                interface.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <!-- Backend Development -->
        <div class="col-11 col-md-3">
          <q-card class="bg-primary" dark style="height: 370px">
            <q-card-section class="text-center">
              <img src="~assets/icons/coding.png" alt="" />
              <div class="text-subtitle1 text-bold">Backend Development</div>
            </q-card-section>
            <q-card-section>
              <div class="text-body1 text-center">
                I can handle Backend Development primarily on databases, backend
                logic, APIs, and Servers using different backend languages.
                Build and plan an effective structure of an application and a
                speed up performance.
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-11 col-md-3">
          <q-card class="bg-primary" dark style="height: 370px">
            <q-card-section class="text-center">
              <img src="~assets/icons/seo.png" alt="" />
              <div class="text-subtitle1 text-bold">SEO Handling</div>
            </q-card-section>
            <q-card-section>
              <div class="text-body1 text-center">
                Search engine optimization, or SEO, is a strategy for improving
                your site’s rankings in search engine results. I can help you
                set-up and build a brand for your site and target the right
                audience or improve marketing performance.
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="language-section">
      <div class="text-h5 text-bold text-white text-center q-mb-md">
        Programming Languages & Frameworks
      </div>
      <div class="flex flex-center q-gutter-sm">
        <div
          v-for="(lang, i) in languages"
          :key="i"
          class="language-pill bg-overlay border-rounded"
        >
          <q-item dark>
            <q-item-section avatar>
              <q-avatar square>
                <img :src="lang.icon" alt="" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ lang.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </div>

    <div class="bg-primary text-white absolute-bottom">
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
    </div>
  </q-page>
</template>

<style lang="sass" scope>
.catchy-line
  padding-top:7%
  color: white
// .newsletter-section
//   margin-top: 20px
.skill-section
  margin-top: 100px
.language-section
  margin-top: 100px
  padding-bottom: 100px
.language-pill
  height: 60px
  width: 150px
</style>

<script setup>
const languages = [
  { icon: "src/assets/svg/vue-logo.svg", name: "Vue" },
  { icon: "src/assets/svg/firebase-logo.svg", name: "Firebase" },
  { icon: "src/assets/svg/laravel-logo.svg", name: "Laravel" },
  { icon: "src/assets/svg/vuetify-logo.svg", name: "Vuetify" },
  { icon: "src/assets/svg/php-logo.svg", name: "PHP" },
  { icon: "src/assets/svg/mysql-logo.svg", name: "Mysql" },
  { icon: "src/assets/svg/css-logo.svg", name: "CSS" },
  { icon: "src/assets/svg/graphql-logo.svg", name: "GraphQL" },
];
</script>
