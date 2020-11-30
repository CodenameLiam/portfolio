import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Popup from "reactjs-popup";
import { LanguageIcon } from "../Pages/Skills";
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";

export const StudySaviour = () => {
	const [animateCarousel, setAnimateCarousel] = useState(false);

	return (
		<div className='study-saviour'>
			<div className='section-container'>
				<div className='project-container project-container-left'>
					<ScrollAnimation
						animateIn='fadeInLeft'
						animateOnce
						afterAnimatedIn={() => setAnimateCarousel(true)}
						className='project-image-container'>
						<Carousel
							key={`study${animateCarousel.toString()}`}
							showThumbs={false}
							autoPlay={animateCarousel}
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
					<ScrollAnimation
						animateIn='fadeInRight'
						animateOnce
						className='project-text-container'>
						<div className='section-sub-title project-sub-title-left'>
							Study Saviour
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
						<div className='project-text-left'>
							<i>Note sharing platform</i>
						</div>
						<div className='project-text-left'>
							Study Saviour provides students with a platform to share notes with each
							other, allowing them to better understand a particular topic that they
							may have missed in class, share knowledge in order to gain unique
							insights into a subject, and cover more material by collaborating with
							different members on the platform. The project uses an AWS application
							load balancer to scale elastically
						</div>
						<div className='project-link-container'>
							<div className='project-stack'>
								<div className='stack-images'>
									<LanguageIcon url='React.svg' tooptip='React JS' />
									<LanguageIcon url='Node.png' tooptip='Node JS / Express' />
									<LanguageIcon
										url='Firebase.png'
										tooptip='Firebase Auth / Firestore'
									/>
									<LanguageIcon url='Redis.png' tooptip='Redis' />
									<LanguageIcon
										url='AWS.svg'
										tooptip='Amazon Web Services EC2 / Load Balancer'
									/>
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
