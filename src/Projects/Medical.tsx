import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Popup from "reactjs-popup";
import { LanguageIcon } from "../Pages/Skills";
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as Link } from "./../Media/Icons/Link.svg";
import { ProjectImage } from "../Components/ProjectImage";
import { ProjectLinks } from "../Components/ProjectLinks";

export const Medical = () => {
    const [animateCarousel, setAnimateCarousel] = useState(false);

    return (
        <div className="medical">
            <div className="section-container">
                <div className="project-container project-container-left">
                    <ScrollAnimation
                        animateIn="fadeInLeft"
                        animateOnce
                        className="project-image-container"
                        // @ts-ignore
                        afterAnimatedIn={() => setAnimateCarousel(true)}
                    >
                        <Carousel
                            key={`medical${animateCarousel.toString()}`}
                            showThumbs={false}
                            autoPlay={animateCarousel}
                            infiniteLoop={true}
                            interval={5000}
                            transitionTime={800}
                        >
                            <ProjectImage legend="Decision Tree Classifier" URL="Med/DT.png" />
                            <ProjectImage legend="Nearest Neighbour Classifier" URL="Med/NN.png" />
                            <ProjectImage legend="Support Vector Machine Classifier" URL="Med/SVM.png" />
                            <ProjectImage legend="Neural Network Classifier" URL="Med/NuN.png" />
                        </Carousel>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInRight" animateOnce className="project-text-container">
                        <div className="section-sub-title project-sub-title-left">
                            Machine Learning Diagnosis
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
                                <ProjectLinks
                                    git="https://github.com/CodenameLiam/medical-diag-machine-learning"
                                    pdf={process.env.PUBLIC_URL + "/Media/Medical.pdf"}
                                />
                            </Popup>
                        </div>
                        <div className="project-text-left">
                            <i>Supervised Machine Learning Classifier</i>
                        </div>
                        <div className="project-text-left">
                            Four different types of classifiers were developed in this project, including a decision
                            tree, nearest neighbour, support vector machine and a neural network. Each classifier was
                            tuned in an effort to produce the most accurate prediction of whether a given patient will
                            have cancer based on the physical characteristics of potentially problematic marks on the
                            skin.
                        </div>
                        <div className="project-link-container">
                            <div className="project-stack">
                                <div className="stack-images">
                                    <LanguageIcon url="Python.png" tooptip="Python" />
                                    <LanguageIcon url="Tensor.svg" tooptip="TensorFlow" />
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
