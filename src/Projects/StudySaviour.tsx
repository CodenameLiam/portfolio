import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Popup from "reactjs-popup";
import { LanguageIcon } from "../Pages/Skills";
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";
import { ProjectImage } from "../Components/ProjectImage";

export const StudySaviour = () => {
	const [animateCarousel, setAnimateCarousel] = useState(false);

	return (
		<div className='study-saviour'>
			<div className='section-container'>
				<div className='project-container project-container-left'>
					<ScrollAnimation
						animateIn='fadeInLeft'
						animateOnce
						// @ts-ignore
						afterAnimatedIn={() => setAnimateCarousel(true)}
						className='project-image-container'>
						<Carousel
							key={`study${animateCarousel.toString()}`}
							autoPlay={animateCarousel}
							showThumbs={false}
							infiniteLoop={true}
							interval={5000}
							transitionTime={800}>
							<ProjectImage
								legend='Dashboard'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372939/Dashboard_wfwsen.png'
							/>
							<ProjectImage
								legend='Upload Notes'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372940/Upload_l3smtr.png'
							/>
							<ProjectImage
								legend='Liked Notes'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372939/LikedNotes_d0ah20.png'
							/>
							<ProjectImage
								legend='Login'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372939/Login_thjcue.png'
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
								<div>Coming Soon</div>
							</Popup>
						</div>
						<div className='project-text-left'>
							<i>Social Note Sharing Platform</i>
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
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372946/React_ylb6k9.svg'
										tooptip='React JS'
									/>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372945/Node_oonmq9.png'
										tooptip='Node JS / Express'
									/>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372942/Firebase_wnhx7u.png'
										tooptip='Firebase Auth / Firestore'
									/>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372946/Redis_birwsp.png'
										tooptip='Redis'
									/>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372941/AWS_uujxmk.svg'
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
