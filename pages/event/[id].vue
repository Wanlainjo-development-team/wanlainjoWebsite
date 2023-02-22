<template>
  <v-container>
    <v-row v-if="currentEvent">
      <v-col cols="12" sm="6" md="5">
        <v-img :src="currentEvent.image" cover />
      </v-col>
      <v-col cols="12" sm="6" md="7">
        <v-row>
          <v-col v-for="(image, i) in currentEvent.gallery" :key="i" cols="6" sm="4">
            <v-img :src="image" cover class="rounded-lg" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-card flat>
          <v-card-title class="text-grey-darken-3">{{ currentEvent.name }}</v-card-title>
          <v-card-subtitle class="text-grey-darken-4 mb-5">{{ currentEvent.description }}</v-card-subtitle>
          <v-card-text v-for="(text, i) in currentEvent.article" :key="i" class="text-grey-darken-3">{{ text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script setup>
import { useEventsStore } from "@/store/events";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let currentEvent = ref(null);
const events = ref(useEventsStore());

onMounted(() => {
  const _currentEvent = events.value.events.find(
    (event) => event.id == route.params.id
  );

  currentEvent.value = _currentEvent;
});
</script>
