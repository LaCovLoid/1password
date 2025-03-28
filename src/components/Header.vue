<template>
  <div class="header-container">
    <div class="alert-container" :class="{ invisible: isClosed }">
      <span class="alert-text">
        1Password is now the exclusive Cybersecurity Partner of Oracle Red Bull
        Racing!
      </span>
      <router-link to="/" class="alert-router">Learn more</router-link>
      <img
        class="cross-bt"
        src="../assets/images/icons/cross.svg"
        @click="closed()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";

const isClosed: Ref<boolean> = ref(false);
const closed = () => {
  isClosed.value = true;
};
</script>

<style lang="scss" scoped>
@use "@/global.scss" as *;

.header-container {
  min-height: 64px;

  > .alert-container {
    padding-top: 20px;
    padding-bottom: 20px;

    position: relative;

    background-color: #ffa2a2;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

    > .alert-text {
      font-size: 15.38px;
      line-height: 24px;
    }
    > .alert-router {
      font-size: 15.5px;
      line-height: 24px;
      letter-spacing: -0.32px;
    }
    > .cross-bt {
      position: absolute;
      right: 5px;
      top: 0;
      padding: 20px;
    }
  }
  .alert-container.invisible {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
