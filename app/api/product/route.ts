import { NextResponse } from "next/server";
import prisma from "@/lib/PrismaClient";

export const POST = async (req: Request, res: NextResponse) => {
	const { productId, quantity, value } = await req.json();
	const newProduct = await prisma.product.create({
		data: {
			productId,
			quantity,
			value,
		},
	});
	return NextResponse.json(newProduct);
};


export const GET = async (req: Request, res: NextResponse) => {
	const products = await prisma.product.findMany();
	return NextResponse.json(products);
};