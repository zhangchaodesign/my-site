<template>
  <div class="announcement paragraph">
    <p class="highlight">
      I am looking for an HCI/Design PhD position starting from 2023 fall! Click
      to download my
      <a :href="pdf" target="_blank">CV / Resume</a>.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pdf: new URL(
        `../assets/info/cv_chaozhang_08_2022_en.pdf`,
        import.meta.url
      ).href
    };
  }
};
</script>
<style lang="scss" scoped>
.announcement {
  @apply flex flex-col items-center border border-dashed border-black border-opacity-60 p-2 bg-light text-xs leading-6 font-signika-negative select-none;

  .highlight {
    @apply text-highlight;
  }
}
</style>
