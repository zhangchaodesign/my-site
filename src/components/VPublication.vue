<template>
  <div class="publication">
    <div class="paper">
      <p class="title p-3">Major Peer-reviewed Conference and Journal Papers</p>
      <div class="entries">
        <div class="w-full px-3">
          <div class="announcement paragraph">
            <p class="text-dark text-xs leading-6 font-signika-negative">
              Submitted three papers (one as 1st author, one as co-1st author, and one as
              2nd author) to CHI '23, which are not listed here for Anonymity.
            </p>
          </div>
        </div>

        <div v-for="(val, index) in pub['paper']" :key="index" class="news_entry">
          <!-- <p class="date">{{ news[index]['date'] }}</p> -->
          <VPubEntry :entry="pub['paper'][index]" />
        </div>
      </div>
    </div>
    <div class="paper">
      <p class="title p-3">
        Minor Lightly-Reviewed Posters, Extended Abstracts, and Workshop Papers
      </p>
      <div class="entries">
        <div v-for="(val, index) in pub['poster']" :key="index" class="news_entry">
          <!-- <p class="date">{{ news[index]['date'] }}</p> -->
          <VPubEntry :entry="pub['poster'][index]" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PUBLICATION from "@/components/publication.js";
import VPubEntry from "@/components/VPubEntry.vue";

export default {
  data() {
    return {
      pub: PUBLICATION,
    };
  },
  components: {
    VPubEntry,
  },
};
</script>
<style lang="scss" scoped>
.publication {
  @apply flex flex-col gap-6;

  .paper {
    @apply flex flex-col gap-3;
  }

  .entries {
    @apply flex flex-col gap-3 items-center;
  }

  .announcement {
    @apply flex flex-col items-center border border-dashed border-black border-opacity-60 p-2 bg-light select-none;
  }
}
</style>
