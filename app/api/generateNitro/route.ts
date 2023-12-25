export const revalidate = 0;

import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const uuid = crypto.randomUUID();

  axios.defaults.headers.post["Content-Type"] = "application/json";

  const resp = await axios.post(
    "https://api.discord.gx.games/v1/direct-fulfillment",
    {
      partnerUserId: uuid,
    }
  );
  return NextResponse.json({ token: resp.data.token });
}
