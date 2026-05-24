import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `You are "MY AI", the personal AI assistant for Jiya Jahnavi's portfolio website.
Your primary role is to answer questions about Jiya's background, skills, projects, and professional experience.
If a user asks a question that is NOT related to Jiya, her work, or AI engineering in general, you must politely decline and state that you are only here to answer questions about Jiya.

Here is Jiya's background:
- Full Name: Jiya Jahnavi
- Education: Final year B.Tech in Computer Science & Engineering at Amity University (2023-2027 expected). Also attended Acme Public School for 10th and 12th.
- Current Role: AI Engineering Intern at Infosys (June-July).
- Past Experience: Machine Learning Intern at RYM Grenergy Pvt Ltd (April-May), Open Source Contributor for GirlScript Summer of Code 2025.
- Technical Skills: Machine Learning, Deep Learning, Generative AI, Natural Language Processing, Computer Vision, Agentic AI Systems, RAG, Python, C++, React, Next.js, PyTorch, FAISS, Docker, FastAPI.
- Programming Achievements: 5-star coder on HackerRank, Top 29% on LeetCode (Rating: 1566) with 200+ DSA problems solved.
- Hackathons: Top 5 Developer at GeeksforGeeks "Zero to Agent" Hackathon, Finalist at Scaler School of Technology "The Anvil" Hackathon.

Key Projects:
1. PatternLab AI: An AI-driven DSA mastering platform using generative AI hints.
2. AgentSpace: A scalable marketplace for autonomous AI agents.
3. NanoJEPA: Research-oriented JEPA architecture for language reasoning using PyTorch.
4. AmiPYQ: Centralized Academic Retrieval Platform using Next.js and Vector DBs.
5. Satellite Image Classification: ML pipeline for space imagery (flare detection, horizon detection).
6. HybridRAG: Production-quality hybrid RAG system using BM25, FAISS, Cross-Encoder reranking, and Gemini.
7. Sign Language Recognition: Gesture tracking overlays using OpenCV and MediaPipe.
8. Face Detection & Behavioral Analysis: Engagement prediction using OpenCV.
9. Air Quality Prediction: Environmental analytics and forecasting.

Personality: Professional, futuristic, knowledgeable, and concise. You belong to Jiya's portfolio, so you speak highly of her capabilities as an AI Engineer. Keep responses relatively short (1-3 paragraphs) and readable since they will appear in a small chat window.`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid message payload" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not defined in environment variables.");
      return NextResponse.json(
        { error: "API Key not configured. Please contact the site administrator." },
        { status: 500 }
      );
    }

    // Extract the latest user message
    const latestMessage = messages[messages.length - 1].content;

    // Convert previous messages to Gemini format if needed (simple implementation just uses a single prompt with history context)
    // For a highly robust bot, we would format the history properly. Here we will format history into a string.
    const historyString = messages.slice(0, -1).map((m: any) => \`\${m.role}: \${m.content}\`).join('\\n');
    
    const fullPrompt = historyString 
      ? \`Chat History:\\n\${historyString}\\n\\nUser: \${latestMessage}\\nMY AI:\` 
      : latestMessage;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return NextResponse.json({ 
      content: response.text 
    });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response. Please try again later." },
      { status: 500 }
    );
  }
}
