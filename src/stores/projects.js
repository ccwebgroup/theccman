import { defineStore } from "pinia";
import { db, fs } from "boot/firebase";
import { Notify } from "quasar";

export const projectStore = defineStore("projects", {
  state: () => ({
    allProjects: [],
  }),

  actions: {
    async addProject(project) {
      try {
        const projRef = fs.collection(db, "projects");
        const doc = await fs.addDoc(projRef, {
          ...project,
          createdAt: fs.serverTimestamp(),
        });

        this.allProjects.unshift({
          ...project,
          createdAt: new Date(),
          id: doc.id,
        });
        Notify.create({
          type: "positive",
          icon: "thumb_up",
          position: "bottom-right",
          message: "Added succesfuly!",
        });
      } catch (err) {
        console.log(err);
      }
    },

    async getAllProjects() {
      try {
        let projectArray = [];
        const projRef = fs.collection(db, "projects");
        const docs = await fs.getDocs(projRef);
        docs.forEach((doc) => {
          this.addProject.push({ ...doc.data(), id: doc.id });
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
