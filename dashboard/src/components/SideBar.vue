<template>
  <aside :class="`${is_expanded && 'is_expanded'}`">
    <div class="logo">
      <img src="../assets/vue.svg" alt="Vue" />
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
  </aside>
  <!-- Wrap the content in an appropriate HTML element -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // Add any reactive properties or methods here if needed
    import { ref } from "vue";
    const is_expanded = ref(false);
    const ToggleMenu = () => {
      is_expanded.value = !is_expanded;
    };

    return {};
  },
});
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  //width: var(--sidebar-width);
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

  .logo {
    margin-bottom: 1rem;
  }
  img {
    width: 2rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
