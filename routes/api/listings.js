const router = require("express").Router();
const listController = require("../../controllers/listController");

router.route("/search")
  .get(function(req, res){
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


      .then(results => res.json(results.data.properties))
      
      .catch(err => res.status(422).json(err));
  });

//Here's api return
// results.data.items.filter(
  //     result =>
  //       result.properties.thumbnail &&
  //       result.properties.address.line &&
  //       result.properties.address.city &&
  //       result.properties.address.state_code &&
  //       result.properties.address.postal_code &&
  //       result.properties.price &&
  //       result.properties.baths &&
  //       result.properties.beds &&
  //       result.properties.description &&
  //       result.properties.agents.photo.href &&
  //       result.properties.agents.name
  //   )
  // )
  // .then(apiLists =>
  //   db.List.find().then(dbLists =>
  //     apiLists.filter(apiLists =>
  //       dbLists.every(dbList => dblist.googleId.toString() !== apiList.id)
  //     )
  //   )
  // )
  // .then(lists => res.json(lists))

  // .get(listController.findAll)
  // .post(listController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(listController.findById)
//   .put(listController.update)
//   .delete(listController.remove);

module.exports = router;
