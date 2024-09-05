<template>
  <div class="info">
    <div class="header_wrapper">
      <div class="header">
        <p class="name">Chao Zhang</p>
        <img class="logo" src="@/assets/logo/logo_light.svg" alt="" />
      </div>

      <p class="title">Ph.D. Student (he/him/his) @ Cornell University</p>
    </div>

    <div class="detail">
      <p class="paragraph">
        I am a second-year Ph.D. student at
        <a href="https://www.cornell.edu/">Cornell University</a>, advised by
        <a href="http://jeffrz.com/">Dr. Jeff Rzeszotarski</a>. I identify myself as both
        a UX designer and an HCI researcher. As a
        <span class="phrase_highlight_dark">UX DESIGNER</span>, my design projects have
        been recognized with numerous design awards such as Red Dot, iF Design, and A’
        Design, and featured at notable events including Dubai Design Week and China
        Design Exhibition. As an
        <span class="phrase_highlight_dark">HCI RESEARCHER</span>, I have published in
        top-tier HCI venues like CHI, CSCW, IDC, and MobileHCI. Outside of Cornell, I
        worked closely with <a href="https://ying-xu.com/">Dr. Ying Xu</a> from Harvard
        University.
      </p>

      <div class="research-interest">
        <p class="title">Research Interests</p>

        <img class="select-none w-100" :src="interest" alt="" />

        <div>
          <p class="paragraph">
            With an interdisciplinary academic background in Design (M.E. from
            <a href="https://www.zju.edu.cn/english/">Zhejiang University</a>), Electrical
            Engineering (B.E. from
            <a href="https://english.jiangnan.edu.cn/">Jiangnan University</a>), and
            Digital Media (Minor from
            <a href="https://english.jiangnan.edu.cn/">Jiangnan University</a>), my
            research interest lies in
            <b>
              designing AI-infused interactive systems to support humans in
              <span class="phrase_highlight">Learning for Creativity</span> and
              <span class="phrase_highlight">Learing through Creativity</span> </b
            >. On the one hand, I designed human-AI co-creative tools to assist novices in
            content creation and skill development (e.g.,
            <a href="https://dl.acm.org/doi/abs/10.1145/3491102.3501914">StoryDrawer</a>).
            On the other hand, I developed AI-assisted learning tools to help learners
            engage in creative activities as part of the learning process (e.g.,
            <a href="https://dl.acm.org/doi/10.1145/3613904.3642647">Mathemyths</a>).
          </p>
        </div>
      </div>

      <!-- <VAnnouncement /> -->
    </div>
  </div>
</template>

<script>
import VAnnouncement from "@/components/VAnnouncement.vue";

export default {
  data() {
    return {
      interest: null,
    };
  },
  components: {
    VAnnouncement,
  },
  mounted() {
    if (document.body.clientWidth > 1024) {
      this.interest = new URL(
        `../assets/info/research_interest_desktop.svg`,
        import.meta.url
      ).href;
    } else {
      this.interest = new URL(
        `../assets/info/research_interest_mobile.svg`,
        import.meta.url
      ).href;
    }
  },
};
</script>

<style lang="scss" scoped>
.info {
  @apply flex flex-col gap-6 p-3 w-full lg:w-[732px];
}

.header_wrapper {
  @apply flex flex-col gap-2;

  .header {
    @apply flex flex-row gap-3 items-center;

    .name {
      @apply font-signika-negative text-[32px] leading-5;
    }
  }
}

.detail {
  @apply flex flex-col gap-3;

  .research-interest {
    @apply flex flex-col gap-1;
  }
}
</style>
