<template>
  <aside>Sidebar</aside>
  <!-- Wrap the content in an appropriate HTML element -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // Add any reactive properties or methods here if needed
    return {};
  },
});
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: var(--sidebar-width);
  min-height: 100vh;
  overflow: hidden;
  background-color: var(--dark);
  color: var(--light);
}
</style>
