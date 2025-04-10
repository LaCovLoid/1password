<template>
  <div class="home-container">
    <!-- ------------racingcar-container------------ -->
    <div class="racingcar-container">
      <div class="racingcar-left">
        <span class="racingcar-title">Trusted access</span>
        <span class="racingcar-description"
          >Extended Access Management fueled by the market-leading password
          manager.</span
        >
        <div class="racingcar-bt-container">
          <span class="racingcar-bt bt-plan">View plans</span>
          <span class="racingcar-bt bt-sales">Talk to sales</span>
        </div>
      </div>
      <div class="racingcar-right">
        <img class="racingcar-logo" src="../assets/images/logos/oracle.png" />
      </div>
    </div>
    <!-- ------------securing-container------------ -->
    <div class="securing-container">
      <span class="securing-subtitle">
        1password and oracle red bull racing
      </span>
      <span class="securing-title">
        Securing access from headquarters to the track
      </span>
      <span class="securing-description"
        >As the official Cybersecurity Partner of Oracle Red Bull Racing,
        1Password ensures that every sign-in to every application is secure and
        every device is trusted.
      </span>

      <div class="securing-info-container">
        <div class="securing-info-item">
          <img
            class="info-img"
            src="../assets/images/pictures/mornitor_1password.png"
          />
          <div class="info-bottom">
            <span class="info-subtitle">Password Manager</span>
            <span class="info-title">Safeguard your digital life</span>
            <span class="info-description">
              Oracle Red Bull Racing relies on 1Password to simplify security
              for team members and their families with a password manager that
              secures access to critical information at work, at the track, and
              at home.
            </span>
            <span class="info-url">
              Explore personal
              <img class="arrow" src="../assets/images/icons/arrow_right.svg" />
            </span>
          </div>
        </div>

        <div class="securing-info-item">
          <img class="info-img" src="../assets/images/pictures/f1.jpg" />
          <div class="info-bottom">
            <span class="info-subtitle">EXTENDED ACCESS MANAGEMENT</span>
            <span class="info-title">
              Secure every sign-in to every app from every device
            </span>
            <span class="info-description">
              1Password® Extended Access Management protects Oracle Red Bull
              Racing by providing seamless, trusted access to its
              industry-leading software and systems.
            </span>
            <span class="info-url">
              Explore business
              <img class="arrow" src="../assets/images/icons/arrow_right.svg" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------interview-container------------ -->
    <div class="interview-container">
      <img
        src="../assets/images/pictures/face_horner.png"
        class="interview-image"
      />
      <div class="interview-right">
        <img
          class="interview-logo"
          src="../assets/images/logos/oracle_white.png"
        />
        <span class="interview-text">
          "We’re excited to welcome 1Password as our Exclusive Cybersecurity
          Partner. It is crucial that our entire organization has secure,
          trusted access to critical information to continue to make confident,
          data-driven decisions trackside and at the factory."
        </span>
        <span class="interview-talker">Christian Horner</span>
        <span class="talker-info">
          CEO and Team Principal, Oracle Red Bull Racing
        </span>
      </div>
    </div>
    <!-- ------------businesses-container------------ -->
    <div class="businesses-container">
      <span class="businesses-title"> 150,000 businesses trust 1Password </span>
      <div class="businesses-slide-container">
        <div
          class="businesses-slide-track"
          v-for="index in 8"
          :key="index"
          :style="{ left: -(1677.5 * 2) + index * 1677.5 + 'px' }"
        >
          <img
            class="businesses-logo-image"
            v-for="(item, index) in logoList"
            :key="index"
            :src="item"
          />
        </div>
      </div>
    </div>

    <!-- ------------reasons-container------------ -->
    <div class="reason-container">
      <span class="reason-title">Why people trust 1Password</span>

      <!----------------------------------------------->

      <div class="reason-carousel-container" ref="reasonCarouselContainer">
        <div class="reason-carousel-track" v-for="index in 3" :key="index">
          <div
            class="reason-carousel-item"
            v-for="(item, index) in reasonDescription"
            :key="index"
            :style="{ width: item.width + 'px' }"
          >
            {{ index }}<br />
            {{ item.text }}
          </div>
        </div>
      </div>

      <!----------------------------------------------->
      <span @click="prevSlide">←</span>
      <span @click="nextSlide">→</span>

      <span
        class="reason-carousel-bt"
        v-for="index in 6"
        :key="index"
        @click="selectedCarousel(index)"
      >
      </span>
    </div>
    <!-- ------------protect-container------------ -->
    <div class="protect-container">
      <span class="protect-title">
        1Password protects your most sensitive info
      </span>
      <div class="protect-info-container">
        <div class="protect-info-text-container">
          <span class="protect-info-subtitle"> PASSWORD MANAGEMENT </span>
          <span class="protect-info-title">
            Protect your passwords with a secure password manager
          </span>
          <div
            class="protect-info-description"
            v-for="(item, index) in protectFirstList"
            :key="index"
            :style="
              index == 0 ? { background: '#F6F8FC' } : { marginBottom: '20px' }
            "
          >
            <img
              class="protect-info-description-icon"
              :src="'src/assets/images/icons/' + item.iconUrl"
            />
            <span class="protect-info-description-title">
              {{ item.title }}
            </span>
            <span class="protect-info-description-text" v-if="item.description">
              {{ item.description }}
            </span>
          </div>
          <span class="protect-info-bt"> Explore password manager </span>
        </div>
        <img
          class="protect-info-img"
          src="../assets/images/pictures/windows_picture.webp"
        />
      </div>

      <div class="protect-info-container">
        <img
          class="protect-info-img"
          src="../assets/images/pictures/people_list.webp"
        />

        <div class="protect-info-text-container">
          <span class="protect-info-subtitle">
            EXTENDED ACCESS MANAGEMENT
          </span>
          <span class="protect-info-title">
            Secure every identity, device, and app with the future of access
            management.
          </span>
          <div
            class="protect-info-description"
            v-for="(item, index) in protectSecondList"
            :key="index"
          >
            <img
              class="protect-info-description-icon"
              :src="'src/assets/images/icons/' + item.iconUrl"
            />
            <span class="protect-info-description-title">
              {{ item.title }}
            </span>
            <span class="protect-info-description-text" v-if="item.description">
              {{ item.description }}
            </span>
          </div>
          <span class="protect-info-bt"> Explore XAM </span>
        </div>
      </div>
    </div>
    <!-- ------------introducing-container------------ -->
    <div class="introducing-container">
      <div class="introducing-inside-box">
        <span class="introducing-subtitle"> NEW PRODUCT </span>
        <span class="introducing-title">
          Introducing 1Password Extended Access Management (XAM)
        </span>
        <span class="introducing-description">
          The first and only solution that helps companies secure access to all
          apps from any device in today’s SaaS-centric hybrid work environment.
        </span>
        <span class="introducing-bt"> Learn about XAM </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import descriptionData from "../assets/json/DescriptionData.json";
import logoData from "../assets/json/LogoData.json";
import type { ProtectDescriptionType, ReasonDescriptionType } from "../types";

const protectFirstList: ProtectDescriptionType[] =
  descriptionData.protectFirstDescription;
const protectSecondList: ProtectDescriptionType[] =
  descriptionData.protectSecondDescription;

const reasonDescription: ReasonDescriptionType[] =
  descriptionData.reasonDescription;

const logoList: string[] = logoData.logos;

const selectedCarousel = (selectedIndex) => {};
///////////////////////////////////////////////

const reasonCarouselContainer: any = ref<HTMLElement | null>(null);

const currentIndex = ref(1); // 0= left 6, 7= right 1
const slideWidth = 428;

const moveToSlide = (index: any) => {
  if (!reasonCarouselContainer.value) return;

  reasonCarouselContainer.value.style.transform = `translateX(-${
    index * slideWidth
  }px)`;
  currentIndex.value = index;
};

const nextSlide = () => {
  if (currentIndex.value >= reasonCarouselContainer.length + 1) return;
  moveToSlide(currentIndex.value + 1);
};

const prevSlide = () => {
  if (currentIndex.value <= 0) return;
  moveToSlide(currentIndex.value - 1);
};

nextTick(() => {
  moveToSlide(currentIndex.value);
  reasonCarouselContainer.value.addEventListener("transitionend", () => {
    if (currentIndex.value == reasonCarouselContainer.length + 1) {
      // 마지막 → 진짜 1번으로 점프
      reasonCarouselContainer.value.style.transition = "none";
      reasonCarouselContainer.value.style.transform = `translateX(-${slideWidth}px)`;
      currentIndex.value = 1;
    }
    if (currentIndex.value == 0) {
      // 처음 → 진짜 6번으로 점프
      reasonCarouselContainer.value.style.transition = "none";
      reasonCarouselContainer.value.style.transform = `translateX(-${
        reasonCarouselContainer.length * slideWidth
      }px)`;
      currentIndex.value = reasonCarouselContainer.length;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        reasonCarouselContainer.value.style.transition = "transform 0.5s ease";
      });
    });
  });
});
</script>

<style lang="scss" scoped>
@use "@/global.scss" as *;

@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1677.5px);
  }
}

.home-container {
  > .racingcar-container {
    width: 100%;
    height: 810px;
    max-width: 1920px;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    color: #ffffff;

    background-image: url("../assets/images/pictures/racingcar.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #242529;

    @include minimize1200 {
      height: 650px;
    }

    @include minimize800 {
      height: 677.4px;
    }

    > .racingcar-left {
      padding-left: 94px;
      padding-bottom: 98px;

      > .racingcar-title {
        display: block;

        font-size: 84.22px;
        line-height: 96.8px;
        letter-spacing: -1.76px;
      }

      > .racingcar-description {
        width: 355px;

        margin-top: 15.4px;

        display: block;

        font-size: 19.22px;
        font-weight: 200;
        line-height: 27px;
        letter-spacing: -0.4px;
        text-align: left;
      }

      > .racingcar-bt-container {
        margin-top: 34.4px;

        display: flex;

        > .racingcar-bt {
          width: 204px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          line-height: 24px;

          border-radius: 999px;
        }

        > .bt-plan {
          margin-right: 11.71px;

          color: #1a2552;
          font-size: 15.38px;

          background-color: #85beff;
        }

        > .bt-sales {
          font-size: 15.5px;
          background: linear-gradient(
            90deg,
            #f6f8fc 0%,
            #94dae3 26%,
            #85beff 98%
          );
          background-color: #fffefb;
        }
      }
    }

    > .racingcar-right {
      padding-right: 70px;
      padding-bottom: 48px;

      > .racingcar-logo {
        max-width: 250px;
      }
    }
  }

  > .securing-container {
    max-width: 1392px;

    padding: 72px;
    padding-top: 131px;

    margin-left: auto;
    margin-right: auto;

    text-align: left;

    > .securing-subtitle {
      display: block;

      color: #303136;
      font-size: 11.81px;
      font-weight: 400;
      line-height: 19.2px;
      letter-spacing: 0.6px;
    }

    > .securing-title {
      width: 821px;

      margin-top: 24px;
      margin-bottom: 23.5px;

      display: block;

      color: #1a2552;
      font-size: 67.07px;
      line-height: 74.8px;
      letter-spacing: -1.36px;
    }

    > .securing-description {
      width: 730px;

      margin-bottom: 96.5px;

      display: block;

      color: #303136;
      font-size: 19px;
      font-weight: 300;
      line-height: 27px;
      letter-spacing: -0.4px;
    }

    > .securing-info-container {
      display: flex;
      justify-content: space-between;

      > .securing-info-item {
        width: 608px;
        height: 798px;

        overflow: hidden;

        border-radius: 30px;
        border: #d7d7db 1px solid;
        background-color: #f2f2f3;

        > .info-img {
          width: 100%;
        }

        > .info-bottom {
          padding-top: 67px;
          padding-left: 48px;
          padding-right: 80px;

          > .info-subtitle {
            display: block;

            color: #303136;
            font-size: 10.69px;
            line-height: 19.2px;
            letter-spacing: 0.6px;
          }
          > .info-title {
            display: block;

            color: #1a2552;
            font-size: 27.45px;
            line-height: 33.6px;
            letter-spacing: -0.56px;
          }

          > .info-description {
            display: block;

            color: #303136;
            font-size: 19.38px;
            line-height: 27px;
            letter-spacing: -0.5px;
          }

          > .info-url {
            margin-top: 53px;

            display: block;

            color: #0364d3;
            font-size: 15.38px;
            line-height: 24px;
            letter-spacing: -0.32px;

            > .arrow {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
  /////////////////

  > .interview-container {
    max-width: 1392px;

    margin-left: auto;
    margin-right: auto;

    display: flex;

    > .interview-image {
      width: 50%;

      object-fit: cover;

      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    > .interview-right {
      width: 50%;

      padding: 64px;

      color: #fffefb;
      text-align: left;

      background-color: #242529;

      > .interview-logo {
        width: 176px;
      }

      > .interview-text {
        margin-top: 64px;
        margin-bottom: 31.75px;

        display: block;

        font-size: 39.84px;
        font-weight: 200;
        line-height: 44px;
        letter-spacing: -0.8px;
      }

      > .interview-talker {
        display: block;

        font-size: 14.65px;
        font-weight: 200;
        line-height: 22.5px;
        letter-spacing: -0.3px;
      }

      > .talker-info {
        display: block;

        font-size: 13.56px;
        font-weight: 100;
        line-height: 21px;
        letter-spacing: -0.28px;
      }
    }
  }
  /////////////////

  > .businesses-container {
    padding-top: 128px;

    > .businesses-title {
      color: #1a2552;
      font-size: 27.13px;
      line-height: 33.6px;
      letter-spacing: -0.56px;
    }

    > .businesses-slide-container {
      width: 100%;
      height: 200px;

      position: relative;

      display: flex;
      overflow: hidden;

      > .businesses-slide-track {
        height: 84px;

        margin-top: 96px;

        position: absolute;
        left: 0;

        display: flex;

        animation: moveLeft 10s linear infinite;

        > .businesses-logo-image {
          height: 100%;
          margin-right: 64px;
        }
      }

      > .logo-slide-second {
        left: 1677.5px;
      }

      > .logo-slide-third {
        left: 3355px;
      }
    }
  }
  /////////////////

  > .reason-container {
    max-width: 100%;
    width: 100%;

    padding-top: 246px;
    padding-bottom: 800px;

    margin-left: auto;
    margin-right: auto;

    position: relative;
    overflow: hidden;

    > .reason-title {
      display: block;

      font-size: 38.59px;
      line-height: 44px;
      letter-spacing: -0.8px;
    }

    > .reason-carousel-container {
      position: absolute;
      top: 330px;
      left: -1811px;

      display: flex;
      transition: transform 0.5s ease;

      > .reason-carousel-track {
        display: flex;

        > .reason-carousel-item {
          height: 421px;

          padding: 32px;

          margin-right: 20px;

          //text-align: left;
          text-align: center;

          background-color: #94dae3;

          > .reason-carousel-item-title {
            display: block;

            font-size: 39.53px;
            line-height: 44px;
            letter-spacing: -0.8px;
          }

          > .reason-carousel-item-img {
            height: 96px;
          }
        }
      }
    }

    > .reason-carousel-track-left {
      left: -2568px;
    }
    > .reason-carousel-track-right {
      right: 2568px;
    }

    > .reason-carousel-bt {
      width: 15px;
      height: 15px;

      margin-top: 500px;
      margin-left: 7.5px;
      margin-right: 7.5px;

      display: block;

      border-radius: 999px;
      background-color: #5780d4;
    }
  }

  /////////////////
  > .protect-container {
    max-width: 1392px;

    margin-left: auto;
    margin-right: auto;

    padding: 72px;
    padding-top: 127px;

    background-color: #e7f7f9;
    border-radius: 30px;

    > .protect-title {
      width: 720px;

      margin-bottom: 96.7px;
      margin-left: auto;
      margin-right: auto;

      display: block;

      font-size: 66.94px;
      line-height: 74.8px;
      letter-spacing: -1.36px;
    }

    > .protect-info-container {
      height: 623px;

      margin-top: 64px;

      background-color: #ffffff;
      border: #d7d7db 1px solid;
      border-radius: 20px;

      overflow: hidden;

      > .protect-info-text-container {
        width: 50%;

        padding-top: 76.31px;
        padding-left: 49px;
        padding-right: 48px;

        display: inline-block;
        text-align: left;
        vertical-align: top;

        > .protect-info-subtitle {
          display: block;

          font-size: 11px;
          letter-spacing: 0.6px;
        }

        > .protect-info-title {
          margin-top: 22px;
          margin-bottom: 40px;

          display: block;

          font-size: 27.23px;
          line-height: 33.6px;
          letter-spacing: -0.56px;
        }

        > .protect-info-description {
          color: #303136;

          > .protect-info-description-icon {
            width: 32px;
            height: 32px;

            margin-right: 8px;
            margin-left: 8px;

            vertical-align: middle;
          }

          > .protect-info-description-title {
            padding-top: 8px;
            padding-left: 8px;

            display: inline-block;

            font-size: 19.4px;
            line-height: 27px;
            letter-spacing: -0.4px;
          }

          > .protect-info-description-text {
            padding-left: 56px;

            display: block;

            font-size: 13.67px;
            line-height: 21px;
            letter-spacing: -0.28px;
          }
        }

        > .protect-info-bt {
          width: fit-content;

          padding-top: 12px;
          padding-bottom: 12px;
          padding-left: 20.5px;
          padding-right: 20.5px;

          margin-top: 34px;

          display: block;

          color: #fffefb;

          background-color: #0364d3;
          border-radius: 30px;
        }
      }

      > .protect-info-img {
        width: 623px;
      }
    }
  }
  /////////////////
  > .introducing-container {
    max-width: 1392px;
    height: 783px;

    padding-left: 48px;
    padding-top: 48px;

    margin-left: auto;
    margin-right: auto;

    background-image: url("../assets/images/pictures/wallpaper_1passowrd.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    > .introducing-inside-box {
      max-width: 576px;
      width: 100%;

      padding-top: 51px;
      padding-left: 50px;
      padding-bottom: 50px;

      color: #fffefb;
      text-align: left;
      background-color: #1a285f;

      > .introducing-subtitle {
        display: block;

        font-size: 10.69px;
        line-height: 19.2px;
        letter-spacing: 0.6px;
      }

      > .introducing-title {
        display: block;

        font-size: 38.59px;
        line-height: 44px;
        letter-spacing: -0.8px;
      }

      > .introducing-description {
        display: block;

        font-size: 19.53px;
        line-height: 27px;
        letter-spacing: -0.4px;
      }

      > .introducing-bt {
        width: fit-content;

        padding: 10px;
        padding-left: 39.58px;
        padding-right: 38.95px;

        display: block;

        color: #1a2552;
        font-size: 15.38px;
        line-height: 24px;
        letter-spacing: 0px;

        background-color: #85beff;
      }
    }
  }
  /////////////////
  /////////////////
}
</style>
