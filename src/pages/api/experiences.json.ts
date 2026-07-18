import type { APIRoute } from "astro";
import experiences from "../../data/experiences.json";

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(experiences), {
    headers: { "Content-Type": "application/json" },
  });
};
