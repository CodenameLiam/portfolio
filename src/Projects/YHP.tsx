import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Carousel } from 'react-responsive-carousel';
import Popup from 'reactjs-popup';
import { ProjectImage } from '../Components/ProjectImage';
import { ProjectLinks } from '../Components/ProjectLinks';
import { LanguageIcon } from '../Pages/Skills';
import { ReactComponent as Link } from './../Media/Icons/Link.svg';

export const YHP = () => {
	const [animateCarousel, setAnimateCarousel] = useState(false);

	return (
		<div className='yhp'>
			<img
				className='tree'
				src='https://res.cloudinary.com/djeukcxxb/image/upload/v1610373915/Tree_n2bf33.png'
				alt='tree'
			/>
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
							<ProjectImage
								legend='Clinician Dashboard'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372940/Dash_ly9crd.webp'
							/>
							<ProjectImage
								legend='Goals'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372941/Goals_cpokxc.webp'
							/>
							<ProjectImage
								legend='Library'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372941/Search_lpggfw.webp'
							/>
							<ProjectImage
								legend='Tracker'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372941/PatientTracking_eszpuu.webp'
							/>
							<ProjectImage
								legend='Patient Profile'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372941/ProfileWeb_r0nefq.webp'
							/>
							<ProjectImage
								legend='Mobile Application'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372941/Mobile_e8xg3z.webp'
							/>
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
									background: '#1c1e26',
									color: '#ffffff',
									border: 'none',
									textAlign: 'center',
									marginTop: '0.5rem',
								}}
								arrow={false}
								position='bottom center'
								trigger={<Link className='project-link-icon' />}>
								<ProjectLinks video='https://www.youtube.com/watch?v=-o5f6lThm0I' />
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
										url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372946/React_ylb6k9.svg'
										tooptip='React JS / React Native'
									/>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372943/GraphQL_c98kdt.svg'
										tooptip='GraphQL'
									/>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372945/NET_oo3zau.svg'
										tooptip='ASP.NET'
									/>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372945/Postgres_a2z8pz.webp'
										tooptip='PostgreSQL'
									/>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372942/Docker_ema1xe.webp'
										tooptip='Docker'
									/>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372941/AWS_uujxmk.svg'
										tooptip='Amazon Web Services EC2'
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
