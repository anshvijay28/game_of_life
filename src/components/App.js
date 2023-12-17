import Grid from "./Grid.js";
import Button from "./Button.js";
import "../styles/App.css";
import { useState } from "react";
import githubLogo from "../pictures/github_logo.png";

function App() {
	const [start, setStart] = useState(false);
	const [clear, setClear] = useState(false);
	const [pause, setPause] = useState(false);
	const [speed, setSpeed] = useState(850);

	return (
		<>
			<div className="bg-sky-900 h-screen flex flex-col items-center justify-center gap-y-5">
				<a
					href="https://pi.math.cornell.edu/~lipa/mec/lesson6.html#:~:text=The%20Game%20of%20Life%20(an,of%20that%20cell's%208%20neighbors."
					className="mb-2 text-4xl font-extrabold leading-none tracking-tight
        text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
				>
					Game of Life
				</a>
				<Grid
					rows={31}
					cols={71}
					speed={speed}
					start={start}
					setStart={setStart}
					clear={clear}
					setClear={setClear}
					pause={pause}
					setPause={setPause}
				/>
				<div className="flex flex-row gap-0.5 mt-2">
					<Button utility={"Start"} state={start} setState={setStart} />
					<Button utility={"Pause"} state={pause} setState={setPause} />
					<Button utility={"Clear"} state={clear} setState={setClear} />
					<input
						type="number"
						placeholder="Speed (1-1000)"
						id="speed-input"
						value={speed}
						onInput={(e) => setSpeed(e.target.value)}
						className="w-36 px-2 text-white border rounded bg-blue-500 sm:text-base border-blue-500"
					/>
				</div>
			</div>
			<a href="https://github.com/anshvijay28" target="_blank" rel="noreferrer">
				<img
					src={githubLogo}
					alt="github logo"
					className="fixed bottom-2 right-3"
				/>
			</a>
			<div className="flex flex-col fixed bottom-7 left-9 items-center justify-center gap-y-2"></div>
		</>
	);
}

export default App;
