<template>
  <Header :showCard="false" title="About Us" />
  <Body />

  <!-- <v-container>
    <v-card flat class="mb-16">
      <v-card-title class="text-center text-grey-darken-3"
        >Meet your Mentors</v-card-title
      >
    </v-card>

    <Mentors />
  </v-container> -->
</template>

<script setup>
import Header from "@/components/fragments/head.vue";
import Body from "@/components/about/body.vue";
import Mentors from "@/components/fragments/mentors.vue";
</script>
