import { PROJECTS } from "@/lib/projects";

export async function GET() {
  return Response.json(PROJECTS);
}
