-- CreateTable
CREATE TABLE "CrudTable" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userPhNo" INTEGER NOT NULL,
    "userImage" TEXT NOT NULL,
    "userGender" TEXT NOT NULL,
    "userCountry" TEXT NOT NULL,
    "userDob" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CrudTable_userEmail_key" ON "CrudTable"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "CrudTable_userPhNo_key" ON "CrudTable"("userPhNo");

-- CreateIndex
CREATE UNIQUE INDEX "CrudTable_userImage_key" ON "CrudTable"("userImage");
