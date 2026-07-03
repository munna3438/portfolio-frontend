import { NextRequest, NextResponse } from "next/server";

// This route simply forwards the contact form to your Express API.
// Set NEXT_PUBLIC_API_URL (e.g. https://your-api.onrender.com) in
// your Vercel project's environment variables once the backend is live.
export async function POST(req: NextRequest) {
  const body = await req.json();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    console.log("Contact form submission (no backend configured yet):", body);
    return NextResponse.json({ ok: true, note: "Backend not connected yet" });
  }

  try {
    const res = await fetch(`${apiUrl}/api/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ ok: false, error: "Backend unreachable" }, { status: 502 });
  }
}
