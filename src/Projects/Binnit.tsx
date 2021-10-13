import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup';
import { LanguageIcon } from '../Pages/Skills';
import { ReactComponent as Link } from './../Media/Icons/Link.svg';
import { ProjectImage } from '../Components/ProjectImage';
import { ProjectLinks } from '../Components/ProjectLinks';
import { AnimatedCarousel } from '../Components/AnimatedCarousel';
import Assets from '../Assets/Assets';

export const Binnit = () => {
    return (
        <div className='binnit'>
            <div className='section-container'>
                <div className='project-container project-container-right'>
                    <ScrollAnimation
                        animateIn='fadeInLeft'
                        animateOnce
                        className='project-text-container'>
                        <div className='section-sub-title project-sub-title-right'>
                            Binnit
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
                                <ProjectLinks git='https://github.com/DennisThePineapple/Hackathon2021/tree/feat/new-endpoints' />
                                <ProjectLinks video='https://www.youtube.com/watch?v=nwVnTWG73O4' />
                            </Popup>
                        </div>
                        <div className='project-text-right'>
                            <i>Gamified Machine Learning Recycling App</i>
                        </div>
                        <div className='project-text-right'>
                            Binnit is a mobile app that gamifies the act of recycling and disposing
                            of rubbish in a competitive and educational way. At it's core, the app
                            makes use of a YOLO machine learning model to detect recyclable
                            materials in an image. Users get points for collecting recyclable
                            materials, and they can also press on the captured bounding boxes, to be
                            presented with information on how and where to recycle a given material
                        </div>
                        <div className='project-link-container project-link-container-right'>
                            <div className='project-stack'>
                                <div className='stack-images'>
                                    <LanguageIcon
                                        url='https://res.cloudinary.com/djeukcxxb/image/upload/v1610372946/React_ylb6k9.svg'
                                        tooptip='React Native'
                                    />
                                    <LanguageIcon url={Assets.FastAPI} tooptip='FastAPI' />
                                    <LanguageIcon url={Assets.Pytorch} tooptip='Pytorch' />
                                    <LanguageIcon url={Assets.Firebase} tooptip='Firebase' />
                                </div>
                                <div />
                            </div>
                        </div>
                    </ScrollAnimation>
                    <AnimatedCarousel identifier='parm' fade='fadeInRight'>
                        <ProjectImage
                            legend='Machine Learning and Education'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_500/v1634117279/ML_rvyth3.webp'
                        />
                        <ProjectImage
                            legend='Leaderboards and Login'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,h_500/v1634117279/Games_mklpu9.webp'
                        />
                    </AnimatedCarousel>
                </div>
            </div>
        </div>
    );
};
