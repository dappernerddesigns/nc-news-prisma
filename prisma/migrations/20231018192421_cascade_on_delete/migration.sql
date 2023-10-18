-- DropForeignKey
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_authorSlug_fkey";

-- DropForeignKey
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_topicSlug_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_article_id_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_author_fkey";

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_topicSlug_fkey" FOREIGN KEY ("topicSlug") REFERENCES "Topics"("slug") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_authorSlug_fkey" FOREIGN KEY ("authorSlug") REFERENCES "Users"("username") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_author_fkey" FOREIGN KEY ("author") REFERENCES "Users"("username") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Articles"("article_id") ON DELETE CASCADE ON UPDATE CASCADE;
