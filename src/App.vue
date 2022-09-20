<template>
  <div>
    <img class="logo highlight" src="@/assets/logo.svg" alt="" />
    <p class="title">Chao Zhang</p>
    <div class="icon">
      <icon-academicons-cv-square class="highlight" />
      <icon-academicons-google-scholar-square
        style="font-size: 16px; color: black"
      />
      <icon-fa-brands-twitter-square />
      <icon-fa-brands-instagram-square />
      <icon-fa-brands-github-square />
      <icon-ic-round-email />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  @apply p-4;
}

.icon {
  @apply text-base text-black;
}

.highlight {
  @apply text-highlight;
}

.title {
  @apply font-signika-negative text-dark;
}
</style>
