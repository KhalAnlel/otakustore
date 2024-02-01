import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const UpdateProductSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  price: z.number().min(1),
  rate: z.number().min(1).max(5),
  stock: z.number().min(1),
  type: z.string().min(1).max(255),
  category: z.string().min(1).max(255),
  color_ids: z.array(z.number()).min(1),
  size_ids: z.array(z.number()).min(1),
});

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!product) {
    return NextResponse.json({ error: "Invalid Product" }, { status: 400 });
  }

  await prisma.image.deleteMany({
    where: {
      product_id: product.id,
    },
  });
  await prisma.productColor.deleteMany({
    where: {
      product_id: product.id,
    },
  });
  await prisma.productSize.deleteMany({
    where: {
      product_id: product.id,
    },
  });

  await prisma.product.delete({
    where: {
      id: product.id,
    },
  });

  return NextResponse.json({});
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const body = await request.json();
  const validation = UpdateProductSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }

  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!product) {
    return NextResponse.json({ error: "Invalid Product" }, { status: 400 });
  }

  const updatedProduct = await prisma.product.update({
    where: { id: product.id },
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

  // Update ProductColor associations
  await prisma.productColor.deleteMany({
    where: {
      product_id: updatedProduct.id,
    },
  });

  const colorAssociations = validation.data.color_ids.map(
    (color_id: number) => {
      return {
        color_id: color_id,
        product_id: updatedProduct.id,
      };
    }
  );

  await prisma.productColor.createMany({
    data: colorAssociations,
  });

  // Update ProductSize associations
  await prisma.productSize.deleteMany({
    where: {
      product_id: updatedProduct.id,
    },
  });

  const sizeAssociations = validation.data.size_ids.map((size_id: number) => {
    return {
      size_id: size_id,
      product_id: updatedProduct.id,
    };
  });

  await prisma.productSize.createMany({
    data: sizeAssociations,
  });

  return NextResponse.json(updatedProduct);
}
