import { topicsRouter } from "./routers/topics.router";
import { articlesRouter } from "./routers/articles.router";
import { router } from "./trpc";

export const appRouter = router({
  topics: topicsRouter,
  articles: articlesRouter,
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
