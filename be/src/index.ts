require("dotenv").config()
import {GoogleGenAI} from '@google/genai';



const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function main() {
  const response = await ai.models.generateContentStream({
    model: 'gemini-2.0-flash-001',
    contents: 'what is 69 + 69',
  });
  for await (const chunk of response) {
    console.log(chunk.text);
}
}

main();