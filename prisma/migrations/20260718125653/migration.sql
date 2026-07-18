-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CrudTable" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userPhNo" TEXT NOT NULL,
    "userImage" TEXT NOT NULL,
    "userGender" TEXT NOT NULL,
    "userState" TEXT NOT NULL,
    "userDob" DATETIME NOT NULL
);
INSERT INTO "new_CrudTable" ("userDob", "userEmail", "userGender", "userId", "userImage", "userName", "userPhNo", "userState") SELECT "userDob", "userEmail", "userGender", "userId", "userImage", "userName", "userPhNo", "userState" FROM "CrudTable";
DROP TABLE "CrudTable";
ALTER TABLE "new_CrudTable" RENAME TO "CrudTable";
CREATE UNIQUE INDEX "CrudTable_userEmail_key" ON "CrudTable"("userEmail");
CREATE UNIQUE INDEX "CrudTable_userPhNo_key" ON "CrudTable"("userPhNo");
CREATE UNIQUE INDEX "CrudTable_userImage_key" ON "CrudTable"("userImage");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
