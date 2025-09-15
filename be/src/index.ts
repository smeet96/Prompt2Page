require("dotenv").config()
import {GoogleGenAI} from '@google/genai';
import { getSystemPrompt } from './prompts';



const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function main() {
  const response = await ai.models.generateContentStream({
    model: 'gemini-2.0-flash-001',
    contents: [
       {
        role: 'model',
        parts: [
          {
            text: getSystemPrompt() ,
          },
        ],
      },
      {
        role: 'user',
        parts: [{ text: 'Create a simple todo app' }],
      },
    ],
  });
  for await (const chunk of response) {
    console.log(chunk.text);
}
}

main();