<template>
  <v-container>
    <v-card
      v-for="(text, i) in texts"
      :key="i"
      width="700"
      max-width="100%"
      class="mx-auto"
      flat
    >
      <v-card-title v-if="text.title != ''" class="text-grey-darken-3">{{ text.title }}</v-card-title>
      <v-card-text
        v-for="(text, i) in text.texts"
        :key="i"
        class="text-grey-darken-3"
      >
        {{ text }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
const texts = [
  {
    title: "",
    texts: [
      "We teach the important skills required to jumpstart your career as a web developer. With 16 intense weeks of on-campus training, you learn to think and build like software developers. You move from understanding programming fundamentals to launching full-stack web apps. You do all these while learning to solve everyday problems with constructive, well-written programs.",
      `You'll be taught to build smart, data-driven web applications using JavaScript and Python as it's backend counterpart. Work with the famous SQL database MySQL to integrate data into your project; connect with other third-party applications using API calls. And finally, you'll learn the fundamentals of working as a team; collaborate with other group members of the class to build, change, maintain, and secure an application. Track your team development process using Version Control Systems.`,
      `Whether you want to pursue a career as a Web Developer, a Freelancer, or an Entrepreneur, our courses prepares you adequately for that. This is an immersive, collaborative and intensive program, prepared in a way to help you apply what you learn in real-time through project-based work.`,
      `Get excellent career guidance from industries' best`,
      `Our support team provides students with guidance and tips on building a top-notch portfolio that woos employers.`,
      `Wanlainjo Tech Hub is always reaching out to employers picking resumés and arranging interviews for our students. You gain access to networking opportunities and foster connections within the industry.`,
    ],
  },
  {
    title: "Who We Are",
    texts: [
      `Become a well-rounded Web Developer in no time!`,
      `WTH is a top-rated tech academy in Port Harcourt. In the last 3 years, we've trained hundreds of students - both online and physical - and helped them to navigate and forge their paths in the tech industry. We teach the important skills required to jumpstart your career as a web developer. With 16 intense weeks of on-campus training, you learn to think and build like software developers. You move from understanding programming fundamentals to launching full-stack web apps.`,
      `With our career guidance and thorough assistance, some of our students are working with top organizations in the country and beyond. If you're looking to advance your career in the tech industry, we'll help fulfill your dream.`,
    ],
  },
  {
    title: "Facilities",
    texts: [
      `Our learning studio is designed to inspire focused learning, creativity and collaboration. It is equiped with state-of-the-art learning equipments with no more than 10 students per class.`,
      `Learn in an environment that puts you in direct contact with professional web developers and software engineer.`,
      `You'll be provided with constant power and internet supply to make you focus on the job at hand`,
    ],
  },
];
</script>
