<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';

const { y: yScroll } = useWindowScroll();
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="column">
        <q-tabs
          class="navbar text-accent"
          :class="{
            'navbar--backdrop': yScroll > 32,
          }"
          stretch
          inline-label
          switch-indicator
        >
          <q-route-tab :to="{ name: 'HomePage' }" label="Home" icon="home" />
          <q-route-tab
            :to="{ name: 'ExperiencePage' }"
            label="Experience"
            icon="school"
          />
          <q-route-tab
            :to="{ name: 'PortfolioPage' }"
            label="Portfolio"
            icon="tips_and_updates"
          />
        </q-tabs>
        <router-view v-slot="{ Component }" class="col">
          <transition name="scale" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1;
}

.navbar--backdrop {
  backdrop-filter: blur(8px) saturate(75%);
  border-bottom: 1px solid #6a6a6a;
  background-color: #ffffff1c;
}
</style>
