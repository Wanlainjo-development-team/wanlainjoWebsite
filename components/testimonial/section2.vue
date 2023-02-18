<template>
  <v-container>
    <v-card width="800" max-width="100%" class="text-center mx-auto my-16" flat>
      <v-card-subtitle class="text-grey-darken-3 text-body-1"
        >OUR REVIEWS</v-card-subtitle
      >
      <v-card-title class="text-grey-darken-3 text-h5 text-sm-h4">
        <span class="font-weight-bold">Testimonials</span>
      </v-card-title>

      <v-card-text>
        <v-carousel v-model="model" hide-delimiters show-arrows="hover" cycle interval="5000" height="200">
          <v-carousel-item
            v-for="(testimonial, i) in testimonials"
            :key="i"
            :value="i"
          >
            <v-sheet class="d-flex align-center" color="transparent" tile>
              <v-card
                width="800"
                max-width="100%"
                class="mx-auto d-flex flex-column"
                color="transparent"
                flat
              >
                <v-rating
                  v-model="testimonial.rating"
                  bg-color="orange-lighten-1"
                  size="small"
                  color="amber"
                  readonly
                />
                <v-card-text class="text-grey-darken-3 text-body-1 text-left"
                  >``{{ testimonial.text }}``</v-card-text
                >
                <v-card-actions>
                  <span class="font-weight-bold text-body-1">{{
                    testimonial.name
                  }}</span>
                </v-card-actions>
              </v-card>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card-text>
      <v-card-text>
        <v-row justify="space-between">
          <v-col v-for="(social, i) in socials" :key="i" cols="12" sm="4">
            <v-card flat>
              <v-avatar size="150" rounded="0">
                <v-img :src="social.image" />
              </v-avatar>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const colors = ref([
  "primary",
  "secondary",
  "yellow darken-2",
  "red",
  "orange",
]);

const model = ref(0);

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

const socials = ref([
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675816422/chriopractor/facebook-5-stars_eg2njk.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675816421/chriopractor/google-5-star_g8hu2t.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675816419/chriopractor/yelp-5-star_jqxhyg.jpg",
  },
]);
</script>