/*
  Warnings:

  - You are about to drop the column `price` on the `Feature` table. All the data in the column will be lost.
  - Added the required column `priceInPence` to the `Feature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "price",
ADD COLUMN     "priceInPence" INTEGER NOT NULL;
