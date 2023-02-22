<template>
  <v-container class="my-16">
    <v-card flat class="mb-16">
      <v-card-title class="text-center text-grey-darken-3 font-weight-bold"
        >OUR COURSES</v-card-title
      >
    </v-card>

    <v-row justify="space-between">
      <v-col v-for="(course, i) in courses?.courses" :key="i" cols="12" sm="6">
        <v-card elevation="4" rounded="xl">
          <v-card-text>
            <v-row justify="space-between" no-gutters>
              <v-col cols="12" sm="5">
                <v-img
                  :src="course.image"
                  lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg"
                  cover
                  class="rounded-lg"
                />
              </v-col>
              <v-col cols="12" sm="7">
                <v-card flat>
                  <v-card-title
                    class="text-body-2 font-weight-bold text-grey-darken-3 pb-0 mt-0 py-0"
                    >{{ course.title }}</v-card-title
                  >
                  <v-card-text class="pb-0">
                    <span class="text-caption text-grey-darken-3">{{
                      course.body
                    }}</span>
                  </v-card-text>
                  <v-card-actions class="py-0">
                    <v-btn
                      :to="`/courses/${course?.id}`"
                      size="small"
                      class="text-capitalize"
                      color="indigo-accent-4"
                      variant="text"
                      >View Detailes</v-btn
                    >
                    <v-btn
                      :to="`/register/${course?.id}`"
                      size="small"
                      class="text-capitalize bg-indigo-accent-4 rounded-lg"
                      variant="text"
                      >Apply Now</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useCoursesStore } from "@/store/courses";
import { ref } from "vue";

const courses = ref(useCoursesStore());
</script>