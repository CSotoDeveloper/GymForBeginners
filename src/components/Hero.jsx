import React from "react";
import Button from "./Button";

export default function Hero() {
	return (
		<div className="min-h-screen p-4 flex flex-col gap-10 items-center max-w-[900px] w-full mx-auto justify-center text-center">
			<div>
				<p>Your starting point towards strength and wellness.</p>
				<h1 className="uppercase font-bold text-4xl sm:text5xl md:text-6xl lg:text-7xl">
					Peak<span className="text-blue-500">Force</span>
				</h1>
			</div>
			<p className="text-sm md:text-base font-light">
				Train hard.{" "}
				<span className="text-blue-500 font-medium">Lift harder.</span> Be
				unstoppable.
			</p>
      <Button func={() => {
				window.location.href ='#generate'
			}} text="Let's Start"/>
		</div>
	);
}
