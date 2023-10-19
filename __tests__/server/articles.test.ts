import { appRouter } from "../../trpc-server";
import { datedArticles as articlesData } from "../../db/data/test-data/articles";

describe("Articles.listArticles", () => {
  test("Returns a list of topics", async () => {
    const caller = appRouter.createCaller({});
    const articles = await caller.articles.listArticles();

    expect(articles.length).toBe(articlesData.length);
    articles.forEach((article) => {
      expect(article).toEqual(
        expect.objectContaining({
          article_id: expect.any(Number),
          title: expect.any(String),
          body: expect.any(String),
          created_at: expect.any(Date),
          votes: expect.any(Number),
          article_img_url: expect.any(String),
        })
      );
      expect(article.topic).toHaveProperty("slug");
      expect(article.author).toHaveProperty("username");
    });
  });
});
