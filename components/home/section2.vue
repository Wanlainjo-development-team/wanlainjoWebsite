<template>
  <v-container class="my-16">
    <v-row>
      <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="6" md="3">
        <v-card flat>
          <v-card-title class="text-center text-indigo-accent-4 text-h2">
            <span style="line-height: 1em">
              <VueJsCounter
                start="0"
                :end="card.count"
                duration="1000"
                thousand=","
                decimal=","
              />
            </span>
          </v-card-title>
          <v-card-text
            class="text-center font-weight-bold mt-3 text-grey-darken-3"
            >{{ card.text }}</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import VueJsCounter from "vue-js-counter";

const cards = [
  {
    count: 3,
    text: "LOCATIONS",
  },
  {
    count: 415,
    text: "OPEN SPACES",
  },
  {
    count: 6,
    text: "DAYS A WEEK",
  },
  {
    count: 3500,
    text: "INNOVATORS SUPPORTED",
  },
];
</script>
