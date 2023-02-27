/*
  Warnings:

  - Added the required column `valueAccount` to the `AccountConstant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccountConstant" ADD COLUMN     "valueAccount" DOUBLE PRECISION NOT NULL;
