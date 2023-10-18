<template>
  <div class="sidebar">
    <div class="portrait-wrapper">
      <img class="portrait" src="@/assets/info/portrait.jpg" alt="" />
      <div class="icon-wrapper">
        <a :href="pdf" target="_blank">
          <icon-academicons-cv-square class="icon" />
        </a>
        <a href="https://scholar.google.com/citations?user=NgaSTisAAAAJ&hl=en">
          <icon-academicons-google-scholar-square class="icon" />
        </a>
        <a href="https://twitter.com/zhangchaodesign">
          <icon-fa-brands-twitter-square class="icon" />
        </a>
        <a href="https://www.instagram.com/zhangchaodesign/">
          <icon-fa-brands-instagram-square class="icon" />
        </a>
        <a href="https://github.com/zhangchaodesign">
          <icon-fa-brands-github-square class="icon" />
        </a>
        <a href="mailto:zhangchaohci@gmail.com">
          <icon-ic-round-email class="icon" />
        </a>
      </div>
    </div>

    <VNews />
  </div>
</template>

<script>
import VNews from "@/components/VNews.vue";

export default {
  data() {
    return {
      pdf: new URL(`../assets/info/Curriculum_Vitae_of_Chao_Zhang.pdf`, import.meta.url).href,
    };
  },
  components: {
    VNews,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  @apply flex flex-col gap-3 p-3 w-full lg:w-[224px];

  .portrait-wrapper {
    @apply flex flex-col gap-2;

    .portrait {
      @apply w-full lg:w-[200px];
    }

    .icon-wrapper {
      @apply flex flex-row gap-1;

      .icon {
        @apply text-base text-black text-opacity-60 cursor-pointer;

        &:hover {
          @apply text-base text-black text-opacity-100;
        }
      }
    }
  }
}
</style>
