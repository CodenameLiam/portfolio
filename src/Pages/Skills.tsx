import React, { ReactElement } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { ReactComponent as Code } from './../Media/Skills/Code.svg';
import { ReactComponent as Design } from './../Media/Skills/Design.svg';
import { ReactComponent as Ops } from './../Media/Skills/Ops.svg';
import { ReactComponent as Coms } from './../Media/Skills/Coms.svg';
import { ReactComponent as Info } from './../Media/Icons/Info.svg';
import Popup from 'reactjs-popup';

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
								padding: '1rem',
								background: '#1c1e26',
								color: '#ffffff',
								border: 'none',
								textAlign: 'center',
							}}
							arrow={false}
							position='bottom center'
							on={['hover', 'focus']}
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
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_100/v1610372945/JS_otubhb.webp'
								tooptip='JavaScript'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_100/v1610372947/TS_e5oa7v.webp'
								tooptip='TypeScript'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_100/v1610372945/Python_jitmhh.webp'
								tooptip='Python'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372941/C_ihehoc.svg'
								tooptip='C'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610374423/CPP_byfgl8.svg'
								tooptip='C++'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372942/CSharp_jm9d1h.svg'
								tooptip='C#'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372944/HTML_ur0zla.svg'
								tooptip='HTML'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372942/CSS_cf1d9i.svg'
								tooptip='CSS'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372946/Sass_yya5nf.svg'
								tooptip='SASS'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_100/v1610372944/Java_mhw6z4.webp'
								tooptip='Java'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_100/v1615811441/FSharp_xmh1ev.webp'
								tooptip='F#'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610374423/Go_kbjj1l.svg'
								tooptip='Go'
							/>
						</div>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn='fadeIn' animateOnce>
					<div className='section-sub-title'>
						Tools
						<Popup
							contentStyle={{
								padding: '1rem',
								background: '#1c1e26',
								color: '#ffffff',
								border: 'none',
								textAlign: 'center',
							}}
							arrow={false}
							position='bottom center'
							on={['hover', 'focus']}
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
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372946/React_ylb6k9.svg'
								tooptip='React JS / React Native'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372943/GraphQL_c98kdt.svg'
								tooptip='GraphQL'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372946/Storybook_w75hul.webp'
								tooptip='Storybook JS'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372942/Docker_ema1xe.webp'
								tooptip='Docker'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372945/Postgres_a2z8pz.webp'
								tooptip='PostgreSQL'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372943/GCP_dehx3p.svg'
								tooptip='Google Cloud Platform / Services'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372945/NET_oo3zau.svg'
								tooptip='ASP.NET'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372941/AWS_uujxmk.svg'
								tooptip='Amazon Web Services'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372946/Redis_birwsp.webp'
								tooptip='Redis'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372943/Git_j60lyr.webp'
								tooptip='Git'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372942/Firebase_wnhx7u.webp'
								tooptip='Firebase'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372946/Tensor_a8dnxv.svg'
								tooptip='TensorFlow'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372945/Node_oonmq9.webp'
								tooptip='NodeJS / Express'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372945/MongoDB_xqnpcm.webp'
								tooptip='MongoDB'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610374423/Gatsby_s4s8ty.svg'
								tooptip='Gatsby'
							/>
							<LanguageIcon
								url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610374423/Next_uwsqie.svg'
								tooptip='NextJS'
							/>
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
				background: '#1c1e26',
				color: '#ffffff',
				border: 'none',
				textAlign: 'center',
				marginTop: '0.5rem',
			}}
			arrow={false}
			position='bottom center'
			on={['hover', 'focus']}
			trigger={<img className='language-icon' src={props.url} alt={props.tooptip} />}>
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
		title: 'Development',
		text: `Development is my craft. I love that it allows me to be creative,
	solve complex problems, and ultimately build something great. I
	always strive to develop clean, clear, performant, responsive and
	high quality code.`,
		delay: 100,
	},
	{
		icon: <Design className='skill-icon' />,
		title: 'Design',
		text: `Creation is core to the human experience, and I am incredibly
		passionate about producing work that hits the aesthetic sweet spot, 
		and hopefully inspires others in their own creative endeavours.`,
		delay: 200,
	},
	{
		icon: <Ops className='skill-icon' />,
		title: 'Operations',
		text: `There is no point making a product if no one can see how awesome it
		is! I love architecting scalable, highly performant and fault
		tolerant solutions, or developing tooling to assist with the
		deployment process.`,
		delay: 300,
	},
	{
		icon: <Coms className='skill-icon' />,
		title: 'Teamwork',
		text: `Team work makes the dream work! I am super passionate about sharing
		knowledge, collaborating, learning from or mentoring others and
		ultimately just working together as a team to make great things.`,
		delay: 400,
	},
];

const renderSkillsOverview = () => {
	return SkillsOverviewContent.map((skill: ISkillOverviewProps) => (
		<SkillOverview
			key={skill.title}
			title={skill.title}
			text={skill.text}
			icon={skill.icon}
			delay={skill.delay}
		/>
	));
};
