<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" order="1" order-sm="0">
        <v-card flat>
          <v-card-title class="text-grey-darken-3 font-weight-bold">
            A hub for impact</v-card-title
          >
          <v-card-text class="text-grey-darken-3">
            Gain new skills in just a few months. Go from Newbie to Pro in a
            short time. Explore the most effective way to grow your skills,
            transform yourself and be market ready in a few months.
          </v-card-text>
          <v-card-actions>
            <v-btn to="/about" class="bg-indigo-accent-4 text-capitalize rounded-lg">
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card
          class="overflow-hidden pa-0 ma-0 d-flex align-center rounded-xl"
          flat
          color="transparent"
          width="600"
          max-width="100%"
        >
          <video style="width: 100%" controls>
            <source
              src="https://res.cloudinary.com/rukkiecodes/video/upload/v1673272128/wanlainjo/course-video2_gvamua.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>