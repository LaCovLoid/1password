<template>
  <div class="footer-container">
    <div class="top">
      <img class="top-logo" src="../assets/images/logos/lock_hole_white.png" />
      <span class="now-language" @click="inverseIsOpenLanguage">
        {{ selectedLanguage }}
        <img
          class="language-chevron"
          src="../assets/images/icons/chevron_bottom_white.svg"
        />

        <div class="language-list-container">
          <span
            class="language-list-item"
            v-if="isOpenSelectedLanguage"
            v-for="(item, index) in languageList"
            :key="index"
            @click="changeSelectedLanguage(item)"
            :style="
              selectedLanguage == item
                ? {
                    boxShadow: '0 0 0 2px rgba(0, 0, 0, 1)',
                    marginTop: '2px',
                    marginBottom: '2px',
                    borderRadius: '5px',
                  }
                : {}
            "
          >
            {{ item }}
          </span>
        </div>
      </span>
    </div>

    <div class="middle">
      <div class="menu-container">
        <div
          class="menu-item"
          v-for="(item, index) in middleMenuList"
          :key="index"
        >
          <span class="menu-item-title">
            {{ item.name }}
            <img
              class="menu-title-chevron"
              src="../assets/images/icons/chevron_bottom_white.png"
            />
          </span>
          <div class="menu-item-submenu-container">
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
      </div>
      <div class="download-container">
        <span class="download-title">Download</span>
        <div class="menu-item-submenu-container">
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
    </div>

    <div class="bottom">
      <div class="bottom-logo">
        <img
          class="logo-1password-img"
          src="../assets/images/logos/lock_hole_white.png"
        />
        <span class="logo-1password-text">1Password</span>
      </div>
      <div class="gray-line"></div>
      <div class="bottom-content">
        <div class="left">
          <div class="bottom-menu">
            <RouterLink
              class="bottom-menu-item"
              v-for="(item, index) in bottomMenuList"
              :key="index"
              :to="item.url"
            >
              {{ item.name }}
              <img
                class="bottom-menu-item-icon"
                v-if="item.name == 'Your Privacy Choices'"
                src="../assets/images/icons/switch_v_x.png"
              />
            </RouterLink>
          </div>
          <span class="locate">
            © 2025 1Password. All rights reserved. 4711 Yonge St, 10th Floor,
            Toronto Ontario, M2N 6K8, Canada
          </span>
        </div>
        <div class="right">
          <img
            class="sns-icon"
            v-for="(item, index) in bottomIconList"
            :key="index"
            :src="item.src"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import footerMenuData from '../assets/json/footerMenuData.json';
import type { FooterTitleMenuType, FooterMenuType } from '../types';

const middleMenuList: FooterTitleMenuType[] = footerMenuData.titleMenu;
const downloadMenuList: FooterTitleMenuType = footerMenuData.downloadMenu;

const bottomIconList: FooterMenuType[] = footerMenuData.icon;
const bottomMenuList: FooterMenuType[] = footerMenuData.bottomMenu;

const selectedLanguage: Ref<string> = ref('English');
const languageList: string[] = ['English', 'Korean', 'Japanese'];
const isOpenSelectedLanguage: Ref<boolean> = ref(false);

const inverseIsOpenLanguage = () => {
  isOpenSelectedLanguage.value = !isOpenSelectedLanguage.value;
};

const changeSelectedLanguage = (value: string) => {
  selectedLanguage.value = value;
};
</script>

<style lang="scss" scoped>
@use '@/global.scss' as *;

.footer-container {
  width: 100%;

  padding-top: 72px;
  padding-bottom: 96px;
  padding-left: 24px;
  padding-right: 24px;

  margin-top: 47px;
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

    align-items: center;

    > .top-logo {
      width: 16px;
      height: 16px;
    }

    > .now-language {
      width: 128.8px;

      padding-top: 12.5px;
      padding-bottom: 13px;
      padding-left: 17px;
      padding-right: 21px;

      display: flex;
      justify-content: space-between;

      position: relative;

      font-size: 15.38px;
      letter-spacing: -0.32px;

      border-radius: 5px;
      border: #fffefb 1px solid;

      cursor: pointer;

      > .language-chevron {
        width: 10px;
        height: 6px;

        margin-top: auto;
        margin-bottom: auto;
        margin-left: auto;
      }

      > .language-list-container {
        position: absolute;
        top: 60px;
        left: 0px;

        background-color: #fffefb;
        border-radius: 5px;

        > .language-list-item {
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 15px;
          padding-right: 45px;

          display: block;

          color: #000000;
          text-align: left;

          transition: background-color 0.5s ease;
        }
        > .language-list-item:hover {
          background-color: #a5c3ff;
        }
      }
    }
  }

  > .middle {
    width: 100%;

    margin-top: 48px;

    display: flex;

    @include minimize {
      flex-wrap: wrap;
    }

    > .menu-container {
      max-width: 1040px;
      //1248px - 188px - 24px
      width: 100%;

      margin-left: auto;

      column-count: 5;
      column-gap: 24px;

      @include minimize {
        column-count: auto;
        column-gap: 0;

        display: grid;
        grid-template-rows: repeat(4, auto);
        grid-auto-flow: column;

        order: 2;
      }

      > .menu-item {
        width: 188px;
        height: fit-content;

        margin-bottom: 25px;

        position: relative;

        text-align: left;
        break-inside: avoid;

        > .menu-item-title {
          margin-bottom: 5.7px;

          display: block;

          font-size: 17.16px;
          font-weight: 500;
          line-height: 21.6px;
          letter-spacing: -0.36px;

          > .menu-title-chevron {
            display: none;

            @include minimize {
              display: inline-block;
            }
          }
        }
        > .menu-item-submenu-container {
          @include minimize {
            position: absolute;
            display: none;
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

      @include minimize {
        margin-left: 0;
        margin-bottom: 20px;

        order: 1;
      }

      > .download-title {
        padding-bottom: 6.3px;

        display: block;

        font-size: 17.16px;
        font-weight: 500;
        line-height: 21.6px;
        letter-spacing: -0.36px;
      }

      > .menu-item-submenu-container {
        @include minimize {
          display: grid;
          grid-template-rows: repeat(4, auto);
          grid-auto-flow: column;
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
  }
  > .bottom {
    max-width: 1248px;

    margin-top: 78px;
    margin-left: auto;
    margin-right: auto;

    text-align: left;

    > .bottom-logo {
      display: flex;

      margin-bottom: 32px;

      > .logo-1password-img {
        width: 50px;
        height: 50px;

        margin-right: 8px;
      }

      > .logo-1password-text {
        margin-top: auto;
        margin-bottom: auto;

        font-size: 42px;
        font-weight: 700;
        letter-spacing: -1.6px;
      }
    }

    > .gray-line {
      width: 100%;
      height: 1px;

      border-top: 1px rgb(255, 255, 255, 0.1) solid;
    }

    > .bottom-content {
      display: flex;
      justify-content: space-between;

      @include minimize {
        flex-wrap: wrap;
      }

      > .left {
        width: 700px;

        padding-top: 30px;

        > .bottom-menu {
          display: flex;
          flex-wrap: wrap;

          @include minimize {
            display: grid;
            grid-template-rows: repeat(3, auto);
            grid-auto-flow: column;
          }

          > .bottom-menu-item {
            padding-top: 8px;
            padding-bottom: 8px;

            margin-right: 25px;

            display: block;

            color: #fffefb;
            font-size: 15px;
            letter-spacing: -0.32px;

            @include minimize {
              margin-bottom: 10px;
            }

            > .bottom-menu-item-icon {
              width: 29px;
              height: 14px;

              vertical-align: middle;
              margin-left: 8px;
            }
          }
        }

        > .locate {
          margin-top: 8px;

          display: block;

          font-size: 13.34px;
          letter-spacing: -0.32px;
        }
      }

      > .right {
        width: fit-content;

        padding-top: 45px;

        > .sns-icon {
          width: 20px;
          height: 20px;

          margin-left: 12px;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
