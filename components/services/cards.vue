<template>
  <v-container>
    <v-row>
      <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="6" md="4">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card
              v-bind="props"
              :style="{
                border: isHovering
                  ? '4px solid #3BA2F4'
                  : '4px solid transparent',
                transition: 'all .25s ease',
              }"
              flat
              class="rounded-lg"
            >
              <v-card-title
                class="font-weight-bold text-grey-darken-3 d-flex align-center"
              >
                <v-icon
                  class="mr-2"
                  color="blue"
                  style="transition: all 0.25s ease"
                  >mdi-checkbox-outline</v-icon
                >
                {{ card.title }}</v-card-title
              >
              <v-card-text>
                <span class="text-grey-darken-3">
                  {{ card.text }}
                </span>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn class="text-body-1 text-capitalize text-blue" color="blue">View More</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const cards = ref([
  {
    title: "Low Back Pain",
    text: "Chiropractors treat more patients for low back pain than any other condition.  Experience natural pain relief for your back through chiropractic!",
  },
  {
    title: "Sciatica",
    text: "Sciatica is caused by a pinched nerve in the lower back.  Chiropractors are experts at diagnosing and treating sciatica, and Metronet Chiropractic Clinic offers non-surgical options for more severe cases.",
  },
  {
    title: "Neck Pain",
    text: "Our chiropractors are experts at neck pain treatments, whether its caused by an injury or repetitive stress.  Visit us today and get relief from neck pain!",
  },
  {
    title: "Headaches",
    text: "Our chiropractors treat the source of headaches, not the symptoms, for effective headache pain relief without the use of drugs.  Learn more about how we can help you live pain free!",
  },
  {
    title: "Extremity Pain",
    text: "Extremity pain is often caused by misalignments in the spine or joints.  Chiropractors can treat your extremity pain by relieving pressure in the joints, so you can get back to feeling well again.",
  },
  {
    title: "Car Accident Injuries",
    text: "Chiropractors are trained to diagnose and treat whiplash and other injuries that result from car accidents.  Even small impacts can leave lasting damage to the body, if left untreated.",
  },
  {
    title: "Fibromyalgia",
    text: "At Metronet Chiropractic Clinic, we use a combination of chiropractic, acupuncture and other therapies to alleviate pain and improve function to patients suffering from Fibromyalgia.",
  },
  {
    title: "Pinched Nerves",
    text: "Chiropractors adjust the spine to relieve pressure on pinched nerves that cause pain and immobility.  Often times pinched nerves will radiate pain into the extremities or head, and chiropractic is a great solution for that pain.",
  },
  {
    title: "Herniated & Slipped Disc Pain",
    text: "Herniated and slipped discs are painful and debilitating.  We offer DRX9000 spinal decompression therapy to reduce pain and improve function for those who want to removed pain an improve function, without surgery or drugs.",
  },
]);
</script>
