
"use client";

import Link from "next/link";
import NewUser from "../components/NewUser";
import NewProduct from "../components/Product/NewProduct";


// eslint-disable-next-line @next/next/no-async-client-component
const RecordPage = async () => {
	return (
		<div className="conatiner m-auto">
			<div className="flex items-center justify-between h-screen">
				<NewUser />
				<NewProduct/>
				<div className="flex flex-col w-10/12 items-center justify-center">
			
					<Link href="/">[back to home]</Link>
				</div>
			</div>
		</div>
	);
};

export default RecordPage;
