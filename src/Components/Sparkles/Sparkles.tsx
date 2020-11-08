import React, { useState } from "react";
import { random, useRandomInterval } from "../../Hooks/useRandomInterval";
import { SparkleInstance } from "./SparkleInstance";

interface ISparkleProps {
	children?: any;
}

export const Sparkles = (props: ISparkleProps) => {
	const [sparkles, setSparkles] = useState<ISparkle[]>([]);

	useRandomInterval(
		() => {
			const now = Date.now();
			// Create a new sparkle
			const sparkle: ISparkle = generateSparkle();
			// Clean up any "expired" sparkles
			const nextSparkles = sparkles.filter((sparkle: ISparkle) => {
				const delta = now - sparkle.createdAt;
				return delta < 1000;
			});
			// Include our new sparkle
			nextSparkles.push(sparkle);
			// Make it so!
			setSparkles(nextSparkles);
		},
		50,
		500
	);

	return (
		<div className="sparkle-container">
			{sparkles.map((sparkle) => (
				<SparkleInstance
					key={sparkle.id}
					size={sparkle.size}
					top={sparkle.top}
					left={sparkle.left}
				/>
			))}
			<div className="sparkle-children">{props.children}</div>
		</div>
	);
};

interface ISparkle {
	id: string;
	size: string;
	top: string;
	left: string;
	createdAt: number;
}

const generateSparkle = () => {
	return {
		id: String(random(10000, 99999)),
		createdAt: Date.now(),
		size: random(20, 40) + "px",
		top: random(0, 100) + "%",
		left: random(0, 100) + "%",
	};
};
