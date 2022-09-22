<template>
  <div class="entry" @mouseover="selected()" @mouseleave="unselected()">
    <img class="entry-cover" :src="cover" alt="" />
    <div class="entry-info">
      <div class="entry-title">{{ entry['title'] }}</div>
      <div class="entry-author">
        <span
          v-for="(val, index) in entry['authors']"
          :key="index"
          :class="val === 'Chao Zhang' ? 'font-semibold' : 'font-normal'"
        >
          <span v-if="index === entry['authors'].length - 1">and </span>
          {{ entry['authors'][index] }}
          <span v-if="index < entry['authors'].length - 1">, </span>
        </span>
      </div>
      <hr />
      <div class="entry-abstract">{{ entry['abstract'] }}</div>
      <div class="entry-footer">
        <div class="entry-venue">{{ entry['venue'] }}</div>
        <div class="entry-material">
          <div v-if="entry['pdf'] !== ''">
            [<a :href="entry['pdf']" download>pdf</a>]
          </div>
          <div v-if="Object.keys(entry['link']).length !== 0">
            [<a :href="Object.values(entry['link'])[0]">{{
              Object.keys(entry['link'])[0]
            }}</a
            >]
          </div>
          <div v-if="entry['video'] !== ''">
            [<a :href="entry['video']" download>video</a>]
          </div>
          <div v-if="entry['talk'] !== ''">
            [<a :href="entry['talk']" download>talk</a>]
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
      type: Object
    }
  },
  data() {
    return {
      cover: this.entry['cover']
    };
  },
  methods: {
    selected() {
      this.cover = this.entry['animation'];
    },
    unselected() {
      this.cover = this.entry['cover'];
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  @apply no-underline cursor-pointer;
}

.entry {
  @apply flex flex-row gap-4 p-3 h-[204px];

  &:hover {
    @apply bg-light;
  }

  .entry-cover {
    @apply w-[320px];
  }

  .entry-info {
    @apply flex flex-col gap-1 justify-between;
  }

  .entry-title {
    @apply font-signika-negative font-medium text-xs leading-3 text-dark select-none;
  }

  .entry-author {
    @apply font-signika-negative text-xxs leading-4 text-dark select-none;
  }

  .entry-abstract {
    @apply font-open-sans font-medium text-xxs leading-5 text-black text-opacity-60 text-justify overflow-auto;
  }

  .entry-footer {
    @apply flex flex-row justify-between mt-2;
  }

  .entry-venue {
    @apply font-signika-negative font-medium text-xxs leading-[10px] text-dark select-none;
  }

  .entry-material {
    @apply flex flex-row gap-1 font-signika-negative font-medium text-xxs leading-[10px] text-dark uppercase select-none;
  }
}
</style>
