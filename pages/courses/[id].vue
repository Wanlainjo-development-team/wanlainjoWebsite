<template>
  <v-container>
    <v-card-text>
      <v-row v-if="currentCourse" justify="space-between">
        <v-col cols="12" sm="6" md="5">
          <v-card flat>
            <v-img class="rounded-lg" :src="currentCourse?.image" />
          </v-card>
          <v-table class="mt-4 elevation-4 rounded-lg">
            <thead class="bg-indigo-accent-4">
              <tr>
                <th class="text-left text-white">Class</th>
                <th class="text-left text-white">Price</th>
                <th class="text-left text-white">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-weight-bold">Onsite/Online</td>
                <td
                  v-if="currentCourse?.price != undefined"
                  class="font-weight-bold"
                >
                  ₦{{
                    (currentCourse?.price)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                </td>
                <td class="font-weight-bold">
                  {{ currentCourse?.duration }}WKs (Weekends/Weekdays)
                </td>
              </tr>
            </tbody>
          </v-table>
          <v-card flat class="mt-4" elevation="4">
            <v-toolbar
              density="compact"
              class="rounded-lg"
              color="indigo-accent-4"
              title="What you will learn"
            ></v-toolbar>
            <v-card-text>
              <v-row dense justify="space-between" class="mt-2">
                <v-col
                  cols="12"
                  v-for="(item, i) in currentCourse?.whatYouWillLearn"
                  :key="i"
                  class="mb-2"
                >
                  <v-row dense>
                    <v-col cols="1">
                      <v-icon icon="mdi-check" color="indigo"></v-icon>
                    </v-col>
                    <v-col cols="11">
                      <v-card-text class="text-body-2 py-0">{{
                        item
                      }}</v-card-text>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="7">
          <v-card flat>
            <v-card-text
              style="line-height: 1em"
              class="text-h5 text-md-h4 font-weight-regular"
              >{{ currentCourse?.subtext }}</v-card-text
            >
            <v-card-text class="text-body-2">{{
              currentCourse?.body
            }}</v-card-text>
            <v-card-text>
              <v-card
                class="elevation-4 mb-4 rounded-lg"
                v-for="(outline, i) in currentCourse?.outline"
                :key="i"
              >
                <v-list class="py-0">
                  <v-list-item>
                    <v-list-item-title
                      class="font-weight-bold text-indigo-accent-4 text-h6"
                    >
                      {{ outline?.title }}
                    </v-list-item-title>
                    <template v-slot:append>
                      <v-btn
                        @click="outline.show = !outline?.show"
                        color="grey-lighten-1"
                        :icon="
                          outline?.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                        "
                        variant="text"
                      ></v-btn>
                    </template>
                  </v-list-item>
                </v-list>
                <v-divider />
                <v-expand-transition>
                  <v-card-text v-show="outline?.show" class="px-12">
                    <ul>
                      <li
                        v-for="(item, i) in outline?.breakdown"
                        :key="i"
                        class="text-body-2 mb-2"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </v-card-text>
                </v-expand-transition>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-container>
</template>

<script setup>
import { useCoursesStore } from "@/store/courses";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let currentCourse = ref(null);
const courses = ref(useCoursesStore());

onMounted(() => {
  const _currentCourse = courses.value.courses.find(
    (course) => course.id === route.params.id
  );
  
  currentCourse.value = _currentCourse;
});
</script>
