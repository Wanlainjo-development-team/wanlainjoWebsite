<template>
  <v-container class="pb-0">
    <v-row justify="space-between">
      <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="4">
        <v-card class="mx-auto" elevation="5" max-width="344" color="white">
          <v-img :src="card.image" :lazy-src="card.lazy" height="200px" cover />
          <v-card-title class="text-grey-darken-3 font-weight-bold">{{
            card.title
          }}</v-card-title>
          <v-card-text class="text-body-2 text-grey-darken-3">{{
            card.text
          }}</v-card-text>
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
const cards = [
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307249/chriopractor/backache_va8xt8.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Low Back Pain",
    text: "Low back pain affects over 75% of adults and is a very common problem. Chiropractic joint manipulation helps.",
    to: '/services/services/backPainTreatment'
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675308542/chriopractor/neckache_bp1hwy.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Neck Pain",
    text: "Neck pain comes in several forms: Acute and Chronic. Caused by pressure building on the cervical nerves.",
    to: '/services/services/neckPain'
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675308543/chriopractor/carAccident_wvk1g0.jpg",
    lazy: "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg",
    title: "Car Accident Injuries",
    text: "The proven combination of chiropractic adjustments and rehab training ensures great outcomes.",
    to: '/services/services/carAccidentInjury'
  },
];
</script>
