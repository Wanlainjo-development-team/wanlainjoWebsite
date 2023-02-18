<template>
  <v-container>
    <v-row justify="space-between">
      <v-col v-for="(imageCard, i) in imageCards" :key="i" cols="12" sm="6">
        <v-img :src="imageCard" aspect-ratio="1.5" contain></v-img>
      </v-col>
      <v-col cols="12">
        <v-card flat>
          <v-card-title
            class="text-grey-darken-3 font-weight-bold text-h6 text-lg-h5"
            >Injury Rehab in Wayzata, MN</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            We offer our patients various options when it comes to therapeutic
            exercise and personal training. Rehab has been shown to help the
            reeducation of the muscles leading to increased range of motion as
            well as improved balance and strength. Our rehab programs are
            customized to every individual patient’s conditions and
            requirements.
          </v-card-text>
          <v-card-title
            class="text-grey-darken-3 font-weight-bold text-h6 text-lg-h5"
            >Therapeutic Exercise and Rehab</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            Chiropractors sometimes recommend therapeutic exercise as part of a
            treatment plan. This will involve spending some time with a
            qualified trainer who will guide you by demonstrating specific
            exercises that are meant to reeducate muscles and speed up your
            recovery. The road to well-being couldn’t be more straightforward
            and we’ll be there to help you every step of the way.
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
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675905155/chriopractor/Chiropractors-TheBrost-Wayzata-rehab_tj5nqm.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675809167/chriopractor/aarehab-room_zzltt2.jpg",
]);

const lists = ref([
  "Disc Herniations",
  "Failed Back Surgery",
  "Disc Degeneration",
  "Facet Syndrome",
  "Spinal Stenosis",
  "Sciatia",
  "Chronic Lower Back Pain",
  "Ridiculer Arm Pain",
  "Chronic Neck Pain",
]);

onMounted(() => {
  current.current = "Rehabilitation";
});

const redirect = (location) => {
  window.open(location);
};
</script>