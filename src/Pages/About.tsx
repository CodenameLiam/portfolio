import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from '@emotion/styled';
import Assets from '../Assets/Assets';

const Logo = styled.img`
    height: 80px;
    width: 80px;
    margin: 0rem 1rem;
`;

export const About = () => {
    return (
        <div className='about section-container'>
            <ScrollAnimation animateIn='fadeIn' animateOnce>
                <div className='section-title'>About</div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce>
                <div className='section-text'>
                    Hey! My name is Liam. I’m a software engineer at Max Kelsen. I'm also wrapping
                    up my final year as a computer science and electrical engineering student at the
                    Queensland University of Technology. My primary drive in life is to improve the
                    lives of others through technology. I just want to build cool stuff, with the
                    hope that what I create will have a lasting impact on those who interact with
                    it. I love tough problems, and I especially love working with a team of
                    like-minded individuals in order to solve them. I have a keen interest in
                    software development, graphic design, human-computer interaction and machine
                    learning.
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeIn' animateOnce>
                <div className='life-links'>
                    <Logo src={Assets.MK} />
                    <Logo src={Assets.QUT} />
                </div>
            </ScrollAnimation>
        </div>
    );
};
