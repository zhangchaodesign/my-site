<template>
  <div class="info">
    <div class="header_wrapper">
      <div class="header">
        <p class="name">Chao Zhang</p>
        <img class="logo" src="@/assets/logo/logo_light.svg" alt="" />
      </div>

      <p class="title">
        Graduate Student (he/him/his) @ ZJU | 23Fall PhD Applicant
      </p>
    </div>

    <div class="detail">
      <p class="paragraph">
        I am a master student in industrial design engineering at
        <a href="https://www.zju.edu.cn/english/">Zhejiang University</a>,
        advised by <a href="https://person.zju.edu.cn/en/yaoch">Cheng Yao</a>. I
        am a UI/UX designer and an HCI researcher. As a <b>DESIGNER</b>, my
        designs was awarded by iF, DIA, A' Design, etc. and exhibited at Dubai
        Design Week and China Design Exhibition. As a <b>RESEARCHER</b>, I
        published at top HCI venues such as CHI, IMWUT, IDC, etc. I was lucky to
        work with <a href="https://toby.li/">Toby Jia-jun Li</a> in the SaNDwich
        Lab at University of Notre Dame,
        <a href="https://www.cse.ust.hk/~mxj/">Xiaojuan Ma</a> in the HCI Group
        at Hong Kong University of Science and Technology,
        <a href="https://scholar.google.com/citations?user=E0R12J4AAAAJ&hl=lv"
          >Yilei Shi</a
        >
        and <a href="https://haimoz.github.io/">Haimo Zhang</a> in th HCI Lab at
        OPPO Research Institue.
      </p>

      <VAnnouncement />

      <div class="research-interest">
        <p class="title">Research Interests</p>

        <div>
          <p class="paragraph">
            With an interdisciplinary background of interaction design
            (continued M.E. from
            <a href="https://www.zju.edu.cn/english/">Zhejiang University</a>),
            digital media (Minor from
            <a href="https://english.jiangnan.edu.cn/">Jiangnan University</a>),
            and electrical engineering (B.S. from
            <a href="https://english.jiangnan.edu.cn/">Jiangnan University</a>),
            my research interest lies in Human-Computer Interaction, at the
            intersection of <b>Human-AI Interaction and Creativity</b>.
            Previously, I designed AI-fused systems to augment human cognition
            and action, and conducted empirical studies to understand human
            perception.
          </p>
          <ul class="paragraph">
            <li>
              <b>Cognition</b>: I designed creativity support tools (CSTs) to
              scaffold children in creativity activities through child-AI
              collaboration, e.g., visual storytelling, music composition, and
              observational drawing.
            </li>
            <li>
              <b>Perception</b>: I conducted empirical studies to understand
              visual art creators' engagement in online critique communities and
              explore how to empower end-users of interfaces to recognize,
              understand, and take action upon UX dark patterns.
            </li>
            <li>
              <b>Action</b>: I proposed computational design approaches for
              general creators in prototyping interactive artifacts, e.g.,
              magnet-based laser-cutting objects and paper-based underwater
              devices.
            </li>
          </ul>
        </div>

        <img class="select-none w-full" :src="interest" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import VAnnouncement from '@/components/VAnnouncement.vue';

export default {
  data() {
    return {
      interest: null
    };
  },
  components: {
    VAnnouncement
  },
  mounted() {
    if (document.body.clientWidth > 1024) {
      this.interest = new URL(
        `../assets/info/research_interest_1.svg`,
        import.meta.url
      ).href;
    } else {
      this.interest = new URL(
        `../assets/info/research_interest_2.svg`,
        import.meta.url
      ).href;
    }
  }
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
