"use client";

import { useState } from "react";

export default function Counter() {
	const [num, setNum] = useState(0);

	function handlePlus() {
		let plus = num + 1;
		setNum(plus);
	}

	function handleMinus() {
		let minus = num - 1;
		setNum(minus);
	}

	return (
		<div>
			<hr />
			<h1>Counter</h1>
			<div className="counter">
				<button onClick={handlePlus}>+</button>
				<p> {num} </p>
				<button onClick={handleMinus}>-</button>
			</div>
		</div>
	);
}
