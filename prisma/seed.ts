import { PrismaClient } from "@prisma/client";
import { TopicsData, topics } from "../db/data/test-data/topics";
import { UsersData, users } from "../db/data/test-data/users";
import { ArticlesData, datedArticles } from "../db/data/test-data/articles";
import { CommentsData, datedComments } from "../db/data/test-data/comments";
const prisma = new PrismaClient();

interface SeedData {
  topics: TopicsData[];
  users: UsersData[];
  datedArticles: ArticlesData[];
  datedComments: CommentsData[];
}

const seed = async ({
  topics,
  users,
  datedArticles,
  datedComments,
}: SeedData) => {
  await prisma.comments.deleteMany();
  await prisma.articles.deleteMany();
  await prisma.users.deleteMany();
  await prisma.topics.deleteMany();

  await prisma.topics.createMany({ data: topics });
  await prisma.users.createMany({ data: users });
  await prisma.articles.createMany({ data: datedArticles });
  await prisma.comments.createMany({ data: datedComments });
};

seed({ topics, users, datedArticles, datedComments });

// almost there, foreign key constraint issue when seeding comments.
