import http from "../http-common";

class RaceDataService {
    getRaceByNumber(idNumber) {
        return http.get(`/races/${idNumber}`);
    }
}

export default new RaceDataService();