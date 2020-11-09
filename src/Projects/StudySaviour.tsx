import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { SectionBreak } from "../Components/SectionBreak";

export const StudySaviour = () => {
	return (
		<div className="study-saviour">
			<div className="section-container">
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-sub-title project-sub-title-left">Study Saviour</div>
				</ScrollAnimation>

				<div className="project-container project-container-left">
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOnce
						className="project-image-container">
						<img
							className="project-image"
							src={process.env.PUBLIC_URL + "/Media/CAB320/DecisionTreeGraph.png"}
						/>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn="fadeInRight"
						animateOnce
						className="project-text-container">
						<div className="project-text"></div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};
