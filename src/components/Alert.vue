<template>
  <div class="alert-container" v-if="!isClosed">
    <span class="alert-text">
      1Password is now the exclusive Cybersecurity Partner of Oracle Red Bull
      Racing!
    </span>
    <router-link to="/" class="alert-router"
      >Learn more
      <img src="../assets/images/icons/arrow_right.svg" class="arrow-right" />
    </router-link>
    <img
      class="cross-bt"
      src="../assets/images/icons/cross.svg"
      @click="closed()"
    />
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

.alert-container {
  padding-top: 20px;
  padding-bottom: 20px;

  position: relative;

  background-color: #fffefb;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

  > .alert-text {
    font-size: 15.3px;
    line-height: 24px;
    font-weight: 600;
  }
  > .alert-router {
    margin-left: 16px;

    color: #0364d3;
    font-size: 15.5px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: -0.32px;
    text-decoration: none;

    > .arrow-right {
      width: 12px;
      height: 10px;
    }
  }
  > .cross-bt {
    position: absolute;
    right: 5px;
    top: 0px;
    padding: 20px;
  }
}
.alert-container.invisible {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
