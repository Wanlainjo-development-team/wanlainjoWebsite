<template>
  <v-parallax
    src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675335033/chriopractor/hidden-bg_ni0a0r.jpg"
    lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg"
    height="400"
    gradient="rgba(33, 150, 243, 0.9), rgba(33, 150, 243, 0.9)"
    class="d-flex align-center justify-center"
  >
    <v-card color="transparent" class="text-center" flat>
      <v-card-subtitle class="text-white text-body-1"
        >HAPPY & HEALTHY!</v-card-subtitle
      >
      <v-card-title class="text-white text-h5 text-lg-h4 mb-5"
        >What Our Patients Are Saying</v-card-title
      >
    </v-card>
    <v-carousel
      cycle
      height="100%"
      interval="10000"
      hide-delimiters
      show-arrows="hover"
      delimiter-icon="mdi-square"
    >
      <v-carousel-item v-for="(testimonial, i) in testimonials" :key="i">
        <v-sheet
          height="100%"
          class="d-flex align-center"
          color="transparent"
          tile
        >
          <v-card
            width="800"
            max-width="100%"
            class="mx-auto d-flex flex-column align-center justify-center"
            color="transparent"
            flat
          >
            <v-card-text class="text-white text-body-1 text-center"
              >``{{ testimonial.text }}``<span class="font-weight-bold">--{{ testimonial.name }}</span></v-card-text
            >
            <v-rating
              v-model="testimonial.rating"
              bg-color="orange-lighten-1"
              color="amber"
            />
          </v-card>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-parallax>
</template>

<script setup>
import { ref } from "vue";

const slides = ref(["First", "Second", "Third", "Fourth", "Fifth"]);

const testimonials = ref([
  {
    text: "I have been going to Dr Smith for years and he has truly changed my life. Not only has he helped alleviate my chronic back pain, but he has also taught me ways to maintain my overall well-being. I highly recommend him to anyone in need of chiropractic care.",
    name: "Susan K",
    rating: 4,
  },
  {
    text: "I was sceptical of chiropractic care at first, but after just one session with Dr Brown, I was a believer. She not only relieved my neck pain, but she also took the time to explain the root cause and showed me exercises to prevent it from happening again. I can't thank her enough!",
    name: "John D",
    rating: 3,
  },
  {
    text: "Dr Johnson has been a lifesaver for my family. From pediatric care for my children to geriatric care for my ageing parents, he has helped us all with a gentle and personalized approach. We are so grateful to have found such a wonderful chiropractor.",
    name: "Amanda R",
    rating: 5,
  },
  {
    text: "I was in a car accident and had severe whiplash. After just a few visits with Dr Patel, I was able to return to work and resume my normal activities. I was amazed at how quickly and effectively she was able to treat my pain.",
    name: "Michael S",
    rating: 4.5,
  },
  {
    text: "Dr Lee has a true passion for chiropractic care and it shows in his dedication to his patients. He has helped me through various sports injuries and has always made sure I was comfortable and understood the treatment process. I would recommend him to anyone looking for a chiropractor.",
    name: "Jennifer L",
    rating: 5,
  },
]);
</script>