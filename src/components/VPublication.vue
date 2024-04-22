<template>
  <div class="publication">
    <!-- <div class="w-full px-3">
      <div class="announcement paragraph">
        <p class="text-dark text-xs leading-6 font-signika-negative">
          As an HCI researcher, I delve into the utilization of generative AI as design
          materials, aiming to foster responsible interactions that empower users to
          learn, create, and thrive.
        </p>
      </div>
    </div> -->
    <div class="w-full px-3">
      <p class="text-dark text-xs leading-6 font-signika-negative">
        * Equal Contribution&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;† Mentored Students
      </p>
    </div>
    <div class="paper">
      <!-- <p class="title p-3">Major Peer-reviewed Conference and Journal Papers</p> -->
      <p class="title p-3">
        # Selected Publications
      </p>
      <div class="entries">
        <!-- <div class="w-full px-3">
          <div class="announcement paragraph">
            <p class="text-dark text-xs leading-6 font-signika-negative">
              Five papers (one as the 1st author, one as the co-1st author, and three as a
              co-author) are under review at CHI '23, which are not listed here for
              Anonymity.
            </p>
          </div>
        </div> -->

        <div v-for="(val, index) in pub['selected']" :key="index" class="news_entry">
          <!-- <p class="date">{{ news[index]['date'] }}</p> -->
          <VPubEntry :entry="pub['selected'][index]" />
        </div>
      </div>
    </div>
    <!-- <div class="paper">
      <p class="title p-3">#2 - Social Media / Online Content Creation</p>
      <div class="entries">
        <div v-for="(val, index) in pub['social']" :key="index" class="news_entry">
          <VPubEntry :entry="pub['social'][index]" />
        </div>
      </div>
    </div> -->
    <!-- <details class="paper">
      <summary class="title p-3">
        Minor Lightly-Reviewed Posters, Extended Abstracts, and Workshop Papers
      </summary>
      <div class="entries">
        <div v-for="(val, index) in pub['poster']" :key="index" class="news_entry">
          <VPubEntry :entry="pub['poster'][index]" />
        </div>
      </div>
    </details> -->
    <details class="paper">
      <summary class="title p-3">
        Other Publications - Design Tools / Digital Fabrication / Minor Lightly-Reviewed
        Posters
      </summary>
      <div class="entries">
        <div v-for="(val, index) in pub['others']" :key="index" class="news_entry">
          <VPubEntry :entry="pub['others'][index]" />
        </div>
      </div>
    </details>
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
    @apply flex flex-col items-center border border-dashed border-black border-opacity-30 p-2 bg-light select-none;
  }
}
</style>
