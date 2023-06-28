const { Configuration, OpenAIApi } = require("openai");
const { codeConversionModel } = require("../models/codeConversionModels");

require("dotenv").config();

// Function to generate completion using OpenAI API
async function generateCompletion(input) {
  try {
    const prompt = input;
    const maxTokens = 500;
    const n = 1;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: maxTokens,
      n: n,
    });

    const { choices } = response.data;
    if (choices && choices.length > 0) {
      const completion = choices[0].text.trim();
      return completion;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Handle incoming requests to the /convert route
const codeConversionController = async (req, res) => {
  try {
    const { prompt, language } = req.body;

    // Generate code conversion completion
    let response = await generateCompletion(
      `Convert the following code: ${prompt} to ${language} code. If the code is incorrect or not complete, please make guesses and complete it.`
    );
    
    const data = new codeConversionModel({
      prompt: prompt,
      language: language,
      convertedCode:response
    });
    await data.save();

    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

// Handle incoming requests to the /debug route
const codeConversionControllerDebug = async (req, res) => {
  try {
    const { prompt } = req.body;

    // Generate code debugging completion
    let response = await generateCompletion(
      `Debug the following code: ${prompt}. Please check if there are any errors and also correct them. Additionally, if the code is correct, provide steps on what the code is doing and how we can improve it.`
    );
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

// Handle incoming requests to the /quality route
const codeConversionControllerQuality = async (req, res) => {
  try {
    const { prompt } = req.body;

    // Generate code quality check completion
    let response = await generateCompletion(
      `Check the quality of the following code: ${prompt}. Please provide detailed information and also provide some tips to improve. Provide in points.`
    );
    console.log(response);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  codeConversionController,
  codeConversionControllerDebug,
  codeConversionControllerQuality,
};