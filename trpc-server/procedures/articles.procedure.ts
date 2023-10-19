import { z } from "zod";
import { procedure } from "../trpc";
import { findArticles } from "../models/articles.model";

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
