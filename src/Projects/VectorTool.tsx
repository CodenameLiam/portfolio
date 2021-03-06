import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup';
import { AnimatedCarousel } from '../Components/AnimatedCarousel';
import { ProjectImage } from '../Components/ProjectImage';
import { ProjectLinks } from '../Components/ProjectLinks';
import { LanguageIcon } from '../Pages/Skills';
import { ReactComponent as Link } from './../Media/Icons/Link.svg';

export const VectorTool = () => {
	return (
		<div className='vector-tool'>
			<div className='section-container'>
				<div className='project-container project-container-right'>
					<ScrollAnimation
						animateIn='fadeInLeft'
						animateOnce
						className='project-text-container'>
						<div className='section-sub-title project-sub-title-right'>
							Vector Graphics Tool
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
								<ProjectLinks
									git='https://github.com/alex-j-butler/cab302-vector-design-tool'
									pdf={process.env.PUBLIC_URL + '/Media/VectorDesignTool.pdf'}
								/>
							</Popup>
						</div>
						<div className='project-text-right'>
							<i>Custom Format Vector Graphics Designer</i>
						</div>
						<div className='project-text-right'>
							This tool was written using Java, and serves as a graphical user
							interface for creating 2D vector graphics. There are a number of tools
							available that provide the user with the ability to create vector based
							images, including shapes, points, colour pickers ect. Once created these
							images can be saved using a custom file format, and then shared with
							others / re-opened to continue work.
						</div>
						<div className='project-link-container project-link-container-right'>
							<div className='project-stack'>
								<div className='stack-images'>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372944/Java_mhw6z4.webp'
										tooptip='Java'
									/>
								</div>
								<div />
							</div>
						</div>
					</ScrollAnimation>

					<AnimatedCarousel identifier='vector' fade='fadeInRight'>
						<ProjectImage
							legend='Shape Tools'
							URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_300/v1610372940/Shapes_k49hak.webp'
						/>
						<ProjectImage
							legend='Transparent Shapes'
							URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_300/v1610372940/Transparent_gs8qte.webp'
						/>
						<ProjectImage
							legend='Colour Picker'
							URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_300/v1610372940/Color_ehlnwo.webp'
						/>
					</AnimatedCarousel>
				</div>
			</div>
		</div>
	);
};
