import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const Skills = () => {
    return (
        <div className="skills">
            <div className="section-container">
                <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce>
                    <div className="section-title">Skills</div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="section-sub-title">Overview</div>

                    <div className="skills-overview">
                        <div className="overview-content">
                            <div className="overview-title">Development</div>
                            <div className="overview-text">
                                Development is my craft. I love that it allows me to be creative,
                                solve complex problems, and ultimately build something great. I
                                always strive to develop clean, performant, responsive and high
                                quality code.
                            </div>
                        </div>
                        <div className="overview-content">
                            <div className="overview-title">Design</div>
                            <div className="overview-text">
                                Creation is core to the human experience, and I am incredibly
                                passionate about producing work that incites that special feeling
                                deep within others, and hopefully inspires them in their own
                                creative endeavours.
                            </div>
                        </div>
                        <div className="overview-content">
                            {/* <img
                                src="https://techstackapps.com/media/2019/11/TechStackApps-logo-icon.png"
                                style={{ width: "80%" }}
                            /> */}
                            <div className="overview-title">Operations</div>
                            <div className="overview-text">
                                There is no point making a product if no one can see how awesome it
                                is! I love architecting scalable, highly performant and fault
                                tolerant solutions, and developing tooling to assist with the
                                deployment process.
                            </div>
                        </div>
                        <div className="overview-content">
                            <div className="overview-title">Communication</div>
                            <div className="overview-text">
                                Team work makes the dream work. I am super passionate about sharing
                                knowledge, collaborating, learning from or mentoring others and
                                ultimately just working together as a team towards a common goal.
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="section-sub-title">Languages</div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce>
                    <div className="section-sub-title">Tools</div>
                    <div className="section-text">
                        Hey! My name is Liam. I’m a computer science student at the Queensland
                        University of Technology, and a software engineer at WorkingMouse / Codebots
                        in Brisbane. My primary drive in life is to improve the lives of others
                        through technology. I love to build cool stuff, with the hope that what I
                        create will have a lasting impact on those who interact with it. I love
                        tough problems, and I especially love working with a team of like-minded
                        individuals in order to solve them. I have a keen interest in software
                        development, graphic design, cloud computing, data analytics and machine
                        learning.
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};
