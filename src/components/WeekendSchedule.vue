<template>
   <h4>Race: {{  raceDateTime  }}</h4>
</template>

<script>

export default {
    name: "WeekendSchedule",
    props: ['raceWeekendSchedule'],
    methods: {
        getRaceTime() {
            var dateTime = new Date(this.raceWeekendSchedule.date)
                .toLocaleDateString();
            if (this.raceWeekendSchedule.time) {
                dateTime = new Date(`${this.raceWeekendSchedule.date}T${this.raceWeekendSchedule.time}`)
                    .toLocaleString(navigator.languages[0]);
            }
            return dateTime;
        }
    },
    data() {
        return {
            raceDateTime: '',
        };
    },
    mounted() {
        this.raceDateTime = this.getRaceTime();
    }
};
</script>

<style>
</style>