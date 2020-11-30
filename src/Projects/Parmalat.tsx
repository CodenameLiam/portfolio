import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Popup from "reactjs-popup";
import { LanguageIcon } from "../Pages/Skills";
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";

export const Parmalat = () => {
	const [animateCarousel, setAnimateCarousel] = useState(false);

	return (
		<div className='parmalat'>
			<div className='section-container'>
				<div className='project-container project-container-right'>
					<ScrollAnimation
						animateIn='fadeInLeft'
						animateOnce
						className='project-text-container'>
						<div className='section-sub-title project-sub-title-right'>
							Parmalat Australia
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
								<div>Test</div>
							</Popup>
						</div>
						<div className='project-text-right'>
							<i>Note sharing platform</i>
						</div>
						<div className='project-text-right'>
							Study Saviour provides students with a platform to share notes with each
							other. This allows students to better understand a particular topic that
							they may have missed in class, share knowledge in order to gain unique
							insights into a subject, and cover more material by collaborating with
							different members on the platform. The project uses an AWS application
							load balancer to scale elastically
						</div>
						<div className='project-link-container project-link-container-right'>
							<div className='project-stack'>
								<div className='stack-images'>
									<LanguageIcon
										url='React.svg'
										tooptip='React JS / React Native'
									/>
									<LanguageIcon url='GraphQL.svg' tooptip='GraphQL' />
									<LanguageIcon url='NET.svg' tooptip='ASP.NET' />
									<LanguageIcon
										url='IIS.png'
										tooptip='Microsoft IIS / SQL Server'
									/>
									<LanguageIcon url='Docker.png' tooptip='Docker' />
								</div>
								<div />
							</div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn='fadeInRight'
						animateOnce
						afterAnimatedIn={() => setAnimateCarousel(true)}
						className='project-image-container'>
						<Carousel
							key={`study${animateCarousel.toString()}`}
							showThumbs={false}
							autoPlay={true}
							infiniteLoop={true}
							interval={5000}
							transitionTime={800}>
							<img
								className='project-image'
								src={
									process.env.PUBLIC_URL + "/Projects/StudySaviour/Dashboard.png"
								}
							/>
							<img
								className='project-image'
								src={
									process.env.PUBLIC_URL + "/Projects/StudySaviour/Dashboard.png"
								}
							/>
						</Carousel>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};
