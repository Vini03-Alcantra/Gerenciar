/*
  Warnings:

  - Added the required column `expires_date` to the `PersonToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PersonToken" ADD COLUMN     "expires_date" TEXT NOT NULL;
