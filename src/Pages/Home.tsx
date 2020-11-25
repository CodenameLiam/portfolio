import React, { useRef } from "react";
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
import { Contact } from "./Contact";
import { Landing } from "./Landing";
import { NavigationBar } from "./NavigationBar";
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
    const geneScrollRef = useRef<any>(null);
    const vectorScrollRef = useRef<any>(null);
    const medScrollRef = useRef<any>(null);
    const pathScrollRef = useRef<any>(null);
    const distScrollRef = useRef<any>(null);

    return (
        <ScrollContext.Provider
            value={{
                studyScrollRef: () => scrollToRef(studyScrollRef),
                YHPScrollRef: () => scrollToRef(YHPScrollRef),
                parmScrollRef: () => scrollToRef(parmScrollRef),
                newsScrollRef: () => scrollToRef(newsScrollRef),
                geneScrollRef: () => scrollToRef(geneScrollRef),
                vectorScrollRef: () => scrollToRef(vectorScrollRef),
                medScrollRef: () => scrollToRef(medScrollRef),
                pathScrollRef: () => scrollToRef(pathScrollRef),
                distScrollRef: () => scrollToRef(distScrollRef),
            }}
        >
            <NavigationBar />
            <Landing />

            <div className="content">
                <About />
                <SectionBreak className="about-break" />
                <Skills />
                <SectionBreak className="skills-break" scrollRef={projectScrollRef} />

                {/* Projects */}
                <Projects />

                <SectionBreak className="study-saviour-break" scrollRef={studyScrollRef} />
                <StudySaviour />
                <SectionBreak className="parmalat-break" scrollRef={parmScrollRef} />
                <Parmalat />
                <SectionBreak className="yhp-break" scrollRef={YHPScrollRef} />
                <YHP />
                <SectionBreak className="news-break" scrollRef={newsScrollRef} />
                <NewsReader />
                <SectionBreak className="gene-break" scrollRef={geneScrollRef} />
                <GeneSequence />
                <SectionBreak className="vector-break" scrollRef={vectorScrollRef} />
                <VectorTool />
                <SectionBreak className="medical-break" scrollRef={medScrollRef} />
                <Medical />
                <SectionBreak className="path-break" scrollRef={pathScrollRef} />
                <PathFinder />
                <SectionBreak className="dist-break" scrollRef={distScrollRef} />
                <Dist />

                <SectionBreak className="contact-break" scrollRef={distScrollRef} />
                <Contact />
            </div>

            {/* <button ref={bottomScrollRef} onClick={() => scrollToRef(studyScrollRef)}>
				Click to scroll
			</button> */}
            {/* </React.Fragment> */}
        </ScrollContext.Provider>
    );
};
