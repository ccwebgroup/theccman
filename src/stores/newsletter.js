import { defineStore } from "pinia";
import { db, fs } from "boot/firebase";

export const useNewsLetterStore = defineStore("newsLetter", {
  state: () => ({
    newsLetter: null,
  }),
  actions: {
    async addSubscriber(email) {
      const standardRef = fs.doc(db, "newsletter", "standard");
      const subsRef = fs.collection(standardRef, "subscribers");
      await fs.addDoc(subsRef);
    },
  },
});
