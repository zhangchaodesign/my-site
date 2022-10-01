<template>
  <div class="announcement paragraph">
    <p class="highlight">
      I am looking for an HCI/Design PhD position starting from 2023 fall!
      <a :href="pdf" download="CV_ChaoZhang_09_2022.pdf" target="_blank"
        >Click to download my CV</a
      >.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pdf: new URL(
        `../assets/info/CV_ChaoZhang_09_2022_short_version.pdf`,
        import.meta.url
      ).href
    };
  }
};
</script>
<style lang="scss" scoped>
.announcement {
  @apply flex flex-col w-full items-center border border-dashed border-black border-opacity-60 p-2 bg-light select-none;

  .highlight {
    @apply text-highlight text-xs leading-6 font-signika-negative;
  }
}
</style>
