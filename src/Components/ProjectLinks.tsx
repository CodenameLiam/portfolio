import React from 'react';

interface ILinksProps {
	pdf?: string;
	git?: string;
}

export const ProjectLinks = (props: ILinksProps) => {
	return (
		<div className='project-links'>
			{props.git && (
				<ProjectLink
					image='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_300/v1612860762/Github_znfdac.webp'
					description='Repository'
					link={props.git}
				/>
			)}
			{props.pdf && (
				<ProjectLink
					image='https://res.cloudinary.com/djeukcxxb/image/upload/c_scale,w_300/v1612860762/PDF_i1dxje.webp'
					description='PDF Report'
					link={props.pdf}
				/>
			)}
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
		<div className='link-container' onClick={() => window.open(props.link)}>
			<img className='link-image' src={props.image} alt={props.description} />
			<div className='link-desciption'>{props.description}</div>
		</div>
	);
};
