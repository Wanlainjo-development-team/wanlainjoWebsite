<template>
  <Header :showCard="false" title="Our Courses" />
  <Courses />
</template>
    
<script setup>
import Header from "@/components/fragments/head.vue";
import Courses from "@/components/courses/courses.vue";
</script>
