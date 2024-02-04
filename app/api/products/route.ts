// 'api/products.ts'
import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION!,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY_ID!,
  },
});

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const formData = await request.formData();
  const files = formData.getAll("files");

  if (files.length === 0) {
    return NextResponse.json({ error: "No files provided" }, { status: 400 });
  }

  const title = formData.get("title")!.toString();
  const description = formData.get("description")!.toString();
  const type = formData.get("type")!.toString();
  const category = formData.get("category")!.toString();
  const price = formData.get("price")!.toString();
  const rate = formData.get("rate")!.toString();
  const stock = formData.get("stock")!.toString();
  const color_ids = JSON.parse(formData.get("color_ids")!.toString());
  const size_ids = JSON.parse(formData.get("size_ids")!.toString());

  if (
    !title ||
    !description ||
    !type ||
    !category ||
    !price ||
    !rate ||
    !stock ||
    !color_ids ||
    !size_ids
  ) {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  // Create the product
  const createdProduct = await prisma.product.create({
    data: {
      title: title,
      description: description,
      price: parseInt(price),
      rate: parseInt(rate),
      stock: parseInt(stock),
      type: type,
      category: category,
    },
  });

  // Create the ProductColor associations
  const colorAssociations = color_ids.map((color_id: number) => ({
    product_id: createdProduct.id,
    color_id: color_id,
  }));

  // Create the ProductSize associations
  const sizeAssociations = size_ids.map((size_id: number) => ({
    product_id: createdProduct.id,
    size_id: size_id,
  }));


  await prisma.productColor.createMany({
    data: colorAssociations,
  });

  await prisma.productSize.createMany({
    data: sizeAssociations,
  });

  let fileAssociations = [];
  for (let i = 0; i < files.length; i++) {
   const file = files[i];
   if (!(file instanceof File)) {
     return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
   }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");

    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME!,
        Key: filename,
        Body: buffer,
      })
    );

    fileAssociations.push({
      product_id: createdProduct.id,
      url: `https://otakustorebucket.s3.eu-north-1.amazonaws.com/${filename}`,
    });
 }

  await prisma.image.createMany({
    data: fileAssociations,
  });


  return NextResponse.json(createdProduct, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const product = await prisma.product.findMany();

  if (!product) {
    return NextResponse.json({ error: "No Products" }, { status: 400 });
  }

  await prisma.image.deleteMany();
  await prisma.productColor.deleteMany();
  await prisma.productSize.deleteMany();
  await prisma.product.deleteMany();

  return NextResponse.json({});
}
