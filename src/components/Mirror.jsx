"use client";

import { useState } from "react";

export default function Mirror() {
	const [mirror, setMirror] = useState("");
	return (
		<div>
			<hr />
			<h1>Mirror</h1>
			<div>
				<input
					type="text"
					onChange={(e) => {
						setMirror(e.target.value);
					}}
				/>
				<p>{mirror}</p>
			</div>
		</div>
	);
}
