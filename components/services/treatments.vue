<template>
  <v-container>
    <v-row justify="space-between">
      <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="4">
        <v-card>
          <v-img :src="card.image" :lazy-src="card.lazy" cover />
          <v-card-title class="text-grey-darken-3">{{ card.title }}</v-card-title>
          <v-card-text class="text-grey-darken-3">{{ card.text }} </v-card-text>
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
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675332828/chriopractor/room3_gelmba.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Spinal Decompression",
    text: `We offer effective non-surgical alternatives to treat back and neck
            pain without the high costs and risks. Having been the first clinic
            in Minnesota to offer the leading DRX-9000 disc decompression
            thereapy by Axiom Worldwide, hundreds of our patients have
            experienced high degrees of success with all kinds of spinal and
            lumbar related pain.`,
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675809167/chriopractor/aarehab-room_zzltt2.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Rehab",
    text: `Rehab or therapeutic exercise is often recommended as part of a holistic treatment plan. Using specific stretches and exercises as demonstrated by our qualified trainers, you’ll be able to speed up your recovery and reeducate muscles to improve your overall well-being.`,
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675809167/chriopractor/aamassage-therapy_lnh7s7.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Massage Therapy",
    text: `Our qualified massage therapists are proficient in a variety of different techniques to provide therapeutic muscle work on any area of the body as well as stress and fatigue reduction. Some of our current and past clients include professional dancers and athletes.`,
  },
]);
</script>
