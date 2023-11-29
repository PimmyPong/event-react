"use client";

import { useState } from "react";

export default function Race() {
	const [move, setMove] = useState(0);

	function handleKeyDown(e) {
		if (e.key === "ArrowRight") {
			let px = move + 5;
			setMove(px);
		} else if (e.key === "ArrowLeft") {
			let px = move - 5;
			setMove(px);
		}
	}
	return (
		<div>
			<hr />
			<h1>Race</h1>

			<p>Move car to the right by pressing the right arrow</p>
			<div onKeyDown={handleKeyDown} className="car">
				🏎
			</div>
			<hr />
		</div>
	);
}
