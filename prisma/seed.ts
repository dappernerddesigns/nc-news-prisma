import { PrismaClient } from "@prisma/client";
import { TopicsData, topics } from "../db/test-data/topics";
import { UsersData, users } from "../db/test-data/users";
import { ArticleData, datedArticles } from "../db/test-data/articles";
import { CommentData, datedComments } from "../db/test-data/comments";
const prisma = new PrismaClient();

interface SeedData {
  topics: TopicsData[];
  users: UsersData[];
  datedArticles: ArticleData[];
  datedComments: CommentData[];
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
