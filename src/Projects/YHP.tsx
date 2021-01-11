import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "react-responsive-carousel";
import Popup from "reactjs-popup";
import { ProjectImage } from "../Components/ProjectImage";
import { LanguageIcon } from "../Pages/Skills";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";

export const YHP = () => {
	const [animateCarousel, setAnimateCarousel] = useState(false);

	return (
		<div className='yhp'>
			<img className="tree" src={process.env.PUBLIC_URL + "/Projects/YHP/Tree.png"} alt="tree"/>
			<div className='section-container'>
				<div className='project-container project-container-left'>
					<ScrollAnimation
						animateIn='fadeInLeft'
						animateOnce
						className='project-image-container'
						// @ts-ignore
						afterAnimatedIn={() => setAnimateCarousel(true)}>
						<Carousel
							key={`yhp${animateCarousel.toString()}`}
							autoPlay={animateCarousel}
							showThumbs={false}
							infiniteLoop={true}
							interval={5000}
							transitionTime={800}>
							<ProjectImage legend='Clinician Dashboard' URL='YHP/Dash.jpg' />
							<ProjectImage legend='Goals' URL='YHP/Goals.jpg' />
							<ProjectImage legend='Library' URL='YHP/Search.jpg' />
							<ProjectImage legend='Tracker' URL='YHP/PatientTracking.jpg' />
							<ProjectImage legend='Patient Profile' URL='YHP/ProfileWeb.jpg' />
							<ProjectImage legend='Mobile Application' URL='YHP/Mobile.jpg' />
						</Carousel>
					</ScrollAnimation>

					<ScrollAnimation
						animateIn='fadeInRight'
						animateOnce
						className='project-text-container'>
						<div className='section-sub-title project-sub-title-left'>
							YourHealth+
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
								<div>Coming Soon</div>
							</Popup>
						</div>
						<div className='project-text-left'>
							<i>Health Monitoring and Wellness Tool</i>
						</div>
						<div className='project-text-left'>
							YourHealth+ supports and improves wellbeing, so that users can be
							successful in achieving their goals. It allows users to measure, monitor
							and improve their wellbeing through a combination of articles, tools and
							activities, and provides support workers / psychiatrists mechanisms to
							help identify areas of improvement or concern so they can deploy
							appropriate resources to these users
						</div>
						<div className='project-link-container project-link-container-left'>
							<div className='project-stack'>
								<div className='stack-images'>
									<LanguageIcon
										url='React.svg'
										tooptip='React JS / React Native'
									/>
									<LanguageIcon url='GraphQL.svg' tooptip='GraphQL' />
									<LanguageIcon url='NET.svg' tooptip='ASP.NET' />
									<LanguageIcon url='Postgres.png' tooptip='PostgreSQL' />
									<LanguageIcon url='Docker.png' tooptip='Docker' />
									<LanguageIcon url='AWS.svg' tooptip='Amazon Web Services EC2' />
								</div>
								<div />
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};
