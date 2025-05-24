import { createClient } from "npm:@google/generative-ai@0.1.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json"
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Edge Function: Received request");

    // Validate request body
    const requestText = await req.text();
    if (!requestText) {
      console.error("Edge Function: Empty request body");
      return new Response(
        JSON.stringify({ error: "Request body is empty" }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Parse JSON safely
    let body;
    try {
      body = JSON.parse(requestText);
    } catch (e) {
      console.error("Edge Function: Invalid JSON", e);
      return new Response(
        JSON.stringify({ error: "Invalid JSON in request body" }),
        { status: 400, headers: corsHeaders }
      );
    }

    const { query } = body;
    if (!query) {
      console.error("Edge Function: Missing query parameter");
      return new Response(
        JSON.stringify({ error: "Query is required" }),
        { status: 400, headers: corsHeaders }
      );
    }

    const apiKey = Deno.env.get("GEMINI_API_KEY");
    if (!apiKey) {
      console.error("Edge Function: GEMINI_API_KEY not set");
      return new Response(
        JSON.stringify({ 
          error: "Gemini API key not configured",
          details: "Please ensure GEMINI_API_KEY is set in your Supabase project settings"
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    try {
      console.log("Edge Function: Initializing Gemini client");
      const genAI = createClient(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `Given this waste disposal related query: "${query}"
      Please provide a structured response with:
      1. Waste type identification
      2. Proper disposal methods
      3. Environmental impact
      4. Safety considerations
      Keep the response concise and practical.`;

      console.log("Edge Function: Sending request to Gemini API");
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      if (!text) {
        console.error("Edge Function: Empty response from Gemini API");
        throw new Error("Empty response from Gemini API");
      }

      console.log("Edge Function: Successfully generated response");
      return new Response(
        JSON.stringify({ response: text }),
        { headers: corsHeaders }
      );
    } catch (genaiError) {
      console.error("Edge Function: Gemini API Error:", genaiError);
      return new Response(
        JSON.stringify({ 
          error: "Failed to generate AI response",
          details: genaiError.message 
        }),
        { status: 500, headers: corsHeaders }
      );
    }
  } catch (error) {
    console.error("Edge Function: General Error:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to process request",
        details: error.message 
      }),
      { status: 500, headers: corsHeaders }
    );
  }
});