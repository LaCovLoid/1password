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
      <div class="businesses-slide-track">
        <img
          class="businesses-logo-image"
          v-for="index in 6"
          :key="index"
          src="../assets/images/logos/slack.png"
        />
      </div>
    </div>

    <!-- ------------reasons-container------------ -->
    <div class="reason-container">
      <span class="reason-title">Why people trust 1Password</span>
      <div class="reason-carousel-track">
        <div class="reason-carousel-item" v-for="index in 6" :key="index">
          <span class="reason-carousel-item-title">
            The most used enterprise password manager.
          </span>
          <img
            class="reason-carousel-item-img"
            src="../assets/images/logos/wired.png"
          />
        </div>
      </div>

      <span class="reason-carousel-bt" v-for="index in 6" :key="index"> </span>
    </div>
    <!-- ------------protect-container------------ -->
    <div class="protect-container">
      <span class="protect-title">
        1Password protects your most sensitive info
      </span>
      <div class="protect-password-container">
        <div class="protect-password-left">
          <span class="protect-password-subtitle"> PASSWORD MANAGEMENT </span>
          <span class="protect-password-title">
            Protect your passwords with a secure password manager
          </span>
          <!--큰아이템1, 작은아이템3-->
          <span class="protect-password-bt"> Explore password manager </span>
        </div>
        <img
          class="protect-password-img"
          src="../assets/images/pictures/windows_picture.webp"
        />
      </div>

      <div class="protect-management-container">
        <img
          class="protect-management-img"
          src="../assets/images/pictures/people_list.webp"
        />

        <div class="protect-management-right">
          <span class="protect-management-subtitle">
            EXTENDED ACCESS MANAGEMENT
          </span>
          <span class="protect-management-title">
            Secure every identity, device, and app with the future of access
            management.
          </span>
          <!--큰아이템1, 작은아이템2-->
          <span class="protect-management-bt"> Explore XAM </span>
        </div>
      </div>
    </div>
    <!-- ------------protect-container------------ -->
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

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "@/global.scss" as *;

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

      font-size: 19px;
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
    padding-bottom: 56px;

    > .businesses-title {
      color: #1a2552;
      font-size: 27.13px;
      line-height: 33.6px;
      letter-spacing: -0.56px;
    }

    > .businesses-slide-track {
      height: 84px;

      margin-top: 96px;

      > .businesses-logo-image {
        height: 100%;
        margin-right: 64px;
      }
    }
  }
  /////////////////

  > .reason-container {
    max-width: 100%;
    width: 100%;

    padding-top: 200px;
    padding-bottom: 106px;

    margin-left: auto;
    margin-right: auto;

    overflow: hidden;

    > .reason-title {
      font-size: 38.59px;
      line-height: 44px;
      letter-spacing: -0.8px;
    }

    > .reason-carousel-track {
      width: 100%;

      margin-top: 84px;
      margin-bottom: 42.5px;

      position: relative;
      left: calc(50% - 204px);

      display: flex;

      > .reason-carousel-item {
        max-width: 408px;
        min-width: 408px;
        height: 421px;

        padding: 32px;

        margin-right: 26px;

        text-align: left;
        background-color: #94dae3;

        > .reason-carousel-item-title {
          font-size: 39.53px;
          line-height: 44px;
          letter-spacing: -0.8px;
        }

        > .reason-carousel-item-img {
          height: 96px;
        }
      }
    }

    > .reason-carousel-bt {
      width: 15px;
      height: 15px;

      margin-left: 7.5px;
      margin-right: 7.5px;

      display: inline-block;

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

    background-color: #e7f7f9;
    border-radius: 30px;

    > .protect-title {
      width: 720px;

      margin-left: auto;
      margin-right: auto;

      display: block;

      font-size: 66.94px;
      line-height: 74.8px;
      letter-spacing: -1.36px;
    }

    > .protect-password-container {
      background-color: #ffffff;
      border: #d7d7db 1px solid;

      > .protect-password-left {
        width: 50%;
        display: inline-block;
        text-align: left;
        vertical-align: top;

        > .protect-password-subtitle {
          display: block;
        }
        > .protect-password-title {
          display: block;
        }

        > .protect-password-bt {
        }
      }

      > .protect-password-img {
        width: 50%;
        height: auto;
      }
    }

    > .protect-management-container {
      margin-top: 50px;

      background-color: #ffffff;
      border: #d7d7db 1px solid;
      border-radius: 20px;
      overflow: hidden;

      > .protect-management-img {
        max-width: 50%;
        height: auto;
        object-fit: cover;
      }

      > .protect-management-right {
        width: 50%;
        display: inline-block;
        text-align: left;
        vertical-align: top;

        > .protect-management-subtitle {
          display: block;
        }
        > .protect-management-title {
          display: block;
        }

        > .protect-management-bt {
        }
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
