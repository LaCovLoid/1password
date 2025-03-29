<template>
  <div class="header-container">
    <div class="menu-container" :style="menuStyle()">
      <router-link to="/" class="menu-logo">
        <img
          src="../assets/images/logos/lock_hole_blakc.png"
          class="menu-logo-img"
        />
        <span class="menu-logo-text">1Password</span>
      </router-link>
      <router-link to="/" class="menu-item" v-for="index in 4" :key="index">
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";

const menuStyle = () => {
  return "{ color: red };";
};
</script>

<style lang="scss" scoped>
@use "@/global.scss" as *;

.header-container {
  > .menu-container {
    width: calc(100% - 144px);

    padding-left: 25px;

    position: fixed;
    left: 72px;

    display: flex;

    font-size: 15.13px;

    background-color: #a0ccff;

    > .menu-logo {
      padding-top: 15.5px;
      padding-bottom: 15.5px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #ffffff;

      > .menu-logo-img {
        height: 35px;

        padding: 5px;
      }

      > .menu-logo-text {
      }
    }
  }
}
</style>
