// 'api/products.ts'
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const AddProductSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(255),
  price: z.number().min(1),
  rate: z.number().min(1).max(5),
  stock: z.number(),
  type: z.string().min(1).max(255),
  category: z.string().min(1).max(255),
  color_ids: z.array(z.number()),
  size_ids: z.array(z.number()), 
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = AddProductSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // Create the product
  const createdProduct = await prisma.product.create({
    data: {
      title: body.title,
      description: body.description,
      price: body.price,
      rate: body.rate,
      stock: body.stock,
      type: body.type,
      category: body.category,
    },
  });

  // Create the ProductColor associations
  const colorAssociations = validation.data.color_ids.map((color_id: number) => {
    return {
      product_id: createdProduct.id,
      color_id: color_id,
    };
  });
  // Create the ProductSize associations
  const sizeAssociations = validation.data.size_ids.map((size_id: number) => {
    return {
      product_id: createdProduct.id,
      size_id: size_id,
    };
  });


  await prisma.productColor.createMany({
    data: colorAssociations,
  });

  await prisma.productSize.createMany({
    data: sizeAssociations,
  });

  return NextResponse.json(createdProduct, { status: 200 });
}


export async function DELETE(request: NextRequest) {
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