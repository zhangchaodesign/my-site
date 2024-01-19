<template>
  <footer class="footer">
    <img class="logo" src="@/assets/logo/logo_dark.svg" alt="" />
    <p class="footer-text">©2022-2023 by Chao Zhang | Last Updated: 01/2024</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  @apply flex flex-col gap-2 bg-dark items-center py-6 w-full;

  .footer-text {
    @apply font-signika-negative text-xxs leading-5 text-white select-none;
  }
}
</style>
