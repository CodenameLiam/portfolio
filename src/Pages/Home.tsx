import React from "react";
import { SectionBreak } from "../Components/SectionBreak";

import { About } from "./About";
import { Landing } from "./Landing";
import { Skills } from "./Skills";

export const Home = () => {
	return (
		<React.Fragment>
			<Landing />

			<div className="content">
				<About />
				<SectionBreak className="about-break" />

				<Skills />
			</div>
		</React.Fragment>
	);
};
