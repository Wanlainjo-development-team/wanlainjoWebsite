<template>
  <v-container class="mt-16">
    <v-card width="800" max-width="100%" class="text-center mx-auto" flat>
      <v-card-subtitle class="text-grey-darken-3 text-body-1"
        >OUR SERVICES</v-card-subtitle
      >
      <v-card-text class="text-grey-darken-3 text-h5 text-sm-h4">
        <span class="font-weight-bold">Minnesota Chiropractic Health Care</span>
      </v-card-text>
      <v-card-text class="text-body-2 text-grey-darken-3">
        The doctors at Metronet Chiropractic Clinic are trained in a variety of adjusting
        techniques. Traditional manual adjustments, drop table adjustments, or
        low-force activator adjustments are used depending on the patient’s
        condition and preference. If you have back or neck pain that is
        affecting your day to day life, call or visit our office today to see
        how we can help you enjoy life again.
      </v-card-text>
    </v-card>

    <v-row justify="space-between" class="mt-5">
      <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="4">
        <v-card elevation="5">
          <v-img :src="card.image" :lazy-src="card.lazy" cover />
          <v-card-title class="text-grey-darken-3">
            {{ card.title }}
          </v-card-title>
          <v-card-text class="text-grey-darken-3">
            {{ card.text }}
          </v-card-text>
          <v-card-actions>
            <Nuxt-link
              color="blue"
              flat
              class="
                text-body-2
                font-weight-bold
                text-uppercase text-decoration-none text-blue
              "
              :to="card.to"
              >Read More</Nuxt-link
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const cards = ref([
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675332828/chriopractor/room1_yqpzim.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Chiropractic",
    text: "Serving the Minneapolis West Suburbs since 1986, Metronet Chiropractic Clinic’s award-winning chiropractors are experts at treating back pain, neck pain, joint pain and car accident injuries.",
    to: "/servicesPage",
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675332828/chriopractor/room2_oylfs3.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Acupuncture",
    text: "All of our chiropractors are board certified in acupuncture, and they use acupuncture as an adjective therapy to relieve pain, manage stress, and promote wellness.",
    to: "/services/services/acupuncture",
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675332828/chriopractor/room3_gelmba.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Spinal Decompression",
    text: "We were the first in Minnesota to offer DRX9000 disc decompression.  Spinal decompression is a safe alternative to back surgery for those suffering from herniated discs, sciatica, facet syndrome and other degenerative disc problems.",
    to: "/services/services/spinalDecompression",
  },
]);
</script>
