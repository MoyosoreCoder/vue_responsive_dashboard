<template>
  <main class="about-page">
    <h1>About</h1>
    <p>This is the about page</p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPage'
});
</script>

<style lang="scss">
.about-page {
  background-color: #f9f9f9; /* Light grey background */
  padding: 30px;
  border-radius: 10px;
  text-align: left;

  h1 {
    font-size: 2.5rem;
    color: #34495e; /* Dark grey-blue text for the heading */
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    color: #7f8c8d; /* Lighter grey for the paragraph */
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
