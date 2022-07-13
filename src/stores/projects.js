import { defineStore } from "pinia";
import { db, fs } from "boot/firebase";
import { Dialog, Notify } from "quasar";

export const projectStore = defineStore("projects", {
  state: () => ({
    allProjects: [],
  }),

  actions: {
    async deleteProject(id) {
      Dialog.create({
        title: "Confirm",
        message: "Are you sure you want to permanently delete this project?",
        cancel: true,
      }).onOk(async () => {
        try {
          const projRef = fs.doc(db, "projects", id);
          await fs.deleteDoc(projRef);

          const i = this.allProjects.findIndex((item) => item.id == id);
          if (i > -1) {
            this.allProjects.splice(i, 1);
          }

          Notify.create({
            type: "positive",
            icon: "thumb_up",
            position: "bottom-right",
            message: "Project successfully deleted!",
          });
        } catch (err) {
          console.log(err);
        }
      });
    },

    async updateProject(project) {
      try {
        const projRef = fs.doc(db, "projects", project.id);
        const doc = await fs.updateDoc(projRef, {
          ...project,
          updatedAt: fs.serverTimestamp(),
        });

        const i = this.allProjects.findIndex((item) => (item.id = project.id));
        if (i > -1) {
          this.allProjects[i] = {
            ...project,
            createdAt: new Date(),
          };
        }

        Notify.create({
          type: "positive",
          icon: "thumb_up",
          position: "bottom-right",
          message: "Updated successfully!",
        });

        return true;
      } catch (err) {
        console.log(err);
      }
    },

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
          message: "Added successfully!",
        });

        return true;
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
          projectArray.push({ ...doc.data(), id: doc.id });
        });
        this.allProjects = projectArray;
      } catch (err) {
        console.log(err);
      } finally {
        return true;
      }
    },
  },
});
