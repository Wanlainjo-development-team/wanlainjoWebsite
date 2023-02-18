<template>
  <v-card flat>
    <v-card-title>Make an Appointment</v-card-title>
    <v-card-text>
      Contact us and make an appointment using the form below and we will get
      back to you as soon as possible with a time that fits your scheduled.
    </v-card-text>
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
        <v-col cols="12" sm="6">
          <v-text-field
            density="compact"
            variant="outlined"
            label="Phone"
            hide-details
            color="blue"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            density="compact"
            variant="outlined"
            label="State Treatment"
            hide-details
            color="blue"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            density="compact"
            variant="outlined"
            label="Preferred Date"
            hide-details
            color="blue"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            density="compact"
            variant="outlined"
            label="Preferred Time"
            hide-details
            color="blue"
          />
        </v-col>
      </v-row>
      <v-card-actions class="px-0 mt-4">
        <v-btn class="text-body-2 bg-blue">Book Apointment</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
