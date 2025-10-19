const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("process.env.GEMINI_API_KEY");
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    temperature: 0.2,

})


const prompt = "Random Gibberish work";


const result = await modelgenerateContent(prompt);

console.log(result.response.text());


async function generateContent(prompt) {
     
    const result = await model.generateContent(prompt);

    return result.response.text();
}


module.exports = generateContent;