import { listArticles } from "../procedures/articles.procedure";
import { router } from "../trpc";

export const articlesRouter = router({ listArticles });

export type ArticlesRouter = typeof articlesRouter;
