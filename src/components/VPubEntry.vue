<template>
  <div class="entry" @mouseover="selected()" @mouseleave="unselected()">
    <img class="entry-cover" :src="highlight ? animation : cover" alt="" />
    <div class="entry-info">
      <div class="entry-title">{{ entry["title"] }}</div>
      <div class="entry-author">
        <span
          v-for="(val, index) in entry['authors']"
          :key="index"
          :class="
            val === 'Chao Zhang' || val === 'Chao Zhang*'
              ? 'font-semibold'
              : 'font-normal'
          "
        >
          <span v-if="index === entry['authors'].length - 1">and </span>
          {{ entry["authors"][index]
          }}<span v-if="index < entry['authors'].length - 1">, </span>
        </span>
      </div>
      <hr />
      <p class="entry-abstract">{{ entry["abstract"] }}</p>
      <div class="entry-footer">
        <div class="entry-venue">{{ entry["venue"] }}</div>
        <div class="entry-material">
          <div v-if="entry['pdf'] !== ''">[<a :href="pdf" target="_blank">pdf</a>]</div>
          <div v-if="Object.keys(entry['link']).length !== 0">
            [<a :href="Object.values(entry['link'])[0]" target="_blank">{{
              Object.keys(entry["link"])[0]
            }}</a
            >]
          </div>
          <div v-if="entry['video'] !== ''">
            [<a :href="entry['video']" target="_blank">video</a>]
          </div>
          <div v-if="entry['talk'] !== ''">
            [<a :href="entry['talk']" target="_blank">Presentation</a>]
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    entry: {
      type: Object,
    },
  },
  data() {
    return {
      highlight: false,
      cover: new URL(`../assets/publications/${this.entry["cover"]}`, import.meta.url)
        .href,
      animation: new URL(
        `../assets/publications/${this.entry["animation"]}`,
        import.meta.url
      ).href,
      pdf: new URL(`../assets/publications/${this.entry["pdf"]}`, import.meta.url).href,
    };
  },
  methods: {
    selected() {
      this.highlight = true;
    },
    unselected() {
      this.highlight = false;
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  @apply no-underline cursor-pointer;
}

.entry {
  @apply flex flex-col lg:flex-row gap-4 p-3 lg:h-[204px];

  &:hover {
    @apply bg-light;
  }

  .entry-cover {
    @apply w-full lg:w-[320px] select-none;
  }

  .entry-info {
    @apply flex flex-col gap-1 justify-between;
  }

  .entry-title {
    @apply font-signika-negative font-medium text-xs lg:leading-4 text-dark select-none;
  }

  .entry-author {
    @apply font-signika-negative text-xxs leading-4 text-dark select-none;
  }

  .entry-abstract {
    @apply font-medium text-xxs leading-5 text-black text-opacity-60 overflow-auto;
  }

  .entry-footer {
    @apply flex flex-col lg:flex-row gap-1 justify-between mt-2;
  }

  .entry-venue {
    @apply font-signika-negative font-medium text-xxs lg:leading-[10px] text-dark select-none;
  }

  .entry-material {
    @apply flex flex-row gap-1 font-signika-negative font-medium text-xxs leading-[10px] text-dark uppercase select-none;
  }
}
</style>
