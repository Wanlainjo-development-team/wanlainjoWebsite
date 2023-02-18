<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="12">
        <v-container>
          <v-row justify="space-between" dense no-gutters>
            <v-col cols="12" md="10">
              <v-card flat color="transparent">
                <v-card-text>
                  <p class="text-h5 text-sm-h4 mt-5">Payments</p>
                  <p class="text-body-2 mt-5">
                    Conveniently make payments to Metronet Chiropractic Clinic online! Have
                    your invoice number and payment info ready, and click the
                    button below to access our secure payment gateway.
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="2" class="d-flex align-center">
              <v-btn
                block
                flat
                size="large"
                @click="redirect"
                class="text-body-1 text-capitalize rounded-0 text-white bg-blue"
                >Pay your bills</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const redirect = () => {
  window.open("https://simplecheckout.authorize.net/payment/CatalogPayment.aspx");
};
</script>