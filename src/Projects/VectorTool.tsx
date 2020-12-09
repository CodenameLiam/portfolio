import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Carousel } from "react-responsive-carousel";
import Popup from "reactjs-popup";
import { ProjectImage } from "../Components/ProjectImage";
import { LanguageIcon } from "../Pages/Skills";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";

export const VectorTool = () => {
    const [animateCarousel, setAnimateCarousel] = useState(false);

    return (
        <div className="vector-tool">
            <div className="section-container">
                <div className="project-container project-container-right">
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce className="project-text-container">
                        <div className="section-sub-title project-sub-title-right">
                            Vector Graphics Tool
                            <Popup
                                contentStyle={{
                                    background: "#1c1e26",
                                    color: "#ffffff",
                                    border: "none",
                                    textAlign: "center",
                                    marginTop: "0.5rem",
                                }}
                                arrow={false}
                                position="bottom center"
                                trigger={<Link className="project-link-icon" />}
                            >
                                <div>Test</div>
                            </Popup>
                        </div>
                        <div className="project-text-right">
                            <i>Custom format vector design GUI</i>
                        </div>
                        <div className="project-text-right">
                            This tool was written using Java, and serves as a graphical user interface for creating 2D
                            vector graphics. There are a number of tools available that provide the user with the
                            ability to create vector based images, including shapes, points, colour pickers ect. Once
                            created these images can be saved using a custom file format, and then shared with others /
                            re-opened to continue work.
                        </div>
                        <div className="project-link-container project-link-container-right">
                            <div className="project-stack">
                                <div className="stack-images">
                                    <LanguageIcon url="Java.png" tooptip="Java" />
                                </div>
                                <div />
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation
                        animateIn="fadeInRight"
                        animateOnce
                        className="project-image-container"
                        afterAnimatedIn={() => setAnimateCarousel(true)}
                    >
                        <Carousel
                            key={`vector${animateCarousel.toString()}`}
                            autoPlay={animateCarousel}
                            showThumbs={false}
                            infiniteLoop={true}
                            interval={5000}
                            transitionTime={800}
                        >
                            <ProjectImage legend="Shape Tools" URL="Vector/Shapes.png" />
                            <ProjectImage legend="Transparent Shapes" URL="Vector/Transparent.png" />
                            <ProjectImage legend="Colour Picker" URL="Vector/Color.png" />
                        </Carousel>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};
