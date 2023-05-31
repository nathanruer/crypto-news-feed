import prisma from "@/prisma/prismadb";

export default async function getMessages() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        time: 'desc'
      }
    });

    return messages;
  } catch (error: any) {
    throw new Error(error);
  }
}
