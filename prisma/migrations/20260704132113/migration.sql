/*
  Warnings:

  - You are about to drop the column `userCountry` on the `CrudTable` table. All the data in the column will be lost.
  - Added the required column `userState` to the `CrudTable` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CrudTable" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userPhNo" INTEGER NOT NULL,
    "userImage" TEXT NOT NULL,
    "userGender" TEXT NOT NULL,
    "userState" TEXT NOT NULL,
    "userDob" DATETIME NOT NULL
);
INSERT INTO "new_CrudTable" ("userDob", "userEmail", "userGender", "userId", "userImage", "userName", "userPhNo") SELECT "userDob", "userEmail", "userGender", "userId", "userImage", "userName", "userPhNo" FROM "CrudTable";
DROP TABLE "CrudTable";
ALTER TABLE "new_CrudTable" RENAME TO "CrudTable";
CREATE UNIQUE INDEX "CrudTable_userEmail_key" ON "CrudTable"("userEmail");
CREATE UNIQUE INDEX "CrudTable_userPhNo_key" ON "CrudTable"("userPhNo");
CREATE UNIQUE INDEX "CrudTable_userImage_key" ON "CrudTable"("userImage");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
