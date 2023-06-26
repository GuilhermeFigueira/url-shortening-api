"use client";
import Image from "next/image";
export default function Header() {
	return (
		<header className="py-8 px-4 flex flex-row justify-between mx-auto max-w-[80rem] items-center">
			<div className="flex flex-row gap-12">
				<h1 className="font-bold text-4xl text-dark_blue">Shortly</h1>
				<Image
					src="/list.svg"
					alt="List icon"
					width={32}
					height={32}
					priority
					className="md:hidden"
				/>
				<ul className="flex flex-row gap-4 items-center tracking-tighter text-violet-grayish">
					<li>Features</li>
					<li>Pricing</li>
					<li>Resources</li>
				</ul>
			</div>
			<div className="flex flex-row gap-6 items-center">
				<button className="text-violet-grayish">Login</button>
				<button className="bg-cyan text-white font-bold w-fit p-2 px-4 rounded-full">
					Sign Up
				</button>
			</div>
		</header>
	);
}
