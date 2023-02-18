<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="12" sm="7" md="8">
        <v-card v-for="(post, i) in posts" :key="i" flat>
          <v-img
            :src="post.image"
            lazy-src="https://res.cloudinary.com/rukkiecodes/image/upload/v1675307350/chriopractor/placeholder_lnnfrn.jpg"
            cover
          />
          <v-chip size="x-small" color="transparent">
            <v-icon class="mr-1 text-blue">mdi-account</v-icon>
            <span class="text-blue font-weight-bold">{{ post.aurthor }}</span>
          </v-chip>
          <v-chip size="x-small" color="transparent">
            <v-icon class="mr-1 text-blue">mdi-folder-open</v-icon>
            <span
              v-for="(covering, i) in post.covering"
              :key="i"
              class="text-blue font-weight-bold"
              >{{ covering
              }}{{ i + 1 == post.covering.length ? "" : `,` }}</span
            >
          </v-chip>
          <v-card-text class="text-h6 text-lg-h4 font-weight-bold text-blue">
            <span style="line-height: 1em">
              {{ post.title }}
            </span>
          </v-card-text>

          <v-card-text
            class="text-body-2 text-grey-darken-3"
            v-for="(text, i) in post.text"
            :key="i"
            >{{ text }}</v-card-text
          >

          <v-card v-for="(body, i) in post.body" :key="i">
            <v-card-text class="text-h6 text-lg-h4 text-blue">
              <span style="line-height: 1em">{{ body.heading }}</span>
            </v-card-text>
            <v-card-text v-for="(text, i) in body.text" :key="i">
              <p
                v-if="typeof text != 'object'"
                class="text-body-2 text-grey-darken-3"
              >
                {{ text }}
              </p>
              <ul v-if="typeof text == 'object'" class="pa-1">
                <li
                  v-for="(sub, i) in text.list"
                  :key="i"
                  class="text-body-2 text-grey-darken-3"
                >
                  {{ sub }}
                </li>
              </ul>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3" md="4">
        <v-card color="grey-lighten-4" flat>
          <v-card-actions>
            <v-text-field
              append-inner-icon="mdi-magnify"
              hide-details
              variant="outlined"
              density="compact"
              label="Search..."
            />
          </v-card-actions>
          <v-card-title class="text-grey-darken-3 font-weight-bold"
            >Recent Posts</v-card-title
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const posts = ref([
  {
    image:
      "https://res.cloudinary.com/rukkiecodes/image/upload/v1675377310/chriopractor/Chiropractor-768x681_pn3eo9.webp",
    title: "After Car Accident Chiropractor: Why You Need To See One",
    aurthor: "Chris Fokumlah",
    covering: ["General Chiropractic ", "Pain ", "Sports Injuries"],
    text: [
      "Seeking medical Chiropractor treatment after you have been in a car accident is the first thing you should do. In most cases, accident victims are taken to the emergency room to be assessed for injuries and to receive treatment to help them recover. Going through these steps after a car accident is important regardless of whether or not you believe you have been injured or don’t think that the minor injuries you sustained require medical attention. This is because some injuries can take hours or, in some cases, days to begin to hurt.",
      "Understanding these factors is crucial for your well-being after being in a car accident. Simply put, you cannot afford to take such events lightly regardless of how minor you think they are. Furthermore, taking the appropriate steps can help save your life and ensure that you do not suffer any long-term effects.",
    ],
    body: [
      {
        heading: "Do I Need To See A Chiropractor After A Car Accident?",
        text: [
          "Even though you may eventually need to see a chiropractor after a car accident to help with some of the injuries you suffered as a result of the ordeal, it is still important that you go to your general doctor or your primary physician to undergo a complete body assessment. They will be able to inform you whether or not you need to pay a visit to a chiropractor who can assist you with your car injuries.",
          "That said, it is usually recommended that victims of car accidents see a chiropractor within 72 hours of them visiting their primary doctor. In addition to the physical benefits, doing so will also prove crucial when the time comes for you to make your insurance claim for injuries and medical bills. ",
          "Some car accident injuries requiring chiropractic care can have long-term effects on your body if not remedied quickly or properly. The truth is that even the slightest fender bender can result in injuries like chronic pain in the future that can be very costly and troublesome. They include the following:",
          {
            list: [
              "Back, neck, and spine injuries",
              "Whiplash",
              "Soft tissue injuries",
              "Injuries to ligaments",
              "Chronic soreness",
            ],
          },
          "Out of the injuries mentioned above, whiplash is one of the most common reasons why people seek chiropractic care after a car accident. Sometimes, whiplash symptoms can take up to 2 days to be felt. Therefore, even if you don’t feel pain or discomfort immediately after a car accident, having a chiropractor or doctor assess you can help reveal some hidden issues. That said, some of the main symptoms of whiplash include:",
          {
            list: [
              "Neck pain",
              "Headaches",
              "Dizziness",
              "Nausea",
              "Shoulder pain",
              "Back pain",
              "Tingling in the arms",
              "Blurred vision",
              "Fatigue",
              "Difficulty concentrating",
              "Difficulty sleeping",
            ],
          },
        ],
      },
      {
        heading: "Do I Need A Chiropractic Adjustment After A Car Accident?",
        text: [
          "We can all agree that a car accident is the last thing anyone wants to happen to them. Adding a car wreck to your already stressful routine can lead to more pressure and anxiety, which is never a good situation. Also, car accident injuries will often disrupt someone’s life, forcing them to do things they were not prepared for, like taking time off work or losing the strength and ability to perform certain tasks. ",
          "One of the biggest questions most people have after being in a car accident is where they should go to get treatment. As mentioned, your primary physician should be your first stop. However, going to see a chiropractor for an adjustment is also important. They can help to relieve pain you didn’t even know about and help prevent different kinds of discomfort that may present themselves in the future. ",
        ],
      },
      {
        heading: "Takeaway",
        text: [
          "If you have been the victim of a car accident or automobile collision, you should not be surprised if you begin to experience back pain and you should see a chiropractor for car accident immidiately. This may occur immediately after the accident for some people, but for others, such discomfort may present itself a few hours, days, or even weeks after the event. Most medical practitioners will tell you that it is not uncommon for accident injury pain to be delayed. There have even been reports of individuals who seemed to have walked away totally unscathed from a car accident but only to start experiencing discomfort a couple of days later. This is usually the result of adrenaline rushing through the body, which helps mask any pain.",
          "Metronet Chiropractic Clinic offers car accident victims the highest quality chiropractic and natural health services designed to help alleviate pain. If you have recently been in an accident or know someone who has, feel free to reach out to us today. We are here to help.",
        ],
      },
    ],
  },
]);
</script>