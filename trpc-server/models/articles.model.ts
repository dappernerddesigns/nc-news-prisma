import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findArticles = async () => {
  const articles = await prisma.articles.findMany({
    select: {
      article_id: true,
      title: true,
      topic: {
        select: {
          slug: true,
        },
      },
      author: {
        select: {
          username: true,
        },
      },
      body: true,
      created_at: true,
      votes: true,
      article_img_url: true,
    },
  });
  return articles;
};

export const findArticleById = async (article_id: number) => {
  try {
    const article = await prisma.articles.findUnique({ where: { article_id } });
    if (article === null) {
      throw new Error("404 Article not found");
    }
    return article;
  } catch (err) {}
};
