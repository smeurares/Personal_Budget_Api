-- AlterTable
ALTER TABLE "Envelopes" ADD COLUMN     "userId" INTEGER,
ALTER COLUMN "budget" SET DATA TYPE DECIMAL(65,30);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Envelopes" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
