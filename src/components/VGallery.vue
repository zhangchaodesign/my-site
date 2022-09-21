<template>
  <div class="title-container">
    <p class="gallery-title title-selected">PUBLICATIONS</p>
    <p class="gallery-title title-unselected">DESIGNS</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.title-container {
  @apply flex flex-row gap-6 p-3;

  .gallery-title {
    @apply font-signika-negative text-lg select-none cursor-pointer;

    &:hover {
      @apply underline;

      text-decoration-style: dashed;
      text-underline-offset: 2px;
      text-decoration-thickness: 1px;
    }
  }

  .title-selected {
    @apply text-dark;
  }

  .title-unselected {
    @apply text-black opacity-60;
  }
}
</style>
