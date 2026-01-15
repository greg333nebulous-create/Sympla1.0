
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askEventAssistant = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `O usuário está visualizando o evento "Folk Valley Apresenta: Matheus & Kauan e Murilo Huff". 
      Informações do evento:
      - Data Início: 31 de Janeiro de 2026, às 17:00.
      - Data Término: 01 de Fevereiro de 2026, às 02:00.
      - Local: Folk Valley, Valinhos - SP.
      - Atrações: Matheus & Kauan e Murilo Huff.
      - Ingressos: Lote 1 por R$ 90,00 (+ R$ 21,90 de taxa).
      - Condições Especiais: Oferta Pix Relâmpago disponível.
      - Parcelamento: Até 12x.
      
      Responda de forma curta e amigável como se fosse o suporte da Sympla.
      
      Mensagem do usuário: ${userMessage}`,
      config: {
        temperature: 0.7,
        topP: 0.8,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Desculpe, estou com dificuldades para responder agora. Tente novamente em instantes.";
  }
};
