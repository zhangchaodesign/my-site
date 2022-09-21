<template>
  <div>
    <div class="wrapper">
      <div class="info-container">
        <VSidebar />
        <VInfo />
      </div>

      <hr />

      <VGallery />
    </div>

    <VFooter />
  </div>
</template>

<script>
import VInfo from '@/components/VInfo.vue';
import VSidebar from '@/components/VSidebar.vue';
import VGallery from '@/components/VGallery.vue';
import VFooter from '@/components/VFooter.vue';

export default {
  components: {
    VInfo,
    VSidebar,
    VGallery,
    VFooter
  }
};
</script>

<style lang="scss">
b {
  @apply font-open-sans font-bold;
}

li::selection {
  @apply bg-dark text-white;
}

p::selection {
  @apply bg-dark text-white;
}

b::selection {
  @apply bg-dark text-white;
}

a::selection {
  @apply bg-dark text-white;
}

a {
  @apply underline cursor-pointer;

  text-decoration-style: dashed;
  text-underline-offset: 2px;
}

hr {
  @apply border-dashed border-black border-opacity-20;
}

li {
  @apply list-disc;
}

.wrapper {
  @apply my-32 w-[968px] flex flex-col gap-9 m-auto;
}

.info-container {
  @apply flex flex-row gap-3 justify-between;
}

.highlight {
  @apply text-highlight;
}

.title {
  @apply font-signika-negative text-base text-dark select-none;
}

.paragraph {
  @apply font-open-sans font-medium text-xs leading-6 text-black text-opacity-60 text-justify;
}

.announcement {
  @apply flex flex-col items-center border border-dashed border-black border-opacity-60 p-2 bg-light font-bold select-none;

  .highlight {
    @apply text-highlight;
  }
}

.logo {
  @apply w-8 select-none;
}
</style>
