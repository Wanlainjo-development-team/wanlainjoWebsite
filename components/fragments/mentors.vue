<template>
  <v-row>
    <v-col v-for="(mentor, i) in mentors" :key="i" cols="12" sm="6" md="4" lg="3">
      <v-card rounded="xl">
        <v-img cover aspect-ratio="1" :src="mentor.image"
          lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1673741499/wanlainjo/placeholder_iy3n8h.png" />
        <v-card-title class="text-left text-grey-darken-3 font-weight-bold pb-0">{{
          mentor.name
        }}</v-card-title>
        <v-card-subtitle class="text-left font-weight-bold text-caption pt-0">{{
          mentor.designation
        }}</v-card-subtitle>
        <v-card-actions>
          <v-btn v-for="(link, i) in mentor.links" :key="i" @click="openLink(link.link)" icon size="small">
            <v-icon>{{ link.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";

const mentors = ref([
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1676765556/wanlainjo/mentors/IMG_2114_vzo8z2.jpg",
    name: "Terry Amagboro",
    designation: "Technical manager and mentor",
    description: [
      "Well-organised, problem solver, independent with high attention to detail. fan of Animated sries, outdoor activities, and networking.",
      "Intersted in the entire frontend spectrum and working on ambirious projects with positive people.",
    ],
    links: [
      {
        icon: "mdi-github",
        link: "https://github.com/rukkiecodes",
      },
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/rukkiecodes/",
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/rukkiecodes/",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/rukkiecodes",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/rukkiecodes/",
      },
    ],
  },
]);

const openLink = prop => window.open(prop)
</script>