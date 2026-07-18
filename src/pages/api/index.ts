import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ message: "Welcome to Aahil's API. Nice job." }), {
    headers: { "Content-Type": "application/json" },
  });
};
