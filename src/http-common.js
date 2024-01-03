import axios from "axios";

export default axios.create({
    baseURL: "https://ebradley-db.ddns.net:3000",
    headers: {
        "Content-type": "application/json"
    }
});