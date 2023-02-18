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
  title: "Knee, Hip & Ankle Pain Treatment",
  text: [
    "Many people unnecessarily suffer from lower extremity pain.  Knee pain, hip pain, or ankle pain can limit many activities and the ability to exercise, which can than lead to other health issues.  If you can’t walk comfortably, the pounds tend to pile on due to lack of exercise.  This can eventually lead to more serious health issues.",
    "Lower extremity pain can result from many causes.  Obviously acute injuries or accidents can cause traumatic injuries to ligaments and menisci. These injuries should be addressed immediately for the best long-term outcome.",
    "Many people suffer from more chronic knee pain or hip pain, which is not related to any specific injury.  These problems are often just treated with pain or anti-inflammatory medication, without really thoroughly investigating the cause.  A blanket diagnosis of arthritis is often given, and the patient is told that this is something they have to live with.",
    "As a chiropractor, we look at the body as a whole. We know that knee pain is often due to stress on the knees from uneven weight bearing, due to the hips being out of alignment, or that the arches of the feet are not well supported and the feet are pronated.  This transfers stress to the knees, and hips where the symptoms tend to manifest.  Uneven weight bearing on the knees, hips or ankles can over time lead to osteoarthritis due to the undue stress on the joints.",
    "If you suffer from unresolved lower extremity pain that limits your lifestyle and ability to exercise, schedule an exam with an experienced chiropractor to look at other potential stress areas in your body that may be negatively affecting joints.  Acupuncture is also very effective when it comes to treating joint pain.",
    "Don’t give up on your knees just because someone has told you that you have to live with the pain!  Sometimes the solution just requires looking at the problem from a different view point.  We are here to help if you are looking to resolve your lower  extremity pain!",
  ],
});

onMounted(() => {
  current.current = "Lower Extremity Pain";
});
</script>