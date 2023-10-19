import {
  listArticles,
  listArticleById,
} from "../procedures/articles.procedure";
import { router } from "../trpc";

export const articlesRouter = router({ listArticles, listArticleById });

export type ArticlesRouter = typeof articlesRouter;
