import axios from "axios";

export default {
    //Gets Real Estate from the Realtor API
    getRealestate: function(c, s) {
        console.log('API', c, s)
        return axios.get("/api/listings/search", { params: { c:c, s:s } });
    }
}

