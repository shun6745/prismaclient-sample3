"use client";

import EditProduct from "@/app/components/Product/EdetProduct";
import Link from "next/link";

// eslint-disable-next-line @next/next/no-async-client-component
const RecordPage = async () => {
	return (
		<div className="conatiner m-auto">
			<div className="flex items-center justify-between h-screen">
				<EditProduct />

				<div className="flex flex-col w-1/2 items-center justify-center">
					<p className="font-bold text-6xl mb-5">/user/edit/[id]</p>
					<p className="font-bold text-7xl mb-10">page.tsx</p>
					<Link href="/">[back to home]</Link>
				</div>
			</div>
		</div>
	);
};

export default RecordPage;
