import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import LeadModel from "@/lib/models/Lead";

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullName = normalize(body.fullName);
    const email = normalize(body.email);
    const phone = normalize(body.phone);
    const company = normalize(body.company);
    const product = normalize(body.product);
    const quantity = normalize(body.quantity);
    const message = normalize(body.message);
    const source = normalize(body.source);
    const pageUrl = normalize(body.pageUrl);

    if (!fullName || !phone) {
      return NextResponse.json(
        { ok: false, error: "Full name and phone are required." },
        { status: 400 },
      );
    }

    await dbConnect();

    const lead = await LeadModel.create({
      fullName,
      email,
      phone,
      company,
      product,
      quantity,
      message,
      source,
      pageUrl,
    });

    return NextResponse.json({ ok: true, id: lead._id.toString() });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
