-- CreateTable
CREATE TABLE "Topics" (
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Topics_pkey" PRIMARY KEY ("slug")
);

-- CreateIndex
CREATE UNIQUE INDEX "Topics_slug_key" ON "Topics"("slug");
