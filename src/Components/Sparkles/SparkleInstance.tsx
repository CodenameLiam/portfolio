import React, { CSSProperties } from "react";
import { ReactComponent as Sparkle } from "./../../Media/Graphics/Star.svg";

interface ISparkInstanceProps {
	size: string;
	top: string;
	left: string;
}

export const SparkleInstance = (props: ISparkInstanceProps) => {
	const SparkleStyle: CSSProperties = {
		width: props.size,
		left: props.left,
		top: props.top,
		pointerEvents: "none",
	};

	return (
		<div className="sparkle-wrapper" style={SparkleStyle}>
			<Sparkle className="sparkle" />
		</div>
	);
};
