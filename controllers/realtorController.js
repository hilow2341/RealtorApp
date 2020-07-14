const axios = require("axios");
const db = require("../models");

// Defining methods for the realtorController

// findAll searches the Realtor API and returns only the entries we haven't already saved

// It also makes sure that the listings returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    let queryString = new URLSearchParams(params);

    axios
      .get("https://realtor.p.rapidapi.com/properties/v2/list-for-sale?" + queryString.toString() ,

        {
          "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": "2a3d915d9fmsh97046c7b26f3582p13d051jsndd231ed74692",
            "useQueryString": true
          }
        }) 


      .then(results =>
        results.data.items.filter(
          result =>
            result.properties.thumbnail &&
            result.properties.address.line &&
            result.properties.address.city &&
            result.properties.address.state_code &&
            result.properties.address.postal_code &&
            result.properties.price &&
            result.properties.baths &&
            result.properties.beds &&
            result.properties.description &&
            result.properties.agents.photo.href &&
            result.properties.agents.name
        )
      )
      .then(apiLists =>
        db.List.find().then(dbLists =>
          apiLists.filter(apiLists =>
            dbLists.every(dbList => dblist.googleId.toString() !== apiList.id)
          )
        )
      )
      .then(lists => res.json(lists))
      .catch(err => res.status(422).json(err));
  }
};
