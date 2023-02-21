<template>
  <v-container class="my-10">
    <v-card width="500" max-width="100%" class="mx-auto" flat>
      <v-card-text>
        <v-card
          @click="clickImage()"
          class="
            bg-indigo-lighten-5
            d-flex
            justify-center
            align-center
            mx-auto
            my-5
            rounded-lg
          "
          width="200"
          height="200"
          flat
        >
          <v-icon v-if="!image" color="indigo" class="mx-auto" size="50"
            >mdi-account-circle</v-icon
          >
          <v-img v-else :src="image" contain />
        </v-card>

        <input
          @change="setImage(e)"
          type="file"
          id="fileInput"
          style="display: none"
        />

        <v-card-title class="pl-0 text-grey-darken-3">Students Information</v-card-title>

        <v-text-field
          v-model="form.studentsname"
          variant="underlined"
          label="Full name"
          color="indigo-accent-4"
        />
        <v-select
          v-model="form.sex"
          :items="['Male', 'Female']"
          variant="underlined"
          label="Full name"
          color="indigo-accent-4"
        />
        <v-textarea
          v-model="form.address"
          variant="underlined"
          label="Address"
          rows="1"
          auto-grow
          color="indigo-accent-4"
        />
        <v-text-field
          v-model="form.dob"
          type="number"
          variant="underlined"
          label="Age"
          color="indigo-accent-4"
        />
        <v-text-field
          v-model="form.state"
          variant="underlined"
          label="State of origin"
          color="indigo-accent-4"
        />
        <v-text-field
          v-model="form.phone"
          variant="underlined"
          label="Phone number"
          color="indigo-accent-4"
        />
        <v-text-field
          v-model="form.email"
          variant="underlined"
          label="Email"
          color="indigo-accent-4"
        />

        <v-card-title class="pl-0 text-grey-darken-3">Sponsorship Information</v-card-title>

        <v-text-field
          v-model="form.sponsorName"
          variant="underlined"
          label="Sponsorship name"
          color="indigo-accent-4"
        />
        <v-textarea
          v-model="form.sponsorAddress"
          variant="underlined"
          label="Sponsorship address"
          rows="1"
          auto-grow
          color="indigo-accent-4"
        />
        <v-text-field
          v-model="form.sponsorPhone"
          variant="underlined"
          label="Phone"
          color="indigo-accent-4"
        />

        <v-card-title class="pl-0 text-grey-darken-3">Course of choice</v-card-title>

        <v-select
          v-model="form.campus"
          :items="['D-line Branch', 'NTA Branch']"
          variant="underlined"
          label="Select Campus"
          color="indigo-accent-4"
        />

        <v-select
          v-model="form.course1.course"
          variant="underlined"
          label="Course(1)"
          :items="courses.courses"
          clearable
          color="indigo-accent-4"
        />
        <v-select
          v-model="form.course2.course"
          variant="underlined"
          label="Course(2)"
          :items="courses.courses"
          clearable
          color="indigo-accent-4"
        />
        <v-select
          v-model="form.course3.course"
          variant="underlined"
          label="Course(3)"
          :items="courses.courses"
          clearable
          color="indigo-accent-4"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          @click="form.registerStudent"
          block
          :loading="form.loading"
          class="bg-indigo-accent-4 rounded-lg"
          size="large"
          >Register now</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useCoursesStore } from "@/store/courses";
import { useRegistrationStore } from "@/store/form";

const courses = ref(useCoursesStore());
const form = ref(useRegistrationStore());
const image = ref(null);

const clickImage = () => {
  document.getElementById("fileInput").click();
};

// set image
const setImage = (e) => {
  const file = document.getElementById("fileInput").files[0];

  if (file) {
    image.value = URL.createObjectURL(file);

    // set image to store
    form.value.image = file;
  }
};
</script>
