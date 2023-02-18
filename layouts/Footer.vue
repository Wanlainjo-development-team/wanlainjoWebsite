<template>
  <v-footer color="blue-darken-4" dark>
    <v-container class="my-16">
      <v-row justify="space-between">
        <v-col cols="12" sm="6">
          <v-card color="transparent" flat>
            <v-card-title class="font-weight-bold"
              >About Metronet Chiropractic Clinic</v-card-title
            >
            <v-card-text class="text-body-2">
              Metronet Chiropractic Clinic provides the highest quality
              chiropractic and natural heath care to help alleviate pain and
              promote optimum health for families and individuals of all ages.
            </v-card-text>
            <v-card-text class="text-body-2">
              We are located just west of Minneapolis in Wayzata, MN. We proudly
              serve patients from the surrounding areas of Plymouth, Minnetonka,
              Deephaven, Orono, Mound, Long Lake, Medina, Hopkins, Golden
              Valley, St. Louis Park and beyond.
            </v-card-text>

            <v-card-text>
              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                icon
                flat
                size="x-small"
                class="mr-2"
                @click="redirect(social.link)"
              >
                <v-icon size="x-large" color="indigo" class="pa-0">{{
                  social.icon
                }}</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card color="transparent" flat>
            <v-card-title class="font-weight-bold">Contact Info</v-card-title>
            <v-card-text class="text-body-2">
              Metronet Chiropractic Clinic Ltd. <br />
              1421 Wayzata Blvd #100, Wayzata, MN 55391, United States
              <br />
              <br />
              Phone:
              <a
                href="tel:+1-612-296-5143"
                class="text-decoration-none text-white"
                >+1-612-296-5143</a
              >
              <br />
              <br />
              Fax:
              <a href="tel:763-560-9182" class="text-decoration-none text-white"
                >763-560-9182</a
              >
              <br />
              <br />
              Email:
              <a
                href="mailto:cfokumahlah@hotmail.com"
                class="text-decoration-none text-white"
                >cfokumahlah@hotmail.com</a
              >
              <br />
              <br />
              <span
                @click="
                  redirect(
                    'https://www.google.com/maps/place/1421+Wayzata+Blvd+%23+100,+Wayzata,+MN+55391,+USA/@44.9716411,-93.4965792,17z/data=!3m1!4b1!4m5!3m4!1s0x52b34b6597a903a7:0x868f61454e06b908!8m2!3d44.9716373!4d-93.4943905'
                  )
                "
                class="text-white"
                style="cursor: pointer"
                >Find Us on Google Maps</span
              >
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card color="transparent" flat>
            <v-card-title class="font-weight-bold">Clinic Hours</v-card-title>
            <v-card-text class="text-body-2">
              Monday 7:00 am - 6:00 pm
              <br />
              <br />
              Tuesday 7:00 am - 8:00 pm
              <br />
              <br />
              Wednesday 7:00 am - 6:00 pm
              <br />
              <br />
              Thursday 7:00 am - 8:00 pm
              <br />
              <br />
              Friday 7:00 am - 6:00 pm
              <br />
              <br />
              Saturday 8:00 am - 1:00 pm
              <br />
              <br />
              Sunday Closed
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref } from "vue";

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
</script>