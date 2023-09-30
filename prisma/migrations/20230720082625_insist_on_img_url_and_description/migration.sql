/*
  Warnings:

  - Made the column `imgUrl` on table `Feature` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Feature` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Feature" ALTER COLUMN "imgUrl" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
