import { NextResponse } from "next/server";
import prisma from "@/lib/PrismaClient";

export const POST = async (req: Request, res: NextResponse) => {
	const { name, email, fax, age } = await req.json();
	const new_user = await prisma.user.create({
		data: {
			name,
			email,
			fax,
			age,
		},
	});
	return NextResponse.json(new_user);
};

export const GET = async (req: Request, res: NextResponse) => {
	const users = await prisma.user.findMany();
	return NextResponse.json(users);
};
