<template>
  <main class="home-page">
    <h1>Home</h1>
    <p>This is the home page</p>
    <!-- Add the MyChart component here -->
    <MyChart />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyChart from "@/components/MyChart.vue"; // Import the MyChart component

export default defineComponent({
  name: "HomePage",
  components: {
    MyChart, // Register the MyChart component
  },
});
</script>

<style lang="scss"></style>
