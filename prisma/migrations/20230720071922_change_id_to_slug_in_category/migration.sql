/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Feature` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categorySlug` to the `Feature` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Feature" DROP CONSTRAINT "Feature_categoryId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD COLUMN     "slug" TEXT NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("slug");

-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "categoryId",
ADD COLUMN     "categorySlug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- AddForeignKey
ALTER TABLE "Feature" ADD CONSTRAINT "Feature_categorySlug_fkey" FOREIGN KEY ("categorySlug") REFERENCES "Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
