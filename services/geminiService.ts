import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing!");
    throw new Error("API Key is required.");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = (): void => {
  try {
    const ai = getAIClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    return "عذراً، نظام الذكاء الاصطناعي غير متوفر حالياً. يرجى التحقق من مفتاح API.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "عذراً، لم أستطع فهم طلبك.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "واجهت مشكلة في الاتصال بالخادم. يرجى المحاولة مرة أخرى.";
  }
};
