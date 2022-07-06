import { defineStore } from "pinia";
import { db, fs } from "boot/firebase";
import { Dialog, Loading, Notify } from "quasar";

export const topicStore = defineStore("topics", {
  state: () => ({
    topics: [],
  }),
  actions: {
    async getAllTopics() {
      const topicsRef = fs.collection(db, "topics");
      const q = fs.query(topicsRef, fs.orderBy("createdAt", "desc"));
      const snapshots = await fs.getDocs(q);
      snapshots.forEach(async (doc) => {
        const topicData = { ...doc.data(), id: doc.id };
        topicData.createdAt = topicData.createdAt.toDate();
        // Get Author Details
        /*  const authorData = await fs.getDoc(
          fs.doc(db, "users", topicData.author_id)
        );
        topicData.author = authorData.data(); */

        const index = this.topics.findIndex((item) => item.id == topicData.id);
        if (index < 0) this.topics.push(topicData);
      });
    },

    async addTopic(topic) {
      Loading.show();
      try {
        const topicRef = fs.collection(db, "topics");
        const topicDoc = await fs.addDoc(topicRef, {
          ...topic,
          createdAt: fs.serverTimestamp(),
        });
        this.topics.unshift({
          ...topic,
          id: topicDoc.id,
          createdAt: new Date(),
        });
        Notify.create({
          type: "positive",
          icon: "thumb_up",
          message: "Topic successfuly created!",
          position: "bottom-right",
        });
      } catch (err) {
        Dialog.create({
          title: "Error!",
          message: `Trouble posting topic. ${err.message}`,
        });
      } finally {
        Loading.hide();
      }
    },
  },
});
