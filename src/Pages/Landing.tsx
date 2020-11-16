import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Sparkles } from "../Components/Sparkles/Sparkles";
import { ReactComponent as Border } from "./../Media/Graphics/Border.svg";
import { ReactComponent as Circle } from "./../Media/Graphics/Circle1.svg";
import { ReactComponent as Cloud1 } from "./../Media/Graphics/Cloud1.svg";
import { ReactComponent as Cloud2 } from "./../Media/Graphics/Cloud2.svg";
import { ReactComponent as Mail } from "./../Media/Graphics/Mail.svg";

export const Landing = () => {
	return (
		<section className="landing">
			<Circle className="solar" id="solar" />
			<Sparkles />
			<div className="name-container">
				<div className="name">
					<span className="name-light">Liam</span>
					<span className="name-bold">Percy</span>
					<ScrollAnimation animateIn="fadeIn" delay={500}>
						<p className="name-description">
							My name spelt backwards is
							<Mail className="mail-icon" />
						</p>
					</ScrollAnimation>
				</div>

				<Cloud1 className="cloud-1-1" />
				<Cloud1 className="cloud-1-2" />
				<Cloud2 className="cloud-2-1" />
				<Cloud2 className="cloud-2-2" />
			</div>
			<Border className="landing-border" />
		</section>
	);
};
