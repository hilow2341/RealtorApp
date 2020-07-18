const path = require("path");
const router = require("express").Router();
const listRoutes = require("./listings");
const realtorRoutes = require("./realtor");

// Book routes
router.use("/listings", listRoutes);

// Google Routes
router.use("/realtor", realtorRoutes);

module.exports = router;
