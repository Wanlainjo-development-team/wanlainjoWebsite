<template>
  <v-app-bar color="transparent" class="glass" flat>
    <v-toolbar-title>
      <v-img
        cover
        width="300"
        aspect-ratio="1.5"
        src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675910172/chriopractor/svg_egxocc.svg"
      />
    </v-toolbar-title>

    <v-spacer />

    <v-btn
      variant="text"
      class="
        text-body-2
        font-weight-regular
        text-capitalize
        hidden-md-and-down
        ml-2
        rounded-lg
      "
      v-for="(route, i) in drawer.routes"
      :key="i"
      :to="route.to"
      >{{ route.title }}

      <v-menu v-if="route.title == 'Services'" activator="parent" open-on-hover>
        <v-card width="800" flat class="rounded-0">
          <v-card-text>
            <v-row justify="start">
              <v-col
                v-for="(subMenu, i) in route.subMenus"
                :key="i"
                cols="12"
                sm="6"
                :style="{
                  'border-right': i == 0 ? '1px solid #e0e0e0' : 'none',
                }"
              >
                <v-list density="compact" class="py-0 bg-white">
                  <v-list-item-title class="font-weight-bold">
                    {{ subMenu.title }}
                  </v-list-item-title>
                  <v-list-item
                    v-for="(route, i) in subMenu.routes"
                    :key="i"
                    :to="route.to"
                    density="compact"
                    class="bg-white"
                  >
                    <v-list-item-title class="text-body-2 text-grey-darken-3">{{
                      route.title
                    }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-btn>

    <v-btn
      to="/register"
      class="
        bg-indigo-accent-4
        mx-2
        font-weight-bold
        text-body-2 text-capitalize
        hidden-sm-and-down
        rounded-lg
      "
      >Register</v-btn
    >
    <v-app-bar-nav-icon
      @click="drawer.drawer = !drawer.drawer"
      variant="text"
      class="hidden-lg-and-up ml-2 rounded-lg"
    />
  </v-app-bar>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDraerStore } from "@/store/drawer";
import { useDisplay } from "vuetify";

const drawer = useDraerStore();

const { name } = useDisplay();

const fav = ref(true);
const menu = ref(false);
const message = ref(false);
const hints = ref(true);
</script>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
</style>