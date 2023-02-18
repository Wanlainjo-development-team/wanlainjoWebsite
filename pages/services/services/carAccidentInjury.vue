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
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675897730/chriopractor/car-accident-injury_ggm0gt.jpg",
]);

const pageTexts = ref({
  title: "Automobile Related Injuries",
  text: [
    "If you’ve ever been in a car accident, you’ve probably experienced a whiplash injury.  A whiplash injury strains muscles, sprains ligaments, misaligns vertebra and can damage discs.  Even minor car accident injuries can result in life-long pain and discomfort, if not treated appropriately.  The chiropractors at Metronet Chiropractic Clinic have been successfully diagnosing and treating car accident injuries in Minnesota since 1986, and we are here to help you recover from your car accident injury.",
    "Often times there will be immediate pain, swelling, or muscle, but whiplash injuries can be sneaky and not produce a lot of symptoms the first few days, sometimes not for weeks.  It is best to get an evaluation as soon as possible after an accident so any injuries related to the incident can be documented and thereby covered by your car insurance.",
    "Surprisingly, many people don’t realize that care for bodily injuries resulting “from the operation, care or maintenance of a vehicle” as the law reads, are 100% covered by your car insurance.  Care for these injuries are not handled by your regular health insurance, so you are free to see any doctor you choose and are not restricted to your particular health insurance network.  Medical and chiropractic care, acupuncture, massage therapy, etc., are all covered when you have been injured in a car accident.  It doesn’t matter if you are at fault or not in a two-car accident. Any bodily injuries are equally covered. Another rule is that using your bodily injury aspect of your car insurance cannot, by law, raise your car insurance premiums.",
    "If you have been in a car accident and are experiencing any injury symptoms, please call us to schedule a free consultation."
  ],
});

onMounted(() => {
  current.current = "Car Accident Injury";
});
</script>