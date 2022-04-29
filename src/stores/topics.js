import { defineStore } from "pinia";
import { db, firestore } from "boot/firebase";

export const useTopicStore = defineStore("topics", {
  state: () => ({
    topics: [],
  }),
  actions: {
    async getAllTopics() {
      const topicsRef = firestore.collection(db, "topics");
      const q = firestore.query(
        topicsRef,
        firestore.orderBy("created_at", "desc")
      );
      const snapshots = await firestore.getDocs(q);
      snapshots.forEach(async (docSnap) => {
        const topicData = { ...docSnap.data(), id: docSnap.id };
        topicData.created_at = topicData.created_at.toDate();
        // Get Author Details
        const authorData = await firestore.getDoc(
          firestore.doc(db, "users", topicData.author_id)
        );
        topicData.author = authorData.data();

        const index = this.topics.findIndex((item) => item.id == topicData.id);
        if (index < 0) this.topics.push(topicData);
      });
    },
  },
});
