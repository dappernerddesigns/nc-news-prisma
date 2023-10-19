import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findTopics = async () => {
  const topics = await prisma.topics.findMany({
    select: {
      slug: true,
      description: true,
    },
  });
  return topics;
};
