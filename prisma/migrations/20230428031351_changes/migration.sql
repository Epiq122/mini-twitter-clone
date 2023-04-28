-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "oauth_token" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" DROP NOT NULL;
