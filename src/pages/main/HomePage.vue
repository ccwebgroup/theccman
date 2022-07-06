<template>
  <q-page class="bg-main">
    <q-img src="~assets/jpg/tech-bg.jpg" alt="" class="absolute bg-tech" />

    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <q-card
          dark
          flat
          class="q-mb-xl q-mx-auto bg-transparent"
          style="max-width: 1100px"
        >
          <q-card-section class="catchy-line">
            <div class="text-h2 text-bold">
              Full-stack <span class="text-accent">Developer</span>
            </div>
            <div class="text-h4">Web, mobile or desktop app development</div>
            <q-btn
              to="/projects"
              padding="sm xl"
              size="lg"
              class="text-bold q-mt-xl"
              text-color="dark"
              color="yellow-9"
              no-caps
              label="View Projects"
            />
          </q-card-section>

          <q-card-section class="q-mt-lg">
            <div class="text-subtitle1">
              “Full Stack Developer with a hands-on experience designing,
              developing, and implementing applications and solutions using a
              range of technologies and programming languages. Seeking to
              leverage broad development experience and hands-on technical
              expertise in a challenging role as a Full-stack Developer.”
            </div>
            <div class="text-h6 text-right">- CLINT B. CLARIDO</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-5 column items-center">
        <q-img class="q-mt-md" width="260px" src="~assets/png/clint.png" />

        <div class="newsletter-section q-mt-lg">
          <q-card dark class="bg-overlay newsletter-card">
            <q-card-section class="text-center q-px-lg">
              <div class="q-mb-sm text-subtitle1 text-warning">
                Subscribe by sending your email!
              </div>
              <q-form @submit="addEmail">
                <q-input
                  v-model="guestEmail"
                  dark
                  color="warning"
                  type="email"
                  outlined
                  dense
                  placeholder="Enter your email"
                  :loading="emailLoading"
                >
                  <template v-slot:after>
                    <q-btn
                      @click="addEmail"
                      round
                      flat
                      color="white"
                      icon="send"
                    />
                  </template>
                </q-input>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="skill-section q-pt-md">
      <div class="row q-gutter-md justify-center">
        <!-- UX/UI Definitions -->
        <div class="col-11 col-md-3">
          <q-card class="bg-primary" dark style="height: 400px">
            <q-card-section class="text-center">
              <q-img
                width="90px"
                :class="$q.screen.lt.md ? '' : 'skill-icon'"
                src="~assets/icons/layers.png"
                alt=""
              />
              <div class="text-subtitle1 text-bold q-mt-xl">UX/UI Design</div>
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
          <q-card class="bg-primary" dark style="height: 400px">
            <q-card-section class="text-center">
              <q-img
                width="90px"
                :class="$q.screen.lt.md ? '' : 'skill-icon'"
                src="~assets/icons/coding.png"
                alt=""
              />
              <div class="text-subtitle1 text-bold q-mt-xl">
                Backend Development
              </div>
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
          <q-card class="bg-primary" dark style="height: 400px">
            <q-card-section class="text-center">
              <q-img
                width="90px"
                :class="$q.screen.lt.md ? '' : 'skill-icon'"
                src="~assets/icons/seo.png"
                alt=""
              />
              <div class="text-subtitle1 text-bold q-mt-xl">SEO Handling</div>
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
          <div class="text-caption">Developed by Clint B. Clarido</div>
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
.bg-tech
  opacity: .5
.catchy-line
  padding-top:7%
  color: white
// .newsletter-section
//   margin-top: 20px
.skill-section
  margin-top: 100px
.skill-icon
  position: absolute
  top: -40px
  left: 130px
.language-section
  margin-top: 100px
  padding-bottom: 100px
.language-pill
  height: 60px
  width: 150px
.newsletter-card
  max-width: 450px
  border: 1px solid white
</style>

<script setup>
import { ref } from "vue";
import { guestStore } from "stores/guests";

const emailLoading = ref(false);
const guestEmail = ref("");
const addEmail = async () => {
  emailLoading.value = true;
  const res = await guestStore().addGuestEmail(guestEmail.value);
  if (res) {
    guestEmail.value = "";
    emailLoading.value = false;
  }
};

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
