import { defineStore } from "pinia";
import { db, fs } from "boot/firebase";

export const useTopicStore = defineStore("topics", {
  state: () => ({
    topics: [],
  }),
  actions: {
    async getAllTopics() {
      const topicsRef = fs.collection(db, "topics");
      const q = fs.query(topicsRef, fs.orderBy("created_at", "desc"));
      const snapshots = await fs.getDocs(q);
      snapshots.forEach(async (docSnap) => {
        const topicData = { ...docSnap.data(), id: docSnap.id };
        topicData.created_at = topicData.created_at.toDate();
        // Get Author Details
        const authorData = await fs.getDoc(
          fs.doc(db, "users", topicData.author_id)
        );
        topicData.author = authorData.data();

        const index = this.topics.findIndex((item) => item.id == topicData.id);
        if (index < 0) this.topics.push(topicData);
      });
    },

    async addTopic(payload) {
      const topicRef = fs.collection(db, "topics");
      await fs.addDoc(topicRef, {
        createdAt: fs.serverTimestamp(),
        title: payload.title,
        content: payload.content,
      });
    },
  },
});
