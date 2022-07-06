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
      try {
        const userCredential = await fa.signInWithEmailAndPassword(
          auth,
          creds.email,
          creds.password
        );
        const user = userCredential.user;
        return true;
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

        return "failed";
      }
    },

    async signInWithProvider(payload) {
      let provider;
      if (payload == "google") {
        provider = new fa.GoogleAuthProvider();
      }

      try {
        const result = await fa.signInWithPopup(auth, provider);
        // If user successfully signed up
        if (result.user) {
          this.authUser = result.user;
          return true;
        }
      } catch (err) {
        const errMessage = err.message;
        // The email of the user's account used.
        const email = err.email;
        // The AuthCredential type that was used.
        const credential = fa.GoogleAuthProvider.credentialFromError(err);
        // ...
        Dialog.create({
          title: "Sorry, signing in error.",
          message: `We've got trouble for ${email}: ${errMessage}`,
        });
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
      Loading.hide();
    },

    async signInAsGuest() {
      await fa.signInAnonymously(auth);
      return true;
    },

    async signUpWithEmail(creds) {
      try {
        const userCredential = await fa.createUserWithEmailAndPassword(
          auth,
          creds.email,
          creds.password
        );

        if (userCredential.user) {
          await fa.updateProfile(userCredential.user, {
            displayName: creds.name,
          });
          this.authUser.displayName = creds.name;
        }

        return true;
      } catch (err) {
        Dialog.create({
          title: "Sorry, signing up error.",
          message: `We've got trouble ${err.message}. ${err.code}`,
        });
      }
    },
  },
});
