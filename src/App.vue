<template>
  <div>
    <div class="wrapper">
      <div class="info-container">
        <VSidebar />
        <VInfo />
      </div>

      <hr />

      <VGallery />

      <hr />

      <VResume />

      <VAnnouncement />
    </div>

    <VFooter />
  </div>
</template>

<script>
import VInfo from '@/components/VInfo.vue';
import VSidebar from '@/components/VSidebar.vue';
import VGallery from '@/components/VGallery.vue';
import VFooter from '@/components/VFooter.vue';
import VResume from '@/components/VResume.vue';
import VAnnouncement from '@/components/VAnnouncement.vue';

export default {
  components: {
    VInfo,
    VSidebar,
    VGallery,
    VFooter,
    VResume,
    VAnnouncement
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

/* Designing for scroll-bar */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(51, 51, 51, 0.1);
  border-radius: 4px;
}

// /* Handle on hover */
// ::-webkit-scrollbar-thumb:hover {
//   background: #555;
// }

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
  @apply font-signika-negative font-medium text-base text-dark select-none;
}

.paragraph {
  @apply font-open-sans font-medium text-xs leading-6 text-black text-opacity-60 text-justify;
}

.logo {
  @apply w-8 select-none;
}
</style>
