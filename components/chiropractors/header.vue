<template>
  <v-carousel
    hide-delimiters
    show-arrows="hover"
    height="400"
    cycle
    interval="20000"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-parallax
        :src="item"
        lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg"
        gradient="to bottom, rgba(0,0,0,.6), rgba(0,0,0,.6)"
      >
        <v-container class="pa-0">
          <v-card
            height="400"
            max-width="100%"
            color="transparent"
            class="d-flex align-center"
            flat
          >
            <v-card-text class="white--text d-flex flex-column align-start">
              <span
                class="
                  text-h5 text-sm-h4 text-lg-h3 text-white
                  font-weight-bold
                "
                >Meet Your Chiropractors</span
              >
              <v-btn
                color="blue"
                flat
                class="mt-4 text-body-2 font-weight-bold text-capitalize"
                href="#contact"
                >Make an appointment</v-btn
              >
            </v-card-text>
          </v-card>
        </v-container>
      </v-parallax>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const items = [
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307248/chriopractor/image1_btfkx7.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307248/chriopractor/image2_djl3ua.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307249/chriopractor/image3_hpoaa8.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307249/chriopractor/image4_kzobl3.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675307249/chriopractor/image5_qpwtgq.jpg",
];
</script>