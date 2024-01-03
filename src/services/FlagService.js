import http from "../http-common";

class FlagService {
    getFlag(country) {
        return country;
        // return http.get(`/races/${id}`);
    }
}

export default new FlagService();