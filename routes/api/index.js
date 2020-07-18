const path = require("path");
const router = require("express").Router();
const listRoutes = require("./listings");
const realtorRoutes = require("./realtor");


router.use("/listings", listRoutes);


router.use("/realtor", realtorRoutes);

module.exports = router;
