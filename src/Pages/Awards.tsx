import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const Awards = () => {
	return (
		<div className='section-container awards'>
			<ScrollAnimation animateIn='fadeIn' animateOnce>
				<div className='section-title'>Awards</div>
			</ScrollAnimation>

			<div className='awards-container'>{renderAwards()}</div>
		</div>
	);
};

export interface IAwardProps {
	image: string;
	title: string;
	subTitle: string;
	text: string;
	delay: number;
}

export const Award = (props: IAwardProps) => {
	return (
		<ScrollAnimation animateIn='fadeInLeft' animateOnce delay={props.delay}>
			<div className='overview-content'>
				<div className='overview-image-container'>
					<img
						className='overview-image'
						src={process.env.PUBLIC_URL + "/Awards/" + props.image}
						alt={props.title}
					/>
				</div>

				<div className='overview-title'>{props.title}</div>
				<div className='overview-sub-title'>{props.subTitle}</div>
				<div className='overview-text'>{props.text}</div>
			</div>
		</ScrollAnimation>
	);
};

const AwardContent: IAwardProps[] = [
	{
		image: "BestProject.jpg",
		title: "Best Overall Project",
		subTitle: "UQCS 2020 Hackathon",
		text: `Competed in the University of Queensland Computer 
		Society's 2020 Hackathon and was awarded the best overall 
		project for our teams work on a social note sharing platform 
		for UQ students`,
		delay: 100,
	},
	{
		image: "PeoplesChoice.jpg",
		title: "Peoples Choice Award",
		subTitle: "UQCS 2020 Hackathon",
		text: `Competed in the University of Queensland Computer 
		Society's 2020 Hackathon and was awarded the with the peoples choice award 
		as voted for by our competitors, for our project during the event`,
		delay: 200,
	},
	{
		image: "Deans.jpg",
		title: "Dean's Scholar",
		subTitle: "QUT 2017-Present",
		text: `Achieved a grade point average (GPA) of 6.5 or 
		higher during various semesters across my time at QUT, and was awarded 
		with a place on the Dean's List of Students with Excellent Academic Performance `,
		delay: 300,
	},
];

const renderAwards = () => {
	return AwardContent.map((award: IAwardProps) => (
		<Award
			title={award.title}
			text={award.text}
			subTitle={award.subTitle}
			image={award.image}
			delay={award.delay}
		/>
	));
};
