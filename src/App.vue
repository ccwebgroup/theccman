<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { authStore } from "stores/auth";

onMounted(() => authStore().handleAuthStateChanged());
</script>
