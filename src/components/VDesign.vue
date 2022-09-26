<template>
  <div class="design">
    <div class="paper">
      <p class="title p-3">UI/UX Design and Service Design</p>
      <div class="entries">
        <div
          v-for="(val, index) in design['ux']"
          :key="index"
          class="news_entry"
        >
          <!-- <p class="date">{{ news[index]['date'] }}</p> -->
          <VDesignEntry :entry="design['ux'][index]" />
        </div>
      </div>
    </div>
    <div class="paper">
      <p class="title p-3">Indusrial Design and Creative Design</p>
      <div class="entries">
        <div
          v-for="(val, index) in design['others']"
          :key="index"
          class="news_entry"
        >
          <!-- <p class="date">{{ news[index]['date'] }}</p> -->
          <VDesignEntry :entry="design['others'][index]" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DESIGN from '@/components/design.js';
import VDesignEntry from '@/components/VDesignEntry.vue';

export default {
  data() {
    return {
      design: DESIGN
    };
  },
  components: {
    VDesignEntry
  }
};
</script>
<style lang="scss" scoped>
.design {
  @apply flex flex-col gap-6;

  .paper {
    @apply flex flex-col gap-3;
  }

  .entries {
    @apply flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-2;
  }
}
</style>
