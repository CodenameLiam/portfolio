import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Sparkles } from "../Components/Sparkles/Sparkles";

export const Contact = () => {
	return (
		<div className='section-container contact'>
			<ScrollAnimation animateIn='fadeIn' animateOnce>
				<div className='section-title'>Contact</div>
			</ScrollAnimation>

			<ScrollAnimation animateIn='fadeIn' animateOnce>
				<div className='section-text'>
					<p>WOW, You made it all the way to the bottom!</p>
					<p>
						If you'd like to know anymore about me, you can check out my resume and
						social's below:
					</p>
				</div>

				<div className='contact-buttons'>
					<div
						className='contact-button resume'
						onClick={() => window.open(process.env.PUBLIC_URL + "/Contact/Resume.pdf")}>
						<div className='resume-text'>Resume</div>
					</div>
					<div
						className='contact-button linkedin'
						onClick={() => window.open("https://www.linkedin.com/in/liam-percy/")}>
						<img src={process.env.PUBLIC_URL + "/Contact/Linkedin.png"} alt="LinkedIn"/>
					</div>
					<div
						className='contact-button github'
						onClick={() => window.open("https://github.com/CodenameLiam")}>
						<img src={process.env.PUBLIC_URL + "/Contact/Github.png"} alt="Github" />
					</div>
				</div>

				<div className='section-text'>
					<p>Please feel free to reach out and chat, I'd love to hear from you!</p>
				</div>

				<div className='contact-sparkles'>
					<Sparkles>
						<img className='me' src={process.env.PUBLIC_URL + "/Contact/Me.jpg"} alt="Me!"/>
					</Sparkles>
				</div>
			</ScrollAnimation>
		</div>
	);
};
