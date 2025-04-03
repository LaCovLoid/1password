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
          <span class="info-subtitle">Password Manager</span>
          <span class="info-title">Safeguard your digital life</span>
          <span class="info-description">
            Oracle Red Bull Racing relies on 1Password to simplify security for
            team members and their families with a password manager that secures
            access to critical information at work, at the track, and at home.
          </span>
          <span class="info-url">
            Explore personal
            <img class="" src="../assets/images/icons/arrow_right.svg" />
          </span>
        </div>

        <div class="securing-info-item">
          <img class="info-img" src="../assets/images/pictures/f1.jpg" />
          <span class="info-subtitle">EXTENDED ACCESS MANAGEMENT</span>
          <span class="info-title">
            Secure every sign-in to every app from every device
          </span>
          <span class="info-description">
            1Password® Extended Access Management protects Oracle Red Bull
            Racing by providing seamless, trusted access to its industry-leading
            software and systems.
          </span>
          <span class="info-url">
            Explore business 화살표
            <img class="" src="../assets/images/icons/arrow_right.svg" />
          </span>
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
        <!-- 로고 슬라이드 트랙 -->
      </div>
    </div>

    <!-- ------------reasons-container------------ -->
    <div class="reasons-container">
      <span class="reasons-title">Why people trust 1Password</span>
      <div class="reasons-slide-track">
        <!-- ------------ reasons 슬라이드 트랙------------ -->
        <!-- ------------ reasons 버튼 트랙------------ -->
      </div>
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
        <div class="protect-password-right">
          <img src="../assets/images/pictures/windows_picture.webp" />
        </div>
      </div>
      <div class="protect-management-container">
        <div class="protect-management-left">
          <img src="../assets/images/pictures/people_list.webp" />
        </div>
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
      <div class="inside-box">
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
    max-width: 1920px;

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
      width: 768px;

      display: block;

      color: #1a2552;
      font-size: 67.07px;
      line-height: 74.8px;
      letter-spacing: -1.36px;
    }

    > .securing-description {
      width: 710px;

      display: block;

      font-size: 19.22px;
      line-height: 27px;
      letter-spacing: -0.4px;
    }

    /////////////////

    > .securing-info-container {
      display: flex;
      justify-content: center;

      > .securing-info-item {
        max-width: 607px;

        overflow: hidden;

        border-radius: 30px;
        background-color: #d7d7db;

        > .info-img {
          width: 100%;
        }

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
          letter-spacing: -0.4px;
        }

        > .info-url {
          display: block;

          color: #0364d3;
          font-size: 15.38px;
          line-height: 24px;
          letter-spacing: -0.32px;
        }
      }
    }
  }
  /////////////////

  > .interview-container {
    max-width: 1980px;

    padding-left: 24px;
    padding-right: 24px;

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
        line-height: 44px;
        letter-spacing: -0.8px;
      }

      > .interview-talker {
        display: block;

        font-size: 14.65px;
        line-height: 22.5px;
        letter-spacing: -0.3px;
      }

      > .interview-info {
        display: block;

        font-size: 13.56px;
        line-height: 21px;
        letter-spacing: -0.28px;
      }
    }
    /////////////////
  }
}
</style>
