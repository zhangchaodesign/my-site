<template>
  <div class="news">
    <hr />
    <p class="title">NEWS</p>
    <div class="news_entry_list">
      <div v-for="(val, index) in news" :key="index" class="news_entry">
        <p class="date">{{ news[index]['date'] }}</p>
        <p class="content">{{ news[index]['content'] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import NEWS from '@/components/news.js';
export default {
  data() {
    return {
      news: NEWS
    };
  }
};
</script>

<style lang="scss" scoped>
.news {
  @apply flex flex-col gap-3;

  .news_entry_list {
    @apply flex flex-col gap-1 h-[548px] overflow-hidden pr-[4px] select-none;

    &:hover {
      @apply overflow-auto overscroll-none pr-0;
    }

    .news_entry {
      @apply flex flex-row gap-1 font-open-sans font-medium text-xxs leading-5 text-black text-opacity-60;

      .date {
        @apply italic;
      }
    }
  }
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
  background: #333;
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
