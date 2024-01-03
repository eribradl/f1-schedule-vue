import http from "../http-common";

class GeoJsonService {
    getCountryCode(raceName) {
        const circuitCodeMap = new Map([
            ['bahrain', 'bh-2002'],
            ['jeddah', 'sa-2021'],
            ['albert_park', 'au-1953'],
            ['shanghai', 'cn-2004'],
            ['baku', 'az-2016'],
            ['miami', 'us-2022'],
            ['imola', 'it-1953'],
            ['monaco', 'mc-1929'],
            ['catalunya', 'es-1991'],
            ['villeneuve', 'ca-1978'],
            ['red_bull_ring', 'at-1969'],
            ['silverstone', 'gb-1948'],
            ['hungaroring', 'hu-1986'],
            ['spa', 'be-1925'],
            ['zandvoort', 'nl-1948'],
            ['monza', 'it-1922'],
            ['marina_bay', 'sg-2008'],
            ['suzuka', 'jp-1962'],
            ['losail', 'qa-2004'],
            ['americas', 'us-2012'],
            ['rodriguez', 'mx-1962'],
            ['interlagos', 'br-1940'],
            ['vegas', 'us-2023'],
            ['yas_marina', 'ae-2009'],
        ]);
        const countryCode = circuitCodeMap.get(raceName).substring(0, 2);
        return countryCode;
    }

    getGeojsonByCircuitId(circuitId) {
        return http.get(`/geojsons/${circuitId}`);
    }
}

export default new GeoJsonService();