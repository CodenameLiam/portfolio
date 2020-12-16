import React, { useState } from "react";
import Popup from "reactjs-popup";

export interface IProjectImageProps {
	legend: string;
	URL: string;
}

export const ProjectImage = (props: IProjectImageProps) => {
	// const [openImage, setOpenImage] = useState(false);

	return (
		<div className='project-list-item'>
			<img
				className='project-image'
				src={process.env.PUBLIC_URL + "/Projects/" + props.URL}
				alt={props.legend}
			/>
			<p className='legend'>{props.legend}</p>
		</div>
	);
};
