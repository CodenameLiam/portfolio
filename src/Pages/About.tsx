import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ReactComponent as Codebots } from "./../Media/Logos/Codebots.svg";
import { ReactComponent as WorkingMouse } from "./../Media/Logos/WorkingMouse.svg";
import { ReactComponent as QUT } from "./../Media/Logos/QUT.svg";

export const About = () => {
    return (
        <div className="about section-container">
            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
                <div className="section-title">About</div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="section-text">
                    Hey! My name is Liam. I’m a computer science student at the Queensland
                    University of Technology, and a software engineer at WorkingMouse / Codebots in
                    Brisbane, Australia. My primary drive in life is to improve the lives of others
                    through technology. I just want to build cool stuff, with the hope that what I
                    create will have a lasting impact on those who interact with it. I love tough
                    problems, and I especially love working with a team of like-minded individuals
                    in order to solve them. I have a keen interest in software development, graphic
                    design, cloud computing, data analytics and machine learning.
                </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <div className="life-links">
                    <WorkingMouse
                        className="wm-link life-link"
                        onClick={() => window.open("https://workingmouse.com.au/")}
                    />
                    <Codebots className="cb-link life-link" />
                    <QUT className="qut-link life-link" />
                </div>
            </ScrollAnimation>
        </div>
    );
};
