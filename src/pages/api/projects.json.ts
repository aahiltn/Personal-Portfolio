import type { APIRoute } from "astro";
import projects from "../../data/projects.json";

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(projects), {
    headers: { "Content-Type": "application/json" },
  });
};
