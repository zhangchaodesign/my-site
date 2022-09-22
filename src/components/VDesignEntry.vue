<template>
  <div class="entry" @mouseover="selected()" @mouseleave="unselected()">
    <img class="entry-cover" :src="cover" alt="" />
    <div class="entry-info">
      <div class="entry-basic">
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
        <div class="entry-footer">
          <div class="entry-material">
            <div v-if="entry['pdf'] !== ''">
              [<a :href="entry['pdf']" download>pdf</a>]
            </div>
            <div v-if="Object.keys(entry['link']).length !== 0">
              <span v-for="(val, index) in entry['link']" :key="index">
                [<a :href="val">{{ index }}</a
                >]</span
              >
            </div>
            <div v-if="entry['video'] !== ''">
              [<a :href="entry['video']" download>video</a>]
            </div>
          </div>
        </div>
      </div>
      <img class="entry-award" :src="award" alt="" />
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
      cover: this.entry['cover_1'],
      award: this.entry['award_1']
    };
  },
  methods: {
    selected() {
      this.cover = this.entry['cover_2'];
      this.award = this.entry['award_2'];
    },
    unselected() {
      this.cover = this.entry['cover_1'];
      this.award = this.entry['award_1'];
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  @apply no-underline cursor-pointer;
}

.entry {
  @apply flex flex-row gap-4 p-3;

  &:hover {
    @apply bg-light;
  }

  .entry-cover {
    @apply w-[240px];
  }

  .entry-basic {
    @apply flex flex-col gap-1;
  }

  .entry-info {
    @apply flex flex-col justify-between;
  }

  .entry-title {
    @apply font-signika-negative font-medium text-xs leading-5 text-dark select-none;
  }

  .entry-author {
    @apply font-signika-negative text-xxs leading-4 text-dark select-none;
  }

  .entry-footer {
    @apply flex flex-row justify-between mt-2;
  }

  .entry-material {
    @apply flex flex-row gap-1 font-signika-negative font-medium text-xxs leading-[10px] text-dark uppercase select-none;
  }

  .entry-award {
    @apply w-24;
  }
}
</style>
