<template>
  <v-container>
    <v-card flat class="mb-16">
      <v-card-title class="text-center text-grey-darken-3 font-weight-bold"
        >OUR EVENTS</v-card-title
      >
    </v-card>

    <v-row>
      <v-col
        v-for="(event, i) in events.events.slice(0, 3)"
        :key="i"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card rounded="xl">
          <v-img
            :src="event.image"
            cover
            lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1673741499/wanlainjo/placeholder_iy3n8h.png"
          />
          <v-card-title class="text-left text-grey-darken-3 font-weight-bold">{{
            event.name
          }}</v-card-title>
          <v-card-subtitle class="text-left">{{
            event.designation
          }}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              v-for="(link, i) in event.links"
              :key="i"
              @click="openLink(link.link)"
              icon
              size="small"
            >
              <v-icon>{{ link.icon }}</v-icon>
            </v-btn>

            <v-spacer />

            <v-btn
              :to="`/event/${event.id}`"
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
import { ref } from "vue";
import { useEventsStore } from "@/store/events";

const events = ref(useEventsStore());

const openLink = (link) => {
  window.open(link, "_blank");
};
</script>