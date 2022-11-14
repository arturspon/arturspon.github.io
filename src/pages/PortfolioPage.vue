<script setup lang="ts">
import { ref } from 'vue';
import projectsData from 'src/assets/data/projects';

const projects = ref(projectsData);
</script>

<template>
  <div class="container column items-center justify-evenly q-pb-xl">
    <p class="text-h4 q-my-xl">
      Explore my {{ projects.length }} projects below.
    </p>
    <div class="q-gutter-md">
      <q-card v-for="(project, projectIndex) in projects" :key="projectIndex" >
        <q-card-section class="row">
          <div class="col-md-8 column q-gutter-md">
            <div class="row justify-between">
              <div class="text-h4 q-mb-sm column items-start gap-1">
                <img v-if="project.icon" :src="project.icon" height="96" />
                {{ project.title }}
              </div>
              <div class="text-muted">
                {{ project.dates.from }}
                <span v-if="project.dates.to"> - {{ project.dates.to }}</span>
              </div>
            </div>
            <div v-html="project.description"></div>
            <div class="column gap-3">
              <div class="column items-start q-gutter-xs">
                <b>Tecnologies</b>
                <div class="row gap-1">
                  <q-badge
                    v-for="tecnology in project.tecnologies"
                    :key="tecnology"
                    outline
                    color="primary"
                    :label="tecnology"
                  />
                </div>
              </div>
              <div
                v-if="project.badges?.length"
                class="column items-start q-gutter-xs"
              >
                <b>Additional information</b>
                <div class="row gap-1">
                  <q-badge
                    v-for="badge in project.badges"
                    :key="badge"
                    outline
                    color="warning"
                    :label="badge"
                  />
                </div>
              </div>
            </div>
            <div class="row gap-2">
              <q-btn
                v-for="(link, linkIndex) in project.links"
                :key="linkIndex"
                :label="link.label"
                :href="link.url"
                target="_blank"
                color="info"
                icon="open_in_new"
                outline
              />
            </div>
          </div>
          <div class="col">
            <div class="q-pa-md">
              <q-carousel
                v-model="project.slide"
                animated
                arrows
                infinite
                autoplay
                dark
                transition-prev="slide-right"
                transition-next="slide-left"
                style="background: var(--card-color)"
              >
                <q-carousel-slide
                  v-for="(imagePath, imageIndex) in project.images"
                  :key="imageIndex"
                  :name="imageIndex"
                  :img-src="imagePath"
                />
              </q-carousel>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped></style>
