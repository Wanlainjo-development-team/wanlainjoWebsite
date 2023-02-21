<template>
  <v-container fluid class="pa-0 ma-0 mt-n16 header">
    <v-container class="d-flex align-center" style="height: 100%">
      <v-row class="row">
        <v-col
          cols="12"
          sm="6"
          lg="8"
          class="pl-lg-16 d-flex flex-column align-start justify-center"
        >
          <h1
            class="
              text-h2 text-sm-h2 text-lg-h1
              font-weight-black
              text-grey-darken-3
              mainText
            "
          >
            Our Courses
          </h1>
        </v-col>
      </v-row>
    </v-container>

    <div class="div-vertical text-h1 font-weight-black">
      <div class="section3">
        <span class="text-h3 font-weight-black text-center">Hub</span>
        <div></div>
      </div>
      <div class="section2">
        <span>Creative</span>
      </div>
      <div class="section1">
        <div></div>
        <span class="text-h3 font-weight-black">The</span>
      </div>
    </div>
    <canvas class="particles"></canvas>
  </v-container>
</template>

<script>
import particles from "../fragments/particles.js";
export default {
  mounted() {
    particles();
  },
};
</script>

<style scoped lang="scss">
.header {
  background-image: url("@/assets/images/bg1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  position: relative;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.mainText {
  z-index: 2;
  background: -webkit-linear-gradient(45deg, #727aff, #7cbdb9b4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.div-vertical {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #7cbdb9b4;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;

  .section1,
  .section3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
}

.glassCard {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;
}
</style>