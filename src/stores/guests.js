import { defineStore } from "pinia";
import { Notify } from "quasar";
import { db, fs } from "src/boot/firebase";

export const guestStore = defineStore("guests", {
  state: () => ({
    guest: null,
    allGuest: [],
  }),

  actions: {
    async addGuestEmail(email) {
      try {
        const guestRef = fs.collection(db, "guests");
        const doc = await fs.addDoc(guestRef, { email: email });

        Notify.create({
          type: "positive",
          icon: "thumb_up",
          position: "bottom-right",
          message: "Email succesfuly added.",
        });
      } catch (err) {
        console.log(err);
        Notify.create({
          type: "negative",
          icon: "error",
          position: "bottom-right",
          message: "Trouble adding the email.",
        });
      } finally {
        return true;
      }
    },
  },
});
