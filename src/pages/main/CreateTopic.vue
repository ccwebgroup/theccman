<template>
  <q-page>
    <div class="q-px-lg q-mt-md">
      <q-card flat class="bg-transparent q-mt-sm">
        <q-card-actions>
          <div class="text-h5">Create Topic</div>
          <q-space />
          <q-btn
            :disable="discussionForm.title && discussionForm.content"
            padding="sm 50px"
            color="primary"
            rounded
            no-caps
            label="Post"
          />
          <q-btn
            @click="$router.go(-1)"
            padding="sm 30px"
            color="primary"
            rounded
            outline
            no-caps
            label="Cancel"
          />
        </q-card-actions>
        <q-card-section class="q-gutter-y-sm">
          <q-input
            dense
            v-model="discussionForm.title"
            placeholder="What's the headline?"
            outlined
            rounded
            maxlength="86"
            counter
            style="max-width: 750px"
          />
          <q-editor
            :dense="$q.screen.lt.md"
            :toolbar="editorToolbar"
            :fonts="editorFonts"
            v-model="discussionForm.content"
            height="450px"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const discussionForm = reactive({
  title: "",
  content: "What's on your mind?",
});

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
