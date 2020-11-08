import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

interface IProjectProps {
	delay: number;
	title: string;
	image: string;
}

const Project = (props: IProjectProps) => {
	return (
		<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={props.delay}>
			<div className="overview-content">
				<img className="overview-image" src={props.image} />
				<div className="overview-title">{props.title}</div>
			</div>
		</ScrollAnimation>
	);
};

export const Projects = () => {
	return (
		<div className="projects">
			<div className="section-container">
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-title">Projects</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-sub-title">Overview</div>
				</ScrollAnimation>

				<div className="projects-overview">
					<Project
						delay={100}
						title="Study Saviour"
						image="https://i.pinimg.com/originals/54/2c/7e/542c7e0c990d70f3e732b8a9cf64815f.png"
					/>
					<Project
						delay={200}
						title="YourHealth+"
						image="https://i.pinimg.com/originals/54/2c/7e/542c7e0c990d70f3e732b8a9cf64815f.png"
					/>

					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={300}>
						<div className="overview-content">
							<img
								className="overview-image"
								src="https://i.pinimg.com/originals/54/2c/7e/542c7e0c990d70f3e732b8a9cf64815f.png"
							/>
							<div className="overview-title">News Reader</div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={100}>
						<div className="overview-content">
							<img
								className="overview-image"
								src="https://i.pinimg.com/originals/54/2c/7e/542c7e0c990d70f3e732b8a9cf64815f.png"
							/>
							<div className="overview-title">Gene Sequencing</div>
						</div>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={200}>
						<div className="overview-content">
							<img
								className="overview-image"
								src="https://i.pinimg.com/originals/54/2c/7e/542c7e0c990d70f3e732b8a9cf64815f.png"
							/>
							<div className="overview-title">Machine Learning Medical Diagnosis</div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={300}>
						<div className="overview-content">
							<div className="overview-title">Machine Learning Puzzle Solver</div>
							<div className="overview-text"></div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={100}>
						<div className="overview-content">
							<div className="overview-title">Vector Graphics Design Tool</div>
							<div className="overview-text"></div>
						</div>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={200}>
						<div className="overview-content">
							<div className="overview-title">Multi-Threaded Disbuted System</div>
							<div className="overview-text"></div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={300}>
						<div className="overview-content">
							<div className="overview-title">Paramlet Australia</div>
							<div className="overview-text"></div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={100}>
						<div className="overview-content">
							<div className="overview-title">Vector Graphics Design Tool</div>
							<div className="overview-text"></div>
						</div>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={200}>
						<div className="overview-content">
							<div className="overview-title">Multi-Threaded Disbuted System</div>
							<div className="overview-text"></div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={300}>
						<div className="overview-content">
							<div className="overview-title">Paramlet Australia</div>
							<div className="overview-text"></div>
						</div>
					</ScrollAnimation>
				</div>

				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-sub-title project-sub-title-left">
						Consensus Promotor Predictor
					</div>
				</ScrollAnimation>

				<div className="project-container">
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
