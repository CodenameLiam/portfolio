import React from "react";
import { ReactComponent as BorderPath } from "./../Media/Graphics/Border.svg";

interface ISectionProps {
	className?: string;
}

export const SectionBreak = (props: ISectionProps) => {
	return (
		<div className={`section-break ${props.className}`}>
			<BorderPath className="section-border" />
		</div>
	);
};
