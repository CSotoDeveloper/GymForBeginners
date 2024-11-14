import React from "react";

export default function Button({ text, func }) {
	return (
		<button onClick={func}
			className="mx-auto px-8 border-2 border-solid bg-slate-950 blueShadow border-blue-500 py-4 rounded duration-200"
			type="button"
		>
			{text}
		</button>
	);
}
