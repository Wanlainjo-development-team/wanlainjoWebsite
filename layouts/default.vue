<template>
  <v-app>
    <AppBar />
    <Drawer />

    <v-main>
      <NuxtPage />
    </v-main>

    <Footer />
  </v-app>
</template>
  
<script setup>
import AppBar from "./AppBar.vue";
import Drawer from "./Drawer.vue";
import Footer from "./Footer.vue";
import { useCoursesStore } from "@/store/courses";

const courses = useCoursesStore();
courses.fetchCourses();
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
}
</style>