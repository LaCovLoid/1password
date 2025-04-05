<template>
  <div class="footer-container">
    <div class="top">
      <img src="../assets/images/logos/lock_hole_white.png" />
      <span class="select-language"></span>
    </div>

    <div class="middle">
      <div class="menu-container">
        <div class="menu-item" v-for="(item, index) in menuList" :key="index">
          <span class="menu-item-title">
            {{ item.name }}
          </span>
          <RouterLink
            class="menu-item-submenu"
            v-for="(subItem, subIndex) in item.subMenu"
            :key="subIndex"
            :to="subItem.url"
          >
            {{ subItem.name }}
          </RouterLink>
        </div>
      </div>
      <div class="download-container">
        <span class="download-title">Download</span>
        <RouterLink
          class="download-submenu"
          v-for="(item, index) in downloadMenuList.subMenu"
          :key="index"
          :to="item.url"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>

    <div class="bottom"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import footerMenuData from "../assets/json/footerMenuData.json";
import type { FooterMenuType } from "../types";

const menuList = ref<FooterMenuType[]>(footerMenuData.menu);
const downloadMenuList = ref<FooterMenuType>(footerMenuData.downloadMenu);
</script>

<style lang="scss" scoped>
@use "@/global.scss" as *;

.footer-container {
  max-width: 1920px;
  width: 100%;

  padding: 96px;

  margin-left: auto;
  margin-right: auto;

  background-color: #1a285f;
  color: #fffefb;

  > .top {
  }

  > .middle {
    height: 575px;

    display: flex;

    > .menu-container {
      max-width: 1248px;
      width: 100%;
      height: 100%;

      margin-left: auto;

      column-width: 200px;
      column-gap: 16px;

      > .menu-item {
        width: 100%;
        height: fit-content;

        text-align: left;

        break-inside: avoid;

        > .menu-item-title {
          margin-bottom: 11.4px;

          display: block;

          font-size: 17.16px;
          font-weight: 500;
          line-height: 21.6px;
          letter-spacing: -0.36px;
        }
        > .menu-item-submenu {
          margin-bottom: 11.4px;

          display: block;

          color: #fffefb;
          font-size: 15.25px;
          font-weight: 200;
          line-height: 25.6px;
          letter-spacing: -0.32px;
          text-decoration: none;
        }
      }
    }

    > .download-container {
      height: fit-content;

      margin-left: 16px;
      margin-right: auto;

      text-align: left;

      background-color: #294d96;

      > .download-title {
        display: block;
      }

      > .download-submenu {
        display: block;

        color: #fffefb;
        text-decoration: none;
      }
    }
  }
  > .bottom {
  }
}
</style>
