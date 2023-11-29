"use client";
import Toggle from "@/components/Toggle.jsx";
import Counter from "@/components/Counter.jsx";
import Race from "@/components/Race.jsx";
import Mirror from "@/components/Mirror.jsx";

export default function Home() {
	return (
		<main>
			<h1>Day 10</h1>
			<Toggle />
			<Mirror />
			<Counter />
			<Race />
		</main>
	);
}
