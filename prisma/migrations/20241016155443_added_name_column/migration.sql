-- CreateTable
CREATE TABLE "users" (
    "userid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'STAFF',
    "qrtoken" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "mailboxs" (
    "mailid" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "sender_name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mailboxs_pkey" PRIMARY KEY ("mailid")
);

-- CreateTable
CREATE TABLE "dapa" (
    "dapaid" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "AMONIA" DOUBLE PRECISION NOT NULL,
    "BOD" DOUBLE PRECISION NOT NULL,
    "COD" DOUBLE PRECISION NOT NULL,
    "DO" DOUBLE PRECISION NOT NULL,
    "NITRAT" DOUBLE PRECISION NOT NULL,
    "PH" DOUBLE PRECISION NOT NULL,
    "TDS" DOUBLE PRECISION NOT NULL,
    "TSS" DOUBLE PRECISION NOT NULL,
    "IP" DOUBLE PRECISION NOT NULL,
    "date" TEXT NOT NULL,
    "critical" TEXT NOT NULL,

    CONSTRAINT "dapa_pkey" PRIMARY KEY ("dapaid")
);

-- CreateTable
CREATE TABLE "articles" (
    "articleid" SERIAL NOT NULL,
    "userid" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("articleid")
);

-- CreateTable
CREATE TABLE "comments" (
    "commentid" SERIAL NOT NULL,
    "articleid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("commentid")
);

-- AddForeignKey
ALTER TABLE "mailboxs" ADD CONSTRAINT "mailboxs_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dapa" ADD CONSTRAINT "dapa_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_userid_fkey" FOREIGN KEY ("userid") REFERENCES "users"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_articleid_fkey" FOREIGN KEY ("articleid") REFERENCES "articles"("articleid") ON DELETE RESTRICT ON UPDATE CASCADE;
