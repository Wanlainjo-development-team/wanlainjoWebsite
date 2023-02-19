<template>
  <v-sheet class="ma-2 rounded-xl rounded-lg overflow-hidden">
    <v-footer color="#112599" class="footer">
      <svg class="wave-top" width="100" viewBox="0 0 1200 250">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z"
          fill="#1b35ca"
        />
      </svg>
      <v-container class="my-16 main-footer">
        <v-row>
          <v-col cols="12" sm="7">
            <v-row>
              <v-col v-for="(route, i) in routes" :key="i" cols="6" sm="4">
                <span class="text-white">{{ route.title }}</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="5" class="mt-16 mt-sm-0">
            <p class="text-white text-h6">Subscribe to our newsletter</p>
            <p class="text-white text-caption mb-5">
              Monthly digest of what's new and exciting from us.
            </p>
            <div class="d-flex align-center justify-center">
              <v-sheet
                width="100%"
                class="rounded-lg overflow-hidden"
                elevation="4"
              >
                <v-text-field
                  variant="solo"
                  density="comfortable"
                  placeholder="Email address"
                  prepend-inner-icon="mdi-email"
                  v-model="newsletter"
                  color="white"
                  hide-details
                />
              </v-sheet>
              <v-btn
                height="48"
                class="ml-4 text-white rounded-lg"
                color="#112599"
                elevation="4"
                @click="newsletter = ''"
                >Subscribe</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-sheet>
</template>

<script setup>
import { ref, onMounted } from "vue";
import anime from "animejs/lib/anime.es.js";

const newsletter = ref("");

const routes = ref([
  { title: "Home", to: "" },
  { title: "About", to: "" },
  { title: "Courses", to: "" },
  { title: "Contact Us", to: "" },
  { title: "Python", to: "" },
  { title: "Web & Mobile", to: "" },
  { title: "UI/UX", to: "" },
  { title: "Data Science", to: "" },
  { title: "Web & App Services", to: "" },
  { title: "Cloud Service", to: "" },
  { title: "PC Tech", to: "" },
  { title: "Graphic Services", to: "" },
]);

const socials = ref([
  {
    icon: "mdi-facebook",
    link: "https://www.facebook.com/metronetchiropracticclinic",
  },
  {
    icon: "mdi-twitter",
    link: "https://twitter.com/metronetchiro",
  },
  {
    icon: "mdi-instagram",
    link: "https://www.instagram.com/metronetchiro/",
  },
  {
    icon: "mdi-youtube",
    link: "https://www.youtube.com/channel/UCY8YQZ1ZQZ1ZQZ1ZQZ1ZQZ1",
  },
]);

const redirect = (location) => {
  window.open(location);
};

onMounted(() => {
  const wave1 =
      "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z",
    wave2 =
      "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
    wave3 =
      "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
    wave4 =
      "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z";

  anime({
    targets: ".wave-top > path",
    easing: "linear",
    duration: 40000,
    loop: true,
    d: [
      { value: [wave1, wave2] },
      { value: wave3 },
      { value: wave4 },
      { value: wave1 },
    ],
  });
});
</script>

<style scoped>
.footer {
  position: relative;
  /* min-height: 70vh; */
}

.wave-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #112599;
}

.main-footer {
  z-index: 1;
}
</style>