<template>
  <v-container fluid class="bg-blue pa-0">
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <v-parallax
          src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675380464/chriopractor/front-desk-docotors-fca_c1fbvk.jpg"
          lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg"
          height="600"
          cover
        />
      </v-col>
      <v-col cols="12" sm="8" class="py-5">
        <v-card color="transparent" flat>
          <v-card-subtitle class="text-body-1 text-white"
            >Metronet Chiropractic Clinic BY THE NUMBERS</v-card-subtitle
          >
          <v-card-text class="text-white text-h5 text-sm-h4 mb-0">
            <span class="font-weight-bold" style="line-height: 1.3em"
              >Powered By Over 1,503 Patients Who Have Trusted Us With Their
              Health.</span
            >
          </v-card-text>
        </v-card>
        <v-row justify="space-between">
          <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="4">
            <v-card flat color="transparent">
              <v-card-text class="d-flex align-center">
                <v-avatar size="50" color="white">
                  <v-icon color="blue" size="30">{{ card.icon }}</v-icon>
                </v-avatar>
                <v-card-text
                  class="d-flex flex-column align-start justify-center"
                >
                  <span class="text-white font-weight-bold d-flex align-center"
                    ><v-icon>mdi-plus</v-icon>
                    <span class="text-h5 text-lg-h4 font-weight-bold">{{
                      card.title
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }}</span></span
                  >
                  <span class="text-body-2">{{ card.subtitle }}</span>
                </v-card-text>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const cards = ref([
  {
    icon: "mdi-trophy-variant-outline",
    title: 34,
    subtitle: "Years of Service",
  },
  {
    icon: "mdi-hand-heart-outline",
    title: 10000,
    subtitle: "Patients Served",
  },
  {
    icon: "mdi-heart-pulse",
    title: 28438,
    subtitle: "Chiropractic Adustments Last Year",
  },
  {
    icon: "mdi-doctor",
    title: 6,
    subtitle: "Doctors of Chiropractic",
  },
  {
    icon: "mdi-calendar-blank-outline",
    title: 6,
    subtitle: "Days a Week Open",
  },
  {
    icon: "mdi-clock-outline",
    title: 64,
    subtitle: "Hours a Week Open",
  },
]);
</script>
