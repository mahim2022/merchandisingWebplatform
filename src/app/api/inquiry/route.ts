import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: "The inquiry form is temporarily unavailable. Please email contact@sourceloom.me with your requirements.",
    },
    { status: 503 }
  );
}
