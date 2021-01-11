import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Award, IAwardProps } from "./Awards";

export const Cultural = () => {
	return (
		<div className='cultural'>
			<div className='section-container'>
				<ScrollAnimation animateIn='fadeIn' animateOnce>
					<div className='section-title'>Cultural</div>
				</ScrollAnimation>

				<div className='cultural-container'>{renderAwards()}</div>
			</div>
		</div>
	);
};

const CulturalContent: IAwardProps[] = [
	{
		image: "https://res.cloudinary.com/djeukcxxb/image/upload/v1610372948/VT_a8d5b5.png",
		title: "Certificate II Active Volunteering",
		subTitle: "Volunteering Queensland 2016",
		text: `Completed a Certificate II in Active Volunteering at Brisbane State High School, 
		teaching small workshops in graphic, industrial and environmental design. Introduced students
		to the principals of design using Autodesk software such as Inventor and Revit.`,
		delay: 100,
	},
	{
		image:
			"https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_592/v1610372948/BSHS_tnlhcp.png",
		title: "Soccer Coach",
		subTitle: "Brisbane State High School 2016",
		text: `Was responsible for coaching a junior football team at Brisbane State High School. 
		Organised training sessions, pre-match warmups and game tactics. Developed my skills as a leader
		and mentor while assisting students to improve their playing skills.`,
		delay: 200,
	},
];

const renderAwards = () => {
	return CulturalContent.map((award: IAwardProps) => (
		<Award
			key={award.title}
			title={award.title}
			text={award.text}
			subTitle={award.subTitle}
			image={award.image}
			delay={award.delay}
		/>
	));
};
