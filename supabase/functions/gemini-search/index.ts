import { GoogleGenAI } from "npm:@google/genai@1.0.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json"
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders
    });
  }
  try {
    // Validate request body
    const requestText = await req.text();
    if (!requestText) {
      return new Response(JSON.stringify({
        error: "Request body is empty"
      }), {
        status: 400,
        headers: corsHeaders
      });
    }
    // Parse JSON safely
    let body;
    try {
      body = JSON.parse(requestText);
    } catch (e) {
      return new Response(JSON.stringify({
        error: "Invalid JSON in request body"
      }), {
        status: 400,
        headers: corsHeaders
      });
    }
    const { query } = body;
    if (!query) {
      return new Response(JSON.stringify({
        error: "Query is required"
      }), {
        status: 400,
        headers: corsHeaders
      });
    }

    // Clean and normalize the query
    const cleanQuery = query.trim().replace(/\s+/g, ' ');
    const queryForPrompt = cleanQuery.length < 10 ? `How do I dispose of ${cleanQuery}?` : cleanQuery;

    const apiKey = Deno.env.get("GEMINI_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({
        error: "Configuration error",
        message: "API key not found"
      }), {
        status: 500,
        headers: corsHeaders
      });
    }

    const ai = new GoogleGenAI({
      apiKey
    });

    // Format the prompt with proper spacing and line breaks
    const prompt = `Given this waste disposal related query: "${queryForPrompt}"

Provide a response in the following format (using markdown):

First, a brief introduction about the waste item.

Then, use these exact headings with emoji:

🔍 Type & Classification
[Brief classification and characteristics]

♻ Disposal Guidelines
- [Main disposal method]
- [Alternative methods if applicable]
- [Special handling instructions]

🌍 Environmental Impact
- [Positive impacts when disposed correctly]
- [Negative impacts if disposed incorrectly]

⚠ Safety Tips
- [Key safety considerations]
- [Handling precautions]

Keep each section concise but informative, using bullet points where appropriate.
Use informative tone.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt
      });
      const text = response.text;
      if (!text) {
        throw new Error("Empty response from AI model");
      }
      return new Response(JSON.stringify({
        response: text
      }), {
        headers: corsHeaders
      });
    } catch (error) {
      // If first attempt fails, try with a simpler prompt
      try {
        const simplePrompt = `Provide waste disposal guidance for: "${queryForPrompt}". Include type, disposal methods, safety tips, and environmental impact.`;
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: simplePrompt
        });
        const text = response.text;
        if (!text) {
          throw new Error("Empty response from AI model");
        }
        return new Response(JSON.stringify({
          response: text
        }), {
          headers: corsHeaders
        });
      } catch (retryError) {
        throw new Error("Failed to generate response after retry");
      }
    }
  } catch (error) {
    return new Response(JSON.stringify({
      error: "Service error",
      message: error.message || "An unexpected error occurred"
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
});
