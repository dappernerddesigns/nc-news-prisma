-- CreateTable
CREATE TABLE "Comments" (
    "comment_id" SERIAL NOT NULL,
    "body" TEXT NOT NULL,
    "votes" INTEGER NOT NULL DEFAULT 0,
    "author" TEXT NOT NULL,
    "article_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("comment_id")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_author_fkey" FOREIGN KEY ("author") REFERENCES "Users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Articles"("article_id") ON DELETE RESTRICT ON UPDATE CASCADE;
