/*
  Warnings:

  - You are about to drop the column `topic` on the `Articles` table. All the data in the column will be lost.
  - Added the required column `topicSlug` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articles" DROP COLUMN "topic",
ADD COLUMN     "topicSlug" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_topicSlug_fkey" FOREIGN KEY ("topicSlug") REFERENCES "Topics"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
