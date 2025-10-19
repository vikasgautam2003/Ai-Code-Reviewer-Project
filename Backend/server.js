const app = require('./src/app');
require("dotenv").config();


console.log("Gemini Key:", process.env.GEMINI_API_KEY);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})