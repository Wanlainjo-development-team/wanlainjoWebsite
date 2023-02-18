<template>
  <v-container>
    <v-row justify="space-between">
      <v-col v-for="(imageCard, i) in imageCards" :key="i" cols="12">
        <v-img :src="imageCard" aspect-ratio="1.5" contain></v-img>
      </v-col>
      <v-col cols="12">
        <v-card flat>
          <v-card-title
            class="text-grey-darken-3 font-weight-bold text-h6 text-lg-h5"
            >Massage Therapy in Wayzata, MN</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            Our highly qualified team of massage therapists have years of
            experience helping patients reduce muscle tension as well as stress
            and fatigue through effective massage techniques. Some of our past
            and current clients include professional athletes and dancers so you
            can be sure you’ll be in safe hands with us.
          </v-card-text>
          <v-card-title
            class="text-grey-darken-3 font-weight-bold text-h6 text-lg-h5"
            >Chiropractic Massage</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            Our clinic offers several types of chiropractic massage modalities
            which can improve your overall wellness while also effectively
            treating different sources of pain. Massage techniques include:
          </v-card-text>
          <v-card-text>
            <v-row no-gutters>
              <v-col
                v-for="(item, i) in lists"
                :key="i"
                cols="12"
                sm="4"
                class="pa-0 bg-red"
              >
                <v-list density="compact">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="blue">mdi-arrow-right-circle</v-icon>
                    </template>

                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text class="text-body-2 text-grey-darken-4">
            Massage and touch therapy have been proven to alleviate and prevent
            several conditions such as back and neck pain, headaches, depression
            and anxiety while contributing to improved sleep, job performance,
            mood and overall sense of well-being.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script setup>
import { useServicesStore } from "@/store/service";
import { ref, onMounted } from "vue";

const current = useServicesStore();

const imageCards = ref([
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675904297/chriopractor/Chiropractors-TheBrost-Wayzata-chiropractic-massage_w9j2ly.jpg",
]);

const lists = ref([
  "Swedish",
  "Deep tissue",
  "Sports (pre- and post-event)",
  "Myofascial Release",
  "Cranial Sacral",
  "Reflexology",
  "Pregnancy (prenatal)",
  "Chair massage",
]);

onMounted(() => {
  current.current = "Massage Therapy";
});

const redirect = (location) => {
  window.open(location);
};
</script>