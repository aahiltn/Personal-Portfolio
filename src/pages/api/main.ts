import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ message: "Welcome to my API. Nice job. \n Check out /experiences.json & /projects.json for a " }), {
    headers: { "Content-Type": "application/json" },
  });
};
