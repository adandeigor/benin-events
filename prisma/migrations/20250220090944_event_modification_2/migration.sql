/*
  Warnings:

  - Added the required column `Lieu` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banner_image` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `entrer` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_hours` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Events" ADD COLUMN     "Lieu" TEXT NOT NULL,
ADD COLUMN     "banner_image" TEXT NOT NULL,
ADD COLUMN     "entrer" TEXT NOT NULL,
ADD COLUMN     "start_hours" TIMESTAMP(3) NOT NULL;
