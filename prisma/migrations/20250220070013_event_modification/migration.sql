/*
  Warnings:

  - Added the required column `priority` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Events" ADD COLUMN     "priority" BOOLEAN NOT NULL;
