import React, { useRef } from "react";
import { SectionBreak } from "../Components/SectionBreak";

import { About } from "./About";
import { Landing } from "./Landing";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

export const Home = () => {
	// const myRef = useRef<any>(null);

	return (
		<React.Fragment>
			{/* <div ref={myRef}>I wanna be seen</div> */}
			<Landing />

			<div className="content">
				<About />
				<SectionBreak className="about-break" />
				<Skills />
				<SectionBreak className="skills-break" />
				<Projects />
			</div>

			{/* <button onClick={() => scrollToRef(myRef)}>Click to scroll </button> */}
		</React.Fragment>
	);
};
