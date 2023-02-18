<template>
  <Header />
  <v-app>
    <v-navigation-drawer
      v-model="drawer.rightDrawer"
      color="#F9FAFA"
      class="pa-4"
      border="0"
      width="300"
      location="left"
    >
      <div v-for="(route, i) in routes" :key="i">
        <v-list density="compact">
          <v-list-item density="compact" class="rounded-lg" :to="route.to">
            <v-list-item-title class="text-body-2">{{
              route.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-row justify="space-between" dense>
          <v-col cols="1"></v-col>
          <v-col cols="11">
            <v-list density="compact">
              <v-list-item
                v-for="(subRoute, i) in route.subRoutes"
                :key="i"
                :to="subRoute.to"
                active-color="blue"
                active-class="rounded-lg"
                class="mb-2 rounded-lg"
                density="compact"
              >
                <v-list-item-title class="text-body-2">{{
                  subRoute.title
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </div>
    </v-navigation-drawer>

    <v-main>
      <NuxtPage />
    </v-main>
    <v-btn
      @click="drawer.rightDrawer = true"
      position="fixed"
      location="bottom right"
      class="bg-blue ma-5"
      size="large"
      icon
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app>
</template>

<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
import Header from "~/components/servicesRoutes/header.vue";
import { useDraerStore } from "~~/store/drawer";
import { useDisplay } from "vuetify";

const { name } = useDisplay();
const drawer = useDraerStore();

const routes = ref([
  {
    title: "Chiropractic Services",
    to: "/servicesPage",
    subRoutes: [
      {
        title: "Back Pain Treatment",
        to: "/services/services/backPainTreatment",
      },
      {
        title: "Neck pain",
        to: "/services/services/neckPain",
      },
      {
        title: "Sciatica",
        to: "/services/services/sciatica",
      },
      {
        title: "Headache Treatment",
        to: "/services/services/headacheTreatment",
      },
      {
        title: "Lower Extremity Pain",
        to: "/services/services/lowerExtremityPain",
      },
      {
        title: "Upper Extremity Pain",
        to: "/services/services/upperExtremityPain",
      },
      {
        title: "Car Accident Injury",
        to: "/services/services/carAccidentInjury",
      },
    ],
  },
  {
    title: "Other Services",
    to: "/servicesPage",
    subRoutes: [
      {
        title: "Acupuncture",
        to: "/services/services/acupuncture",
      },
      {
        title: "Massage Therapy",
        to: "/services/services/massageTherapy",
      },
      {
        title: "Spinal Decompression",
        to: "/services/services/spinalDecompression",
      },
      {
        title: "Rehabilitation",
        to: "/services/services/rehabilitation",
      },
    ],
  },
]);

const resetDrawer = () => {
  switch (name.value) {
    case "xs":
      return (drawer.rightDrawer = false);
    case "sm":
      return (drawer.rightDrawer = false);
    case "md":
      return (drawer.rightDrawer = true);
    case "lg":
      return (drawer.rightDrawer = true);
    case "xl":
      return (drawer.rightDrawer = true);
    case "xxl":
      return (drawer.rightDrawer = true);
  }
};

onMounted(() => {
  resetDrawer();
});
</script>