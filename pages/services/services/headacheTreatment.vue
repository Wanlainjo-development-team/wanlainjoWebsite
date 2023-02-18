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
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675896035/chriopractor/headache-treatment_g0jcac.jpg",
]);

const pageTexts = ref({
  title: "Headache Treatment",
  text: [
    "There are many different types of headaches, ranging from annoying tension headaches to debilitating migraines, and chiropractic is an effective headache treatment for the most common types of headaches.",
    "Most people have experienced headaches at some point, but for some people they can be so severe and frequent that they completely debilitating. Nothing is enjoyable when you have a headache, and a migraine can put you totally out of commission.",
    "Temporary relief can be attained with medications, but to find the root cause of the headaches a thorough consultation and exam is needed. For most cases experienced chiropractor is the best bet, since 90-95% of all headaches are “cervicogenic” which means they are stemming from the cervical spine- the neck. The nerve-roots that exit between the upper two neck vertebrae turn upward and go to the scalp and head. If those nerve roots are irritated or pinched at their exit from the spine, headaches often are a result.",
    "A series of gentle adjustments to the area of the spine, where an impingement is found, most often result in a total cure of headache problems. You may wonder what causes these impingements in the first place? A thorough history analysis usually reveals some earlier trauma to the neck that cause a slight misalignment or subluxation of one or more vertebrae in the neck. Falls, poor sleeping positions (especially stomach sleeping, contact sports injuries) or a history of a car accident whiplash injury in the past are examples. Virtually all headaches and most migraines clear up with chiropractic care. The rare suspicion of more severe problems such as a possible brain tumor should naturally be treated by a neuro-surgeon.",
    "If you or someone you know suffers from reoccurring headaches and continuously takes medication to treat the symptoms, call us for a consultation, and say good bye to your headaches and the pill bottle for good!",
  ],
});

onMounted(() => {
  current.current = "Headache Treatment";
});
</script>