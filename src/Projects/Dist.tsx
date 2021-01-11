import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Popup from "reactjs-popup";
import { LanguageIcon } from "../Pages/Skills";
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";
import { ProjectLinks } from "../Components/ProjectLinks";
import { ProjectImage } from "../Components/ProjectImage";

export const Dist = () => {
	const [animateCarousel, setAnimateCarousel] = useState(false);

	return (
		<div className='dist'>
			<div className='section-container'>
				<div className='project-container project-container-left'>
					<ScrollAnimation
						animateIn='fadeInLeft'
						animateOnce
						className='project-image-container'
						// @ts-ignore
						afterAnimatedIn={() => setAnimateCarousel(true)}>
						<Carousel
							key={`dist${animateCarousel.toString()}`}
							showThumbs={false}
							autoPlay={animateCarousel}
							infiniteLoop={true}
							interval={5000}
							transitionTime={800}>
							<ProjectImage
								legend='Multi-Threading'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_300/v1610372936/MultiThreading_vnwgz9.webp'
							/>
							<ProjectImage
								legend='Memory Management and Signalling'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_300/v1610372936/MemMng_fvwuby.webp'
							/>
						</Carousel>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn='fadeInRight'
						animateOnce
						className='project-text-container'>
						<div className='section-sub-title project-sub-title-left'>
							Distributed System
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
								<ProjectLinks git='https://github.com/CodenameLiam/distributed-system' />
							</Popup>
						</div>
						<div className='project-text-left'>
							<i>Multi-Threaded Request Handler Using Sockets</i>
						</div>
						<div className='project-text-left'>
							This project consists of two applications: an overseeer and a
							controller. These two applications are networked using BSD sockets. The
							overseeer runs indefinitely, and handles commands sent by multiple
							controllers simultaneously using the pthreads API. Memory information
							can be retreived from running processes, and the program can be
							interrupted at any point through POSIX signals.
						</div>
						<div className='project-link-container'>
							<div className='project-stack'>
								<div className='stack-images'>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372941/C_ihehoc.svg'
										tooptip='C'
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
