import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ReactComponent as Code } from "./../Media/Skills/Code.svg";
import { ReactComponent as Design } from "./../Media/Skills/Design.svg";
import { ReactComponent as Ops } from "./../Media/Skills/Ops.svg";
import { ReactComponent as Coms } from "./../Media/Skills/Coms.svg";
import { ReactComponent as Info } from "./../Media/Icons/Info.svg";
import Popup from "reactjs-popup";

export const Skills = () => {
	return (
		<div className="skills">
			<div className="section-container">
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-title">Skills</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-sub-title">Overview</div>
				</ScrollAnimation>

				<div className="skills-overview">
					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={100}>
						<div className="overview-content">
							<Code className="skill-icon" />
							<div className="overview-title">Development</div>
							<div className="overview-text">
								Development is my craft. I love that it allows me to be creative,
								solve complex problems, and ultimately build something great. I
								always strive to develop clean, clear, performant, responsive and
								high quality code.
							</div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={200}>
						<div className="overview-content">
							<Design className="skill-icon" />
							<div className="overview-title">Design</div>
							<div className="overview-text">
								Creation is core to the human experience, and I am incredibly
								passionate about producing work that incites that special feeling
								deep within others, and hopefully inspires them in their own
								creative endeavours.
							</div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={300}>
						<div className="overview-content">
							<Ops className="skill-icon" />
							<div className="overview-title">Operations</div>
							<div className="overview-text">
								There is no point making a product if no one can see how awesome it
								is! I love architecting scalable, highly performant and fault
								tolerant solutions, or developing tooling to assist with the
								deployment process.
							</div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeInLeft" animateOnce delay={400}>
						<div className="overview-content">
							<Coms className="skill-icon" />
							<div className="overview-title">Communication</div>
							<div className="overview-text">
								Team work makes the dream work. I am super passionate about sharing
								knowledge, collaborating, learning from or mentoring others and
								ultimately just working together as a team towards a common goal.
							</div>
						</div>
					</ScrollAnimation>
				</div>

				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-sub-title">
						Languages
						<Popup
							contentStyle={{
								padding: "1rem",
								background: "#1c1e26",
								color: "#ffffff",
								border: "none",
								textAlign: "center",
							}}
							arrow={false}
							position="bottom center"
							on={["hover", "focus"]}
							trigger={<Info className="tooltip-button" />}>
							<span className="tooltip">
								I have worked with these languages extensively throughout my career
								in production, at univeristy and on personal projects
							</span>
						</Popup>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="icon-group-container">
						<div className="icon-group language-group">
							<LanguageIcon url="JS.png" tooptip="JavaScript" />
							<LanguageIcon url="TS.png" tooptip="TypeScript" />
							<LanguageIcon url="Python.png" tooptip="Python" />
							<LanguageIcon url="C.svg" tooptip="C" />
							<LanguageIcon url="CSharp.svg" tooptip="C#" />
							<LanguageIcon url="Java.png" tooptip="Java" />
							<LanguageIcon url="HTML.svg" tooptip="HTML" />
							<LanguageIcon url="CSS.svg" tooptip="CSS" />
							<LanguageIcon url="SASS.svg" tooptip="SASS" />
						</div>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="section-sub-title">
						Tools
						<Popup
							contentStyle={{
								padding: "1rem",
								background: "#1c1e26",
								color: "#ffffff",
								border: "none",
								textAlign: "center",
							}}
							arrow={false}
							position="bottom center"
							on={["hover", "focus"]}
							trigger={<Info className="tooltip-button" />}>
							<span className="tooltip">
								I use most these tools on a daily basis, and have significant
								experience with all of them in production, university and on
								personal projects
							</span>
						</Popup>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="icon-group-container">
						<div className="icon-group tool-group">
							<LanguageIcon url="React.svg" tooptip="React JS / React Native" />
							<LanguageIcon url="GraphQL.svg" tooptip="GraphQL" />
							<LanguageIcon url="Storybook.png" tooptip="Storybook JS" />
							<LanguageIcon url="Docker.png" tooptip="Docker" />
							<LanguageIcon url="Postgres.png" tooptip="PostgreSQL" />
							<LanguageIcon url="Git.png" tooptip="Git" />
							<LanguageIcon url="NET.svg" tooptip="ASP.NET" />
							<LanguageIcon url="AWS.svg" tooptip="Amazon Web Services" />
							<LanguageIcon url="Node.png" tooptip="Node JS / Express" />
							<LanguageIcon url="MongoDB.png" tooptip="MongoDB" />
							<LanguageIcon url="Firebase.png" tooptip="Firebase" />
							<LanguageIcon url="Tensor.svg" tooptip="TensorFlow" />
						</div>
					</div>
				</ScrollAnimation>
			</div>
		</div>
	);
};

interface ILanguageIconProps {
	url: string;
	tooptip: string;
}

const LanguageIcon = (props: ILanguageIconProps) => {
	return (
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
			on={["hover", "focus"]}
			trigger={
				<img
					className="language-icon"
					src={process.env.PUBLIC_URL + "/Tools/" + props.url}
				/>
			}>
			<span className="tooltip">{props.tooptip}</span>
		</Popup>
	);
};
