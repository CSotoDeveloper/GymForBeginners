import React from "react";
import ExcerciseCard from "./ExcerciseCard";
import SectionWrapper from "./SectionWrapper";

export default function Workout({workout}) {
	return (
		<SectionWrapper id={'workout'}
			header={"You decided it"}
			title={["Time", "To", "Mutate"]}
		>
      <div className="flex flex-col gap-4">
        {workout.map((excercise, excerciseIndex) => (
          <ExcerciseCard workout={workout} excercise={excercise} key={excerciseIndex} i={excerciseIndex}/>
        ))}
      </div>

    </SectionWrapper>
	);
}
