<template>
  <v-card flat>
    <v-card-title>STAY IN TOUCH</v-card-title>
    <v-card-text>
      Contact us and let us know your thoughts using the form below and we will
      get back to you as soon as possible 🙂
    </v-card-text>
    <v-card-text>
      <v-row justify="space-between">
        <v-col cols="12" sm="6">
          <v-sheet
            width="100%"
            class="rounded-lg overflow-hidden"
            elevation="4"
          >
            <v-text-field
              v-model="contact.name"
              density="compact"
              variant="solo"
              placeholder="Name"
              hide-details
              color="indigo-accent-4"
              prepend-inner-icon="mdi-account"
            />
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="6">
          <v-sheet
            width="100%"
            class="rounded-lg overflow-hidden"
            elevation="4"
          >
            <v-text-field
              v-model="contact.email"
              density="compact"
              variant="solo"
              placeholder="Email"
              hide-details
              color="indigo-accent-4"
              prepend-inner-icon="mdi-email"
            />
          </v-sheet>
        </v-col>
        <v-col cols="12">
          <v-sheet
            width="100%"
            class="rounded-lg overflow-hidden"
            elevation="4"
          >
            <v-text-field
              v-model="contact.subject"
              density="compact"
              variant="solo"
              placeholder="Subject"
              hide-details
              color="indigo-accent-4"
              prepend-inner-icon="mdi-text"
            />
          </v-sheet>
        </v-col>
        <v-col cols="12">
          <v-sheet
            width="100%"
            class="rounded-lg overflow-hidden"
            elevation="4"
          >
            <v-textarea
              v-model="contact.message"
              density="compact"
              variant="solo"
              placeholder="Message"
              prepend-inner-icon="mdi-message"
              hide-details
              color="indigo-accent-4"
            />
          </v-sheet>
        </v-col>
      </v-row>
      <v-card-actions class="px-0 mt-4">
        <v-btn
          @click="contact.sendUsAMessage()"
          elevation="4"
          :loading="contact.loading"
          class="text-body-2 bg-indigo-accent-4 rounded-lg"
          >Send Message</v-btn
        >
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useContactStore } from "@/store/contact";

const contact = ref(useContactStore());
</script>
