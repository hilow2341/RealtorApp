import axios from "axios";

export default {
    //Gets Real Estate from the Realtor API
    getRealestate: function(q) {
        return axios.get("/api/google", { params: { q: "ZipCode:" + q } });
    }
}

// axios({
//     "method":"GET",
//     "url":"https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host":"realtor.p.rapidapi.com",
//     "x-rapidapi-key":"2a3d915d9fmsh97046c7b26f3582p13d051jsndd231ed74692",
//     "useQueryString":true
//     },"params":{
//     "sort":"relevance",
//     "city":"Southport",
//     "limit":"10",
//     "offset":"0",
//     "state_code":"CT",
//     "postal_code": "06890"
//     }
//     })
//     .then((response)=>{
//       console.log(response)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })

// export default API;