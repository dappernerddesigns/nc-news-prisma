import { featuresRouter } from "./routers/features-example.router";
import { router } from "./trpc";

export const appRouter = router({
  // remote this router and make your own
  features: featuresRouter,
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
