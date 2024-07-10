<template>
  <div class="announcement paragraph">
    <p class="highlight">
      💡 LLM tokenizers reveal a ton about capabilities and priorities, but people have
      limited access to make sense of them! I recently built a tool to compare
      vocabularies across models. Check it out at
      <a href="https://token-board.zhangchaodesign.com"
        >https://token-board.zhangchaodesign.com</a
      >! 🚀.
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pdf: new URL(`../assets/info/Curriculum_Vitae_of_Chao_Zhang.pdf`, import.meta.url)
        .href,
    };
  },
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
