import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const Skills = () => {
	return (
		<div className="skills">
			<div className="section-container">
				<ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
					<div className="section-title">Skills</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-text">
						Hey! My name is Liam. I’m a computer science student at the Queensland
						University of Technology, and a software engineer at WorkingMouse / Codebots
						in Brisbane. My primary drive in life is to improve the lives of others
						through technology. I love to build cool stuff, with the hope that what I
						create will have a lasting impact on those who interact with it. I love
						tough problems, and I especially love working with a team of like-minded
						individuals in order to solve them. I have a keen interest in software
						development, graphic design, cloud computing, data analytics and machine
						learning.
					</div>
				</ScrollAnimation>
			</div>
		</div>
	);
};
