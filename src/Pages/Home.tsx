import React, { useRef } from "react";
import { SectionBreak } from "../Components/SectionBreak";
import { NewsReader } from "../Projects/NewsReader";
import { Parmalat } from "../Projects/Parmalat";
import { StudySaviour } from "../Projects/StudySaviour";
import { YHP } from "../Projects/YHP";

import { About } from "./About";
import { Landing } from "./Landing";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

export const ScrollContext = React.createContext<any>(undefined);

export const Home = () => {
	const projectScrollRef = useRef<any>(null);
	const studyScrollRef = useRef<any>(null);
	const YHPScrollRef = useRef<any>(null);
	const parmScrollRef = useRef<any>(null);
	const newsScrollRef = useRef<any>(null);

	return (
		<ScrollContext.Provider
			value={{
				studyScrollRef: () => scrollToRef(studyScrollRef),
				YHPScrollRef: () => scrollToRef(YHPScrollRef),
				parmScrollRef: () => scrollToRef(parmScrollRef),
				newsScrollRef: () => scrollToRef(newsScrollRef),
			}}>
			<Landing />

			<div className="content">
				<About />
				<SectionBreak className="about-break" />
				<Skills />
				<SectionBreak className="skills-break" scrollRef={projectScrollRef} />
				<Projects />
				<SectionBreak className="study-saviour-break" scrollRef={studyScrollRef} />
				<StudySaviour />
				<SectionBreak className="yhp-break" scrollRef={YHPScrollRef} />
				<YHP />
				<SectionBreak className="parmalat-break" scrollRef={parmScrollRef} />
				<Parmalat />
				<SectionBreak className="news-break" scrollRef={newsScrollRef} />
				<NewsReader />
				<SectionBreak className="gene-break" scrollRef={newsScrollRef} />
			</div>

			{/* <button ref={bottomScrollRef} onClick={() => scrollToRef(studyScrollRef)}>
				Click to scroll
			</button> */}
			{/* </React.Fragment> */}
		</ScrollContext.Provider>
	);
};
