import React, { useState } from "react";
import { SCHEMES, WORKOUTS } from "../utils/soldier";
import Button from "./Button";
import SectionWrapper from "./SectionWrapper";

function Header({ index, title, description }) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-center gap-2">
				<p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
					{index}
				</p>
				<h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
			</div>
			<p className="text-sm sm:text-base mx-auto">{description}</p>
		</div>
	);
}

export default function Generator({
	muscles,
	setMuscles,
	poison,
	setPoison,
	goal,
	setGoal,
	updateWorkout,
}) {
	const [showModal, setShowModal] = useState(false);

	function toggleModal() {
		setShowModal(!showModal);
	}

	function updateMuscles(muscleGroup) {
		if (muscles.includes(muscleGroup)) {
			setMuscles(muscles.filter((val) => val !== muscleGroup));
			return;
		}

		if (muscles.length > 2) {
			return;
		}

		if (poison !== "individual") {
			setMuscles([muscleGroup]);
			setShowModal(false);
			return;
		}

		setMuscles([...muscles, muscleGroup]);
		if (muscles.length === 2) {
			setShowModal(false);
		}
	}

	return (
		<SectionWrapper
			id={"generate"}
			header={"generate your workout"}
			title={["Mode", "Beast", "ON"]}
		>
			<Header
				index={"01"}
				title={"Pick your poison"}
				description={"Select the workout you wish to endure."}
			/>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
				{Object.keys(WORKOUTS).map((type, typeIndex) => {
					return (
						<button
							type="submit"
							onClick={() => {
								setMuscles([]);
								setPoison(type);
							}}
							className={
								" border  duration-200 px-4 hover:border-white hover:bg-blue-800 hover:font-bold py-3 rounded-lg " +
								(type === poison
									? "font-bold bg-blue-800 "
									: " border-blue-600 bg-slate-950")
							}
							key={typeIndex}
						>
							<p className="capitalize">{type.replaceAll("_", " ")}</p>
						</button>
					);
				})}
			</div>
			<Header
				index={"02"}
				title={"Lock on targets"}
				description={"Select the muscles judged for annihilation."}
			/>
			<div className="bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col hover:border-white ">
				<button
					type="submit"
					onClick={toggleModal}
					className="relative p-3 flex items-center justify-center hover:border-white hover:font-bold rounded-lg hover:border-white hover:bg-blue-800 hover:font-bold"
				>
					<p className=" capitalize">
						{poison === "individual"
							? muscles.length !== 3
								? "Select three muscle groups"
								: muscles.join(" ")
							: muscles.length === 0
								? "Select one muscle group"
								: muscles.join(" ")}
					</p>
					<i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down" />
				</button>
				{showModal && (
					<div className="flex flex-col px-3 pb-3">
						{(poison === "individual"
							? WORKOUTS[poison]
							: Object.keys(WORKOUTS[poison])
						).map((muscleGroup, muscleGroupIndex) => {
							return (
								<button
									type="submit"
									onClick={() => updateMuscles(muscleGroup)}
									key={muscleGroupIndex}
									className={
										"hover:text-blue-400 hover:font-bold duration-200 items-center mx-auto justify-center hover:border-white " +
										(muscles.includes(muscleGroup)
											? "text-blue-400 font-bold "
											: "")
									}
								>
									<p className="uppercase">
										{muscleGroup.replaceAll("_", " ")}
									</p>
								</button>
							);
						})}
					</div>
				)}
			</div>
			<Header
				index={"03"}
				title={"Become Juggernaut"}
				description={"Select your ultimate objective."}
			/>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				{Object.keys(SCHEMES).map((scheme, schemeIndex) => {
					return (
						<button
							type="submit"
							onClick={() => {
								setGoal(scheme);
							}}
							className={
								"border  duration-200 hover:border-white hover:bg-blue-800 hover:font-bold py-3 rounded-lg px-4 " +
								(scheme === goal
									? " font-bold bg-blue-800"
									: " border-blue-400 bg-slate-950 ")
							}
							key={schemeIndex}
						>
							<p className="capitalize">{scheme.replaceAll("_", " ")}</p>
						</button>
					);
				})}
			</div>
			<Button
				func={updateWorkout}
				text={
					(muscles.length > 0 && poison !== "individual") ||
					(muscles.length > 1 && poison === "individual")
						? "Create Routine"
						: "Waiting..."
				}
			/>
		</SectionWrapper>
	);
}
