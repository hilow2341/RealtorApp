import axios from "axios";

export default {
    //Gets Real Estate from the Realtor API
    getRealestate: function(q) {
        return axios.get("/api/listings", { params: { q: "postal_code:" + q } });
    }
}

