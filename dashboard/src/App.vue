<template>
  <div class="app">
    <Sidebar />
    <!-- Sidebar on the side -->
    <main>
      <router-view />
      <!-- Routed components displayed here -->
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar.vue"; // Import the Sidebar component

export default defineComponent({
  name: "App",
  components: {
    Sidebar, // Register the Sidebar component
  },
});
</script>

<style lang="scss">
/* Add any global styles here */
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px; /* Define the width of the sidebar */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}
body {
  background-color: var(--light); /* Correct syntax */
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex; /* Flexbox layout */
  main {
    flex: 1;
    padding: 2rem;
    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}
</style>
