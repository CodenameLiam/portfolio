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
		<div className="projects">
			<div className="section-container">
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-title">Projects</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-sub-title">
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
							position="bottom center"
							on={["hover", "focus"]}
							trigger={<Info className="tooltip-button" />}>
							<span className="tooltip">Click on a project to see more info!</span>
						</Popup>
					</div>
				</ScrollAnimation>

				<div className="projects-overview">{renderProjectContent()}</div>
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
		<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={props.delay}>
			<div className="overview-content" onClick={scrollRefs[props.scrollRef]}>
				<img
					className="overview-image"
					src={process.env.PUBLIC_URL + "/Projects/" + props.image}
				/>
				<div className="overview-title">{props.title}</div>
			</div>
		</ScrollAnimation>
	);
};

const ProjectContent: IProjectProps[] = [
	{
		delay: 100,
		title: "Study Saviour",
		image: "StudySaviour.png",
		scrollRef: "studyScrollRef",
	},
	{
		delay: 200,
		title: "YourHealth+",
		image: "YHP.png",
		scrollRef: "YHPScrollRef",
	},
	{
		delay: 300,
		title: "Parmalat Australia",
		image: "Parm.png",
		scrollRef: "parmScrollRef",
	},
	{
		delay: 100,
		title: "News Reader",
		image: "News.png",
		scrollRef: "scrollRefFunc",
	},
	{
		delay: 200,
		title: "Gene Sequencer",
		image: "Gene.png",
		scrollRef: "scrollRefFunc",
	},
	{
		delay: 300,
		title: "Vector Graphics Design Tool",
		image: "VDT.png",
		scrollRef: "scrollRefFunc",
	},
	{
		delay: 100,
		title: "Machine Learning Medical Diagnosis",
		image: "https://i.pinimg.com/originals/54/2c/7e/542c7e0c990d70f3e732b8a9cf64815f.png",
		scrollRef: "scrollRefFunc",
	},
	{
		delay: 200,
		title: "Machine Learning Puzzle Solver",
		image: "https://i.pinimg.com/originals/54/2c/7e/542c7e0c990d70f3e732b8a9cf64815f.png",
		scrollRef: "scrollRefFunc",
	},
	{
		delay: 300,
		title: "Multi-Threaded Distributed System",
		image: "https://i.pinimg.com/originals/54/2c/7e/542c7e0c990d70f3e732b8a9cf64815f.png",
		scrollRef: "scrollRefFunc",
	},
];

const renderProjectContent = () => {
	return ProjectContent.map((project: IProjectProps) => (
		<Project
			delay={project.delay}
			title={project.title}
			image={project.image}
			scrollRef={project.scrollRef}
		/>
	));
};
