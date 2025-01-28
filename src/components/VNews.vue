<template>
  <div class="news">
    <p class="title">News</p>
    <div class="news_entry_list">
      <div v-for="(val, index) in news" :key="index" class="news_entry">
        <p class="content">
          <span class="date">{{ news[index]["date"] }}:</span>
          {{ news[index]["content"] }}
        </p>
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
  @apply flex flex-col gap-2 bg-neutral-50 p-2;

  .news_entry_list {
    @apply flex flex-col gap-1 h-[320px] lg:h-[170px] overflow-auto select-none;

    // &:hover {
    //   @apply overflow-auto overscroll-none pr-0;
    // }

    .news_entry {
      @apply font-medium text-xxs leading-5 text-black text-opacity-60;

      .date {
        @apply italic mr-1;
      }

      .content {
        @apply text-left;
      }
    }
  }
}
</style>
