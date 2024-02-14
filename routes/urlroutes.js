const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const DashboardController = require("../controllers/DashboardController");

router.post("/url", body("url").notEmpty(), DashboardController.storeUrl);

router.get("/url/:email", DashboardController.getUrl);

router.post(
  "/key",
  [body("apikey").notEmpty(), body("keyname").notEmpty()],
  DashboardController.storeKey
);

router.get("/key/:email", DashboardController.getKey);

/// porfoilo routes
router.post(
  "/portfoilo",
  [body("portfoilourl").notEmpty(), body("imageurl").notEmpty()],
  DashboardController.StorePortfoilo
);

router.get("/portfoilo", DashboardController.getPortfoilo);

module.exports = router;
