<template>
  <div class="entry" @mouseover="selected()" @mouseleave="unselected()">
    <img class="entry-cover" :src="highlight ? cover_2 : cover_1" alt="" />
    <div class="entry-info">
      <div class="entry-basic">
        <div class="entry-title pb-8">{{ entry["title"] }}</div>
        <!-- <div class="entry-author">
          <span
            v-for="(val, index) in entry['authors']"
            :key="index"
            :class="val === 'Chao Zhang' ? 'font-semibold' : 'font-normal'"
          >
            <span v-if="index === entry['authors'].length - 1">and </span>
            {{ entry["authors"][index] }}
            <span v-if="index < entry['authors'].length - 1">, </span>
          </span>
        </div> -->
        <hr />
        <div class="entry-footer">
          <div class="entry-material">
            <div v-if="entry['pdf'] !== ''">[<a :href="pdf" target="_blank">pdf</a>]</div>
            <div v-if="Object.keys(entry['link']).length !== 0">
              <span v-for="(val, index) in entry['link']" :key="index">
                [<a :href="val" target="_blank">{{ index }}</a
                >]</span
              >
            </div>
            <div v-if="entry['video'] !== ''">
              [<a :href="entry['video']" target="_blank">video</a>]
            </div>
          </div>

          <img class="entry-award" :src="highlight ? award_2 : award_1" alt="" />
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
      cover_1: new URL(`../assets/designs/${this.entry["cover_1"]}`, import.meta.url)
        .href,
      cover_2: new URL(`../assets/designs/${this.entry["cover_2"]}`, import.meta.url)
        .href,
      award_1: new URL(`../assets/designs/${this.entry["award_1"]}`, import.meta.url)
        .href,
      award_2: new URL(`../assets/designs/${this.entry["award_2"]}`, import.meta.url)
        .href,
      pdf: new URL(`../assets/designs/${this.entry["pdf"]}`, import.meta.url).href,
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
  @apply flex flex-col lg:flex-row gap-4 p-3;

  &:hover {
    @apply bg-light;
  }

  .entry-cover {
    @apply w-full lg:w-[240px] select-none;
  }

  .entry-basic {
    @apply flex flex-col gap-1 h-full;
  }

  .entry-info {
    @apply flex flex-col justify-between;
  }

  .entry-title {
    @apply font-signika-negative font-medium text-xs leading-5 text-dark select-none capitalize;
  }

  .entry-author {
    @apply font-signika-negative text-xxs leading-4 text-dark select-none;
  }

  .entry-footer {
    @apply flex flex-row lg:flex-col justify-between mt-2 flex-wrap h-full items-start;

    align-content: stretch;

    .entry-material {
      @apply flex-auto flex flex-row gap-1 font-signika-negative font-medium text-xxs leading-[10px] text-dark uppercase select-none;

      flex-basis: 0;
    }

    .entry-award {
      @apply h-12;
    }
  }
}
</style>
