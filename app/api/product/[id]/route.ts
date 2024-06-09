import { NextResponse } from "next/server";
import prisma from "@/lib/PrismaClient";

export const GET = async (
	req: Request,
	{ params }: { params: { id: string } },
	res: NextResponse
) => {
	const id: number = parseInt(params.id);

	const product = await prisma.product.findFirst({ where: { id } });
	return NextResponse.json(product);
};

export const PUT = async (
	req: Request,
	{ params }: { params: { id: string } },
	res: NextResponse
) => {
	const id: number = parseInt(params.id);
	const { productId, quantity, value } = await req.json();

	const product = await prisma.product.update({
		data: { productId, quantity, value },
		where: { id },
	});
	return NextResponse.json(product);
};

export const DELETE = async (
	req: Request,
	{ params }: { params: { id: string } },
	res: NextResponse
) => {
	const id: number = parseInt(params.id);

	const product = await prisma.product.delete({
		where: { id },
	});
	return NextResponse.json(product);
};
