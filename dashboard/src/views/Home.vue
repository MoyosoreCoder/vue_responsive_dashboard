<template>
  <main class="home-page">
    <h1>Home</h1>
    <p>This is the home page</p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage'
});
</script>

<style lang="scss">
.home-page {
  background-color: #eef2f7; /* Light blue background */
  padding: 30px;
  border-radius: 10px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #2c3e50; /* Dark blue text for the heading */
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    color: #34495e; /* Slightly lighter color for the paragraph */
  }

  /* Additional media queries for responsiveness */
  @media (max-width: 768px) {
    padding: 20px;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 15px;

    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
}
</style>
