import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup';
import { LanguageIcon } from '../Pages/Skills';
import { ReactComponent as Link } from './../Media/Icons/Link.svg';
import { ProjectImage } from '../Components/ProjectImage';
import { ProjectLinks } from '../Components/ProjectLinks';
import { AnimatedCarousel } from '../Components/AnimatedCarousel';

export const Medical = () => {
	return (
		<div className='medical'>
			<div className='section-container'>
				<div className='project-container project-container-left'>
					<AnimatedCarousel identifier='medical' fade='fadeInLeft'>
						<ProjectImage
							legend='Decision Tree Classifier'
							URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_300/v1610372937/DT_v9aasw.webp'
						/>
						<ProjectImage
							legend='Nearest Neighbour Classifier'
							URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_300/v1610372937/NN_zjkdhg.webp'
						/>
						<ProjectImage
							legend='Support Vector Machine Classifier'
							URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_300/v1610372937/SVM_tn9m78.webp'
						/>
						<ProjectImage
							legend='Neural Network Classifier'
							URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_300/v1610372937/NuN_d8q72s.webp'
						/>
					</AnimatedCarousel>

					<ScrollAnimation
						animateIn='fadeInRight'
						animateOnce
						className='project-text-container'>
						<div className='section-sub-title project-sub-title-left'>
							Machine Learning Diagnosis
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
									git='https://github.com/CodenameLiam/medical-diag-machine-learning'
									pdf={process.env.PUBLIC_URL + '/Media/Medical.pdf'}
								/>
							</Popup>
						</div>
						<div className='project-text-left'>
							<i>Supervised Machine Learning Classifier</i>
						</div>
						<div className='project-text-left'>
							Four different types of classifiers were developed in this project,
							including a decision tree, nearest neighbour, support vector machine and
							a neural network. Each classifier was tuned in an effort to produce the
							most accurate prediction of whether a given patient will have cancer
							based on the physical characteristics of potentially problematic marks
							on the skin.
						</div>
						<div className='project-link-container'>
							<div className='project-stack'>
								<div className='stack-images'>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_84/v1610372945/Python_jitmhh.webp'
										tooptip='Python'
									/>
									<LanguageIcon
										url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372946/Tensor_a8dnxv.svg'
										tooptip='TensorFlow'
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
