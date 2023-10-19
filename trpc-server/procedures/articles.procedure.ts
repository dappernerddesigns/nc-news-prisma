import { z } from "zod";
import { procedure } from "../trpc";
import { findArticles, findArticleById } from "../models/articles.model";

export const listArticles = procedure
  .output(
    z.array(
      z.object({
        article_id: z.number(),
        title: z.string(),
        topic: z.object({ slug: z.string() }),
        author: z.object({ username: z.string() }),
        body: z.string(),
        created_at: z.date(),
        votes: z.number(),
        article_img_url: z.string(),
      })
    )
  )
  .query(async () => {
    const articles = await findArticles();
    return articles;
  });

export const listArticleById = procedure
  .input(
    z.object({
      article_id: z.number(),
    })
  )
  .query(async ({ input }) => {
    const { article_id } = input;
    const article = await findArticleById(article_id);
    return article;
  });
