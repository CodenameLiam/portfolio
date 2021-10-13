import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup';
import { LanguageIcon } from '../Pages/Skills';
import { ReactComponent as Link } from './../Media/Icons/Link.svg';
import { ProjectImage } from '../Components/ProjectImage';
import { ProjectLinks } from '../Components/ProjectLinks';
import { AnimatedCarousel } from '../Components/AnimatedCarousel';

export const Habitual = () => {
    return (
        <div className='habitual'>
            <div className='section-container'>
                <div className='project-container project-container-left'>
                    <AnimatedCarousel identifier='study' fade='fadeInLeft'>
                        <ProjectImage
                            legend='Build Habits'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1634109974/Habitual/Creating.webp'
                        />
                        <ProjectImage
                            legend='Track Progress'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1633970790/Habitual/Tracking.webp'
                        />
                        <ProjectImage
                            legend='Tablet and Dark Mode'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1633972187/Habitual/DarkMode.webp'
                        />
                    </AnimatedCarousel>

                    <ScrollAnimation
                        animateIn='fadeInRight'
                        animateOnce
                        className='project-text-container'>
                        <div className='section-sub-title project-sub-title-left'>
                            Habitual
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
                                    git='https://github.com/CodenameLiam/habitual-native'
                                    website='https://gethabitual.app'
                                />
                            </Popup>
                        </div>
                        <div className='project-text-left'>
                            <i>Data Driven Habit Tracking App</i>
                        </div>

                        <div className='project-text-left'>
                            Habitual is a data driven habit tracking app for iOS and Android that
                            helps you focus on what truly matters by mastering habits that are
                            important to you. It allows users to create and cultivate custom habits,
                            track their progress and set reminders to keep themselves accountable.
                            It was developed using React Native, and released both mobile and tablet
                            devices on iOS and Android
                        </div>

                        <div className='project-link-container'>
                            <div className='project-stack'>
                                <div className='stack-images'>
                                    <LanguageIcon
                                        url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372946/React_ylb6k9.svg'
                                        tooptip='React Native'
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
