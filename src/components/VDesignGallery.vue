<template>
  <div class="gallery">
    <div class="title-container">
      <p class="gallery-title title-selected'">Design</p>
    </div>

    <VDesign v-if="state" />
  </div>
</template>

<script>
import VDesign from "@/components/VDesign.vue";

export default {
  data() {
    return {
      state: 1,
    };
  },
  components: {
    VDesign,
  },
};
</script>

<style lang="scss">
.gallery {
  @apply flex flex-col;
}

.title-container {
  @apply flex flex-row gap-6 p-3;

  .gallery-title {
    @apply font-signika-negative text-lg select-none uppercase;

    // &:hover {
    //   @apply underline;

    //   text-decoration-style: dashed;
    //   text-underline-offset: 2px;
    //   text-decoration-thickness: 1px;
    // }
  }

  .title-selected {
    @apply text-dark;
  }

  .title-unselected {
    @apply text-black opacity-60;
  }
}
</style>
