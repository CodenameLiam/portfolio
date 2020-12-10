import React, { useEffect, useRef, useState } from "react";
import { SectionBreak } from "../Components/SectionBreak";
import { Dist } from "../Projects/Dist";
import { GeneSequence } from "../Projects/GeneSequence";
import { Medical } from "../Projects/Medical";
import { NewsReader } from "../Projects/NewsReader";
import { Parmalat } from "../Projects/Parmalat";
import { PathFinder } from "../Projects/PathFinder";
import { StudySaviour } from "../Projects/StudySaviour";
import { VectorTool } from "../Projects/VectorTool";
import { YHP } from "../Projects/YHP";

import { About } from "./About";
import { Awards } from "./Awards";
import { Contact } from "./Contact";
import { Cultural } from "./Cultural";
import { Landing } from "./Landing";
import { NavigationBar } from "./NavigationBar";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
const activeNavRef = (ref: any) => ref.current.getBoundingClientRect().top < 1;

export const ScrollContext = React.createContext<any>(undefined);

export const Home = () => {
	const [activeHeader, setActiveHeader] = useState("home");

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const search = window.location.search;
		const anchorTag = search.substring(1, search.length);

		if (anchorTag) {
			let anchorDiv = document.getElementsByClassName(anchorTag)[0] as HTMLElement;
			if (anchorDiv) {
				window.scrollTo(0, anchorDiv.offsetTop);
			}
		}
	}, []);

	const onScroll = () => {
		if (activeNavRef(contactScrollRef)) {
			setActiveHeader("contact");
		} else if (activeNavRef(culturalScrollRef)) {
			setActiveHeader("cultural");
		} else if (activeNavRef(awardsScrollRef)) {
			setActiveHeader("awards");
		} else if (activeNavRef(projectScrollRef)) {
			setActiveHeader("projects");
		} else if (activeNavRef(skillsScrollRef)) {
			setActiveHeader("skills");
		} else if (activeNavRef(aboutScrollRef)) {
			setActiveHeader("about");
		} else setActiveHeader("home");
	};

	const aboutScrollRef = useRef<any>(null);
	const skillsScrollRef = useRef<any>(null);
	const projectScrollRef = useRef<any>(null);
	const studyScrollRef = useRef<any>(null);
	const YHPScrollRef = useRef<any>(null);
	const parmScrollRef = useRef<any>(null);
	const newsScrollRef = useRef<any>(null);
	const geneScrollRef = useRef<any>(null);
	const vectorScrollRef = useRef<any>(null);
	const medScrollRef = useRef<any>(null);
	const pathScrollRef = useRef<any>(null);
	const distScrollRef = useRef<any>(null);
	const awardsScrollRef = useRef<any>(null);
	const culturalScrollRef = useRef<any>(null);
	const contactScrollRef = useRef<any>(null);

	// window.scrollTo(0, stuydSaviour.offsetTop);

	return (
		<ScrollContext.Provider
			value={{
				aboutScrollRef: () => scrollToRef(aboutScrollRef),
				skillsScrollRef: () => scrollToRef(skillsScrollRef),
				projectScrollRef: () => scrollToRef(projectScrollRef),
				studyScrollRef: () => scrollToRef(studyScrollRef),
				YHPScrollRef: () => scrollToRef(YHPScrollRef),
				parmScrollRef: () => scrollToRef(parmScrollRef),
				newsScrollRef: () => scrollToRef(newsScrollRef),
				geneScrollRef: () => scrollToRef(geneScrollRef),
				vectorScrollRef: () => scrollToRef(vectorScrollRef),
				medScrollRef: () => scrollToRef(medScrollRef),
				pathScrollRef: () => scrollToRef(pathScrollRef),
				distScrollRef: () => scrollToRef(distScrollRef),
				awardsScrollRef: () => scrollToRef(awardsScrollRef),
				culturalScrollRef: () => scrollToRef(culturalScrollRef),
				contactScrollRef: () => scrollToRef(contactScrollRef),
			}}>
			<NavigationBar activeHeader={activeHeader} />
			<Landing />

			<div className='content'>
				<SectionBreak className='landing-border' scrollRef={aboutScrollRef} />
				<About />
				<SectionBreak className='about-break' scrollRef={skillsScrollRef} />
				<Skills />
				<SectionBreak className='skills-break' scrollRef={projectScrollRef} />

				{/* Projects */}
				<Projects />
				<SectionBreak className='study-saviour-break' scrollRef={studyScrollRef} />
				<StudySaviour />
				<SectionBreak className='parmalat-break' scrollRef={parmScrollRef} />
				<Parmalat />
				<SectionBreak className='yhp-break' scrollRef={YHPScrollRef} />
				<YHP />
				<SectionBreak className='news-break' scrollRef={newsScrollRef} />
				<NewsReader />
				<SectionBreak className='gene-break' scrollRef={geneScrollRef} />
				<GeneSequence />
				<SectionBreak className='vector-break' scrollRef={vectorScrollRef} />
				<VectorTool />
				<SectionBreak className='medical-break' scrollRef={medScrollRef} />
				<Medical />
				<SectionBreak className='path-break' scrollRef={pathScrollRef} />
				<PathFinder />
				<SectionBreak className='dist-break' scrollRef={distScrollRef} />
				<Dist />

				<SectionBreak className='awards-break' scrollRef={awardsScrollRef} />
				<Awards />
				<SectionBreak className='cultural-break' scrollRef={culturalScrollRef} />
				<Cultural />
				<SectionBreak className='contact-break' scrollRef={contactScrollRef} />
				<Contact />
			</div>

			{/* <button ref={bottomScrollRef} onClick={() => scrollToRef(studyScrollRef)}>
				Click to scroll
			</button> */}
			{/* </React.Fragment> */}
		</ScrollContext.Provider>
	);
};
