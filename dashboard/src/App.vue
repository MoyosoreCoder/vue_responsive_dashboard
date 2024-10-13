<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <!-- This is where the routed components will be displayed -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style scoped>
nav {
  margin-bottom: 10px;
}
a {
  text-decoration: none;
  margin: 0 10px;
  color: #3498db;
}
a:hover {
  text-decoration: underline;
}
</style>
