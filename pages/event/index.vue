<template>
  <Header :showCard="false" title="Our Events" />

  <v-container>
    <v-row>
      <v-col v-for="(mentor, i) in mentors" :key="i" cols="12" sm="6" md="4">
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

            <v-spacer />

            <v-btn
              :to="mentor.to"
              class="text-capitalize bg-indigo-lighten-5 rounded-xl text-indigo-accent-4"
              >View Event</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script setup>
import Header from "@/components/fragments/head.vue";
import { ref } from "vue";

const mentors = ref([
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1673565438/wanlainjo/events/leveraging_the_tech_space_afz954.jpg",
    name: "Leveraging the Tch space",
    designation:
      "This event is for those who are interested in learning how to leverage the tech space to build a career in tech",
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
    to: "/event",
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1676810027/wanlainjo/events/WhatsApp_Image_2023-02-13_at_12.36.38_ea7b9x.jpg",
    name: "Leveraging the Tch space",
    designation:
      "This event is for those who are interested in learning how to leverage the tech space to build a career in tech",
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
    to: "/event",
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1676810026/wanlainjo/events/WhatsApp_Image_2023-02-14_at_08.26.49_qdtzqm.jpg",
    name: "Leveraging the Tch space",
    designation:
      "This event is for those who are interested in learning how to leverage the tech space to build a career in tech",
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
    to: "/event",
  },
]);

const openLink = (link) => {
  window.open(link, "_blank");
};
</script>
