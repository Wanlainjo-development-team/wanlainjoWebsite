<template>
  <v-container class="my-16 text-center">
    <v-card flat class="mb-16">
      <v-card-title class="text-grey-daken-3 font-weight-bold"
        >Meet your Mentors</v-card-title
      >
    </v-card>

    <Mentors />
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import Mentors from "@/components/fragments/mentors.vue";

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

const openLink = (link) => {
  window.open(link, "_blank");
};
</script>