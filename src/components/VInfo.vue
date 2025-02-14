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
        I am a second-year Ph.D. student in the Department of Information Science at
        <a href="https://www.cornell.edu/">Cornell University</a>, advised by
        <a href="http://jeffrz.com/">Dr. Jeff Rzeszotarski</a>. Beyond Cornell, I also
        work closely with <a href="https://ying-xu.com/">Dr. Ying Xu</a> from Harvard
        University. Prior to joining Cornell, I earned my Master's degree in Design
        Engineering from
        <a href="https://www.zju.edu.cn/english/">Zhejiang University</a>, during which I
        was fortunate to be a visiting student researcher at the SaNDwich Lab led by
        <a href="https://toby.li/">Dr. Toby Jia-Jun Li</a> at the University of Notre
        Dame. I received my Bachelor's degree in Electrical Engineering from
        <a href="https://english.jiangnan.edu.cn/">Jiangnan University</a>.
      </p>

      <div class="research-interest">
        <p class="title">Research Interests</p>

        <!-- <img class="select-none w-100" :src="interest" alt="" /> -->

        <div>
          <p class="paragraph">
            As a <b>technical systems researcher and designer</b> in
            <b>Human-Computer Interaction</b>, I use human-centered methods to
            <b
              >study, design, and build AI-powered interactive systems that offer
              value-sensitive support for humans navigating complex cognitive tasks</b
            >, such as sensemaking, learning, and creating. My past work has contributed
            to the development of various storytelling tools for children, aiming to
            foster their creativity (e.g.,
            <a href="https://dl.acm.org/doi/abs/10.1145/3491102.3501914">StoryDrawer</a>),
            help them understand complex STEM concepts (e.g.,
            <a href="https://dl.acm.org/doi/10.1145/3613904.3642647">Mathemyths</a>), and
            encourage them to learn about the world around them (e.g.,
            <a href="https://dl.acm.org/doi/abs/10.1145/3585088.3589380"
              >Observe It, Draw It</a
            >). Currently, my research focuses on studying and designing AI-infused visual
            interfaces to support feedback-based learning in creative domains (e.g.,
            Friction), such as helping novice writers reflect on and act upon large-scale
            feedback comments to revise their essays.
          </p>
        </div>

        <div>
          <p class="paragraph mt-2">
            My work has been published in top-tier Human-Computer Interaction venues,
            including CHI, CSCW, IMWUT, and IDC. This includes two award-winning papers
            🏆: a Best Paper at CSCW '24 and a Best Short Paper at IDC '24. My projects
            have also been recognized with international design awards and competitions,
            such as Red Dot Award, iF Design Award, A' Design Award, and James Dyson
            Award, and have been featured at notable events, including Dubai Design Week
            and China Design Exhibition.
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
