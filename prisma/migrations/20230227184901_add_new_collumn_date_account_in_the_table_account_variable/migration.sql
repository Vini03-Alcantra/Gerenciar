/*
  Warnings:

  - Added the required column `dateAccount` to the `AccountVariable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccountVariable" ADD COLUMN     "dateAccount" TEXT NOT NULL;
