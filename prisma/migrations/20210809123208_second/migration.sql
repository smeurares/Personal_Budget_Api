/*
  Warnings:

  - Changed the type of `budget` on the `Envelopes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Envelopes" DROP COLUMN "budget",
ADD COLUMN     "budget" INTEGER NOT NULL;
