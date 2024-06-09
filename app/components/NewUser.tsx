"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const NewUser = () => {
	const router = useRouter();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [fax, setFax] = useState("");
	const [age, setAge] = useState<number>();
	const [isFetching, setIsFetching] = useState(false);

	const handleSubmit = async () => {
		setIsFetching(true);
		{
			const response = await fetch("/api/user/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, fax, age }),
			});
			const data = await response.json();
		}
		setIsFetching(false);

		router.push("/");
		router.refresh();
	};

	return (
		<div className="flex flex-col space-y-10 w-1/2 p-10 items-center">
			<form className="border-2 w-2/3 p-5">
				<p className="text-center font-bold">Form (NewUser.tsx)</p>
				<div className="flex flex-col mb-4">
					<label htmlFor="name" className="mb-2">
						Name
					</label>
					<input
						onChange={(event) => {
							setName(event.target.value);
						}}
						type="text"
						name="name"
						id="name"
						// value="name" バリューいらない
						// value入れると固定値になる
						className="border-2 p-2"
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="email" className="mb-2">
						Email
					</label>
					<input
						onChange={(event) => {
							setEmail(event.target.value);
						}}
						type="email"
						name="email"
						id="email"
						className="border-2 p-2"
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="email" className="mb-2">
						fax
					</label>
					<input
						onChange={(event) => {
							setFax(event.target.value);
						}}
						type="text"
						name="fax"
						id="fax"
						className="border-2 p-2"
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="age" className="mb-2">
						age
					</label>
					<input
						onChange={(event) => {
							const inputValue = parseInt(event.target.value);
							setAge(!isNaN(inputValue) ? Math.max(inputValue, 0) : 0);
						}}
						type="number"
						name="age"
						id="age"
						className="border-2 p-2"
					/>
					{/* chatGtp で簡単にしてる */}
				</div>

				{isFetching ? (
					<p className="text-center">Creating...</p>
				) : (
					<button
						type="button"
						onClick={handleSubmit}
						className="bg-blue-500 text-white px-2 py-1">
						Submit
					</button>
				)}
			</form>
		</div>
	);
};

export default NewUser;
