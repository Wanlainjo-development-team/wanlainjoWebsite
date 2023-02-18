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
            >{{ pageTexts.title }}</v-card-title
          >
          <v-card-text
            v-for="(text, i) in pageTexts.text"
            :key="i"
            class="text-body-2 text-grey-darken-4"
          >
            {{ text }}
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
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675896484/chriopractor/Chiropractors-TheBrost-Wayzata-013-2880w_q2tavs.jpg",
]);

const pageTexts = ref({
  title: "Shoulders, Arms & Hands Pain Treatment",
  text: [
    "Pain in shoulders, arms, and hands often stems from the neck. The nerves that exit from the mid to lower neck (The Brachial plexus) travel from the neck down to the shoulder, down the arm and all the way down to the fingertips. These nerves can cause upper extremity pain anywhere along their pathway, if they are pinched or irritated by misaligned vertebrae or a disc herniation in the neck. A chiropractor can diagnose and treat this successfully.",
    "The nerves from the neck control the function of all the muscles of the shoulder, arm and hand. Muscle weakness and even numbness can result from irritation of these nerves.",
    "The nerves can also get pinched in the shoulder, elbow and wrist by joint misalignments. Tennis elbow and Carpal tunnel syndrome are two common examples.",
    "Of course, there are less complex reasons for shoulder and arm pain, such as over exercising and straining a muscle. These problems often self correct in a couple of days with rest and light stretching. In more severe or long lasting muscle injuries chiropractic therapies such as ultrasound, infrasound, infrared laser and/or acupuncture can speed up the healing process.",
    "Whether you suffer from nerve impingement pain, joint pain or muscle pain, let us help you diagnose your situation and help relieve your pain, so you can get back to normal function again!",
  ],
});

onMounted(() => {
  current.current = "Lower Extremity Pain";
});
</script>