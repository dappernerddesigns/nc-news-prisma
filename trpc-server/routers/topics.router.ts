import { listTopics } from "../procedures/topics.procedure";
import { router } from "../trpc";

export const topicsRouter = router({
  listTopics,
});

export type TopicsRouter = typeof topicsRouter;
