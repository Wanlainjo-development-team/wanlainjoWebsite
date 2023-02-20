<template>
  <v-app>
    <AppBar />
    <Drawer />

    <v-main>
      <NuxtPage />
    </v-main>

    <Footer />

    <v-snackbar
      v-model="snackbar.active"
      :color="snackbar.color"
      close-on-back
      location="top right"
      absolute
    >
      {{ snackbar.text }}

      <template v-slot:actions>
        <v-btn
          icon
          size="small"
          variant="text"
          @click="snackbar.active = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>
  
<script setup>
import { ref } from "vue";
import AppBar from "./AppBar.vue";
import Drawer from "./Drawer.vue";
import Footer from "./Footer.vue";
import { useCoursesStore } from "@/store/courses";
import { useSnackbarStore } from "@/store/snackbar";

const courses = useCoursesStore();
const snackbar = ref(useSnackbarStore());

// actions
courses.fetchCourses();
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
}
</style>