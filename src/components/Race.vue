<template>
    <div v-if="currentGeojson" class="show-race">
        <h2>{{ currentRace.raceName }}</h2>
        <Flag :countryCode="getCountryCode()" :raceNumber = "currentRace.round"/>
        <WeekendSchedule :raceWeekendSchedule="currentRace" />
        <Map :center="getGeographicCenter()" :geojson="currentGeojson"/>
    </div>
</template>

<script>
import RaceDataService from "../services/RaceDataService";
import GeoJsonService from "../services/GeoJsonService";
import Flag from './Flag.vue';
import WeekendSchedule from './WeekendSchedule.vue';
import Map from './Map.vue';

export default {
    name: "Race",
    components: {
      Flag,
      WeekendSchedule,
      Map
    },
    props: ['raceId'],
    methods: {
        getRace(idNumber) {
            RaceDataService.getRaceByNumber(idNumber)
              .then(response => {
                this.currentRace = response.data;
                this.getGeojson();
              })
              .catch(e => {
                console.log(e);
              });
        },
        getGeojson() {
          GeoJsonService.getGeojsonByCircuitId(this.currentRace.Circuit.circuitId)
            .then(response => {
              this.currentGeojson = response.data;
            })
            .catch(e=> {
              console.log(e);
            })
        },
        getCountryCode() {
            // return GeoJsonService.getCountryCode(this.currentRace.Circuit.circuitId);
            return this.currentGeojson.name.substring(0, 2);
        },
        getGeographicCenter() {
          var lat = (this.currentGeojson.bbox[0] + this.currentGeojson.bbox[2])/2;
          var lon = (this.currentGeojson.bbox[1] + this.currentGeojson.bbox[3])/2;
          return [lon, lat];
        }
    },
    data() {
        return {
            currentRace: null,
            currentGeojson: null
        };
    },
    mounted() {
        this.getRace(this.raceId);
    }
};
</script>

<style>
#race {
  display: flex;
  flex-direction: column;
}
</style>