<template>
  <div class="footer-container">
    <div class="top">
      <img src="../assets/images/logos/lock_hole_white.png" />
      <span class="select-language"></span>
    </div>

    <div class="menu-container"></div>
    <div class="bottom"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import footerMenuData from "../assets/json/footerMenuData.json";

const menuList = ref<FooterMenuType[]>(footerMenuData.menu);
import type { FooterMenuType } from "../types";
</script>

<style lang="scss" scoped>
@use "@/global.scss" as *;
</style>
