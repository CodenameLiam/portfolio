import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Popup from 'reactjs-popup';
import { LanguageIcon } from '../Pages/Skills';
import { ReactComponent as Link } from './../Media/Icons/Link.svg';
import { ProjectImage } from '../Components/ProjectImage';
import { ProjectLinks } from '../Components/ProjectLinks';
import { AnimatedCarousel } from '../Components/AnimatedCarousel';
import Assets from '../Assets/Assets';

export const WorkingMouse = () => {
    return (
        <div className='working-mouse'>
            <div className='section-container'>
                <div className='project-container project-container-left'>
                    <AnimatedCarousel identifier='study' fade='fadeInLeft'>
                        <ProjectImage
                            legend='Home'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1634118975/WM_Home_vjtzmy.webp'
                        />
                        <ProjectImage
                            legend='Marketing Materials'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1634118975/WM_Brief_nm0rzi.webp'
                        />
                        <ProjectImage
                            legend='Resources'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1634118974/WM_Resources_m77yru.webp'
                        />
                        <ProjectImage
                            legend='Shop'
                            URL='https://res.cloudinary.com/djeukcxxb/image/upload/v1634118975/WM_Shop_qcge5d.webp'
                        />
                    </AnimatedCarousel>

                    <ScrollAnimation
                        animateIn='fadeInRight'
                        animateOnce
                        className='project-text-container'>
                        <div className='section-sub-title project-sub-title-left'>
                            WorkingMouse
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
                                    git='https://github.com/CodenameLiam/study-saviour'
                                    pdf={process.env.PUBLIC_URL + '/Media/StudySaviour.pdf'}
                                />
                            </Popup>
                        </div>
                        <div className='project-text-left'>
                            <i>.com for the Brisbane Based Development Firm</i>
                        </div>
                        <div className='project-text-left'>
                            WorkingMouse are an Australian soft­ware de­vel­op­ment com­pany that
                            ex­cel at solv­ing com­plex prob­lems with unique soft­ware so­lu­tions.
                            As part of a rebranding effort, we rebuilt their dotcom from the ground
                            up, utilising a modern tech stack in GatsbyJS to statically generate
                            content populated via a headless CMS, improving Lighthouse performance
                            by 50%.
                        </div>
                        <div className='project-link-container'>
                            <div className='project-stack'>
                                <div className='stack-images'>
                                    <LanguageIcon url={Assets.Gatsby} tooptip='GatsbyJS' />
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
