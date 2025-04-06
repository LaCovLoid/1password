<template>
  <div class="footer-container">
    <div class="top">
      <img class="top-logo" src="../assets/images/logos/lock_hole_white.png" />
      <span class="select-language">{{ selectedLanguage }}</span>
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
import { ref, type Ref } from "vue";
import footerMenuData from "../assets/json/footerMenuData.json";
import type { FooterMenuType } from "../types";

const menuList = ref<FooterMenuType[]>(footerMenuData.menu);
const downloadMenuList = ref<FooterMenuType>(footerMenuData.downloadMenu);

const selectedLanguage: string = "English";
const languages: Ref<string[]> = ref(["", ""]);
const isOpenSelectedLanguage: Ref<boolean> = ref(false);
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
    max-width: 1248px;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: space-between;

    > .top-logo {
      width: 16px;
      height: 16px;
    }
  }

  > .middle {
    width: 100%;

    margin-top: 48px;

    display: flex;

    > .menu-container {
      max-width: 1040px;
      //1248px - 188px - 24px
      width: 100%;

      margin-left: auto;

      column-count: 5;
      column-gap: 24px;

      > .menu-item {
        width: 188px;
        height: fit-content;

        margin-bottom: 25px;

        text-align: left;

        break-inside: avoid;

        > .menu-item-title {
          margin-bottom: 5.7px;

          display: block;

          font-size: 17.16px;
          font-weight: 500;
          line-height: 21.6px;
          letter-spacing: -0.36px;
        }
        > .menu-item-submenu {
          padding-top: 5.7px;
          padding-bottom: 5.7px;

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
      width: 188px;
      height: fit-content;

      padding: 24px;
      padding-bottom: 18.2px;

      margin-left: 24px;
      margin-right: auto;

      text-align: left;

      background-color: #294d96;

      > .download-title {
        padding-bottom: 6.3px;

        display: block;

        font-size: 17.16px;
        font-weight: 500;
        line-height: 21.6px;
        letter-spacing: -0.36px;
      }

      > .download-submenu {
        padding-top: 5.8px;
        padding-bottom: 5.8px;

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
  > .bottom {
  }
}
</style>
