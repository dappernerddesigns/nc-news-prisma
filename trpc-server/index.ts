import { featuresRouter } from './routers/features.router';
import { router } from './trpc';

export const appRouter = router({
  features: featuresRouter,
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
