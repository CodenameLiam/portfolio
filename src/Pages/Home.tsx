import React, { useEffect, useRef, useState } from 'react';
import { SectionBreak } from '../Components/SectionBreak';
import { Binnit } from '../Projects/Binnit';
import { Habitual } from '../Projects/Habitual';
import { MaxKelsen } from '../Projects/MaxKelsen';
import { NewsReader } from '../Projects/NewsReader';
import { Parmalat } from '../Projects/Parmalat';
import { StudySaviour } from '../Projects/StudySaviour';
import { VectorTool } from '../Projects/VectorTool';
import { WorkingMouse } from '../Projects/WorkingMouse';
import { YHP } from '../Projects/YHP';

import { About } from './About';
import { Awards } from './Awards';
import { Contact } from './Contact';
import { Cultural } from './Cultural';
import { Landing } from './Landing';
import { NavigationBar } from './NavigationBar';
import { Projects } from './Projects';
import { Skills } from './Skills';

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);
const activeNavRef = (ref: any) => ref.current.getBoundingClientRect().top < 1;

export const ScrollContext = React.createContext<any>(undefined);

export const Home = () => {
    const [activeHeader, setActiveHeader] = useState('home');

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
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
            setActiveHeader('contact');
        } else if (activeNavRef(culturalScrollRef)) {
            setActiveHeader('cultural');
        } else if (activeNavRef(awardsScrollRef)) {
            setActiveHeader('awards');
        } else if (activeNavRef(projectScrollRef)) {
            setActiveHeader('projects');
        } else if (activeNavRef(skillsScrollRef)) {
            setActiveHeader('skills');
        } else if (activeNavRef(aboutScrollRef)) {
            setActiveHeader('about');
        } else setActiveHeader('home');
    };

    const aboutScrollRef = useRef<any>(null);
    const skillsScrollRef = useRef<any>(null);
    const projectScrollRef = useRef<any>(null);
    const studyScrollRef = useRef<any>(null);
    const awardsScrollRef = useRef<any>(null);
    const culturalScrollRef = useRef<any>(null);
    const contactScrollRef = useRef<any>(null);

    return (
        <ScrollContext.Provider
            value={{
                aboutScrollRef: () => scrollToRef(aboutScrollRef),
                skillsScrollRef: () => scrollToRef(skillsScrollRef),
                projectScrollRef: () => scrollToRef(projectScrollRef),
                studyScrollRef: () => scrollToRef(studyScrollRef),
                awardsScrollRef: () => scrollToRef(awardsScrollRef),
                culturalScrollRef: () => scrollToRef(culturalScrollRef),
                contactScrollRef: () => scrollToRef(contactScrollRef),
            }}>
            <NavigationBar activeHeader={activeHeader} />
            <Landing />

            <div className='content'>
                <SectionBreak id='about' className='landing-border' scrollRef={aboutScrollRef} />
                <About />
                <SectionBreak id='skills' className='about-break' scrollRef={skillsScrollRef} />
                <Skills />
                <SectionBreak id='projects' className='skills-break' scrollRef={projectScrollRef} />

                {/* Projects */}
                <Projects />
                <SectionBreak id='habitual' className='habitual-break' />
                <Habitual />
                <SectionBreak id='binnit' className='binnit-break' />
                <Binnit />
                <SectionBreak id='max-kelsen' className='max-kelsen-break' />
                <MaxKelsen />
                <SectionBreak id='study-saviour' className='study-saviour-break' />
                <StudySaviour />
                <SectionBreak id='working-mouse' className='working-mouse-break' />
                <WorkingMouse />
                <SectionBreak id='parmalat' className='parmalat-break' />
                <Parmalat />
                <SectionBreak id='yhp' className='yhp-break' />
                <YHP />
                <SectionBreak id='news-reader' className='news-break' />
                <NewsReader />
                <SectionBreak id='vector-graphics' className='vector-break' />
                <VectorTool />

                {/* OLD stuff */}
                {/* <SectionBreak className='gene-break' scrollRef={geneScrollRef} />
                <GeneSequence /> */}
                {/* <SectionBreak className='medical-break' scrollRef={medScrollRef} />
                <Medical />
                <SectionBreak className='path-break' scrollRef={pathScrollRef} />
                <PathFinder />
                <SectionBreak className='dist-break' scrollRef={distScrollRef} />
                <Dist /> */}

                <SectionBreak id='awards' className='awards-break' scrollRef={awardsScrollRef} />
                <Awards />
                <SectionBreak
                    id='cultural'
                    className='cultural-break'
                    scrollRef={culturalScrollRef}
                />
                <Cultural />
                <SectionBreak id='contact' className='contact-break' scrollRef={contactScrollRef} />
                <Contact />
            </div>
        </ScrollContext.Provider>
    );
};
