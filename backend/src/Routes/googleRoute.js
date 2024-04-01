const express = require("express");
const router = express.Router();
const { redirectToGoogleConsent, googleCallback } = require("../Controller/msgController");


router.get("/",redirectToGoogleConsent);
router.get("/oauth/google/callback",googleCallback);

module.exports = router;