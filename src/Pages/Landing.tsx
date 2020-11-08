import React from "react";
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
					<p className="name-description">
						My name spelt backwards is
						<Mail className="mail-icon" />
					</p>
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
