import React from "react";

interface ILinksProps {
    pdf?: string;
    git?: string;
}

export const ProjectLinks = (props: ILinksProps) => {
    return (
        <div className="project-links">
            {props.git && <ProjectLink image="Github.png" description="Repository" link={props.git} />}
            {props.pdf && <ProjectLink image="PDF.png" description="PDF Report" link={props.pdf} />}
        </div>
    );
};

interface ILinkProps {
    image: string;
    description: string;
    link: string;
}

const ProjectLink = (props: ILinkProps) => {
    return (
        <div className="link-container" onClick={() => window.open(props.link)}>
            <img className="link-image" src={process.env.PUBLIC_URL + "/Tools/" + props.image} alt={props.description} />
            <div className="link-desciption">{props.description}</div>
        </div>
    );
};
