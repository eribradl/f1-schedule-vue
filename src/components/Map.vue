<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LGeoJson } from "@vue-leaflet/vue-leaflet";
import {ref} from "vue";

const props = defineProps(['center', 'geojson']);

let zoom = ref(14);
let center = ref(props.center);
let geojson = ref(props.geojson);
</script>

<template>
  <div id="map">
    <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
      <l-tile-layer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    layer-type="base"
                    name="Stadia Maps Basemap"></l-tile-layer>
      <l-geo-json v-model:geojson="geojson"></l-geo-json>
    </l-map>
  </div>
</template>

<style>
#map {
  height: 50vh;
  width: 70vw;
  margin: auto;
  padding: 10px;
}
</style>