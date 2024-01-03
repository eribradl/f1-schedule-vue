<template>
  <Carousel>
    <Slide v-for="slideNumber in 24" :key="slideNumber">
      <Race class="carousel__item" v-if="slideNumber > 0" :raceId="slideNumber"/>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import Race from './components/Race.vue';
import Flag from './components/Flag.vue';
import WeekendSchedule from './components/WeekendSchedule.vue';
import Map from './components/Map.vue';

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Race,
    Flag,
    WeekendSchedule,
    Map
  },
  methods: {
    setPaginationBackgrounds() {

    }
  },
  mounted() {
      this.setPaginationBackgrounds();
  }
})
</script>

<style>
.carousel {
  margin: auto;
  max-width: 90vw;
  width: 100%;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: darkgrey;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}

.carousel__pagination {
  max-width: 70vw;
  background-color: grey;
  margin: auto;
  padding-inline-start: 0px;
}

.carousel__pagination-item {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px
}

.carousel__pagination-button,
.carousel__pagination-button--active,
.carousel__pagination-button:hover::after,
.carousel__pagination-button:after {
  background-color: transparent;
  height: 100%;
  width: 2.5vw;
}
</style>
