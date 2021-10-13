import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup';
import { LanguageIcon } from '../Pages/Skills';
import { ReactComponent as Link } from './../Media/Icons/Link.svg';
import { ProjectImage } from '../Components/ProjectImage';
import { ProjectLinks } from '../Components/ProjectLinks';
import { AnimatedCarousel } from '../Components/AnimatedCarousel';
import Assets from '../Assets/Assets';

export const MaxKelsen = () => {
    return (
        <div className='max-kelsen'>
            <div className='section-container'>
                <div className='project-container project-container-left'>
                    <AnimatedCarousel identifier='study' fade='fadeInLeft'>
                        <ProjectImage
                            legend='Home'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1634118158/MK_Home_xygy20.webp'
                        />
                        <ProjectImage
                            legend='Customer Stories'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1634118158/MK_Recent_pe2yns.webp'
                        />
                        <ProjectImage
                            legend='Capability'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1634118162/MK_Cap_zob4gg.webp'
                        />
                        <ProjectImage
                            legend='Case Study'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1634118158/MK_Cust_tg3cah.webp'
                        />
                    </AnimatedCarousel>

                    <ScrollAnimation
                        animateIn='fadeInRight'
                        animateOnce
                        className='project-text-container'>
                        <div className='section-sub-title project-sub-title-left'>
                            Max Kelsen
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
                                <ProjectLinks website='https://www.maxkelsen.com' />
                            </Popup>
                        </div>
                        <div className='project-text-left'>
                            <i>.com for the Brisbane Based ML Consultancy</i>
                        </div>
                        <div className='project-text-left'>
                            Max Kelsen are experts in Machine Learning research, development and
                            implementation at scale. They have been recognised as a leader in
                            Artificial Intelligence applications. As part of a rebranding effort, I
                            was responsible for rebuilding their dotcom from the ground up, using a
                            modern tech stack in NextJS to statically generate content populated via
                            a headless CMS.
                        </div>
                        <div className='project-link-container'>
                            <div className='project-stack'>
                                <div className='stack-images'>
                                    <LanguageIcon url={Assets.NextDark} tooptip='NextJS' />
                                    <LanguageIcon url={Assets.GoogleCloud} tooptip='Google Cloud' />
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
