import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const YHP = () => {
	return (
		<div className="yhp">
			<div className="section-container">
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-sub-title project-sub-title-right">YourHealth+</div>
				</ScrollAnimation>

				<div className="project-container project-container-right">
					<ScrollAnimation
						animateIn="fadeInRight"
						animateOnce
						className="project-text-container">
						<div className="project-text"></div>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOnce
						className="project-image-container">
						<img
							className="project-image"
							src={process.env.PUBLIC_URL + "/Media/CAB320/DecisionTreeGraph.png"}
						/>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};
