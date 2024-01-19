<template>
  <div>
    <div class="wrapper">
      <div class="info-container">
        <VSidebar class="order-2 lg:order-none" />
        <VInfo class="order-1 lg:order-none" />
      </div>

      <!-- <div class="w-full">
        <div class="announcement paragraph">
          <p class="text-dark text-xs leading-6 font-signika-negative">
            📢 I am currently seeking <span class="phrase_highlight">a full-time research internship in the industry for
            Summer 2024</span>. Please
            don't hesitate to reach out if you know of any opportunities or wish to
            discuss further.
          </p>
        </div>
      </div> -->

      <hr />

      <VPubGallery />

      <hr />

      <VDesignGallery />

      <!-- <hr />

      <VResume /> -->
    </div>

    <VFooter />
  </div>
</template>

<script>
import VInfo from "@/components/VInfo.vue";
import VSidebar from "@/components/VSidebar.vue";
import VPubGallery from "@/components/VPubGallery.vue";
import VDesignGallery from "@/components/VDesignGallery.vue";
import VFooter from "@/components/VFooter.vue";
import VResume from "@/components/VResume.vue";

export default {
  components: {
    VInfo,
    VSidebar,
    VPubGallery,
    VDesignGallery,
    VFooter,
    VResume,
  },
};
</script>

<style lang="scss">
b {
  @apply font-open-sans font-bold;
}

li::selection {
  @apply bg-dark text-white;
}

p {
  @apply font-open-sans text-justify break-words;

  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
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
  @apply list-disc font-open-sans text-justify;

  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
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
  @apply my-32 w-full p-3 lg:p-0 lg:w-[968px] flex flex-col gap-9 mx-auto;
}

.info-container {
  @apply flex flex-col lg:flex-row gap-3 justify-between;
}

.highlight {
  @apply text-highlight;
}

.phrase_highlight {
  @apply bg-highlight text-white font-semibold px-1;
}

.title {
  @apply font-signika-negative font-medium text-base text-dark select-none text-left;
}

.paragraph {
  @apply font-medium text-xs leading-6 text-black text-opacity-60;
}

.logo {
  @apply w-8 select-none;
}

.announcement {
  @apply flex flex-col items-center border border-dashed border-black border-opacity-30 p-2 bg-light select-none;
}
</style>
