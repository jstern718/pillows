-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pillow" (
    "id" SERIAL NOT NULL,
    "intro" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Pillow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "numberLines" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Line" (
    "id" SERIAL NOT NULL,
    "lineNumber" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PillowsInPosts" (
    "id" SERIAL NOT NULL,
    "pillowId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "PillowsInPosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinesInPost" (
    "id" SERIAL NOT NULL,
    "lineId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "LinesInPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "PillowsInPosts" ADD CONSTRAINT "PillowsInPosts_pillowId_fkey" FOREIGN KEY ("pillowId") REFERENCES "Pillow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PillowsInPosts" ADD CONSTRAINT "PillowsInPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinesInPost" ADD CONSTRAINT "LinesInPost_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "Line"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinesInPost" ADD CONSTRAINT "LinesInPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
