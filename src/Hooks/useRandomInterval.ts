import React from "react";

// Utility helper for random number generation
export const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export const useRandomInterval = (callback: any, minDelay: number, maxDelay: number) => {
	const timeoutId: any = React.useRef(null);
	const savedCallback = React.useRef(callback);

	React.useEffect(() => {
		savedCallback.current = callback;
	});
	React.useEffect(() => {
		let isEnabled = typeof minDelay === "number" && typeof maxDelay === "number";
		if (isEnabled) {
			const handleTick = () => {
				const nextTickAt = random(minDelay, maxDelay);
				timeoutId.current = window.setTimeout(() => {
					savedCallback.current();
					handleTick();
				}, nextTickAt);
			};
			handleTick();
		}
		return () => window.clearTimeout(timeoutId.current);
	}, [minDelay, maxDelay]);

	const cancel = React.useCallback(function () {
		window.clearTimeout(timeoutId.current);
	}, []);

	return cancel;
};
