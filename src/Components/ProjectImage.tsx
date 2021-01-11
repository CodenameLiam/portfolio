import React from "react";

export interface IProjectImageProps {
	legend: string;
	URL: string;
}

export const ProjectImage = (props: IProjectImageProps) => {
	return (
		<div className='project-list-item'>
			<img className='project-image' src={props.URL} alt={props.legend} />
			<p className='legend'>{props.legend}</p>
		</div>
	);
};
