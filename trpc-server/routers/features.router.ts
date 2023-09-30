import { listFeatures } from '../procedures/features.procedure';
import { router } from '../trpc';

export const featuresRouter = router({
  listFeatures,
});

export type FeaturesRouter = typeof featuresRouter;
