import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "react-responsive-carousel";
import Popup from "reactjs-popup";
import { LanguageIcon } from "../Pages/Skills";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";

export const VectorTool = () => {
	return (
		<div className="vector-tool">
			<div className="section-container">
				<div className="project-container project-container-right">
					<ScrollAnimation
						animateIn="fadeInLeft"
						animateOnce
						className="project-text-container">
						<div className="section-sub-title project-sub-title-right">
							Vector Tool
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
							<i>News Article Speech Synthesizer</i>
						</div>
						<div className="project-text-right">
							Study Saviour provides students with a platform to share notes with each
							other. This allows students to better understand a particular topic that
							they may have missed in class, share knowledge in order to gain unique
							insights into a subject, and cover more material by collaborating with
							different members on the platform. The project was scalled elastically
							using an AWS Application Load Balancer
						</div>
						<div className="project-link-container project-link-container-right">
							<div className="project-stack">
								<div className="stack-images">
									<LanguageIcon url="Java.png" tooptip="Java" />
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
