/*
  Warnings:

  - A unique constraint covering the columns `[qr_code]` on the table `Tickets` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `Tickets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `price` to the `Tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticket_type` to the `Tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `Tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tickets" ADD COLUMN     "is_used" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ticket_type" TEXT NOT NULL,
ADD COLUMN     "token" TEXT NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Ticket_Entries" (
    "entry_id" SERIAL NOT NULL,
    "ticket_id" INTEGER NOT NULL,
    "scanned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ticket_Entries_pkey" PRIMARY KEY ("entry_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_Entries_ticket_id_key" ON "Ticket_Entries"("ticket_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tickets_qr_code_key" ON "Tickets"("qr_code");

-- CreateIndex
CREATE UNIQUE INDEX "Tickets_token_key" ON "Tickets"("token");

-- AddForeignKey
ALTER TABLE "Ticket_Entries" ADD CONSTRAINT "Ticket_Entries_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "Tickets"("ticket_id") ON DELETE RESTRICT ON UPDATE CASCADE;
