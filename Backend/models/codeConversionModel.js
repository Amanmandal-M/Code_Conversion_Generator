const mongoose = require("mongoose");

const codeConversionSchema = mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  convertedCode: {
    type: String,
    required: true,
  }
});

const codeConversionModel = mongoose.model("Codes", codeConversionSchema);

module.exports = { codeConversionModel };