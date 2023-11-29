"use client";

import { useState } from "react";

export default function Toggle() {
	const [visible, setVisible] = useState(true);

	function click() {
		setVisible(!visible);
	}
	return (
		<div>
			<hr />
			<h1>Toggle the box</h1>
			<div onClick={click} className={visible ? "square" : "white"}></div>
		</div>
	);
}
