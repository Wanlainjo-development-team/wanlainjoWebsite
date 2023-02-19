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
          <v-text-field
            density="compact"
            variant="outlined"
            label="Name"
            hide-details
            color="blue"
            prepend-inner-icon="mdi-account"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            density="compact"
            variant="outlined"
            label="Email"
            hide-details
            color="blue"
            prepend-inner-icon="mdi-email"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            density="compact"
            variant="outlined"
            label="Subject"
            hide-details
            color="blue"
            prepend-inner-icon="mdi-text"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            density="compact"
            variant="outlined"
            label="Message"
            prepend-inner-icon="mdi-message"
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