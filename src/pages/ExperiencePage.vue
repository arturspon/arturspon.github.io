<script setup lang="ts">
const timelineItems = [
  {
    title: 'Full Stack Developer at CONVICTI',
    subtitle: 'Sep 2019 - Sep 2022',
    icon: 'work',
    body: 'Working for <a class="text-blue" href="https://convicti.com.br/" target="_blank">CONVICTI</a> I was responsible to develop solutions to frontend and backend in multiple projects. Our frontend stack was Vue.js, jQuery and Bootstrap. Our backend stack was PHP (Codeigniter and Laravel). Also, I was responsible to delegate tasks to interns and review code from them. Besides that, since CONVICTI is a "software house" like company, I also participate in meetings with customers to understand and define the next features to be developed.',
  },
  {
    title: 'End of college',
    subtitle: 'June, 2020',
    icon: 'school',
    body: "In 2020, I got my bachelor's degree in Computer Science.",
  },
  {
    title: 'Internship at Federal University of Fronteira Sul',
    subtitle: 'Jun 2019 - Sep 2019',
    icon: 'work',
    body: 'As a web developer intern, I helped my colleagues maintaining the main university <a class="text-blue" href="https://www.uffs.edu.br/" target="_blank">website</a>. We used tecnologies like Bootstrap, Python, Javascript, jQuery and Plone.',
  },
  {
    title: 'College',
    subtitle: 'January, 2016',
    icon: 'class',
    body: 'At the beginning of 2016, I started studying Computer Science at <a class="text-blue" href="https://www.uffs.edu.br/" target="_blank">Federal University of Fronteira Sul</a>, located at the city of Chapecó, Santa Catarina, Brazil.',
  },
];
</script>

<template>
  <div class="container q-py-md">
    <div>
      <h3 class="no-margin">Education</h3>

      <p class="q-mt-md">
        I have a bachelor's degree in Computer Science.
        <br />
        I graduated from the
        <a class="text-blue" href="https://www.uffs.edu.br/" target="_blank">
          Federal University of Fronteira Sul</a
        >.
        <br />
        <span class="text-muted">2016 - 2020</span>
      </p>

      <q-btn
        color="primary"
        icon="open_in_new"
        label="Get my resume"
        href="files/resumes/Artur_CV_EN.pdf"
        target="_blank"
        outline
      />
    </div>

    <q-timeline class="q-mt-xl" color="accent">
      <q-timeline-entry heading body="Experience" />
      <q-timeline-entry
        v-for="(item, itemIndex) in timelineItems"
        :key="itemIndex"
        :title="item.title"
        :subtitle="item.subtitle"
        :icon="item.icon"
      >
        <div v-html="item.body"></div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<style scoped></style>
