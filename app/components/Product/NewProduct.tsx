"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const NewProduct = () => {
	const router = useRouter();

	const [productId, setProductId] = useState("");
	const [quantity, setQuantity] = useState<number>();
	const [value, setValue] = useState<number>();
	const [isFetching, setIsFetching] = useState(false);

	const handleSubmit = async () => {
		setIsFetching(true);
		{
			const response = await fetch("/api/product/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ productId, quantity, value }),
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
				<p className="text-center font-bold">Form (NewProduct.tsx)</p>
				<div className="flex flex-col mb-4">
					<label htmlFor="product_name" className="mb-2">
						product_name
					</label>
					<input
						onChange={(event) => {
							setProductId(event.target.value);
						}}
						type="text"
						name="setProductId"
						id="setProductOd"
						// value="name" バリューいらない
						// value入れると固定値になる
						className="border-2 p-2"
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="quantity" className="mb-2">
						quantity
					</label>
					<input
						onChange={(event) => {
							const inputValue = parseInt(event.target.value);
							setQuantity(!isNaN(inputValue) ? Math.max(inputValue, 0) : 0);
						}}
						type="number"
						name="quontity"
						id="quontity"
						className="border-2 p-2"
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="quantity" className="mb-2">
						Value
					</label>
					<input
						onChange={(event) => {
							const inputValue = parseInt(event.target.value);
							setValue(!isNaN(inputValue) ? Math.max(inputValue, 0) : 0);
						}}
						type="number"
						name="Value"
						id="Value"
						className="border-2 p-2"
					/>
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

export default NewProduct;
