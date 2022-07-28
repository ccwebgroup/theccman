<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
    maximized
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card>
      <q-card-section class="text-center text-h5"
        >{{ project ? "Edit" : "New" }} Project</q-card-section
      >
      <q-card-section>
        <q-form @submit="project ? saveProject() : addProject()">
          <div class="row q-gutter-sm justify-between q-mb-sm">
            <div class="col-12 col-md-6">
              <q-input
                dense
                v-model="projectForm.title"
                placeholder="Project Title"
                outlined
                maxlength="86"
                counter
                :rules="[(val) => !!val || 'Headline is required!']"
              />
            </div>
            <div class="col-12 col-md-5">
              <q-input
                dense
                v-model="projectForm.site"
                placeholder="Project site"
                outlined
              />
            </div>
            <div class="col-12 col-md-4">
              <q-input
                dense
                outlined
                v-model="projectForm.started"
                mask="date"
                :rules="['date']"
                hint="Date Started"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="projectForm.started">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md-4">
              <q-input
                dense
                outlined
                v-model="projectForm.completed"
                mask="date"
                hint="Date Completed"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="projectForm.completed">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md-3">
              <q-select
                dense
                outlined
                v-model="projectForm.status"
                :options="['Ongoing', 'Completed', 'Stopped']"
                hint="Status"
                :rules="[(val) => !!val || 'Headline is required!']"
              />
            </div>
          </div>

          <q-editor
            :dense="$q.screen.lt.md"
            :toolbar="editorToolbar"
            :fonts="editorFonts"
            v-model="projectForm.desc"
          />

          <div class="row justify-center q-gutter-sm q-mt-md">
            <q-btn
              type="submit"
              no-caps
              padding="xs xl"
              unelevated
              color="primary"
              :label="project ? 'Update' : 'Save'"
            />
            <q-btn
              @click="clearForm"
              no-caps
              padding="xs xl"
              unelevated
              outline
              color="negative"
              label="Clear"
            />
            <q-btn
              no-caps
              padding="xs xl"
              unelevated
              outline
              color="dark"
              :label="project ? 'Cancel' : 'Close'"
              v-close-popup
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { reactive, onBeforeMount } from "vue";
import { useQuasar, useDialogPluginComponent } from "quasar";
import { projectStore } from "stores/projects";

defineEmits([...useDialogPluginComponent.emits]);

const $q = useQuasar();
const { onDialogHide, onDialogOK, onDialogCancel, dialogRef } =
  useDialogPluginComponent();
const props = defineProps({
  project: Object,
});

const projectForm = reactive({
  id: "",
  title: "",
  desc: "",
  started: "",
  completed: "",
  status: "",
  site: "",
});

onBeforeMount(() => {
  if (props.project) {
    Object.assign(projectForm, props.project);
  }
});

const clear = () => {
  projectForm.id = "";
  projectForm.title = "";
  projectForm.desc = "";
  projectForm.started = "";
  projectForm.completed = "";
  projectForm.status = "";
  projectForm.site = "";
};

const saveProject = async () => {
  const res = await projectStore().updateProject({ ...projectForm });
  if (res) {
    clear();
    onDialogHide();
  }
};

const addProject = async () => {
  const res = await projectStore().addProject({ ...projectForm });
  if (res) {
    clear();
    onDialogHide();
  }
};
const clearForm = () => (projectForm.desc = "");

const editorFonts = {
  arial: "Arial",
  arial_black: "Arial Black",
  comic_sans: "Comic Sans MS",
  courier_new: "Courier New",
  impact: "Impact",
  lucida_grande: "Lucida Grande",
  times_new_roman: "Times New Roman",
  verdana: "Verdana",
};
const editorToolbar = [
  [
    {
      label: $q.lang.editor.align,
      icon: $q.iconSet.editor.align,
      fixedLabel: true,
      list: "only-icons",
      options: ["left", "center", "right", "justify"],
    },
    {
      label: $q.lang.editor.align,
      icon: $q.iconSet.editor.align,
      fixedLabel: true,
      options: ["left", "center", "right", "justify"],
    },
  ],
  ["bold", "italic", "strike", "underline", "subscript", "superscript"],
  ["token", "hr", "link", "custom_btn"],
  ["print", "fullscreen"],
  [
    {
      label: $q.lang.editor.formatting,
      icon: $q.iconSet.editor.formatting,
      list: "no-icons",
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "code"],
    },
    {
      label: $q.lang.editor.fontSize,
      icon: $q.iconSet.editor.fontSize,
      fixedLabel: true,
      fixedIcon: true,
      list: "no-icons",
      options: [
        "size-1",
        "size-2",
        "size-3",
        "size-4",
        "size-5",
        "size-6",
        "size-7",
      ],
    },
    {
      label: $q.lang.editor.defaultFont,
      icon: $q.iconSet.editor.font,
      fixedIcon: true,
      list: "no-icons",
      options: [
        "default_font",
        "arial",
        "arial_black",
        "comic_sans",
        "courier_new",
        "impact",
        "lucida_grande",
        "times_new_roman",
        "verdana",
      ],
    },
    "removeFormat",
  ],
  ["quote", "unordered", "ordered", "outdent", "indent"],

  ["undo", "redo"],
  ["viewsource"],
];
</script>
