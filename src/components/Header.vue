<template>
  <div class="header-container">
    <div class="alert-container">
      <span class="">
        1Password is now the exclusive Cybersecurity Partner of Oracle Red Bull
        Racing!
      </span>
      <router-link to="/">Learn more</router-link>
      <img src="../assets/images/icons/cross.svg" @click="closed()" />
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
</style>
