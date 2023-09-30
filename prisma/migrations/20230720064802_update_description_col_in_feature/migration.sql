/*
  Warnings:

  - You are about to drop the column `Description` on the `Feature` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "Description",
ADD COLUMN     "description" TEXT;
