<template>
  <v-container>
    <v-row>
      <v-col v-if="currentCourse" cols="12" sm="6">
        <v-card flat>
          <v-img :src="currentCourse?.image" />
          <v-card-title class="text-grey-darken-3">{{
            currentCourse?.title
          }}</v-card-title>
          <v-card-text class="text-grey-darken-3">
            {{ currentCourse?.body }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <Form />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useCoursesStore } from "@/store/courses";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Form from '@/components/register/form.vue'

const route = useRoute();

let currentCourse = ref(null);
const courses = ref(useCoursesStore());

onMounted(() => {
  const _currentCourse = courses.value.courses.find(
    (course) => course.id === route.params.id
  );

  currentCourse.value = _currentCourse;
});
</script>
