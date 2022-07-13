import { defineStore } from "pinia";
import { Notify, Dialog } from "quasar";
import { db, fs } from "src/boot/firebase";

export const guestStore = defineStore("guests", {
  state: () => ({
    allGuest: [],
  }),

  actions: {
    async addGuestEmail(email) {
      try {
        const guestRef = fs.collection(db, "guests");
        const doc = await fs.addDoc(guestRef, {
          email: email,
          createdAt: fs.serverTimestamp(),
        });

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

    async deleteGuest(id) {
      Dialog.create({
        title: "Confirm",
        message: "Are you sure you want to permanently delete this guest?",
        cancel: true,
      }).onOk(async () => {
        try {
          const guestRef = fs.doc(db, "guests", id);
          await fs.deleteDoc(guestRef);

          const i = this.allGuest.findIndex((item) => item.id == id);
          this.allGuest.splice(i, 1);

          Notify.create({
            type: "positive",
            icon: "thumb_up",
            position: "bottom-right",
            message: "Guest successfully deleted!",
          });
        } catch (err) {
          console.log(err);
        }
      });
    },

    async getAllGuest() {
      try {
        let guestArray = [];
        const guestRef = fs.collection(db, "guests");
        const docs = await fs.getDocs(guestRef);
        docs.forEach((doc) => {
          const guest = { ...doc.data(), id: doc.id };
          guest.createdAt = guest.createdAt ? guest.createdAt.toDate() : null;
          guestArray.push(guest);
        });
        this.allGuest = guestArray;
      } catch (err) {
        console.log(err);
      } finally {
        return true;
      }
    },
  },
});
