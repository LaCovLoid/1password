<template>
  <div class="header-container">
    <!-- -------------------- alert - container -------------------- -->
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

    <!-- -------------------- menu - container -------------------- -->
    <div
      class="menu-container"
      :style="scrolledStyle"
      :class="{ 'alert-closed': isClosed }"
      ref="fixedMenu"
    >
      <div class="left">
        <router-link to="/" class="logo">
          <img
            src="../assets/images/logos/lock_hole_blakc.png"
            class="logo-img"
          />
          <span class="logo-text">1Password</span>
        </router-link>

        <router-link
          to="/"
          class="menu-item"
          v-for="(item, index) in menuList"
          :key="index"
        >
          <span class="item-text">{{ item }}</span>
          <img
            class="chevron-bottom"
            src="../assets/images/icons/chevron_bottom.png"
          />
        </router-link>
      </div>

      <div class="right">
        <span class="right-menu">Sign in</span>
        <span class="right-menu">Talk to sales</span>
        <span class="right-bt">Get started free</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from "vue";
const fixedMenu: any = ref<HTMLElement | null>(null);
const isClosed: Ref<boolean> = ref(false);
const scrollY = ref(0);
const menuList: Ref<string[]> = ref([
  "Why 1Password",
  "Products",
  "Resources",
  "Pricing",
]);
let lastScrollTop: Ref<number> = ref(0);
let isHidden: boolean = false;

const closed = () => {
  isClosed.value = true;
  updateScroll();
};

const scrolledStyle: any = ref({
  position: "absolute",
});

const updateScroll = () => {
  scrollY.value = window.scrollY;

  // 위로 올렸다 내렸다다
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop.value && scrollTop > 500 && !isHidden) {
    fixedMenu.value.style.transform = "translateX(-50%) translateY(-100px)";
    isHidden = true;
  } else if (scrollTop < lastScrollTop.value && scrollTop > 300 && isHidden) {
    fixedMenu.value.style.transform = "translateX(-50%) translateY(0)";
    isHidden = false;
  }

  lastScrollTop.value = Math.max(scrollTop, 0); // iOS 바운스 방지

  // alert 닫히면 fixed 고정
  if (isClosed.value) {
    scrolledStyle.value = {
      position: "fixed",
    };
    return;
  }

  // 스크롤 64px 넘으면 fixed
  if (scrollY.value > 64) {
    scrolledStyle.value = {
      position: "fixed",
    };
  } else {
    scrolledStyle.value = {
      position: "absolute",
    };
  }
  console.log("실행");
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
});
</script>

<style lang="scss" scoped>
@use "@/global.scss" as *;

.header-container {
  //////////////////////////menu-container/////////////////////

  > .menu-container {
    max-width: 1296px;
    width: calc(100% - 144px);

    padding-left: 24px;

    display: flex;
    justify-content: space-between;

    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 0.3s ease;

    border-radius: 999px;
    overflow: hidden;
    background-color: #ffffff;
    z-index: 999;

    @include minimize {
      width: calc(100% - 24px);
    }

    > .left {
      display: flex;
      align-items: center;

      > .logo {
        padding-top: 15.5px;
        padding-bottom: 15.5px;
        padding-right: 18px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #ffffff;
        white-space: nowrap;

        > .logo-img {
          height: 35px;

          padding: 5.5px;
          padding-right: 2px;
        }

        > .logo-text {
          font-size: 19px;
          font-weight: 900;
          letter-spacing: -0.72px;
          color: #000000;
        }
      }

      > .menu-item {
        padding-top: 22px;
        padding-bottom: 22px;
        padding-left: 12px;
        padding-right: 12px;

        display: flex;

        > .item-text {
          display: block;

          color: #1a285f;
          font-size: 15.13px;
          font-weight: 300;
          line-height: 21.6px;
          letter-spacing: -0.32px;
        }

        > .chevron-bottom {
          margin-top: auto;
          margin-bottom: auto;
          margin-left: 20px;
        }
      }
    }

    > .right {
      display: flex;
      align-items: center;

      font-size: 15.8px;
      color: #1a285f;
      font-weight: 300;
      text-align: left;
      letter-spacing: -0.32px;

      > .right-menu {
        padding-top: 22.2px;
        padding-bottom: 21.8px;
        padding-left: 12px;
        padding-right: 12px;

        display: block;
      }
      > .right-bt {
        height: fit-content;

        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 41.5px;
        padding-right: 41.5px;

        margin-right: 15px;
        margin-left: 13.35px;

        font-size: 15.5px;
        letter-spacing: 0.3px;
        color: #fffefb;

        border-radius: 999px;
        background-color: #0364d3;
        white-space: nowrap;
      }
    }
  }
  //////////////////////////////////////alert-container////////////
  ///
  > .alert-container {
    padding-top: 21px;
    padding-bottom: 19px;
    padding-right: 27px;

    position: relative;

    letter-spacing: -0.1px;

    background-color: #fffefb;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

    > .alert-text {
      font-size: 15.3px;
      line-height: 24px;
      font-weight: 600;
    }
    > .alert-router {
      margin-left: 12px;

      color: #0364d3;
      font-size: 15.5px;
      line-height: 24px;
      font-weight: 600;
      letter-spacing: -0.32px;
      text-decoration: none;

      > .arrow-right {
        width: 14px;
        margin-left: 5px;
      }
    }
    > .cross-bt {
      position: absolute;
      right: 25.4px;
      top: 0px;
      padding: 20px;
    }
  }
  > .alert-container.invisible {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
