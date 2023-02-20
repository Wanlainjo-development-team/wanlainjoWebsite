<template>
  <v-row>
    <v-col
      v-for="(mentor, i) in mentors"
      :key="i"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <v-card rounded="xl">
        <v-img
          :src="mentor.image"
          cover
          lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1673741499/wanlainjo/placeholder_iy3n8h.png"
        />
        <v-card-title class="text-left text-grey-darken-3 font-weight-bold">{{
          mentor.name
        }}</v-card-title>
        <v-card-subtitle class="text-left">{{
          mentor.designation
        }}</v-card-subtitle>
        <v-card-actions>
          <v-btn
            v-for="(link, i) in mentor.links"
            :key="i"
            @click="openLink(link.link)"
            icon
            size="small"
          >
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
    name: "John Doe",
    designation: "Technical manager and mentor",
    description: [
      "Well-organised, problem solver, independent with high attention to detail. fan of Animated sries, outdoor activities, and networking.",
      "Intersted in the entire frontend spectrum and working on ambirious projects with positive people.",
    ],
    links: [
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/john-doe-123456789/",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/johndoe",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/johndoe/",
      },
    ],
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1676765556/wanlainjo/mentors/IMG_2114_vzo8z2.jpg",
    name: "John Doe",
    designation: "Technical manager and mentor",
    description: [
      "Well-organised, problem solver, independent with high attention to detail. fan of Animated sries, outdoor activities, and networking.",
      "Intersted in the entire frontend spectrum and working on ambirious projects with positive people.",
    ],
    links: [
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/john-doe-123456789/",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/johndoe",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/johndoe/",
      },
    ],
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1676765556/wanlainjo/mentors/IMG_2114_vzo8z2.jpg",
    name: "John Doe",
    designation: "Technical manager and mentor",
    description: [
      "Well-organised, problem solver, independent with high attention to detail. fan of Animated sries, outdoor activities, and networking.",
      "Intersted in the entire frontend spectrum and working on ambirious projects with positive people.",
    ],
    links: [
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/john-doe-123456789/",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/johndoe",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/johndoe/",
      },
    ],
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1676765556/wanlainjo/mentors/IMG_2114_vzo8z2.jpg",
    name: "John Doe",
    designation: "Technical manager and mentor",
    description: [
      "Well-organised, problem solver, independent with high attention to detail. fan of Animated sries, outdoor activities, and networking.",
      "Intersted in the entire frontend spectrum and working on ambirious projects with positive people.",
    ],
    links: [
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/john-doe-123456789/",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/johndoe",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/johndoe/",
      },
    ],
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1676765556/wanlainjo/mentors/IMG_2114_vzo8z2.jpg",
    name: "John Doe",
    designation: "Technical manager and mentor",
    description: [
      "Well-organised, problem solver, independent with high attention to detail. fan of Animated sries, outdoor activities, and networking.",
      "Intersted in the entire frontend spectrum and working on ambirious projects with positive people.",
    ],
    links: [
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/john-doe-123456789/",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/johndoe",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/johndoe/",
      },
    ],
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1676765556/wanlainjo/mentors/IMG_2114_vzo8z2.jpg",
    name: "John Doe",
    designation: "Technical manager and mentor",
    description: [
      "Well-organised, problem solver, independent with high attention to detail. fan of Animated sries, outdoor activities, and networking.",
      "Intersted in the entire frontend spectrum and working on ambirious projects with positive people.",
    ],
    links: [
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/john-doe-123456789/",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/johndoe",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/johndoe/",
      },
    ],
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1676765556/wanlainjo/mentors/IMG_2114_vzo8z2.jpg",
    name: "John Doe",
    designation: "Technical manager and mentor",
    description: [
      "Well-organised, problem solver, independent with high attention to detail. fan of Animated sries, outdoor activities, and networking.",
      "Intersted in the entire frontend spectrum and working on ambirious projects with positive people.",
    ],
    links: [
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/john-doe-123456789/",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/johndoe",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/johndoe/",
      },
    ],
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1676765556/wanlainjo/mentors/IMG_2114_vzo8z2.jpg",
    name: "John Doe",
    designation: "Technical manager and mentor",
    description: [
      "Well-organised, problem solver, independent with high attention to detail. fan of Animated sries, outdoor activities, and networking.",
      "Intersted in the entire frontend spectrum and working on ambirious projects with positive people.",
    ],
    links: [
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/john-doe-123456789/",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/johndoe",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/johndoe/",
      },
    ],
  },
]);
</script>