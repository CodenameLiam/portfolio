import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Popup from "reactjs-popup";
import { LanguageIcon } from "../Pages/Skills";
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";
import { ProjectImage } from "../Components/ProjectImage";

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
							<i>Business data API / user portal / CMS</i>
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
										url='React.svg'
										tooptip='React JS / React Native'
									/>
									<LanguageIcon url='GraphQL.svg' tooptip='GraphQL' />
									<LanguageIcon url='NET.svg' tooptip='ASP.NET' />
									<LanguageIcon
										url='IIS.png'
										tooptip='Microsoft IIS / SQL Server'
									/>
									<LanguageIcon url='Docker.png' tooptip='Docker' />
								</div>
								<div />
							</div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn='fadeInRight'
						animateOnce
						afterAnimatedIn={() => setAnimateCarousel(true)}
						className='project-image-container'>
						<Carousel
							key={`parm${animateCarousel.toString()}`}
							showThumbs={false}
							autoPlay={animateCarousel}
							infiniteLoop={true}
							interval={5000}
							transitionTime={800}>
							<ProjectImage legend='Dashboard' URL='Parmalat/Dash.png' />
							<ProjectImage legend='News Homepage' URL='Parmalat/News.png' />
							<ProjectImage legend='News Article' URL='Parmalat/NewsStory.png' />
							<ProjectImage legend='Login' URL='Parmalat/Login.png' />
							<ProjectImage legend='Documents' URL='Parmalat/Docs.png' />
							<ProjectImage legend='Documents CMS' URL='Parmalat/DocsBackend.png' />
						</Carousel>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};
