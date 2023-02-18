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
            >Neck Pain Treatment</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            Neck pain and stiffness is one of the most common pain conditions
            causing people to suffer silently. The reason that the Minnesota
            company “My Pillow” is a huge success, is that neck pain and
            discomfort often bothers people at night and it is difficult to find
            a comfortable position to sleep. A good pillow can be helpful, but
            the problem is most of the time not your pillow. It’s your neck! And
            Metronet Chiropractic Clinic chiropractors are neck pain treatment experts.
          </v-card-text>
          <v-card-text class="text-body-2 text-grey-darken-4">
            Sometimes the neck pain is more of a minor annoyance, but it can
            range to severe and debilitating. Headaches can be associated with
            the pain, since all the nerves from your upper neck go up to your
            head. Shoulder and arm pain or numbness can be part of the symptom
            picture. Chiropractors are trained to look at your whole health
            picture, and treat the source of your pain.
          </v-card-text>
          <v-card-text class="text-body-2 text-grey-darken-4">
            So why is neck pain such a common problem? Everyday stress on your
            neck, such as sitting at a computer or looking down on a cellphone
            can add up. Lifting, and especially one sided activities, such as
            operating a machine or tool with your dominant hand or playing a one
            sided sport like tennis, cause the muscles to slowly pull on your
            spine in one direction. This can eventually create enough pull to
            cause slight misalignments of the spine that produces nerve
            impingement, which usually worsens with time.
          </v-card-text>
          <v-card-title
            class="text-grey-darken-3 font-weight-bold text-h6 text-lg-h5"
            >Long term effects if untreated</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            Accidents and injuries are also common reasons why the neck develops
            chronic discomfort and pain. Many people have had car accidents in
            the past and left the injuries to heal on their own without proper
            care. The long-term effects of untreated whiplash injuries according
            to research are:
          </v-card-text>

          <v-card-text>
            <v-row no-gutters>
              <v-col v-for="(item, i) in lists" :key="i" cols="12" sm="4" class="pa-0 bg-red">
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
            If you, or anyone you know, have chronic neck pain or discomfort or
            have recently been involved in a car accident, it is wise to consult
            with a good chiropractor who specializes in these injuries. We all
            want to live a pain free, happy life and be able to partake in
            physical activities and sleep well, so take care of your neck – It’s
            the only one you got!
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
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675894358/chriopractor/neck-pain-osteopathy-treatment-24D5M9J_lsdwdy.jpg",
]);

const lists = ref([
  "Chronic neck pain",
  "Headaches or light-headedness",
  "Loss of range of movements",
  "Degenerative disc disease",
  "Restless sleep",
  "Spinal arthritis",
  "Loss of height",
]);

onMounted(() => {
  current.current = "Neck Pain";
});

const redirect = (location) => {
  window.open(location);
};
</script>