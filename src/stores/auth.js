import { defineStore } from "pinia";
import { auth, fa } from "boot/firebase";
import { Dialog, Loading } from "quasar";

export const authStore = defineStore("auth", {
  state: () => ({
    authUser: null,
  }),
  persist: true,
  actions: {
    async signinWithEmail(creds) {
      Loading.show();
      try {
        const userCredential = await fa.signInWithEmailAndPassword(
          auth,
          creds.email,
          creds.password
        );
        const user = userCredential.user;

        this.router.replace("/admin");
      } catch (err) {
        const errCode = err.code;
        let errMessage;

        switch (errCode) {
          case "auth/invalid-email":
            errMessage = "Email is invalid";
            break;
          case "auth/user-not-found":
            errMessage = "User is not registered.";
            break;
          case "auth/wrong-password":
            errMessage = "Wrong password.";
            break;
        }

        Dialog.create({
          title: "Failed!",
          message: errMessage,
        });
      } finally {
        Loading.hide();
      }
    },

    async handleAuthStateChanged() {
      fa.onAuthStateChanged(auth, (authUser) => {
        if (authUser) {
          this.authUser = authUser;
        } else {
          this.authUser = null;
        }
      });
    },

    async signOut() {
      Loading.show();
      await auth.signOut();
      this.router.replace("/secret/auth");
      Loading.hide();
    },
  },
});
