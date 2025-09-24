require("dotenv").config()
import {GoogleGenAI} from '@google/genai';
import { BASE_PROMPT, getSystemPrompt } from './prompts';
import { basePrompt as reactBasePrompt } from './defaults/react';
import { basePrompt as nodeBasePrompt } from './defaults/node';
import cors from "cors"
import express from 'express'
const app = express()
app.use(express.json())
app.use(cors())

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

app.post("/template" , async (req,res)=> {
const prompt = req.body.prompt

const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: [
       {
        role: 'user',
        parts: [
          {
            text: `${prompt}\n\ Return either "react" or "node" based on the most suitable tech stack for this project. Only return a single word: "react" or "node".` ,
          },
        ],
      }
    ]
})

const answer = response.candidates?.[0]?.content?.parts?.[0]?.text?.trim().toLowerCase() ?? '';

console.log(answer)
if (answer === 'react') {
  res.json({
    prompts : [BASE_PROMPT , `Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n` ],
    uiPrompts : [reactBasePrompt]
  })
  return ;
}

if (answer === 'node') {
  res.json({
    prompts : [`Here is an artifact that contains all files of the project visible to you.\nConsider the contents of ALL files in the project.\n\n${reactBasePrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`],
    uiPrompts : [nodeBasePrompt]
  })
  return ;
}

res.status(403).json({message : "You can not access this"})
return;

})

type Message ={
  role: "user" | "system"
  content: string
}

app.post("/chat" , async (req,res)=> {
  const messages:Message[] = req.body.messages

 const formattedMessages = messages.map((m) => ({
      role: m.role,
      parts: [{ text: m.content }],
    }));

    const contents = [{
      role: "model",
      parts:[{text:getSystemPrompt()}]
      },
    ]

  const response = await ai.models.generateContent({
  model: 'gemini-2.0-flash-001',
  contents: [...contents, ...formattedMessages]
})

console.log(response)

 res.json({
        response: response.candidates?.[0]?.content?.parts?.[0]?.text
    });

})

app.listen(3000)