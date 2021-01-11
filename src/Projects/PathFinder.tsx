import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "react-responsive-carousel";
import Popup from "reactjs-popup";
import { ProjectImage } from "../Components/ProjectImage";
import { ProjectLinks } from "../Components/ProjectLinks";
import { LanguageIcon } from "../Pages/Skills";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";

export const PathFinder = () => {
	const [animateCarousel, setAnimateCarousel] = useState(false);

	return (
		<div className='path-finder'>
			<div className='section-container'>
				<div className='project-container project-container-right'>
					<ScrollAnimation
						animateIn='fadeInLeft'
						animateOnce
						className='project-text-container'>
						<div className='section-sub-title project-sub-title-right'>
							Machine Learning Path Finder
							<Popup
								contentStyle={{
									background: "#1c1e26",
									color: "#ffffff",
									border: "none",
									textAlign: "center",
									marginTop: "0.5rem",
								}}
								arrow={false}
								position='bottom center'
								trigger={<Link className='project-link-icon' />}>
								<ProjectLinks
									git='https://github.com/CodenameLiam/sokoban-path-finder'
									pdf={process.env.PUBLIC_URL + "/Media/PathFinding.pdf"}
								/>
							</Popup>
						</div>
						<div className='project-text-right'>
							<i>Deep Search Tree Path Finding</i>
						</div>
						<div className='project-text-right'>
							Sokoban is a puzzle computer game in which a player pushes boxes around
							a warehouse with the goal of placing them on designated target
							locations. This project involved the development and optimisation of an
							intelligent search agent in order to not only solve the Sokoban puzzle,
							but also minimise the amount of time taken to reach this solution state.
							The solution was written in Python, and makes use of the A* search
							algorithm to solve the game.
						</div>
						<div className='project-link-container project-link-container-right'>
							<div className='project-stack'>
								<div className='stack-images'>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372945/Python_jitmhh.webp'
										tooptip='Python'
									/>
								</div>
								<div />
							</div>
						</div>
					</ScrollAnimation>

					<ScrollAnimation
						animateIn='fadeInRight'
						animateOnce
						className='project-image-container'
						// @ts-ignore
						afterAnimatedIn={() => setAnimateCarousel(true)}>
						<Carousel
							key={`path${animateCarousel.toString()}`}
							showThumbs={false}
							autoPlay={animateCarousel}
							infiniteLoop={true}
							interval={5000}
							transitionTime={800}>
							<ProjectImage
								legend='Sokoban Path Finder'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_340/v1610372939/Game_eo3xpa.webp'
							/>
							<ProjectImage
								legend='Algorithm Flow Diagram'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_340/v1610372939/FlowDiagram_j64rpy.webp'
							/>
						</Carousel>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};
