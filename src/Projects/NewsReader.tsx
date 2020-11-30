import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "react-responsive-carousel";
import Popup from "reactjs-popup";
import { ProjectImage } from "../Components/ProjectImage";
import { LanguageIcon } from "../Pages/Skills";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";

export const NewsReader = () => {
	const [animateCarousel, setAnimateCarousel] = useState(false);

	return (
		<div className='news-reader'>
			<div className='section-container'>
				<div className='project-container project-container-right'>
					<ScrollAnimation
						animateIn='fadeInLeft'
						animateOnce
						className='project-text-container'>
						<div className='section-sub-title project-sub-title-right'>
							News Reader
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
							<i>News article text-to-speech synthesizer</i>
						</div>
						<div className='project-text-right'>
							News reader harnesses the power of Google Cloud text-to-speech synthesis
							in order to provide users, especially those with a disability such as
							dyslexia, or just busy commuters, with a means of news consumption
							through audio playback. The news feed is generated through publicly
							available APIs, and rendered using TypeScript / React, while audio
							processessing, error handling and data logic is handled using
							NodeJS/Express.
						</div>
						<div className='project-link-container project-link-container-right'>
							<div className='project-stack'>
								<div className='stack-images'>
									<LanguageIcon
										url='React.svg'
										tooptip='React JS / React Native'
									/>
									<LanguageIcon url='Node.png' tooptip='Node JS / Express' />
									<LanguageIcon
										url='GCP.svg'
										tooptip='Google Cloud Text-To-Speech'
									/>
									<LanguageIcon url='Docker.png' tooptip='Docker' />
									<LanguageIcon url='AWS.svg' tooptip='Amazon Web Services EC2' />
								</div>
								<div />
							</div>
						</div>
					</ScrollAnimation>

					<ScrollAnimation
						animateIn='fadeInRight'
						animateOnce
						className='project-image-container'
						afterAnimatedIn={() => setAnimateCarousel(true)}>
						<Carousel
							key={`news${animateCarousel.toString()}`}
							autoPlay={animateCarousel}
							showThumbs={false}
							infiniteLoop={true}
							interval={5000}
							transitionTime={800}>
							<ProjectImage legend='Landing Page' URL='News/Home.png' />
							<ProjectImage
								legend='News Article Speech Playback'
								URL='News/Playback.png'
							/>
							<ProjectImage legend='Explore Article' URL='News/Explore.png' />
							<ProjectImage legend='Select Voice' URL='News/SelectVoice.png' />
						</Carousel>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};
