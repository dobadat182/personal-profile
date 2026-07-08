import { SERVICE_STEPS } from "@/lib/services";

export async function GET() {
  return Response.json(SERVICE_STEPS);
}
