import { PrismaClient } from "@prisma/client";
import { CategoryData, categories } from "./data/categories-example";
import { FeatureData, features } from "./data/features-example";

const prisma = new PrismaClient();

interface SeedData {
  categories: CategoryData[];
  features: FeatureData[];
}

const seed = async ({ categories, features }: SeedData) => {
  await prisma.feature.deleteMany();
  await prisma.category.deleteMany();

  await prisma.category.createMany({ data: categories });
  await prisma.feature.createMany({ data: features });
};

seed({ categories, features });
