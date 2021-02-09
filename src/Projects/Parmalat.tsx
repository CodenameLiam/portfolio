import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup';
import { LanguageIcon } from '../Pages/Skills';
import { Carousel } from 'react-responsive-carousel';
import { ReactComponent as Link } from './../Media/Icons/Link.svg';
import { ProjectImage } from '../Components/ProjectImage';
import { ProjectLinks } from '../Components/ProjectLinks';

export const Parmalat = () => {
	const [animateCarousel, setAnimateCarousel] = useState(false);

	return (
		<div className='parmalat'>
			<div className='section-container'>
				<div className='project-container project-container-right'>
					<ScrollAnimation
						animateIn='fadeInLeft'
						animateOnce
						className='project-text-container'>
						<div className='section-sub-title project-sub-title-right'>
							Parmalat Australia
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
								<ProjectLinks video='https://youtu.be/cf_qHIKrBAo' />
							</Popup>
						</div>
						<div className='project-text-right'>
							<i>Business Data API / User Portal / CMS</i>
						</div>
						<div className='project-text-right'>
							Developed an API using C# (ASP.NET, EF Core) to provide secure access to
							Parmalat’s enterprise data warehouse. A web portal/CMS was built using
							TypeScript and React to interface with this API in order to provide
							farmers with insights into key metrics about their farm, and access to
							important company news/documents. The application was deployed using
							Parmalat's internal IIS server
						</div>
						<div className='project-link-container project-link-container-right'>
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
										url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372944/IIS_siqdgg.webp'
										tooptip='Microsoft IIS / SQL Server'
									/>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372942/Docker_ema1xe.webp'
										tooptip='Docker'
									/>
								</div>
								<div />
							</div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn='fadeInRight'
						animateOnce
						// @ts-ignore
						afterAnimatedIn={() => setAnimateCarousel(true)}
						className='project-image-container'>
						<Carousel
							key={`parm${animateCarousel.toString()}`}
							showThumbs={false}
							autoPlay={animateCarousel}
							infiniteLoop={true}
							interval={5000}
							transitionTime={800}>
							<ProjectImage
								legend='Dashboard'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372938/Dash_flz6m7.webp'
							/>
							<ProjectImage
								legend='News Homepage'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372938/News_vwibm8.webp'
							/>
							<ProjectImage
								legend='News Article'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372938/NewsStory_doah0x.webp'
							/>
							<ProjectImage
								legend='Login'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372938/Login_fflikb.webp'
							/>
							<ProjectImage
								legend='Documents'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372938/Docs_xrweob.webp'
							/>
							<ProjectImage
								legend='Documents CMS'
								URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_400/v1610372939/DocsBackend_d67h4t.webp'
							/>
						</Carousel>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};
