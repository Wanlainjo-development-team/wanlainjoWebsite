<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <Globe />
      </v-col>

      <v-col cols="12" sm="6">
        <v-card flat>
          <v-card-title class="text-grey-darken-3 font-weight-bold">
            What We Do</v-card-title
          >
          <v-card-text class="text-grey-darken-3">
            We believe that anyone can become part of the tech industry, as long
            as this is something they're curious about. To realize our mission,
            we created a solid setup where our instructors share knowledge and
            experience gained through years of working in IT and our HR advisors
            provide you with guidance in finding a job after the course.

            <ul class="pl-5 mt-4">
              <li
                v-for="(list, i) in lists"
                :key="i"
                :class="i + 1 == lists.length ? 'mb-0' : 'mb-4'"
              >
                {{ list }}
              </li>
            </ul>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/about" class="bg-indigo-accent-4 text-capitalize rounded-lg">
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import Globe from '@/components/fragments/globe.vue'

const lists = ref([
  "We provide you with the best learning facility you can lay your eyes on. All our classes are en-suite and equipped with the latest technologies for learning.",
  "Our tutors are highly trained professionals that are choosen based on industry experience and teaching ability.",
  `We offer you the best support - either while you're learning or after you've graduated. We provide career support to get you hired in no time.`,
]);
</script>