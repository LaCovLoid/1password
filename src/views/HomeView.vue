<template>
  <div class="home-container">
    <!-- ------------trusted-container------------ -->
    <div class="trusted-container">
      <div class="trusted-left">
        <span class="trusted-title">Trusted access</span>
        <span class="trusted-description"
          >Extended Access Management fueled by the market-leading password
          manager.</span
        >
        <div class="trusted-bt-container">
          <span class="trusted-plan-bt">View plans</span>
          <span class="trusted-sales-bt">Talk to sales</span>
        </div>
      </div>
      <div class="trusted-container-right">
        <img class="trusted-logo" src="../assets/images/logos/oracle.png" />
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
        <span class="info-description"
          >Oracle Red Bull Racing relies on 1Password to simplify security for
          team members and their families with a password manager that secures
          access to critical information at work, at the track, and at
          home.</span
        >
        <span class="info-url">Explore personal 화살표</span>
      </div>

      <div class="securing-info-container">
        <span class="info-subtitle">EXTENDED ACCESS MANAGEMENT</span>
        <span class="info-title"
          >Secure every sign-in to every app from every device</span
        >
        <span class="info-description"
          >1Password® Extended Access Management protects Oracle Red Bull Racing
          by providing seamless, trusted access to its industry-leading software
          and systems.</span
        >
        <span class="info-url">Explore business 화살표</span>
      </div>
    </div>
    <!-- ------------trusted-container------------ -->
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
