import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "react-responsive-carousel";
import Popup from "reactjs-popup";
import { LanguageIcon } from "../Pages/Skills";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";

export const YHP = () => {
	return (
		<div className="yhp">
			<div className="section-container">
				<div className="project-container project-container-right">
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOnce
						className="project-text-container">
						<div className="section-sub-title project-sub-title-right">
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
								position="bottom center"
								trigger={<Link className="project-link-icon" />}>
								<div>Test</div>
							</Popup>
						</div>
						<div className="project-text-right">
							<i>Health monitoring and wellness tool</i>
						</div>
						<div className="project-text-right">
							YourHealth+ supports and improves wellbeing, so that users can be
							successful in achieving their goals. It allows users to measure, monitor
							and improve their wellbeing through a combination of articles, tools and
							activities, and provides support workers / psychiatrists mechanisms to
							help identify areas of improvement or concern so they can deploy
							appropriate resources to these users
						</div>
						<div className="project-link-container project-link-container-right">
							<div className="project-stack">
								<div className="stack-images">
									<LanguageIcon
										url="React.svg"
										tooptip="React JS / React Native"
									/>
									<LanguageIcon url="GraphQL.svg" tooptip="GraphQL" />
									<LanguageIcon url="NET.svg" tooptip="ASP.NET" />
									<LanguageIcon url="Postgres.png" tooptip="PostgreSQL" />
									<LanguageIcon url="Docker.png" tooptip="Docker" />
									<LanguageIcon url="AWS.svg" tooptip="Amazon Web Services EC2" />
								</div>
								<div />
							</div>
						</div>
					</ScrollAnimation>

					<ScrollAnimation
						animateIn="fadeInRight"
						animateOnce
						className="project-image-container">
						<Carousel
							showThumbs={false}
							autoPlay={true}
							infiniteLoop={true}
							interval={5000}
							transitionTime={800}>
							<img
								className="project-image"
								src={
									process.env.PUBLIC_URL + "/Projects/StudySaviour/Dashboard.png"
								}
							/>
							<img
								className="project-image"
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
