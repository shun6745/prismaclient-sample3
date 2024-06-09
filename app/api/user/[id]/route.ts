import { NextResponse } from "next/server";
import prisma from "@/lib/PrismaClient";

export const GET = async (
	req: Request,
	{ params }: { params: { id: string } },
	res: NextResponse
) => {
	const id: number = parseInt(params.id);

	const user = await prisma.user.findFirst({ where: { id } });
	return NextResponse.json(user);
};

export const PUT = async (
	req: Request,
	{ params }: { params: { id: string } },
	res: NextResponse
) => {
	const id: number = parseInt(params.id);
	const { name, email, fax, age } = await req.json();

	const user = await prisma.user.update({
		data: { name, email, fax, age },
		where: { id },
	});
	return NextResponse.json(user);
};

export const DELETE = async (
	req: Request,
	{ params }: { params: { id: string } },
	res: NextResponse
) => {
	const id: number = parseInt(params.id);

	const user = await prisma.user.delete({
		where: { id },
	});
	return NextResponse.json(user);
};
