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
            >Spinal Decompression Treatment in Wayzata, MN</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            Back or neck surgery can be costly in more ways than one,
            considering there are several risks associated with these
            procedures. Luckily nowadays, there’s a much more effective
            treatment for spinal pain and injuries. Here at Metronet Chiropractic Clinic, we
            were the first in Minnesota to bring in the leading disc
            decompression therapy using DRX-9000 spinal decompression therapy.
            This spinal decompression system has been endorsed by numerous
            leading medical experts and has shown high degrees of success in
            treating even the most difficult and long-standing back conditions.
          </v-card-text>
          <v-card-title
            class="text-grey-darken-3 font-weight-bold text-h6 text-lg-h5"
            >Spinal Decompression</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            Spinal decompression has been used to treat various back and lumbar
            conditions, such as:
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
            Disc decompression works by using focused traction and a gently
            pumping action to the spinal discs, which causes a release of
            pressure to the nerves that cause lower back and neck pain.
            Decompression also allows fluids and nutrients to move in and out of
            the discs at a faster pace, thereby speeding up healing. <br />
            In a typical decompression treatment, the patient lays face-up on
            the decompression table. A comfortable bolster is placed under the
            knees, and support pillow under the neck to the patient’s comfort
            level. The computer begins a slow pull that gradually increases up
            to the pre-set treatment weight and targeted disc level. Most
            patients relax completely, and some even fall asleep during the
            treatment.
          </v-card-text>
          <v-card-title
            class="text-grey-darken-3 font-weight-bold text-h6 text-lg-h5"
            >Post-Treatment and Care</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            After the session on the spinal decompression session, ice and
            electrical muscle stimulation or infrared laser are applied to the
            treated area. A gentle adjustment with an activator instrument
            ensures proper spinal alignment. Acupuncture is also available at
            this point to provide further pain relief. The entire treatment
            session takes under one hour. <br />
            Exercise and rehabilitation programs can also be included later on,
            if needed. We can also offer important disc nutritional supplements,
            lower back support belts (if necessary) and a custom water bottle to
            encourage increased water intake. Patients enjoy their treatment
            sessions, and report significant pain relief following one to eight
            sessions. A total of 20 treatments are recommended for resolving
            conditions, given over a six-week period. <br />
            If you have any questions regarding Spinal Decompression, please
            call to speak to a doctor 952-473-9637.
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
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675332828/chriopractor/room3_gelmba.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675904754/chriopractor/Chiropractors-TheBrost-Wayzata-spinal-decompression2-sm_ofytvx.jpg",
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
  current.current = "Spinal Decompression";
});

const redirect = (location) => {
  window.open(location);
};
</script>