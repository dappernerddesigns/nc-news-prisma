import { appRouter } from "../../trpc-server";
import { topics as topicsData } from "../../db/data/test-data/topics";

describe("Topics.listTopics", () => {
  test("Returns a list of topics", async () => {
    const caller = appRouter.createCaller({});

    const topics = await caller.topics.listTopics();

    expect(topics.length).toBe(topicsData.length);

    topics.forEach((topic) => {
      expect(topic).toEqual(
        expect.objectContaining({
          slug: expect.any(String),
          description: expect.any(String),
        })
      );
    });
  });
});
