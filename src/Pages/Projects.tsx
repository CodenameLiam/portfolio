import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup';
import Assets from '../Assets/Assets';
import { ReactComponent as Info } from './../Media/Icons/Info.svg';

interface IProjectsRefs {
    // studySavRef: ()=>void;
}

export const Projects = (props: IProjectsRefs) => {
    return (
        <div className='projects'>
            <div className='section-container'>
                <ScrollAnimation animateIn='fadeIn' animateOnce>
                    <div className='section-title'>Projects</div>
                </ScrollAnimation>

                <ScrollAnimation animateIn='fadeIn' animateOnce>
                    <div className='section-sub-title'>
                        Overview
                        <Popup
                            contentStyle={{
                                padding: '1rem',
                                background: '#1c1e26',
                                color: '#ffffff',
                                border: 'none',
                                textAlign: 'center',
                            }}
                            arrow={false}
                            position='bottom center'
                            on={['hover', 'focus']}
                            trigger={<Info className='tooltip-button' />}>
                            <span className='tooltip'>Click on a project to see more info!</span>
                        </Popup>
                    </div>
                </ScrollAnimation>

                <div className='projects-overview'>{renderProjectContent()}</div>
            </div>
        </div>
    );
};

interface IProjectProps {
    delay: number;
    title: string;
    image: string;
    href: string;
}

const Project = (props: IProjectProps) => {
    return (
        <ScrollAnimation animateIn='fadeInLeft' animateOnce delay={props.delay}>
            <a href={`#${props.href}`}>
                <div className='overview-content'>
                    <img className='overview-image' src={props.image} alt={props.title} />
                    <div className='overview-title'>{props.title}</div>
                </div>
            </a>
        </ScrollAnimation>
    );
};

const ProjectContent: IProjectProps[] = [
    {
        delay: 100,
        title: 'Habitual',
        image: Assets.Habitual,
        href: 'habitual',
    },
    {
        delay: 200,
        title: 'Binnit',
        image: Assets.Binnit,
        href: 'binnit',
    },
    {
        delay: 300,
        title: 'Max Kelsen',
        image: Assets.MKP,
        href: 'max-kelsen',
    },
    {
        delay: 100,
        title: 'Study Saviour',
        image: 'https://res.cloudinary.com/djeukcxxb/image/upload/v1610372940/StudySaviour_tsorse.webp',
        href: 'study-saviour',
    },
    {
        delay: 200,
        title: 'WorkingMouse',
        image: Assets.WMP,
        href: 'working-mouse',
    },
    {
        delay: 300,
        title: 'YourHealth+',
        image: 'https://res.cloudinary.com/djeukcxxb/image/upload/v1610372941/YHP_piibbi.webp',
        href: 'yhp',
    },

    {
        delay: 100,
        title: 'News Reader',
        image: 'https://res.cloudinary.com/djeukcxxb/image/upload/v1610372938/News_yqhksz.webp',
        href: 'news-reader',
    },
    {
        delay: 200,
        title: 'Parmalat Australia',
        image: Assets.Parm,
        href: 'parmalat',
    },
    {
        delay: 300,
        title: 'Vector Graphics Design Tool',
        image: 'https://res.cloudinary.com/djeukcxxb/image/upload/v1610372940/VDT_krrbrc.webp',
        href: 'vector-graphics',
    },
    // {
    //     delay: 200,
    //     title: 'Gene Sequencer',
    //     image: 'https://res.cloudinary.com/djeukcxxb/image/upload/v1610372937/Gene_aghbil.webp',
    //     scrollRef: 'geneScrollRef',
    // },
    // {
    //     delay: 100,
    //     title: 'Machine Learning Medical Diagnosis',
    //     image: 'https://res.cloudinary.com/djeukcxxb/image/upload/v1610372937/MLMD_hevruc.webp',
    //     scrollRef: 'medScrollRef',
    // },
    // {
    //     delay: 200,
    //     title: 'Machine Learning Path Finder',
    //     image: 'https://res.cloudinary.com/djeukcxxb/image/upload/v1610372939/Path_q4qm4v.webp',
    //     scrollRef: 'pathScrollRef',
    // },
    // {
    //     delay: 300,
    //     title: 'Multi-Threaded Distributed System',
    //     image: 'https://res.cloudinary.com/djeukcxxb/image/upload/v1610372935/Dist_gef5sc.webp',
    //     scrollRef: 'distScrollRef',
    // },
];

const renderProjectContent = () => {
    return ProjectContent.map((project: IProjectProps) => (
        <Project
            key={project.title}
            delay={project.delay}
            title={project.title}
            image={project.image}
            href={project.href}
        />
    ));
};
