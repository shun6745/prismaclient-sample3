-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "fax" TEXT,
    "age" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "productId" TEXT,
    "quantity" INTEGER,
    "value" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
