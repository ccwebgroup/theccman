<template>
  <div class="q-pa-md">
    <q-btn-toggle
      dense
      no-caps
      v-model="panel"
      toggle-color="primary"
      :options="[
        { label: 'Create', value: 'create' },
        { label: 'Preview', value: 'preview' },
      ]"
    />
  </div>
  <q-tab-panels
    v-model="panel"
    animated
    transition-next="fade"
    transition-prev="fade"
  >
    <q-tab-panel name="create">
      <q-form @submit="addProject">
        <div class="row q-gutter-sm q-mb-sm">
          <div class="col-12 col-md-3">
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
          <div class="col-12 col-md-2">
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
          <div class="col-12 col-md-2">
            <q-input
              dense
              outlined
              v-model="projectForm.completed"
              mask="date"
              :rules="['date']"
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
            label="Post"
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
        </div>
      </q-form>
    </q-tab-panel>

    <q-tab-panel name="preview">
      <div class="text-h6 text-bold">{{ projectForm.title }}</div>
      <q-card-section v-html="projectForm.desc" />
    </q-tab-panel>
  </q-tab-panels>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useQuasar } from "quasar";

import { projectStore } from "stores/projects";

const $q = useQuasar();

const panel = ref("create");

const projectForm = reactive({
  title: "",
  desc: "What's the project description?",
  started: "",
  completed: "",
  status: "",
});

const addProject = () => projectStore().addProject({ ...projectForm });
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
