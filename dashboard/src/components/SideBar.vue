<template>
  <aside :class="`${is_expanded && 'is_expanded'}`">
    <div class="logo">
      <img src="../assets/vue.svg" alt="Vue" />
    </div>
    <div class="menu-toggle-wrap">
      <!--the button class for side menu-->
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
    <h3>Menu</h3>
    <div class="menu">
      <router-link to="/" class="button">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/about" class="button">
        <span class="material-icons">description</span>
        <span class="text">About</span>
      </router-link>
      <router-link to="/team" class="button">
        <span class="material-icons">group</span>
        <span class="text">Team</span>
      </router-link>
      <router-link to="/contact" class="button">
        <span class="material-icons">email</span>
        <span class="text">Contact</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link to="/settings" class="button">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    // Define the reactive property
    const is_expanded = ref(false);

    // Toggle the sidebar expanded state
    const ToggleMenu = () => {
      is_expanded.value = !is_expanded.value;
    };

    return {
      is_expanded,
      ToggleMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  background-color: var(--dark);
  color: var(--light);
  transition: 0.2s ease-out;

  .logo {
    margin-bottom: 1rem;
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-out;
    }

    .material-icons {
      font-size: 2rem;
      color: var(--light);
      transition: 0.2s ease-out;
    }
    &:hover {
      .material-icons {
        //font-size: 2rem;
        color: var(--primary);
        transition: translateX(0.5rem);
      }
    }
  }

  img {
    width: 2rem;
  }
  &.is_expanded {
    width: var(--sidebar-width); /* Expanded width */
    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle-wrap {
        transform: rotate(-90deg);
        top: -3rem;
      }
    }
  }
  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
