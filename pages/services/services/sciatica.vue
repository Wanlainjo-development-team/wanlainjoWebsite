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
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675895480/chriopractor/brost-dad-kid_hysylq.jpg",
]);

const pageTexts = ref({
  title: "Chiropractic helps Headaches",
  text: [
    "Many people have experienced sciatica or have known someone plagued with this pain. It is a very common condition. Sciatica is pain, radiating through the buttock and down the back of the leg and can be severe and debilitating. Low back pain and sciatica are the most common reasons for long term, often addictive, consumption of opioid medications. Chiropractors are experts offering effective treatment for sciatica pain, without the use of dangerous and addictive drugs.",
    "Sciatica is caused by impingement of the sciatic nerve, which exits the spine between the two bottom vertebrae L4 and L5 and the sacrum. The impingement is the most frequently caused by misalignments of these vertebrae or sometimes by disc bulges or herniations, which compress the nerve. Occasionally, the piriformis muscle in the buttock causes the pressure on the nerve.",
    "Treatments are based on the diagnosis of the cause of pain. Misalignments are most successfully treated by chiropractic adjustments to realign the low back vertebrae and thereby removing the pressure on the nerve. Steroid medication is frequently used to reduce the inflammation of the nerve, but unless the impingement is removed, the symptoms tend to reoccur of worsen after the medication is discontinued. Opioid pain medication is often prescribed since the pain can be severe and debilitating. This reduces the symptoms but does not remove the impingement that is causing the pain. In severe cases, where there is a disc bulge or herniation, nonsurgical disc decompressions or sometimes surgery are the best treatment options.",
    "As with most health conditions, an ounce of prevention is worth a pound of cure. Proper lifting techniques and good body ergonomics can prevent this painful condition from starting. Fitness and maintaining a healthy weight, especially avoiding developing a “pot belly” can help prevent sciatica from developing. A good daily core strengthening program helps to support the lower back and decreases the risk for developing low back pain and sciatica.",
  ],
});

onMounted(() => {
  current.current = "Sciatica";
});
</script>