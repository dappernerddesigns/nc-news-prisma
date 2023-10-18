-- DropIndex
DROP INDEX "Users_user_id_key";

-- AlterTable
CREATE SEQUENCE users_user_id_seq;
ALTER TABLE "Users" ALTER COLUMN "user_id" SET DEFAULT nextval('users_user_id_seq');
ALTER SEQUENCE users_user_id_seq OWNED BY "Users"."user_id";
