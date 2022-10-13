<template>
  <div class="info">
    <div class="header_wrapper">
      <div class="header">
        <p class="name">Chao Zhang</p>
        <img class="logo" src="@/assets/logo/logo_light.svg" alt="" />
      </div>

      <p class="title">Graduate Student (he/him/his) @ ZJU | 23Fall Ph.D. Applicant</p>
    </div>

    <div class="detail">
      <p class="paragraph">
        I am a final-year mastesr student at
        <a href="https://www.zju.edu.cn/english/">Zhejiang University</a>, advised by
        Prof. <a href="https://person.zju.edu.cn/en/yaoch">Cheng Yao</a>. I am a UI/UX
        designer and an HCI researcher. As a <b>DESIGNER</b>, my designs were awarded by
        iF, DIA, A' Design, etc. and exhibited at Dubai Design Week and China Design
        Exhibition. As a <b>RESEARCHER</b>, I published at top HCI venues such as CHI,
        IMWUT, IDC, etc. I worked closely with Prof.
        <a href="https://toby.li/">Toby Jia-jun Li</a> (University of Notre Dame), Prof.
        <a href="http://yaxingyao.com/">Yaxing Yao</a> (University of Maryland, Baltimore
        County), Prof. <a href="https://www.cse.ust.hk/~mxj/">Xiaojuan Ma</a> (Hong Kong
        University of Science and Technology), and Dr.
        <a href="https://scholar.google.com/citations?user=E0R12J4AAAAJ&hl=lv"
          >Yilei Shi</a
        >
        and Dr. <a href="https://haimoz.github.io/">Haimo Zhang</a> (OPPO Research
        Institue).
      </p>

      <VAnnouncement />

      <div class="research-interest">
        <p class="title">Research Interests</p>

        <div>
          <p class="paragraph">
            With an interdisciplinary background in Industrial Design (continued M.E. from
            <a href="https://www.zju.edu.cn/english/">Zhejiang University</a>), Electrical
            Engineering (B.S. from
            <a href="https://english.jiangnan.edu.cn/">Jiangnan University</a>), and
            Digital Media Technology (Minor from
            <a href="https://english.jiangnan.edu.cn/">Jiangnan University</a>), my
            research interest lies in Human-Computer Interaction, at the intersection of
            <b>Digital Youth</b>, <b>Human-AI Collaboration</b>, and
            <b>User Experience</b>.
            <!-- Previously, I designed AI-fused
            systems to augment human cognition and action, and conducted
            empirical studies to understand human perception. -->
          </p>
          <ul class="paragraph">
            <li>
              <b>Digital Youth</b>: My first research interest is designing interactive
              technologies to scaffold children in creating, learning, and understanding
              the world. For example, I developed AI-fused creativity support tools (CSTs)
              that engage children in creativity activities such as visual storytelling,
              music composition, and observational drawing.
            </li>
            <li>
              <b>Human-AI Collaboration</b>: My second research interest is exploring
              human-AI collaborative approaches to augment human capabilities of cognition
              (e.g., creativity, engagement), perception (e.g., observation), and action
              (e.g., design).
            </li>
            <li>
              <b>User Experience</b>: My third research interest is investigating ethical
              issues (e.g., dark patterns) and intervention techniques in user experience
              design to empower end users in regaining autonomy from malicious
              technologies.
            </li>
          </ul>
          <!-- <ul class="paragraph">
            <li>
              <b>Human-AI Collaboration</b>: My first research interest is
              exploring human-AI collaborative approaches to augment human
              capabilities of cognition (e.g., creativity, engagement),
              perception (e.g., observation), and action (e.g., design).
            </li>
            <li>
              <b>Digital Youth</b>: My second research interest is designing
              interactive technologies to scaffold children in creating,
              learning, and understanding the world. For example, I developed
              AI-fused creativity support tools (CSTs) for children to engage
              creativity activities such as visual storytelling, music
              composition, and observational drawing.
            </li>
            <li>
              <b>Computational Design</b>: My third research interest is
              crafting design tools to broaden creative possibilities for
              designers in prototyping interactive artifacts, e.g., magnet-based
              laser-cutting objects and paper-based underwater devices.
            </li>
          </ul> -->
          <!-- <ul class="paragraph">
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
          </ul> -->
        </div>

        <img class="select-none w-full" :src="interest" alt="" />
      </div>
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
