import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup';
import { LanguageIcon } from '../Pages/Skills';
import { ReactComponent as Link } from './../Media/Icons/Link.svg';
import { ProjectImage } from '../Components/ProjectImage';
import { ProjectLinks } from '../Components/ProjectLinks';
import { AnimatedCarousel } from '../Components/AnimatedCarousel';

export const GeneSequence = () => {
	return (
		<div className='gene-seq'>
			<div className='section-container'>
				<div className='project-container project-container-left'>
					<AnimatedCarousel identifier='gene' fade='fadeInLeft'>
						<ProjectImage
							legend='Speedup Graph (Sequential vs Non-Seqential)'
							URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_300/v1610372936/Speedup_abnwvy.webp'
						/>
						<ProjectImage
							legend='Output'
							URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_300/v1610372936/Output_htppdy.webp'
						/>
					</AnimatedCarousel>

					<ScrollAnimation
						animateIn='fadeInRight'
						animateOnce
						className='project-text-container'>
						<div className='section-sub-title project-sub-title-left'>
							Gene Sequencing Application
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
									git='https://github.com/CodenameLiam/consensus-promoter'
									pdf={process.env.PUBLIC_URL + '/Media/GeneSequencing.pdf'}
								/>
							</Popup>
						</div>
						<div className='project-text-left'>
							<i>Parallelisation of a Bio-Informatics Application</i>
						</div>
						<div className='project-text-left'>
							This gene sequencing application parallelises a sequential Java
							application using the executor framework. The application compares a
							series of reference genes with several bacteria genes in order to
							develops a consensus sequence (ideal promoter in the bacteria’s DNA).
							Parallelising this sequential application results in a speedup factor of
							17 with just 24 cores.
						</div>
						<div className='project-link-container'>
							<div className='project-stack'>
								<div className='stack-images'>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372944/Java_mhw6z4.webp'
										tooptip='Java / Java Executor Framework'
									/>
								</div>
								<div />
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	);
};
