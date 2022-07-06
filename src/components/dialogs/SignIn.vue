<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card square class="bg-grey-2" style="width: 380px; height: 493px">
      <q-card-actions class="justify-between bg-white">
        <div class="text-h6 text-bold q-ml-md">Start with your account.</div>
        <q-btn v-close-popup round flat color="negative" icon="close" />
      </q-card-actions>
      <q-separator />
      <q-card-section>
        <q-tab-panels v-model="panel" animated class="bg-transparent">
          <q-tab-panel name="login">
            <q-form @submit="signin" class="column">
              <div class="column q-px-xl q-gutter-sm">
                <q-btn
                  @click="signInWithProvider('google')"
                  no-caps
                  outline
                  icon="fab fa-google"
                  color="primary"
                  label="Sign in with Google"
                />
                <q-btn
                  @click="signInAsGuest"
                  no-caps
                  outline
                  icon="account_circle"
                  color="primary"
                  label="Sign in as guest"
                />
              </div>
              <div class="text-subtitle1 text-bold text-center q-my-md">or</div>
              <div class="q-gutter-sm">
                <q-input
                  v-model="creds.email"
                  type="email"
                  outlined
                  dense
                  placeholder="Email"
                  :rules="[(val) => !!val || 'Email is required']"
                />
                <q-input
                  v-model="creds.password"
                  type="password"
                  outlined
                  dense
                  placeholder="Password"
                  :rules="[(val) => !!val || 'Password is required']"
                />
              </div>
              <q-btn
                type="submit"
                class="q-mt-sm"
                no-caps
                color="primary"
                label="Log in"
                :loading="loadingSignin"
              />

              <q-btn
                @click="panel = 'signup'"
                class="q-mt-md"
                no-caps
                outline
                icon="email"
                color="primary"
                label="Sign up with email"
              />
            </q-form>
          </q-tab-panel>

          <q-tab-panel name="signup">
            <q-form @submit="signup" class="column">
              <q-input
                v-model="creds.name"
                outlined
                dense
                placeholder="Name"
                :rules="[(val) => !!val || 'Name is required']"
              />
              <q-input
                v-model="creds.email"
                type="email"
                outlined
                dense
                placeholder="Email"
                :rules="[(val) => !!val || 'Email is required']"
              />
              <q-input
                v-model="creds.password"
                type="password"
                outlined
                dense
                placeholder="Password"
                :rules="[(val) => !!val || 'Email is required']"
              />

              <q-btn
                type="submit"
                class="q-mt-sm"
                no-caps
                color="primary"
                label="Sign up"
                :loading="loadingSignin"
              />
              <q-btn
                @click="panel = 'login'"
                class="q-mt-sm"
                no-caps
                outline
                color="primary"
                label="Back"
              />
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { authStore } from "stores/auth";
import { reactive, ref } from "vue";
import { useDialogPluginComponent } from "quasar";

const { dialogRef, onDialogHide } = useDialogPluginComponent();

const creds = reactive({
  name: "",
  email: "",
  password: "",
});

const loadingSignin = ref(false);
const signin = async () => {
  loadingSignin.value = true;
  const res = authStore().signinWithEmail(creds);
  if (res !== "failed") {
    onDialogHide();
  }
  loadingSignin.value = false;
};

const signInWithProvider = async (provider) => {
  loadingSignin.value = true;
  const res = await authStore().signInWithProvider(provider);
  if (res) {
    onDialogHide();
  }
  loadingSignin.value = false;
};

const signInAsGuest = async () => {
  loadingSignin.value = true;
  const res = await authStore().signInAsGuest();
  if (res) {
    onDialogHide();
  }
  loadingSignin.value = false;
};

const panel = ref("login");

const signup = async () => {
  loadingSignin.value = true;
  const res = await authStore().signUpWithEmail(creds);
  if (res) {
    onDialogHide();
  }
  loadingSignin.value = false;
};
</script>
