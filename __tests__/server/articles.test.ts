import { appRouter } from "../../trpc-server";
import { datedArticles as articlesData } from "../../db/data/test-data/articles";
import { TRPCError } from "@trpc/server";

describe("Article by Id", () => {
  test("Returns an article by article_id", async () => {
    const caller = appRouter.createCaller({});
    const article = await caller.articles.listArticleById({ article_id: 1 });

    expect(article).toEqual(
      expect.objectContaining({
        article_id: 1,
        title: "Living in the shadow of a great man",
        topicSlug: "mitch",
        authorSlug: "butter_bridge",
        body: "I find this existence challenging",
        votes: 100,
        article_img_url:
          "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
      })
    );
    expect(article).toHaveProperty("created_at");
  });

  test("Throws a 404 for a valid id that has no records", async () => {
    const caller = appRouter.createCaller({});
    try {
      const noArticle = await caller.articles.listArticleById({
        article_id: 999,
      });
    } catch (err) {
      expect(err).toBe("404 Article not found");
    }
  });

  test.todo("Throws a 400 for a bad request", async () => {});
});
describe("Articles.listArticles", () => {
  test("Returns a list of articles", async () => {
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
