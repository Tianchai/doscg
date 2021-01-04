<template>
  <article class="py-sm-4" id="cv">
    <div class="container overflow-hidden position-relative p-4 bg-white border">
      <div class="position-absolute w-200 h-50 top-0 left-0" id="bg-top"></div>
      <div class="position-absolute w-200 h-50 bottom-0 right-0" id="bg-bottom"></div>
      <div class="row">
        <section class="col-12 col-md-4" id="profile-img">
          <div class="rounded-circle border border-primary m-auto" id="image-box"></div>
        </section>
        <section
          class="col-12 col-md-4 order-md-first pt-3 pt-md-0 text-center text-md-left"
          id="full-name"
        >
          <h1 class="d-inline-block d-md-block mx-1 m-md-0">{{ firstName }}</h1>
          <h1 class="d-inline-block d-md-block mx-1 m-md-0">{{ lastName }}</h1>
          <h5 class="font-weight-light text-primary mt-0 mt-md-2 mb-3">{{ title }}</h5>
        </section>
        <section class="col-12 col-md-4" id="contact">
          <div class="row m-0 mt-2 mt-lg-0 mb-n2">
            <div
              v-for="(contactData, index) in contact"
              :key="index"
              class="col-12 col-sm-6 col-md-12 text-nowrap p-0 mb-2 drt-ltr"
              :class="{
                'drt-md-rtl text-md-right': index % 2 == 0,
                'drt-sm-rtl text-sm-right': index % 2 != 0
              }"
            >
              <div
                class="d-inline-block w-24px text-center pr-2"
                :class="{
                  'pr-md-0 pl-md-2': index % 2 == 0,
                  'pr-sm-0 pl-sm-2': index % 2 != 0
                }"
              >
                <font-awesome-icon :icon="contactData.icon" />
              </div>
              <a class="text-dark" :href="contactData.href">{{ contactData.label }}</a>
            </div>
          </div>
        </section>
      </div>
      <hr class="mx-n4" />
      <div class="row justify-content-between">
        <div class="col-12 col-lg-6 mb-lg-n4">
          <section class="mb-4" id="work-experience">
            <h4 class="font-weight-bold text-uppercase">Work Experience</h4>
            <div
              v-for="(expData, index) in experience"
              :key="index"
              :class="{'mb-3': index < experience.length - 1}"
            >
              <h5 class="font-weight-bold m-0">{{ expData.position }}</h5>
              <h5 class="m-0">{{ expData.company }}</h5>
              <div class="row justify-content-between mx-0 my-2">
                <div class="col-auto p-0">
                  <h6 class="font-weight-light font-italic text-primary m-0">
                    {{ expData.period[0] }} - {{ expData.period[1] }}
                  </h6>
                </div>
                <div class="col-auto p-0">
                  <h6 class="font-weight-light font-italic text-primary m-0">
                    {{ expData.location[0] }}, {{ expData.location[1] }}
                  </h6>
                </div>
              </div>
              <ul class="pl-3 m-0">
                <li
                  v-for="(desc, subIndex) in expData.description"
                  :key="subIndex"
                  class="text-primary"
                >
                  <span class="text-body">{{ desc }}</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div class="col-12 col-lg-6 pl-lg-5 mb-n4">
          <section class="mb-4" id="technical-skills">
            <h4 class="font-weight-bold text-uppercase">Technical Skills</h4>
            <div
              v-for="(skillData, index) in skills.tech"
              :key="index"
              :class="{'mb-2': index < skills.tech.length - 1}"
            >
              <p class="font-weight-bold m-0">{{ skillData.label }}</p>
              <span v-for="(techSkill, subIndex) in skillData.value" :key="subIndex">
                {{ techSkill }}<template v-if="subIndex < skillData.value.length - 1">,</template>
              </span>
            </div>
          </section>
          <section class="mb-4" id="soft-skills">
            <h4 class="font-weight-bold text-uppercase">Soft Skills</h4>
            <div class="row mx-0 mb-n2">
              <div v-for="(softSkill, index) in skills.soft" :key="index" class="col-6 p-0 mb-2">
                {{ softSkill }}
              </div>
            </div>
          </section>
          <section class="mb-4" id="education">
            <h4 class="font-weight-bold text-uppercase">Education</h4>
            <div class="row mx-0 mb-n3">
              <div
                v-for="(eduData, index) in educations"
                :key="index"
                class="col-12 col-md-6 col-lg-12 p-0 mb-3"
              >
                <h5 class="font-weight-bold m-0">{{ eduData.degree }}</h5>
                <h5 class="m-0">{{ eduData.institute }}</h5>
                <h6 class="font-weight-light font-italic text-primary mb-0 mt-1">
                  {{ eduData.period[0] }} - {{ eduData.period[1] }}
                </h6>
              </div>
            </div>
          </section>
          <section class="mb-4" id="achievements">
            <h4 class="font-weight-bold text-uppercase">Achievements</h4>
            <div v-for="(achData, index) in achievements" :key="index">
              <h5 class="m-0">{{ achData.title }}</h5>
              <h6 class="font-weight-light font-italic text-secondary mb-0 mt-1">
                {{ achData.subtitle }}
              </h6>
            </div>
          </section>
          <section class="mb-4" id="interests">
            <h4 class="font-weight-bold text-uppercase">Interests</h4>
            <div
              v-for="(intData, index) in interests"
              :key="index"
              class="d-inline-block border rounded-lg px-3 py-1 mr-2 mb-2 bg-white"
            >
              {{ intData }}
            </div>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CV',
  data() {
    return {
      firstName: 'Tianchai',
      lastName: 'Riengviwat',
      title: 'Full-Stack Developer',
      image: '',
      contact: [
        {
          icon: ['fas', 'envelope'],
          label: 'tianchai.riengviwat@gmail.com',
          href: 'mailto:tianchai.riengviwat@gmail.com',
        },
        {
          icon: ['fas', 'mobile-alt'],
          label: '062-545-7474',
          href: 'tel:+6625457474',
        },
        {
          icon: ['fab', 'linkedin-in'],
          label: 'linkedin.com/in/tianchai-r',
          href: 'https://linkedin.com/in/tianchai-r',
        },
        {
          icon: ['fab', 'github'],
          label: 'github.com/tianchai',
          href: 'https://github.com/tianchai',
        },
      ],
      skills: {
        tech: [
          {
            label: 'Language',
            value: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
          },
          {
            label: 'Frontend',
            value: ['Bootstrap', 'jQuery', 'Vue.js', 'Angular', 'Responsive Design'],
          },
          {
            label: 'Backend',
            value: ['Django', 'REST API', 'PostgreSQL', 'GraphQL'],
          },
          {
            label: 'Tool',
            value: ['Git', 'Docker', 'NGINX', 'Linux', 'PyCharm', 'Adobe Photoshop'],
          },
        ],
        soft: [].concat(
          ['Analytical', 'Problem Solving', 'Idea Exchange', 'Positive Thinking', 'Leadership'],
          ['Teamwork', 'Coaching', 'Adaptability', 'Patience', 'Communication Skills'],
        ),
      },
      experience: [
        {
          position: 'Frontend Engineering Assistant Manager',
          company: 'Aegon Insights (Thailand) Limited',
          period: ['09/2019', 'Present'],
          location: ['Bangkok', 'Thailand'],
          description: [
            'Customize frontend interfaces for various insurance partners and channel partners.',
            'Enumerate best practices for code management like code reviews, unit tests,' +
            ' and practice what is preached.',
            'Build infrastructure for configuration and control mechanisms for handling various' +
            ' channels.',
            'Work with the rest of engineering team (India, Indonesia) to build the various' +
            ' insurance categories. (travel, motor, etc.)',
            'Mentor and help newer team members to onboard.',
            'Technologies: HTML5, SCSS, TypeScript, Vue.js, Bulma, GraphQL, Git.',
          ],
        },
        {
          position: 'Software Developer',
          company: 'CODIUM Co., Ltd.',
          period: ['09/2018', '08/2019'],
          location: ['Bangkok', 'Thailand'],
          description: [
            'Developed and maintained the frontend and backend functionality of websites for' +
            ' customers. (e.g. Football Association of Thailand, SBRAND)',
            'Designed wire-frames and mock-ups for a wide range of devices and interfaces.',
            'Provided guidance to other team members on web development issues.',
            'Technologies: HTML5, SCSS, TypeScript, Angular, Bootstrap, Python, Django,' +
            ' REST API, PostgreSQL, Docker, Git.',
          ],
        },
        {
          position: 'Software Engineer',
          company: 'Intelligent Millionaire Co., Ltd.',
          period: ['08/2016', '09/2018'],
          location: ['Bangkok', 'Thailand'],
          description: [
            'Developed, maintained, and supported web applications to meet functional and' +
            ' non-functional requirements.',
            'Analyzed, debugged and resolved defects or production issues.',
            'Worked with project manager, UI/UX designer and senior web developer.',
            'Technologies: HTML5, CSS3, JavaScript, Bootstrap, jQuery, Python, Django,' +
            ' PostgreSQL, PHP, Yii2, MySQL, Git.',
          ],
        },
      ],
      educations: [
        {
          degree: 'B.Eng. - Computer Engineering',
          institute: 'Chulalongkorn University',
          period: ['2012', '2016'],
        },
        {
          degree: 'Mathematics-Science',
          institute: 'Traimudom Suksa School',
          period: ['2009', '2012'],
        },
      ],
      achievements: [
        {
          title: 'TOEIC (12/2015)',
          subtitle: 'Test score: 815',
        },
      ],
      interests: [
        'Self Improvement', 'Reading', 'Volunteer', 'Badminton', 'Swimming',
        'Board Games', 'Games', 'Anime', 'Manga',
      ],
    };
  },
};
</script>

<style scoped>
#bg-top {
  background-image: url("/static/bg-top.svg");
  background-repeat: no-repeat;
  background-position: top left;
}
#bg-bottom {
  background-image: url("/static/bg-bottom.svg");
  background-repeat: no-repeat;
  background-position: bottom right;
}
#image-box {
  width: 125px;
  height: 125px;
  border-width: 3px !important;
  background-image: url("/static/profile.png");
  background-repeat: no-repeat;
  background-size: cover;
}
#full-name h1 {
  font-size: 2rem;
}
@media screen and (min-width: 768px) {
  #full-name h1 {
    font-size: 2.25rem;
  }
}
</style>
