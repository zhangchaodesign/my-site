<template>
  <div class="design">
    <div class="w-full px-3">
      <div class="announcement paragraph">
        <p class="text-dark text-xs leading-6 font-signika-negative">
          As a UI/UX designer, I am deeply passionate about leveraging the power of design
          to foster sustainability, inclusivity, and impactful societal changes.
        </p>
      </div>
    </div>
    <!-- <div class="paper">
      <p class="title p-3">UI/UX Design and Service Design</p>
      <div class="entries">
        <div v-for="(val, index) in design['ux']" :key="index" class="news_entry">
          <VDesignEntry :entry="design['ux'][index]" />
        </div>
      </div>
    </div>
    <div class="paper">
      <p class="title p-3">Indusrial Design and Creative Design</p>
      <div class="entries">
        <div v-for="(val, index) in design['others']" :key="index" class="news_entry">
          <VDesignEntry :entry="design['others'][index]" />
        </div>
      </div>
    </div> -->
    <div class="paper">
      <!-- <p class="title p-3">
        # Selected Designs - User Experience / Service Design / Industrial Design
      </p> -->
      <div class="entries">
        <div v-for="(val, index) in design['selected']" :key="index" class="news_entry">
          <VDesignEntry :entry="design['selected'][index]" />
        </div>
      </div>
    </div>
    <!-- <details class="paper">
      <summary class="title p-3">Indusrial Design and Creative Design</summary>
      <div class="entries">
        <div v-for="(val, index) in design['unselected']" :key="index" class="news_entry">
          <VDesignEntry :entry="design['unselected'][index]" />
        </div>
      </div>
    </details> -->
  </div>
</template>
<script>
import DESIGN from "@/components/design.js";
import VDesignEntry from "@/components/VDesignEntry.vue";

export default {
  data() {
    return {
      design: DESIGN,
    };
  },
  components: {
    VDesignEntry,
  },
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

  .announcement {
    @apply flex flex-col items-center border border-dashed border-black border-opacity-30 p-2 bg-light select-none;
  }
}
</style>
