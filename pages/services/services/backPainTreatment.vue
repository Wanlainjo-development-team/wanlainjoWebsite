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
            >Treatment for Back Pain</v-card-title
          >
          <v-card-text class="text-body-2 text-grey-darken-4">
            A vast majority of Americans will experience back pain at some point
            in their lives, and most will suffer from low-back pain
            specifically. Chiropractors are experts at treating back pain, and
            Metronet Chiropractic Clinic has been successfully treating Minnesotan’s with
            back pain since 1986.
          </v-card-text>
          <v-card-text class="text-body-2 text-grey-darken-4">
            Chiropractors give back pain treatment by finding the source of the
            pain and treating it with chiropractic adjustment, or Chiropractic
            Manipulative Therapy, and other adjunctive therapies. By gently
            adjusting the spine to relieve pressure on pinched nerves, a
            chiropractor can safely relieve your back pain.
          </v-card-text>
          <v-card-text class="text-body-2 text-grey-darken-4">
            More and more Americans are turning to chiropractic adjustments as
            treatment for back pain. Studies show the increase in chiropractic
            treatment in the US, and the effectiveness of chiropractic spinal
            manipulation as treatment for lower back pain.
          </v-card-text>

          <v-card-text>
            <v-row dense>
              <v-col cols="1">
                <v-progress-circular
                  model-value="50"
                  color="blue"
                  :size="50"
                  :width="5"
                  >1</v-progress-circular
                >
              </v-col>
              <v-col cols="11">
                <v-card flat>
                  <v-card-title
                    class="text-grey-darken-3 font-weight-bold text-h6"
                    >A 2015 Gallup study</v-card-title
                  >
                  <v-card-text class="text-body-2 text-grey-darken-4">
                    showed that more than half of Americans had visited a
                    chiropractor in their lifetime, and most agree that
                    chiropractic is an effective treatment for back and neck
                    pain.
                  </v-card-text>
                  <v-card-text class="text-body-2 text-grey-darken-4 pt-0">
                    <v-hover>
                      <template v-slot:default="{ isHovering, props }">
                        <span
                          v-bind="props"
                          :class="isHovering ? 'text-blue' : ''"
                          @click="
                            redirect(
                              'https://news.gallup.com/poll/184910/majority-say-chiropractic-works-neck-back-pain.aspx'
                            )
                          "
                          style="cursor: pointer"
                          >https://news.gallup.com/poll/184910/majority-say-chiropractic-works-neck-back-pain.aspx</span
                        >
                      </template>
                    </v-hover>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="1">
                <v-progress-circular
                  model-value="50"
                  color="blue"
                  :size="50"
                  :width="5"
                  >2</v-progress-circular
                >
              </v-col>
              <v-col cols="11">
                <v-card flat>
                  <v-card-title
                    class="text-grey-darken-3 font-weight-bold text-h6"
                    style="line-height: 1em"
                    >A study in The Journal of the American Medical
                    Association</v-card-title
                  >
                  <v-card-text class="text-body-2 text-grey-darken-4">
                    showed improvements to pain and function in patients with
                    acute low back pain treated with spinal manipulative
                    therapy, which is the main type treatment offered by
                    chiropractors.
                  </v-card-text>
                  <v-card-text class="text-body-2 text-grey-darken-4 pt-0">
                    <v-hover>
                      <template v-slot:default="{ isHovering, props }">
                        <span
                          v-bind="props"
                          :class="isHovering ? 'text-blue' : ''"
                          @click="
                            redirect(
                              'https://jamanetwork.com/journals/jama/article-abstract/2616395'
                            )
                          "
                          style="cursor: pointer"
                          >https://jamanetwork.com/journals/jama/article-abstract/2616395</span
                        >
                      </template>
                    </v-hover>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="1">
                <v-progress-circular
                  model-value="50"
                  color="blue"
                  :size="50"
                  :width="5"
                  >2</v-progress-circular
                >
              </v-col>
              <v-col cols="11">
                <v-card flat>
                  <v-card-title
                    class="text-grey-darken-3 font-weight-bold text-h6"
                    style="line-height: 1em"
                    >A further study</v-card-title
                  >
                  <v-card-text class="text-body-2 text-grey-darken-4">
                    shows a “significant advantage for decreasing pain and
                    improving function” to those who add chiropractic
                    manipulative therapy to their standard medical care.
                  </v-card-text>
                  <v-card-text class="text-body-2 text-grey-darken-4 pt-0">
                    <v-hover>
                      <template v-slot:default="{ isHovering, props }">
                        <span
                          v-bind="props"
                          :class="isHovering ? 'text-blue' : ''"
                          @click="
                            redirect(
                              'https://journals.lww.com/spinejournal/abstract/2013/04150/adding_chiropractic_manipulative_therapy_to.2.aspx'
                            )
                          "
                          style="cursor: pointer"
                          >https://journals.lww.com/spinejournal/abstract/2013/04150/adding_chiropractic_manipulative_therapy_to.2.aspx</span
                        >
                      </template>
                    </v-hover>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-text class="text-body-2 text-grey-darken-4">
            As you can see, the truth is out, and millions of Americans are
            turning to chiropractors to treat their back pain without the use of
            dangerous and addictive drugs. If you’re ready to live pain and drug
            free, we’re here to help!
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
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675876242/chriopractor/Chiropractors-TheBrost-Wayzata-011-2880w_hx3r1r.jpg",
  "https://res.cloudinary.com/rukkiecodes/image/upload/v1675890667/chriopractor/aachiropractic-treatment-room_n6aoyh.jpg",
]);

onMounted(() => {
  current.current = "Back Pain Treatment";
});

const redirect = (location) => {
  window.open(location);
};
</script>