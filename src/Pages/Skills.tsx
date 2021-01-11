import React, { ReactElement } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ReactComponent as Code } from "./../Media/Skills/Code.svg";
import { ReactComponent as Design } from "./../Media/Skills/Design.svg";
import { ReactComponent as Ops } from "./../Media/Skills/Ops.svg";
import { ReactComponent as Coms } from "./../Media/Skills/Coms.svg";
import { ReactComponent as Info } from "./../Media/Icons/Info.svg";
import Popup from "reactjs-popup";

export const Skills = () => {
	return (
		<div className='skills'>
			<div className='section-container'>
				<ScrollAnimation animateIn='fadeIn' animateOnce>
					<div className='section-title'>Skills</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeIn' animateOnce>
					<div className='section-sub-title'>Overview</div>
				</ScrollAnimation>

				<div className='skills-overview'>{renderSkillsOverview()}</div>

				<ScrollAnimation animateIn='fadeIn' animateOnce>
					<div className='section-sub-title'>
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
							position='bottom center'
							on={["hover", "focus"]}
							trigger={<Info className='tooltip-button' />}>
							<span className='tooltip'>
								I have worked with these languages extensively
							</span>
						</Popup>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeIn' animateOnce>
					<div className='icon-group-container'>
						<div className='icon-group language-group'>
							<LanguageIcon url='JS.png' tooptip='JavaScript' />
							<LanguageIcon url='TS.png' tooptip='TypeScript' />
							<LanguageIcon url='Python.png' tooptip='Python' />
							<LanguageIcon url='C.svg' tooptip='C' />
							<LanguageIcon url='CPP.svg' tooptip='C++' />
							<LanguageIcon url='CSharp.svg' tooptip='C#' />
							<LanguageIcon url='HTML.svg' tooptip='HTML' />
							<LanguageIcon url='CSS.svg' tooptip='CSS' />
							<LanguageIcon url='Sass.svg' tooptip='SASS' />
							<LanguageIcon url='Java.png' tooptip='Java' />
							<LanguageIcon url='Go.svg' tooptip='Go' />
							
						</div>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn='fadeIn' animateOnce>
					<div className='section-sub-title'>
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
							position='bottom center'
							on={["hover", "focus"]}
							trigger={<Info className='tooltip-button' />}>
							<span className='tooltip'>
								I use most these tools on a daily basis, and have solid working
								experience with all of them
							</span>
						</Popup>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn='fadeIn' animateOnce>
					<div className='icon-group-container'>
						<div className='icon-group tool-group'>
							<LanguageIcon url='React.svg' tooptip='React JS / React Native' />
							<LanguageIcon url='GraphQL.svg' tooptip='GraphQL' />
							<LanguageIcon url="Storybook.png" tooptip="Storybook JS" />
							<LanguageIcon url='Docker.png' tooptip='Docker' />
							<LanguageIcon url='Postgres.png' tooptip='PostgreSQL' />
							<LanguageIcon url='GoogCloud.svg' tooptip='Google Cloud Platform / Services' />
							<LanguageIcon url='NET.svg' tooptip='ASP.NET' />
							<LanguageIcon url='AWS.svg' tooptip='Amazon Web Services' />
							<LanguageIcon url='Redis.png' tooptip='Redis' />
							<LanguageIcon url='Git.png' tooptip='Git' />
							<LanguageIcon url='Firebase.png' tooptip='Firebase' />
							<LanguageIcon url='Tensor.svg' tooptip='TensorFlow' />
							<LanguageIcon url='Node.png' tooptip='NodeJS / Express' />
							<LanguageIcon url='MongoDB.png' tooptip='MongoDB' />
							<LanguageIcon url='Gatsby.svg' tooptip='Gatsby' />
							<LanguageIcon url='Next.svg' tooptip='NextJS' />
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

export const LanguageIcon = (props: ILanguageIconProps) => {
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
			position='bottom center'
			on={["hover", "focus"]}
			trigger={
				<img
					className='language-icon'
					src={process.env.PUBLIC_URL + "/Tools/" + props.url}
					alt={props.tooptip}
				/>
			}>
			<span className='tooltip'>{props.tooptip}</span>
		</Popup>
	);
};

interface ISkillOverviewProps {
	icon: ReactElement;
	title: string;
	text: string;
	delay: number;
}

const SkillOverview = (props: ISkillOverviewProps) => {
	return (
		<ScrollAnimation animateIn='fadeInLeft' animateOnce delay={props.delay}>
			<div className='overview-content'>
				{props.icon}
				<div className='overview-title'>{props.title}</div>
				<div className='overview-text'>{props.text}</div>
			</div>
		</ScrollAnimation>
	);
};

const SkillsOverviewContent: ISkillOverviewProps[] = [
	{
		icon: <Code className='skill-icon' />,
		title: "Development",
		text: `Development is my craft. I love that it allows me to be creative,
	solve complex problems, and ultimately build something great. I
	always strive to develop clean, clear, performant, responsive and
	high quality code.`,
		delay: 100,
	},
	{
		icon: <Design className='skill-icon' />,
		title: "Design",
		text: `Creation is core to the human experience, and I am incredibly
		passionate about producing work that hits the aesthetic sweet spot, 
		and hopefully inspires others in their own creative endeavours.`,
		delay: 200,
	},
	{
		icon: <Ops className='skill-icon' />,
		title: "Operations",
		text: `There is no point making a product if no one can see how awesome it
		is! I love architecting scalable, highly performant and fault
		tolerant solutions, or developing tooling to assist with the
		deployment process.`,
		delay: 300,
	},
	{
		icon: <Coms className='skill-icon' />,
		title: "Teamwork",
		text: `Team work makes the dream work! I am super passionate about sharing
		knowledge, collaborating, learning from or mentoring others and
		ultimately just working together as a team to make great things.`,
		delay: 400,
	},
];

const renderSkillsOverview = () => {
	return SkillsOverviewContent.map((skill: ISkillOverviewProps) => (
		<SkillOverview
			title={skill.title}
			text={skill.text}
			icon={skill.icon}
			delay={skill.delay}
		/>
	));
};
