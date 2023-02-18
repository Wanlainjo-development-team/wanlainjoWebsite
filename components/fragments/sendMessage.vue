<template>
  <v-card flat>
    <v-card-title> Send us a Message</v-card-title>
    <v-card-text>
      <v-row justify="space-between">
        <v-col cols="12" sm="6">
          <v-text-field
            density="compact"
            variant="outlined"
            label="First Name"
            hide-details
            color="blue"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            density="compact"
            variant="outlined"
            label="Last Name"
            hide-details
            color="blue"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            density="compact"
            variant="outlined"
            label="Email"
            hide-details
            color="blue"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            density="compact"
            variant="outlined"
            label="Phone"
            hide-details
            color="blue"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            density="compact"
            variant="outlined"
            label="Subject"
            hide-details
            color="blue"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            density="compact"
            variant="outlined"
            label="Message"
            auto-grow
            rows="2"
            hide-details
            color="blue"
          />
        </v-col>
      </v-row>
      <v-card-actions class="px-0 mt-4">
        <v-btn class="text-body-2 bg-blue">Send Message</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
