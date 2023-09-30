import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findFeatures = async () => {
  const features = await prisma.feature.findMany({
    select: {
      id: true,
      featureName: true,
      priceInPence: true,
      imgUrl: true,
      description: true,
      category: {
        select: {
          categoryName: true,
        },
      },
    },
  });

  return features;
};
