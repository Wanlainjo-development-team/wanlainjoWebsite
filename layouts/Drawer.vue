<template>
  <v-navigation-drawer v-model="drawer.drawer" location="left" border="0">
    <v-card color="transparent" flat>
      <v-card-text class="pa-2">
        <v-list nav>
          <v-list-item
            v-for="(route, i) in drawer.routes"
            :key="i"
            :to="route.to"
            :prepend-icon="route.icon"
            :title="route.title"
            :value="route.title"
          ></v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block class="bg-blue text-capitalize">
          Make an appointment
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { useDraerStore } from "@/store/drawer";
import { ref, onMounted, onBeforeMount } from "vue";
import { useDisplay } from "vuetify";

const { name } = useDisplay();

const drawer = ref(useDraerStore());

const resetDrawer = () => {
  switch (name.value) {
    case "xs":
      return (drawer.drawer = false);
    case "sm":
      return (drawer.drawer = false);
    case "md":
      return (drawer.drawer = false);
    case "lg":
      return (drawer.drawer = false);
    case "xl":
      return (drawer.drawer = false);
    case "xxl":
      return (drawer.drawer = false);
  }
};

onMounted(() => {
  resetDrawer();
});
</script>