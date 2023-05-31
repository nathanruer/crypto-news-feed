import prisma from "@/prisma/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  const { title, body, link, url, time } = req;
  
  const createdMessage = await prisma.message.create({
    data: {
      title: title,
      body: body,
      link: link,
      url: url,
      time: time,
    },
  });
  
  return NextResponse.json(createdMessage);
}
