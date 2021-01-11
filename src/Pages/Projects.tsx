import React, { useContext } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Popup from "reactjs-popup";
import { ReactComponent as Info } from "./../Media/Icons/Info.svg";
import { ScrollContext } from "./Home";

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
								padding: "1rem",
								background: "#1c1e26",
								color: "#ffffff",
								border: "none",
								textAlign: "center",
							}}
							arrow={false}
							position='bottom center'
							on={["hover", "focus"]}
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
	scrollRef: string;
}

const Project = (props: IProjectProps) => {
	const scrollRefs = useContext(ScrollContext);

	return (
		<ScrollAnimation animateIn='fadeInLeft' animateOnce delay={props.delay}>
			<div className='overview-content' onClick={scrollRefs[props.scrollRef]}>
				<img className='overview-image' src={props.image} alt={props.title} />
				<div className='overview-title'>{props.title}</div>
			</div>
		</ScrollAnimation>
	);
};

const ProjectContent: IProjectProps[] = [
	{
		delay: 100,
		title: "Study Saviour",
		image:
			"https://res.cloudinary.com/djeukcxxb/image/upload/v1610372940/StudySaviour_tsorse.webp",
		scrollRef: "studyScrollRef",
	},
	{
		delay: 200,
		title: "Parmalat Australia",
		image: "https://res.cloudinary.com/djeukcxxb/image/upload/v1610372938/Parm_mxcoit.webp",
		scrollRef: "parmScrollRef",
	},
	{
		delay: 300,
		title: "YourHealth+",
		image: "https://res.cloudinary.com/djeukcxxb/image/upload/v1610372941/YHP_piibbi.webp",
		scrollRef: "YHPScrollRef",
	},

	{
		delay: 100,
		title: "News Reader",
		image: "https://res.cloudinary.com/djeukcxxb/image/upload/v1610372938/News_yqhksz.webp",
		scrollRef: "newsScrollRef",
	},
	{
		delay: 200,
		title: "Gene Sequencer",
		image: "https://res.cloudinary.com/djeukcxxb/image/upload/v1610372937/Gene_aghbil.webp",
		scrollRef: "geneScrollRef",
	},
	{
		delay: 300,
		title: "Vector Graphics Design Tool",
		image: "https://res.cloudinary.com/djeukcxxb/image/upload/v1610372940/VDT_krrbrc.webp",
		scrollRef: "vectorScrollRef",
	},
	{
		delay: 100,
		title: "Machine Learning Medical Diagnosis",
		image: "https://res.cloudinary.com/djeukcxxb/image/upload/v1610372937/MLMD_hevruc.webp",
		scrollRef: "medScrollRef",
	},
	{
		delay: 200,
		title: "Machine Learning Path Finder",
		image: "https://res.cloudinary.com/djeukcxxb/image/upload/v1610372939/Path_q4qm4v.webp",
		scrollRef: "pathScrollRef",
	},
	{
		delay: 300,
		title: "Multi-Threaded Distributed System",
		image: "https://res.cloudinary.com/djeukcxxb/image/upload/v1610372935/Dist_gef5sc.webp",
		scrollRef: "distScrollRef",
	},
];

const renderProjectContent = () => {
	return ProjectContent.map((project: IProjectProps) => (
		<Project
			key={project.title}
			delay={project.delay}
			title={project.title}
			image={project.image}
			scrollRef={project.scrollRef}
		/>
	));
};
