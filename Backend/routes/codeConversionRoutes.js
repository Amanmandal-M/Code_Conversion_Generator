const express = require("express");
const codeConversionRouter = express.Router();

const {
  codeConversionController,
  codeConversionControllerDebug,
  codeConversionControllerQuality,
} = require("../controllers/codeConversionController");

// Endpoint for converting code
codeConversionRouter.post("/convert", codeConversionController);

// Endpoint for debugging code
codeConversionRouter.post("/debug", codeConversionControllerDebug);

// Endpoint for checking code quality
codeConversionRouter.post("/quality", codeConversionControllerQuality);

module.exports = { codeConversionRouter };
