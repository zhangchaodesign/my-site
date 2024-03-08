<template>
  <div class="news">
    <hr />
    <p class="title">NEWS</p>
    <div class="news_entry_list">
      <div v-for="(val, index) in news" :key="index" class="news_entry">
        <p class="date">{{ news[index]["date"] }}</p>
        <p class="content">{{ news[index]["content"] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import NEWS from "@/components/news.js";
export default {
  data() {
    return {
      news: NEWS,
    };
  },
};
</script>

<style lang="scss" scoped>
.news {
  @apply flex flex-col gap-3;

  .news_entry_list {
    @apply flex flex-col gap-1 h-[324px] lg:h-[335px] overflow-auto select-none;

    // &:hover {
    //   @apply overflow-auto overscroll-none pr-0;
    // }

    .news_entry {
      @apply flex flex-row gap-1 font-medium text-xxs leading-5 text-black text-opacity-60;

      .date {
        @apply italic;
      }

      .content {
        @apply text-left;
      }
    }
  }
}
</style>
