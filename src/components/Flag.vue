<template>
    <img :src="this.flagSource">
</template>

<script>
import FlagService from "../services/FlagService";

export default {
    name: "Flag",
    props: ['countryCode', 'raceNumber'],
    methods: {
        setPaginationButtonBackground() {
            var paginationList = document.querySelector(".carousel__pagination");
            var currentPaginationListItem = paginationList.getElementsByTagName("li")[this.raceNumber - 1];
            currentPaginationListItem.style.background = "url('" + this.iconSource + "')";
            currentPaginationListItem.style.backgroundSize = "contain";
            currentPaginationListItem.style.backgroundRepeat= "no-repeat";
            currentPaginationListItem.style.margin = "5px";
        }
    },
    data() {
        return {
            flagSource: '',
        };
    },
    mounted() {
        this.flagSource = `https://flagcdn.com/${this.countryCode}.svg`;
        this.iconSource = `https://hatscripts.github.io/circle-flags/flags/${this.countryCode}.svg`
        this.setPaginationButtonBackground();
        // this.getFlag(this.country);
    }
};
</script>

<style>
img { 
    height: 15vh;
}
</style>