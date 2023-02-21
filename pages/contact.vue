<template>
  <Header :showCard="false" title="Contact Us" />
  <v-container>
    <v-row justify="space-between">
      <v-col cols="12" sm="5">
        <v-card color="indigo-accent-4" class="rounded-xl" elevation="4">
          <v-card-text class="text-h6 text-lg-h6">
            <span style="line-height: 1em"
              >Contact Wanlainjo Tech Hub</span
            >
          </v-card-text>
          <v-card-subtitle class="text-white">
            We want to hear from you! Call us at +2348179612183.
          </v-card-subtitle>

          <v-divider class="my-5" />

          <v-list lines="2" class="bg-transparent">
            <v-list-item
              v-for="(info, i) in contactInfo"
              :key="i"
              :title="info.title"
              :subtitle="info.subtitle"
              class="mb-3"
            >
              <template v-slot:prepend>
                <v-avatar color="indigo-lighten-5" class="rounded-lg">
                  <v-icon color="indigo-accent-4">{{ info.icon }}</v-icon>
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>

          <v-divider class="my-5" />

          <v-card-text class="text-h6 text-lg-h6">
            <span style="line-height: 1em">Office Hours</span>
          </v-card-text>

          <v-list class="bg-transparent" density="compact">
            <v-list-item
              v-for="(officeHour, i) in officeHours"
              :key="i"
              :title="officeHour"
              density="compact"
            >
              <template v-slot:prepend>
                <v-avatar
                  color="indigo-lighten-5"
                  class="rounded-lg"
                  size="small"
                >
                  <v-icon color="indigo-accent-4" size="-x-small">mdi-clock</v-icon>
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="7">
        <ContactForm id="contact" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/fragments/head.vue";
import ContactForm from "@/components/fragments/contactForm.vue";

const contactInfo = ref([
  {
    icon: "mdi-map-marker",
    title: "20 Peremabiri Street, Dline Port",
    subtitle: "Harcourt, R/S Nigeria",
  },
  {
    icon: "mdi-email",
    title: "info@wanLainjotechhub.org",
    subtitle: "Need help? Drop us an email.",
  },
  {
    icon: "mdi-phone",
    title: "+2348179612183",
    subtitle: "Call us for an appointment.",
  },
]);

const officeHours = ref([
  "Monday: 7:00am - 6:00pm",
  "Tuesday: 7:00am - 6:00pm",
  "Wednesday: 7:00am - 6:00pm",
  "Thursday: 7:00am - 6:00pm",
  "Friday: 7:00am - 6:00pm",
  "Saturday: 7:00am - 1:00pm",
  "Sunday: Closed",
]);
</script>
