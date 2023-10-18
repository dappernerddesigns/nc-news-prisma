/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Articles" (
    "article_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "authorSlug" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "votes" INTEGER NOT NULL,
    "article_img_url" TEXT NOT NULL,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("article_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_authorSlug_fkey" FOREIGN KEY ("authorSlug") REFERENCES "Users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
