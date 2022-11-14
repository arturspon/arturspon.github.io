<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import projectsData from 'src/assets/data/projects';

const { width: windowWidth } = useWindowSize();

const skills = [
  {
    label: 'Laravel',
    icon: 'fa-brands fa-laravel',
    color: 'red-8',
  },
  {
    label: 'Vue.js',
    icon: 'fa-brands fa-vuejs',
    color: 'green-8',
  },
  {
    label: 'Javascript/Typescript',
    icon: 'fa-brands fa-square-js',
    color: 'yellow-8',
    textColor: 'grey-10',
  },
  {
    label: 'React/React Native',
    icon: 'fa-brands fa-react',
    color: 'blue',
  },
  {
    label: 'MySQL',
    icon: 'fa-solid fa-database',
    color: 'grey-8',
  },
  {
    label: 'Docker',
    icon: 'fa-brands fa-docker',
    color: 'blue',
  },
];
</script>

<template>
  <div class="full-height container column items-center justify-evenly">
    <div class="full-height row items-center justify-between full-width gap-4">
      <div class="column q-gutter-lg">
        <div class="column">
          <span class="q-ml-xs text-h6">Hi there, I'm</span>
          <span class="text-h3 text-accent">
            Artur C. Sponchiado<span
              v-motion
              :initial="{
                opacity: 0,
              }"
              :enter="{
                opacity: 1,
                transition: {
                  duration: 300,
                  repeat: Infinity,
                  repeatType: 'mirror',
                },
              }"
              style="display: inline"
              >_</span
            >
          </span>
        </div>
        <!-- <q-separator dark /> -->
        <p class="text-muted">
          Web developer, passionate in building things.
          <br />
          Also game developer sometimes.
        </p>
        <div class="row gap-2">
          <q-btn
            :to="{ name: 'ExperiencePage' }"
            color="primary"
            label="My work experience"
            size="lg"
            icon="school"
            outline
          />
          <q-btn
            :to="{ name: 'PortfolioPage' }"
            color="warning"
            :label="`Explore my ${projectsData.length} projects`"
            size="lg"
            icon="tips_and_updates"
            outline
          />
        </div>

        <div class="column gap-1">
          <b class="q-ml-xs">I work with</b>
          <div>
            <q-chip
              v-for="skill in skills"
              :key="skill.label"
              square
              :color="skill.color"
              :text-color="skill.textColor || 'white'"
              :icon="skill.icon"
            >
              {{ skill.label }}
            </q-chip>
          </div>
        </div>

        <div class="column">
          <b>Contact</b>
          <div class="column gap-1 q-mt-xs">
            <div class="row items-center gap-2">
              <q-icon name="email" size="1rem" />
              <a href="mailto:artursponchi@gmail.com" class="text-white">
                artursponchi@gmail.com
              </a>
            </div>
            <div class="row items-center gap-2">
              <q-icon name="fa-brands fa-github" size="1rem" />
              <a
                href="https://github.com/arturspon"
                class="text-white"
                target="_blank"
              >
                github.com/arturspon
              </a>
            </div>
            <div class="row items-center gap-2">
              <q-icon name="fa-brands fa-linkedin" size="1rem" />
              <a
                href="https://www.linkedin.com/in/arturcs/"
                class="text-white"
                target="_blank"
              >
                linkedin.com/in/arturcs
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="{
          'order-first': windowWidth <= 1440,
        }"
      >
        <q-avatar size="18rem" class="gradient-border">
          <img
            src="~assets/images/arturcs-profile-picture.png"
            style="object-fit: cover; object-position: top"
            draggable="false"
          />
        </q-avatar>
      </div>
    </div>

    <!-- <q-separator class="full-width" dark /> -->
  </div>
</template>

<style scoped></style>
