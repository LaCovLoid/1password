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
          <span class="racingcar-plan-bt">View plans</span>
          <span class="racingcar-sales-bt">Talk to sales</span>
        </div>
      </div>
      <div class="racingcar-container-right">
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
        <span class="info-subtitle">Password Manager</span>
        <span class="info-title">Safeguard your digital life</span>
        <span class="info-description">
          Oracle Red Bull Racing relies on 1Password to simplify security for
          team members and their families with a password manager that secures
          access to critical information at work, at the track, and at home.
        </span>
        <span class="info-url">Explore personal 화살표</span>
      </div>

      <div class="securing-info-container">
        <span class="info-subtitle">EXTENDED ACCESS MANAGEMENT</span>
        <span class="info-title">
          Secure every sign-in to every app from every device
        </span>
        <span class="info-description">
          1Password® Extended Access Management protects Oracle Red Bull Racing
          by providing seamless, trusted access to its industry-leading software
          and systems.
        </span>
        <span class="info-url">Explore business 화살표</span>
      </div>
    </div>
    <!-- ------------interview-container------------ -->
    <div class="interview-container">
      <img
        src="../assets/images/pictures/face_horner.png"
        class="interview-image"
      />
      <div class="interview-right">
        <img src="../assets/images/logos/oracle_white.png" />
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
  > .access-container {
    width: 100%;
    height: 810px;
    max-width: 1920px;

    background-image: url("../assets/images/pictures/racingcar.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    @include minimize1200 {
      height: 650px;
    }

    @include minimize800 {
      height: 677.4px;
    }
  }
}
</style>
