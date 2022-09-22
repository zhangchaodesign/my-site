<template>
  <div class="resume">
    <div class="resume-combine">
      <div class="resume-block">
        <p class="resume-title">Education Experiences</p>
        <div class="resume_entry">
          <p class="date">09/2020 - Present</p>
          <p class="content">
            M.E. in Industrial Design, Zhejiang University, China
          </p>
        </div>
        <div class="resume_entry">
          <p class="date">09/2016 - 07/2020</p>
          <p class="content">
            B.S. in Electrical Engineering, Jiangnan University, China
          </p>
        </div>
        <div class="resume_entry">
          <p class="date">03/2017 - 07/2020</p>
          <p class="content">
            Minor in Digital Media Technology, Jiangnan University, China
          </p>
        </div>
        <div class="resume_entry">
          <p class="date">07/2018 - 08/2018</p>
          <p class="content">
            Computer Science Summer Program, National University of Singapore,
            Singapore
          </p>
        </div>
      </div>
      <div class="resume-block">
        <p class="resume-title">Research Experiences</p>
        <div class="resume_entry">
          <p class="date">05/2022 - Present</p>
          <p class="content">
            SaNDwich Lab @ University of Notre Dame, advised by Toby Jia-jun Li
          </p>
        </div>
        <div class="resume_entry">
          <p class="date">06/2022 - 09/2022</p>
          <p class="content">
            HCI Group @ Hong Kong University of Science and Technology, advised
            by Xiaojuan Ma
          </p>
        </div>
        <div class="resume_entry">
          <p class="date">01/2022 - 04/2022</p>
          <p class="content">
            HCI Lab @ OPPO Research Institute, mentored by Haimo Zhang and Yilei
            Shi
          </p>
        </div>
        <div class="resume_entry">
          <p class="date">07/2020 - 09/2020</p>
          <p class="content">
            INNO Lab @ Zhejiang University, advised by Cheng Yao and Fangtian
            Ying
          </p>
        </div>
      </div>
    </div>
    <div class="resume-block">
      <p class="resume-title">Design Awards & Exhibitions</p>
      <div class="resume_entry">
        <p class="content">Iron Award, 2022 A' Design Award, Italy</p>
      </div>
      <div class="resume_entry">
        <p class="content">China Design Exhibition, 2022, China</p>
      </div>
      <div class="resume_entry">
        <p class="content">iF Talent Award, 2021 iF Design, Germany</p>
      </div>
      <div class="resume_entry">
        <p class="content">
          Honorable Mention, 2021 Design Intelligence Award (DIA), China
        </p>
      </div>
      <div class="resume_entry">
        <p class="content">
          Nominations Award, 2021 International Designer Club Award, Malaysia
        </p>
      </div>
      <div class="resume_entry">
        <p class="content">
          Outstanding Winner (Top 1), 2021 C4-AI Innovation Contest, China
        </p>
      </div>
      <div class="resume_entry">
        <p class="content">
          Outstanding Winner (Top 10), 2021 China Graduate AI Innovation
          Competition, China
        </p>
      </div>
      <div class="resume_entry">
        <p class="content">Finalist (Top 20) x 4, 2021 UXD Award, China</p>
      </div>
      <div class="resume_entry">
        <p class="content">
          Dubai Design Week x 2, 2021, The United Arab Emirates
        </p>
      </div>
      <div class="resume_entry">
        <p class="content">
          "Ecological Bridge" Innovative Design Exhibition x 3, 2021, China
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.resume {
  @apply flex flex-row justify-between p-3;

  .resume-combine {
    @apply flex flex-col gap-4;
  }

  .resume-block {
    @apply flex flex-col gap-1;
  }

  .resume-title {
    @apply font-signika-negative text-lg select-none cursor-pointer text-dark uppercase;
  }

  .resume_entry {
    @apply flex flex-row gap-1 font-open-sans font-medium text-xxs leading-5 text-black text-opacity-60;

    .date {
      @apply italic;
    }
  }
}
</style>
